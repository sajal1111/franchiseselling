import React, { useState } from "react";
import emailjs from "emailjs-com";
import axios from "axios";

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Fetch password from MongoDB
    //   const response = await axios.post("http://localhost:5000/get-password", { email });
      const password = response.data.password;

      // Send email using EmailJS
      const templateParams = {
        user_email: email,
        user_password: password,
      };

      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_PUBLIC_KEY"
      );

      alert("Password sent to your email!");
    } catch (error) {
      console.error("Error:", error);
      alert("Email not found or an error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Recover Your Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border rounded mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
          disabled={loading}
        >
          {loading ? "Sending..." : "Recover Password"}
        </button>
      </form>
    </div>
  );
};

export default PasswordRecovery;
