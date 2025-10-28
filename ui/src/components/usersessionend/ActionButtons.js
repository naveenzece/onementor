import React from "react";

const ActionButtons = () => {
  const handleLogout = () => {
    // Implement logout logic here
    alert("Logged out successfully!");
  };

  const handleBookAgain = () => {
    // Redirect to booking page
    alert("Redirecting to booking page...");
  };

  return (
    <div className="flex flex-col md:flex-row justify-center gap-4">
      <button
        onClick={handleBookAgain}
        className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-colors"
      >
        Book Another Session
      </button>

      <button
        onClick={handleLogout}
        className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl transition-colors"
      >
        Logout
      </button>
    </div>
  );
};

export default ActionButtons;
