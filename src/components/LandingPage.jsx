

import React from 'react'
import { Link } from 'react-router-dom';

function LandingPage() {
   return (
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
         <header className="w-full p-6 bg-green-500 text-white text-center">
            <h1 className="text-4xl font-bold">Welcome to My Todo App</h1>
            <p className="mt-2 text-xl">Organize your tasks efficiently and with ease</p>
         </header>

         <main className="flex-1 flex flex-col items-center justify-center">
            <img
               src="" // Replace with your image path
               alt="Todo App"
               className="w-80 h-80 object-cover rounded-lg shadow-lg mb-6"
            />
            <p className="text-lg text-gray-700 mb-6 max-w-md text-center">
               Keep track of your tasks, set priorities, and never miss a deadline.
            </p>
            <div className="flex space-x-4">
               <Link
                  to="/login"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md"
               >
                  Get Started
               </Link>
               <Link
                  to="/signup"
                  className="bg-white hover:bg-gray-100 text-green-500 px-6 py-3 rounded-lg shadow-md border border-green-500"
               >
                  Sign Up
               </Link>
            </div>
         </main>

         <footer className="w-full p-6 bg-gray-800 text-white text-center">
            <p className="text-sm">&copy; 2024 My Todo App. All rights reserved.</p>
         </footer>
      </div>
   )
}

export default LandingPage;