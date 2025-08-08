import React, { useState } from 'react';

export const AddClassesPage = () => {
  const [classData, setClassData] = useState({
    image: '',
    className: '',
    date: '',
    location: '',
    price: '',
    time: '',
    description: '',
    status: 'active', // Default status
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setClassData({
      ...classData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    console.log('Add Class:', classData);
    alert('Class Added! (Check console for data)'); // Using alert for demo, replace with proper UI feedback
    // In a real app, send data to backend, clear form, etc.
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log('Update Class:', classData);
    alert('Class Updated! (Check console for data)'); // Using alert for demo, replace with proper UI feedback
    // In a real app, send updated data to backend.
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this class?')) { // Using confirm for demo, replace with proper UI feedback
      console.log('Delete Class with ID/Name:', classData.className);
      alert('Class Deleted! (Check console)'); // Using alert for demo, replace with proper UI feedback
      // In a real app, send delete request to backend.
      setClassData({ // Clear form after delete
        image: '', className: '', date: '', location: '', price: '', time: '', description: '', status: 'active',
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Manage Classes</h1>
      <form onSubmit={handleAdd} className="space-y-4">
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Class Image</label>
          <input
            type="file"
            id="image"
            name="image"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            onChange={handleChange}
          />
          {classData.image && typeof classData.image === 'object' && (
            <p className="text-sm text-gray-500 mt-1">Selected: {classData.image.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="className" className="block text-sm font-medium text-gray-700 mb-1">Class Name</label>
          <input
            type="text"
            id="className"
            name="className"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="e.g., Yoga for Beginners"
            value={classData.className}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              value={classData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              value={classData.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="e.g., Studio A, Online"
            value={classData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
          <input
            type="number"
            id="price"
            name="price"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="e.g., 25.00"
            step="0.01"
            value={classData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Provide a detailed description of the class..."
            value={classData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            id="status"
            name="status"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            value={classData.status}
            onChange={handleChange}
          >
            <option value="active">Active</option>
            <option value="closed">Closed</option>
            <option value="postponed">Postponed</option>
          </select>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="submit"
            className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out font-semibold"
          >
            Add Class
          </button>
          <button
            type="button"
            onClick={handleUpdate}
            className="flex-1 bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-150 ease-in-out font-semibold"
          >
            Update Class
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out font-semibold"
          >
            Delete Class
          </button>
        </div>
      </form>
    </div>
  );
};