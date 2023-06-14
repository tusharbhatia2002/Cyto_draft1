"use client"
import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { IoMdLock } from "react-icons/io";

const Login = () => {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const { username, password } = formData;
      const encodedUsername = encodeURIComponent(username);
      const encodedPassword = encodeURIComponent(password);

      // Check if the entered credentials match any of the valid values
      if (
        (encodedUsername === "admin" && encodedPassword === "password") ||
        (encodedUsername === "tushar02" && encodedPassword === "tb1002") ||
        (encodedUsername === "rahul20" && encodedPassword === "xyz12")
      ) {
        localStorage.setItem("isLoggedIn", "true"); // Set a flag in local storage to indicate successful login
        window.location.href = `/dashboard?username=${encodedUsername}&password=${encodedPassword}`; // Redirect to the dashboard page with encoded credentials in the URL
      } else {
        setErrorMessage("Incorrect username or password"); // Set the error message
      }
    } catch (error) {
      console.error("Login failed:", error);
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
          <h1 className="text-3xl font-bold mb-4">Login</h1>
          <p className="text-gray-500 mb-8">Sign In to your account</p>

          {errorMessage && (
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">
              {errorMessage}
            </div>
          )}

          <form onSubmit={login}>
            <div className="mb-6">
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="text-gray-400" />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  disabled={submitting}
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Username"
                  onChange={handleInputChange} // Added input change handler
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IoMdLock className="text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  disabled={submitting}
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Password"
                  onChange={handleInputChange} // Added input change handler
                />
              </div>
              <a
                href="/forgot-password"
                className="text-sm text-center text-blue-500 hover:underline mt-1 text-center"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {submitting ? "Logging in..." : "Login"}
            </button>

            <p className="text-gray-500 mt-4 text-sm text-center">
              Don't have an account?{" "}
              <a href="/register" className="text-blue-500 hover:underline">
                Register now
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


