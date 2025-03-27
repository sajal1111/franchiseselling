import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Chart = () => {
  const [salesData, setSalesData] = useState([]);

  const fetchSalesData = async () => {
    try {
      const response = await axios.get("https://franchisebackend-production-fa4b.up.railway.app/client/getSales", {
        params: { from: "2024-01-01", to: "2025-12-31" }, // Replace with dynamic date
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      
      // Transform API response into a format suitable for Recharts
      const formattedData = response.data.map((sale) => ({
        name: sale.date, // Assuming API returns 'date' field
        totalsales: sale.totalsales, // API should have 'totalsales'
      }));

      setSalesData(formattedData);
    } catch (error) {
      console.error("Error fetching sales data:", error);
    }
  };

  useEffect(() => {
    fetchSalesData();
  }, []);

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Sales Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="totalsales" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
