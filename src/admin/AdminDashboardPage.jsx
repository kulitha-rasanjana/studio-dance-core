export const AdminDashboardPage = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg min-h-[calc(100vh-64px)] flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome to the Admin Dashboard!</h1>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Studio Dance Core</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is your central hub for managing all aspects of your website. Use the side panel to navigate
        between different management sections like classes, news, and products.
      </p>
      <p className="text-md text-gray-600">
        From here, you can add new content, update existing entries, and maintain the overall health of your site.
      </p>
    </div>
  );
};