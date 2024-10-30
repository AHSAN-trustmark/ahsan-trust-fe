import React, { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { registerForm } from "services/AxiosClient";
import hijab from "@assets/hijab.png";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { criteriaSteps } from "lib/data";

interface FormData {
  first_name: string;
  last_name: string | null;
  phone_number: string;
  store_name: string | null;
  store_location: string | null;
  product_name: string | null;
  product_description: string | null;
  logo: File | null;
  product_image: File | null;
  accept_criteria: boolean;
  criteria: Record<string, boolean>;
}

const RegisterProductForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: null,
    phone_number: "",
    store_name: null,
    store_location: null,
    product_name: "",
    product_description: null,
    logo: null,
    product_image: null,
    accept_criteria: false,
    criteria: Object.fromEntries(criteriaSteps.flatMap(step => 
      step.subCriteria.map(sub => [sub.key, false])
    )) as Record<string, boolean>,
  });

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const fileInputRefLogo = useRef<HTMLInputElement | null>(null);
  const fileInputRefProduct = useRef<HTMLInputElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(
    null
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const totalSteps = 3 + criteriaSteps.length;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCheckboxChange = (key: string) => {
    setFormData((prev) => ({
      ...prev,
      criteria: {
        ...prev.criteria,
        [key]: !prev.criteria[key],
      },
    }));
  };

  const handleFileButtonClick = (
    inputRef: React.RefObject<HTMLInputElement>
  ) => {
    if (inputRef.current) inputRef.current.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    }
  };

  const validateStep = () => {
    const newErrors: { [key: string]: string } = {};
    if (currentStep === 1) {
      if (!formData.first_name)
        newErrors.first_name = "First name is required.";
      if (!formData.phone_number)
        newErrors.phone_number = "Phone number is required.";
      if (!formData.store_name)
        newErrors.store_name = "store name is required.";
    }
    if (currentStep === 2) {
      if (!formData.product_name)
        newErrors.product_name = "Product name is required.";
      // if (!formData.product_description) newErrors.product_description = "Product description is required.";
      if (!formData.product_image)
        newErrors.product_image = "Product image is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep()) {
      setCurrentStep((prev) => Math.min(totalSteps, prev + 1));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setLoading(true);
    setSubmissionMessage(null); // Clear any previous messages

    const form = new FormData();
    form.append("first_name", formData.first_name);
    if (formData.last_name) form.append("last_name", formData.last_name);
    form.append("phone_number", formData.phone_number);
    if (formData.store_name) form.append("store_name", formData.store_name);
    if (formData.store_location)
      form.append("store_location", formData.store_location);
    if (formData.product_name)
      form.append("product_name", formData.product_name);
    if (formData.product_description)
      form.append("product_description", formData.product_description);
    if (formData.logo) form.append("logo", formData.logo);
    if (formData.product_image)
      form.append("product_image", formData.product_image);

    // Convert criteria to JSON string and add to form
    form.append("criteria", JSON.stringify(formData.criteria));

    console.log("FormData to be submitted:");
    for (let pair of form.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }


    try {
      const response = await registerForm(form);
      console.log(response);
      setSuccess(true);
      setSubmissionMessage("Product registered successfully!");
    } catch (error) {
      console.error("Error submitting form", error);
      setSubmissionMessage("Error registering product. Please try again.");
    } finally {
      setLoading(false);
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    if (currentStep === 1) {
      return (
        <>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1">
                First Name - ชื่อ
              </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              {errors.first_name && (
                <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1">
                Last Name - นามสกุล
              </label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name || ""}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1">
              Phone Number - เบอร์โทรศัพท์
            </label>
            <input
              type="text"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            {errors.phone_number && (
              <p className="text-red-500 text-xs mt-1">{errors.phone_number}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1">
              Store Name - ชื่อร้านค้า
            </label>
            <input
              type="text"
              name="store_name"
              value={formData.store_name || ""}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            {errors.store_name && (
              <p className="text-red-500 text-xs mt-1">{errors.store_name}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1">
              Store Location - ที่อยู่ร้านค้า
            </label>
            <input
              type="text"
              name="store_location"
              value={formData.store_location || ""}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        </>
      );
    }

    if (currentStep === 2) {
      return (
        <>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1">
              Product Name ชื่อสินค้า
            </label>
            <input
              type="text"
              name="product_name"
              value={formData.product_name || ""}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            {errors.product_name && (
              <p className="text-red-500 text-xs mt-1">{errors.product_name}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1">
              Product Description รายละเอียดสินค้า
            </label>
            <textarea
              name="product_description"
              value={formData.product_description || ""}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg h-16 resize-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1">
                Logo โลโก้ร้านค้า
              </label>
              <input
                type="file"
                name="logo"
                ref={fileInputRefLogo}
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => handleFileButtonClick(fileInputRefLogo)}
                className="flex items-center gap-2 px-4 py-2 border border-blue-300 rounded-lg text-white hover:grow hover:shadow-lg"
              >
                <FaCloudUploadAlt className="w-5 h-5 text-blue-500" />{" "}
                <p className="text-blue-500">Upload Logo</p>
              </button>
              {formData.logo && (
                <p className="text-gray-600 text-xs mt-1">
                  Selected file: {formData.logo.name}
                </p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1">
                Product Image รูปสิค้า
              </label>
              <input
                type="file"
                name="product_image"
                ref={fileInputRefProduct}
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => handleFileButtonClick(fileInputRefProduct)}
                className="flex items-center gap-2 px-4 py-2 border border-blue-300 rounded-lg text-white hover:grow hover:shadow-lg"
              >
                <FaCloudUploadAlt className="w-5 h-5 text-blue-500" />{" "}
                <p className="text-blue-500">Upload Product Image</p>
              </button>
              {formData.product_image && (
                <p className="text-gray-600 text-xs mt-1">
                  Selected file: {formData.product_image.name}
                </p>
              )}
              {errors.product_image && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.product_image}
                </p>
              )}
            </div>
          </div>
        </>
      );
    }
    if (currentStep === 3) {
      return (
        <>
          <h1 className="font-semibold text-center text-gray-500">
            เกณฑ์การประเมินตามเงื่อนไขที่กำหนดโดยคณะกรรมการ <br></br>
            มาตรฐานอะห์ซานทรัสมาร์ค
          </h1>
          <p className="text-start text-sm pt-5 text-blue-500 underline">
            กรุณาเลือกข้อที่ท่านผ่านหรือสามารถทำได้
          </p>
        </>
      );
    }

    const criteriaIndex = currentStep - 4; // Adjust this if there are other non-criteria steps

    if (criteriaIndex >= 0 && criteriaIndex < criteriaSteps.length) {
      const { label, subCriteria } = criteriaSteps[criteriaIndex];
      return (
        <>
          <h3 className="text-lg font-semibold text-gray-800">{label}</h3>
          {subCriteria.map((subCriterion, index) => (
            <label key={index} className="flex items-center space-x-3 mt-2">
              <input
                type="checkbox"
                checked={formData.criteria[subCriterion.key] || false}
                onChange={() => handleCheckboxChange(subCriterion.key)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-600">
                {subCriterion.label}
              </span>
            </label>
          ))}
        </>
      );
    }
    return null;
  };

  return (
    <div className="flex items-center justify-center p-5">
      <div className="h-144 w-144 flex-shrink-0">
        <img
          src={hijab}
          alt="Criteria Illustration"
          className="object-cover w-full h-full rounded-l-2xl shadow-lg"
        />
      </div>

      <div className="h-144 w-144 p-8 bg-white bg-opacity-90 shadow-lg rounded-r-2xl flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Register Your Product
        </h2>
        <p className="text-center text-gray-500 mb-4">
          Step {currentStep} of {totalSteps}
        </p>

        <div className="flex flex-col justify-between h-full">
          <div className="flex-grow">{renderStepContent()}</div>
          <div
            className={`flex items-center pt-4 border-t ${
              currentStep === 1 ? "justify-end" : "justify-between"
            }`}
          >
            {currentStep > 1 && (
              <button
                type="button"
                onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
                className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out"
              >
                <FaCircleArrowLeft className="w-5 h-5" />
                <span>Back</span>
              </button>
            )}
            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
              >
                <span>Next</span>
                <FaCircleArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                type="submit"
                onClick={handleSubmit}
                className="mt-2 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Register Product
              </button>
            )}
          </div>
        </div>
      </div>
      {isSubmitting && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            {loading ? (
              <div className="flex items-center gap-2">
                <FaCloudUploadAlt className="w-6 h-6 animate-pulse text-blue-600" />
                <span>Uploading, please wait...</span>
              </div>
            ) : (
              <div>{submissionMessage}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterProductForm;
