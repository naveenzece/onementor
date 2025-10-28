import React from "react";

const EarningsTable = ({ sessions }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
        <thead>
          <tr className="bg-purple-300 text-gray-800">
            <th className="py-3 px-4 text-left">Learner</th>
            <th className="py-3 px-4 text-left">Date</th>
            <th className="py-3 px-4 text-left">Topic</th>
            <th className="py-3 px-4 text-center">Status</th>
            <th className="py-3 px-4 text-center">Amount</th>
            <th className="py-3 px-4 text-center">Payment</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((s, idx) => (
            <tr
              key={s.id}
              className={`${
                idx % 2 === 0 ? "bg-pink-100" : "bg-purple-100"
              } hover:bg-yellow-100`}
            >
              <td className="py-3 px-4">{s.learner}</td>
              <td className="py-3 px-4">{s.date}</td>
              <td className="py-3 px-4">{s.topic}</td>
              <td className="py-3 px-4 text-center">
                <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs">
                  {s.status}
                </span>
              </td>
              <td className="py-3 px-4 text-center font-semibold">
                ₹{s.amount}
              </td>
              <td className="py-3 px-4 text-center">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    s.paymentStatus === "Paid"
                      ? "bg-green-200 text-green-800"
                      : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {s.paymentStatus}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EarningsTable;
