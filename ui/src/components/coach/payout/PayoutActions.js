import React from "react";

const PayoutActions = ({ balance, onPayout, onLogout }) => {
  return (
    <div className="flex flex-col gap-4 mt-6">
      <button
        onClick={onPayout}
        disabled={balance <= 0}
        className={`w-full py-3 px-6 rounded-xl font-semibold shadow-md transition ${
          balance > 0
            ? "bg-green-500 hover:bg-green-600 text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Request Payout
      </button>

      <button
        onClick={onLogout}
        className="w-full py-3 px-6 rounded-xl font-semibold shadow-md bg-red-500 hover:bg-red-600 text-white"
      >
        Logout
      </button>
    </div>
  );
};

export default PayoutActions;
