import React, { useState } from "react";
import { registerForm } from "services/AxiosClient";

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
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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

  // Submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Set loading state to true
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

    if (formData.logo) {
      form.append("logo", formData.logo);
    }

    if (formData.product_image) {
      form.append("product_image", formData.product_image);
    }

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
    <>
      {/* Overlay for loading state */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50">
          <div className="text-white text-lg">File Uploading...</div>
        </div>
      )}

      {/* Success modal */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Success!</h3>
            <p>Your product has been registered successfully.</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={() => setSuccess(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="max-w-2xl mx-auto p-8 mt-5 bg-white bg-opacity-90 shadow-lg rounded-2xl relative">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Register Your Product
        </h2>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="space-y-2"
        >
          {/* First Name and Last Name */}
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Phone Number */}
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Store Name and Store Location */}
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Product Name */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              name="product_name"
              value={formData.product_name || ""}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Product Description */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1">
              Product Description
            </label>
            <textarea
              name="product_description"
              value={formData.product_description || ""}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent h-16 resize-none"
            />
          </div>

          {/* Logo */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1">
                Logo
              </label>
              <input
                type="file"
                name="logo"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1">
                Product Image
              </label>
              <input
                type="file"
                name="product_image"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-6 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-300 wavy-button"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Register Product"}
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterProductForm;
