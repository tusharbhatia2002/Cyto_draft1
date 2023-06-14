
"use client";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios from "axios";
import { FaUserLock } from "react-icons/fa";


const Register = () => {
 const [submitting, setSubmitting] = useState(false);


 const register = async (e) => {
   e.preventDefault();
   setSubmitting(true);


   const res = await axios.post("api/mock/login");
   if (res.status === 200) {
     router.push(getRedirect());
   }


   setSubmitting(false);
 };


 return (
   <div className="bg-gradient-to-r from-cyan-100 to-blue-300 min-h-screen flex items-center justify-center">
     <div className="flex flex-col items-center justify-center min-h-screen">
     <a href="/" className="text-4xl font-bold text-gray-800 mb-8">CytoUI</a>
       <div className="bg-white p-8 rounded shadow-md w-96">
         <h1 className="text-3xl font-bold mb-4">Register</h1>
         <p className="text-gray-500 mb-8">Create your account</p>


       <form onSubmit={register}>
         <div className="mb-6">
           <label
             htmlFor="username"
             className="text-sm font-medium text-gray-700"
           >
             Username
           </label>
           <div className="mt-1 relative rounded-md shadow-sm">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
               <FontAwesomeIcon icon={faUser} className="text-gray-400" />
             </div>
             <input
               id="username"
               name="username"
               type="text"
               required
               disabled={submitting}
               className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 sm:text-sm border-gray-300 rounded-md"
               placeholder="Username"
             />
           </div>
         </div>


         <div className="mb-6">
           <label
             htmlFor="email"
             className="text-sm font-medium text-gray-700"
           >
             Email
           </label>
           <div className="mt-1 relative rounded-md shadow-sm">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
               <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
             </div>
             <input
               id="email"
               name="email"
               type="email"
               required
               disabled={submitting}
               className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 sm:text-sm border-gray-300 rounded-md"
               placeholder="Email"
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
               <FontAwesomeIcon icon = {FaUserLock} className="text-gray-400" />
             </div>
             <input
               id="password"
               name="password"
               type="password"
               required
               disabled={submitting}
               className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 sm:text-sm border-gray-300 rounded-md"
               placeholder="Password"
             />
           </div>
         </div>


         <div className="mb-6">
           <label
             htmlFor="password_repeat"
             className="text-sm font-medium text-gray-700"
           >
             Repeat Password
           </label>
           <div className="mt-1 relative rounded-md shadow-sm">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
               <FontAwesomeIcon className="text-gray-400" />
             </div>
             <input
               id="password_repeat"
               name="password_repeat"
               type="password"
               required
               disabled={submitting}
               className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 sm:text-sm border-gray-300 rounded-md"
               placeholder="Repeat Password"
             />
           </div>
         </div>


         <button
           type="submit"
           disabled={submitting}
           className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
         >
           {submitting ? "Creating Account..." : "Create Account"}
         </button>
         <p className="text-gray-500 text-sm mt-4">
             Already have an account?{" "}
             <a href="/login" className="text-blue-500 text-sm hover:underline">
               Login now
             </a>
           </p>
       </form>
     </div>
   </div>
   </div>
 );
};


export default Register;