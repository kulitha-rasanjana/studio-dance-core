import React, { useState } from 'react';

export const AddNewspage = () => {
  const [newsData, setNewsData] = useState({
    title: '',
    content: '',
    image: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setNewsData({
      ...newsData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    console.log('Add News Article:', newsData);
    alert('News Article Added! (Check console)');
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log('Update News Article:', newsData);
    alert('News Article Updated! (Check console)');
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this news article?')) {
      console.log('Delete News Article:', newsData.title);
      alert('News Article Deleted! (Check console)');
      setNewsData({ title: '', content: '', image: '', date: '' });
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Manage News Articles</h1>
      <form onSubmit={handleAdd} className="space-y-4">
        <div>
          <label htmlFor="newsTitle" className="block text-sm font-medium text-gray-700 mb-1">News Title</label>
          <input
            type="text"
            id="newsTitle"
            name="title"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter news title"
            value={newsData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="newsImage" className="block text-sm font-medium text-gray-700 mb-1">News Image</label>
          <input
            type="file"
            id="newsImage"
            name="image"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            onChange={handleChange}
          />
          {newsData.image && typeof newsData.image === 'object' && (
            <p className="text-sm text-gray-500 mt-1">Selected: {newsData.image.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="newsDate" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <input
            type="date"
            id="newsDate"
            name="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            value={newsData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="newsContent" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
          <textarea
            id="newsContent"
            name="content"
            rows="6"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Write the news content here..."
            value={newsData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="submit"
            className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out font-semibold"
          >
            Add Article
          </button>
          <button
            type="button"
            onClick={handleUpdate}
            className="flex-1 bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-150 ease-in-out font-semibold"
          >
            Update Article
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out font-semibold"
          >
            Delete Article
          </button>
        </div>
      </form>
    </div>
  );
};