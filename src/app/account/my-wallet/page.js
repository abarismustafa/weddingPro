"use client";
import React, { useState } from "react";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

const WalletPage = () => {
  const [formData, setFormData] = useState({
    amount: "",
    method: "",
    note: "",
  });

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "25 Sep 2025",
      amount: "₹3,000",
      method: "UPI",
      note: "Added to wallet",
      status: "Success",
    },
    {
      id: 2,
      date: "20 Sep 2025",
      amount: "₹1,500",
      method: "Credit Card",
      note: "Payment for event booking",
      status: "Success",
    },
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: transactions.length + 1,
      date: new Date().toLocaleDateString("en-IN"),
      amount: `₹${formData.amount}`,
      method: formData.method,
      note: formData.note,
      status: "Pending",
    };
    setTransactions([newTransaction, ...transactions]);
    setFormData({ amount: "", method: "", note: "" });
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10 mt-20">
        <h1 className="text-2xl font-bold mb-6">My Wallet</h1>

        {/* Wallet Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <h2 className="text-xl font-semibold mb-4">Add Funds / Make Transaction</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Amount (₹)</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-pink-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Payment Method</label>
              <select
                name="method"
                value={formData.method}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-pink-500"
              >
                <option value="">Select Method</option>
                <option value="UPI">UPI</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Wallet Balance">Wallet Balance</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Note</label>
              <input
                type="text"
                name="note"
                value={formData.note}
                onChange={handleChange}
                placeholder="Optional note"
                className="w-full border rounded-lg px-3 py-2 focus:outline-pink-500"
              />
            </div>

            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Transaction History */}
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          <h2 className="text-xl font-semibold p-4">Transaction History</h2>
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Amount</th>
                <th className="p-3 text-left">Method</th>
                <th className="p-3 text-left">Note</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id} className="border-t">
                  <td className="p-3">{t.date}</td>
                  <td className="p-3">{t.amount}</td>
                  <td className="p-3">{t.method}</td>
                  <td className="p-3">{t.note}</td>
                  <td
                    className={`p-3 font-semibold ${
                      t.status === "Success"
                        ? "text-green-600"
                        : t.status === "Failed"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {t.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default WalletPage;
