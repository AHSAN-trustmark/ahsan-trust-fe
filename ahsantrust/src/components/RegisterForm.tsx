import React, { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { registerForm } from "services/AxiosClient";
import hijab from "@assets/hijab.png";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import RegisterProductCriteria from "./common/RegisterProductCriteria";

const RegisterProductForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "" as string | null,
    phone_number: "",
    store_name: "" as string | null,
    store_location: "" as string | null,
    product_name: "" as string | null,
    product_description: "" as string | null,
    logo: null as File | null,
    product_image: null as File | null,
    accept_criteria: false,
    criteria: {
      halalUse: false,
      localMaterial: false,
      originality: false,
      shariahCompliance: false,
      jobCreation: false,
      localEmployment: false,
    },
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const fileInputRefLogo = useRef<HTMLInputElement | null>(null);
  const fileInputRefProduct = useRef<HTMLInputElement | null>(null);
  const [isCriteriaPopupOpen, setIsCriteriaPopupOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

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

    try {
      const response = await registerForm(form);
      console.log(response);
      setSuccess(true);
    } catch (error) {
      console.error("Error submitting form", error);
      alert("There was an error registering the product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-5">
      {/* Left side image with fixed dimensions */}
      <div className="h-144 w-144 flex-shrink-0">
        <img
          src={hijab}
          alt="Criteria Illustration"
          className="object-cover w-full h-full rounded-l-2xl shadow-lg"
        />
      </div>

      {/* Form section with fixed dimensions */}
      <div className="h-144 w-144 p-8 bg-white bg-opacity-90 shadow-lg rounded-r-2xl flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Register Your Product
        </h2>

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="space-y-4 "
        >
          {currentStep === 1 && (
            <>
              {/* Step 1: Basic Information */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    Last Name
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
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    Store Name
                  </label>
                  <input
                    type="text"
                    name="store_name"
                    value={formData.store_name || ""}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    Store Location
                  </label>
                  <input
                    type="text"
                    name="store_location"
                    value={formData.store_location || ""}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <div className="flex justify-end pt-20">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                  <span>Next</span>
                  <FaCircleArrowRight className="w-5 h-5" />
                </button>
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              {/* Step 2: Product Information */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  name="product_name"
                  value={formData.product_name || ""}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Product Description
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
                    Logo
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
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    Product Image
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
                </div>
              </div>
              <div className="flex justify-between pt-20">
                {/* Back Button */}
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out"
                >
                  <FaCircleArrowLeft className="w-5 h-5" />
                  <span>Back</span>
                </button>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                  <span>Next</span>
                  <FaCircleArrowRight className="w-5 h-5" />
                </button>
              </div>
            </>
          )}

          {currentStep === 3 && (
            <>
              {/* Step 3: Accept Criteria */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  Accept Criteria
                </h3>
                <p
                  onClick={() => setIsCriteriaPopupOpen(true)} // Open the popup
                  className="text-blue-600 cursor-pointer underline"
                >
                  Open Criteria for Approval
                </p>
                <p className="text-sm text-gray-700">
                  By proceeding, you agree to the following conditions:
                </p>
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.accept_criteria}
                    onChange={() =>
                      setFormData({
                        ...formData,
                        accept_criteria: !formData.accept_criteria,
                      })
                    }
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-600">
                    Agree to all conditions specified by the AHSAN Trustmark
                    committee.
                  </span>
                </label>
              </div>
              <div className="flex justify-between pt-20">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out"
                >
                  <FaCircleArrowLeft className="w-5 h-5" />
                  <span>Back</span>
                </button>
                {isCriteriaPopupOpen && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
                      <button
                        onClick={() => setIsCriteriaPopupOpen(false)} // Close the popup
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                      ></button>
                      <RegisterProductCriteria
                        formData={formData}
                        setFormData={setFormData}
                        onSubmit={handleSubmit}
                        onClose={() => setIsCriteriaPopupOpen(false)} 
                      />
                    </div>
                  </div>
                )}
                <button
                  type="submit"
                  className="mt-2 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Register Product
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegisterProductForm;
