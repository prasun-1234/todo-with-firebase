import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/Firebase";
import { toast } from "react-toastify";



export default function LoginSection() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");



   const handleLogin = async (e) => {
      e.preventDefault();

      try {
         await signInWithEmailAndPassword(auth, email, password);
         window.location.href = "/todo"
         toast.success("user loged in successfully !!", {
            position: "top-center",
         })
         console.log("user logged in");

      } catch (error) {
         console.log(error.message);
         const errorMessage = getErrorMessage(error.code);
         toast.error(errorMessage, {
            position: "bottom-center",
         })
      }
   };
   const getErrorMessage = (errorCode) => {
      switch (errorCode) {
         case 'auth/user-not-found':
            return 'No user found with this email address. Please sign up first.';
         case 'auth/wrong-password':
            return 'Incorrect password. Please try again.';
         case 'auth/invalid-email':
            return 'Invalid email address. Please enter a valid email.';
         case 'auth/user-disabled':
            return 'This user account has been disabled.';
         default:
            return 'An error occurred during login. Please try again later.';
      }
   };

   return (
      <>
         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
               <img
                  alt="Your Company"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="mx-auto h-10 w-auto"
               />
               <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Sign in to your account
               </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

               <form onSubmit={handleLogin} method="POST" className="space-y-6">
                  <div>
                     <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                     </label>
                     <div className="mt-2">
                        <input
                           id="email"
                           name="email"
                           type="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required
                           autoComplete="email"
                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  <div>
                     <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                           Password
                        </label>
                        <div className="text-sm">
                           <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                              Forgot password?
                           </a>
                        </div>
                     </div>
                     <div className="mt-2">
                        <input
                           id="password"
                           name="password"
                           type="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           required
                           autoComplete="current-password"
                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  <div>
                     <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                     >
                        Sign in
                     </button>
                  </div>
               </form>

               <p className="mt-10 text-center text-sm text-gray-500">
                  New Here?{' '}
                  <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                     Sign up
                  </Link>
               </p>
            </div>
         </div>
      </>
   )
}