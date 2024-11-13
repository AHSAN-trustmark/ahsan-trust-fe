import React from "react";

interface FormData {
  criteria: {
    halalUse: boolean;
    localMaterial: boolean;
    originality: boolean;
    shariahCompliance: boolean;
    jobCreation: boolean;
    localEmployment: boolean;
  };
}

interface CriteriaProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const RegisterProductCriteria: React.FC<CriteriaProps> = ({ formData, setFormData }) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormData((prevData: FormData) => ({
      ...prevData,
      criteria: {
        ...prevData.criteria,
        [name]: checked,
      },
    }));
  };

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Section 3: Compliance Criteria</h2>
      <p className="text-gray-600 mb-6">
        Please confirm if each criterion is met. Check the boxes if the conditions are fulfilled.
      </p>

      <form className="space-y-4">
        <div className="flex items-start">
          <input
            type="checkbox"
            name="halalUse"
            checked={formData.criteria.halalUse}
            onChange={handleCheckboxChange}
            className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label className="text-sm text-gray-700">Use Halal standards as an intermediate business tool</label>
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            name="localMaterial"
            checked={formData.criteria.localMaterial}
            onChange={handleCheckboxChange}
            className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label className="text-sm text-gray-700">Use local materials or wisdom</label>
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            name="originality"
            checked={formData.criteria.originality}
            onChange={handleCheckboxChange}
            className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label className="text-sm text-gray-700">Ensure originality of local wisdom</label>
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            name="shariahCompliance"
            checked={formData.criteria.shariahCompliance}
            onChange={handleCheckboxChange}
            className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label className="text-sm text-gray-700">Adhere to Shariah compliance</label>
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            name="jobCreation"
            checked={formData.criteria.jobCreation}
            onChange={handleCheckboxChange}
            className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label className="text-sm text-gray-700">Contribute to job creation within the community</label>
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            name="localEmployment"
            checked={formData.criteria.localEmployment}
            onChange={handleCheckboxChange}
            className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label className="text-sm text-gray-700">Support local employment and use of local resources</label>
        </div>
      </form>
    </div>
  );
};

export default RegisterProductCriteria;
