"use client"
import { useState } from "react";
import axios from "axios";
import { faUser, faLock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ForgotPassword = () => {
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Call the API endpoint to reset the password
      const res = await axios.post("/api/reset-password", { email });

      // Handle the response based on your API implementation
      if (res.status === 200) {
        console.log("Password reset email sent!");
        // Display a success message or redirect to a success page
      }
    } catch (error) {
      console.error("Password reset failed:", error);
      // Display an error message or handle the error condition
    }

    setSubmitting(false);
  };

  return (
    <div className="bg-gradient-to-r from-cyan-100 to-blue-300 min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <a href="/" className="text-4xl font-bold text-gray-800 mb-8">
          CytoUI
        </a>
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-3xl font-bold mb-4">Forgot Password</h1>
          <p className="text-gray-500 mb-8">
            Enter your email to reset your password
          </p>

          <form onSubmit={resetPassword}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faUser} className="text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  disabled={submitting}
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Email"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {submitting ? "Submitting..." : "Reset Password"}
            </button>

            <p className="text-gray-500 mt-4 text-sm text-center">
              Remember your password?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
