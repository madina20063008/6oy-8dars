import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignIn } from "./Components/SignIn.jsx";
import { SignUp } from "./Components/SignUp.jsx";
import { Example } from "./Components/Crud.jsx"; // ✅ Import Crud.jsx

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/crud" element={<Example />} />  {/* ✅ Load Crud.jsx here */}
      </Routes>
  );
}

