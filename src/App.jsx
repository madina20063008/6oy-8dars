

import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import { SignIn } from "./Components/SignIn.jsx";
import { SignUp } from "./Components/SignUp.jsx";
import { Example } from "./Components/Crud.jsx";

// Navbar Component
function Navbar({ isAuthenticated }) {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-center space-x-4">
      <button
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-700 transition"
        onClick={() => navigate(isAuthenticated ? "/crud" : "/signin")}
      >
        Add member
      </button>
      <button
        className="bg-green-500 px-4 py-2 rounded hover:bg-green-700 transition"
        onClick={() => navigate("/signup")}
      >
        Sign Up
      </button>
      <button
        className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-700 transition"
        onClick={() => navigate("/signin")}
      >
        Sign In
      </button>
    </nav>
  );
}

function Home({ isAuthenticated }) {
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {[
              { name: "Holden Caulfield", role: "UI Designer", img: "https://dummyimage.com/80x80" },
              { name: "Henry Letham", role: "CTO", img: "https://dummyimage.com/84x84" },
              { name: "Oskar Blinde", role: "Founder", img: "https://dummyimage.com/88x88" },
              { name: "John Doe", role: "DevOps", img: "https://dummyimage.com/90x90" },
              { name: "Martin Eden", role: "Software Engineer", img: "https://dummyimage.com/94x94" },
              { name: "Boris Kitua", role: "UX Researcher", img: "https://dummyimage.com/98x98" },
              { name: "Atticus Finch", role: "QA Engineer", img: "https://dummyimage.com/100x90" },
              { name: "Alper Kamu", role: "System", img: "https://dummyimage.com/104x94" },
              { name: "Rodrigo Monchi", role: "Product Manager", img: "https://dummyimage.com/108x98" },
            ].map((member, index) => (
              <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={member.img}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">{member.name}</h2>
                    <p className="text-gray-500">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  return (
      <Routes>
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
        <Route path="/crud" element={isAuthenticated ? <Example /> : <SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
  );
}

