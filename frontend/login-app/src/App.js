import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"; 

function App() {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
 
  function handleUser(evt) {
    setUsername(evt.target.value);
  }

 
  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

 
  async function check() {
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });

      if (response.status === 200) {
       
        Swal.fire({
          icon: 'success',
          title: 'Login Success ✅',
          text: 'You have logged in successfully.',
        });

        
        setUsername(''); 
        setPassword('');
      }
    } catch (error) {
      
      Swal.fire({
        icon: 'error',
        title: 'Login Failed ❌',
        text: error.response?.data?.message || "Invalid username or password.",
      });

      
      setUsername('');
      setPassword(''); 
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Username Input */}
        <input
          type="text"
          placeholder="Username"
          onChange={handleUser}
          value={username} 
          name="username"
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          onChange={handlePassword}
          value={password} 
          name="password"
          className="w-full p-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Login Button */}
        <button
          type="submit"
          onClick={check} 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Login
        </button>

        {/* Signup Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default App;
