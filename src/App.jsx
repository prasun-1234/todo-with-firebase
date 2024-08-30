import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import MainApp from "./MainApp";
import { auth } from "./firebase/Firebase";

const LandingPage = lazy(() => import('./components/LandingPage'));
const LoginSection = lazy(() => import('./auth/LoginSection'));
const SignupSection = lazy(() => import('./auth/SignupSection'));
const MainSection = lazy(() => import('./MainApp'));

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <>
      <div className="mainApp">
        <Suspense fallback={<div className="container mx-auto">Loading......</div>}  >
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/todo" element={<MainSection />} />
            <Route path="/login" element={ user ? <Navigate to="/todo" /> : <LoginSection />} />
            <Route path="/signup" element={ user ? <Navigate to="/todo" /> : <SignupSection />} />
            <Route path="*" 
              element={
              <div className="w-full h-dvh container mx-auto">
                <h2 className="text-[4rem] font-bold  ">Enemys Ahead ! Get back to the safe zone</h2>
              </div>
            } />
          </Routes>

        </Suspense>
        <ToastContainer autoClose={3000} />

      </div>
    </>

  )
}

export default App;
