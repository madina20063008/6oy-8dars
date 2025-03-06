
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

export function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const storedEmail = localStorage.getItem("userEmail");
        const storedPassword = localStorage.getItem("userPassword");

        if (email === storedEmail && password === storedPassword) {
            localStorage.setItem("isAuthenticated", "true"); // Set authentication flag
            navigate("/"); // Navigate to the home page
        } else {
            setError("No user found with these credentials. Please try again.");
        }
    };

    return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
            Sign In
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-gray-300 focus:outline-indigo-600"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-gray-300 focus:outline-indigo-600"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 px-3 py-1.5 text-white hover:bg-indigo-500"
              >
                Sign In
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member? <NavLink to="/signup" className="text-indigo-600 hover:text-indigo-500">Sign Up</NavLink>
          </p>
        </div>
      </div>
    );
}
