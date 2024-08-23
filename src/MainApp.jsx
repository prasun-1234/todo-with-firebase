import "./App.css";
import { auth, db } from "./firebase/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

import { useEffect, useState } from 'react'
import TodoApp from "./components/TodoApp";

function MainApp() {
   
   const [userDetails, setUserDetails] = useState("");

   const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
         const docRef = doc(db, "users", user.uid);
         const docSnap = await getDoc(docRef);
         if (docSnap.exists()) {
            setUserDetails(docSnap.data());
         } else {
            console.log("user is not logged in");
         }
      })
   }

   async function handleLogout() {
      try {
         await auth.signOut();
         window.location.href = "/login";
         toast.success("Logged Out Successfully!");

      } catch (error) {
         console.log(error);

      }

   }

   useEffect(() => {
      fetchUserData();
   }, []);

   

   return (
      <div className="">
         {userDetails ? (
            <section className="w-full h-full lg:h-dvh flex flex-col justify-start items-center  bg-[#F5F9FF]">
               <div className="container mx-auto w-full h-auto p-5 mb-16 flex justify-between items-center  border">
                  <h3 className="text-[3rem] leading-none ">Hello {userDetails.name}</h3>
                  <button onClick={handleLogout} className="px-[1.5rem] py-[.75rem] text-[1.125rem] font-medium  rounded-[.25rem]  bg-[#2D70FD] text-white ">Logout</button>
               </div>
              <TodoApp />
            </section>

         ) : (
            <div className="container mx-auto w-full ">
               <h4 className="">Loading.....</h4>
            </div>
         )}
      </div>


   );
}

export default MainApp;