import React, { useState } from 'react';

export const AddProductPages = () => {
  const [productData, setProductData] = useState({
    productName: '',
    price: '',
    description: '',
    image: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setProductData({
      ...productData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    console.log('Add Product:', productData);
    alert('Product Added! (Check console)');
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log('Update Product:', productData);
    alert('Product Updated! (Check console)');
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this product?')) {
      console.log('Delete Product:', productData.productName);
      alert('Product Deleted! (Check console)');
      setProductData({ productName: '', price: '', description: '', image: '', category: '' });
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Manage Products</h1>
      <form onSubmit={handleAdd} className="space-y-4">
        <div>
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
          <input
            type="text"
            id="productName"
            name="productName"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="e.g., Fitness Tracker"
            value={productData.productName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
          <input
            type="number"
            id="productPrice"
            name="price"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="e.g., 99.99"
            step="0.01"
            value={productData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <input
            type="text"
            id="productCategory"
            name="category"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="e.g., Electronics, Apparel"
            value={productData.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="productImage" className="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
          <input
            type="file"
            id="productImage"
            name="image"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            onChange={handleChange}
          />
          {productData.image && typeof productData.image === 'object' && (
            <p className="text-sm text-gray-500 mt-1">Selected: {productData.image.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            id="productDescription"
            name="description"
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Provide a detailed description of the product..."
            value={productData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="submit"
            className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out font-semibold"
          >
            Add Product
          </button>
          <button
            type="button"
            onClick={handleUpdate}
            className="flex-1 bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-150 ease-in-out font-semibold"
          >
            Update Product
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out font-semibold"
          >
            Delete Product
          </button>
        </div>
      </form>
    </div>
  );
};