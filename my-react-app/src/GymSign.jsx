

import React from 'react';

const SignUpPage = () => {
  return (
    <div className="sign-up-page bg-gray-900 text-white py-20 px-4 md:px-8">
      <div className="sign-up-container max-w-md mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Sign Up</h2>
        <form className="bg-gray-800 rounded-md p-8">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-400 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-700 text-white rounded-md py-2 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-400 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-700 text-white rounded-md py-2 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-400 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-700 text-white rounded-md py-2 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your password"
            />
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-md transition-colors duration-300 block w-full">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;