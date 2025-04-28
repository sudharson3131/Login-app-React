import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'; // <-- import sweetalert2

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function register() {
    try {
      const response = await axios.post('http://localhost:5000/signup', { username, password });

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Signup Successful ✅',
          text: 'Redirecting to login...',
          timer: 1500,
          showConfirmButton: false
        });

        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Signup Failed ❌',
        text: error.response?.data?.message || "Something went wrong!",
      });
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>

        <input
          type="text"
          placeholder="Username"
          onChange={handleUsername}
          name="username"
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={handlePassword}
          name="password"
          className="w-full p-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
          onClick={register}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Signup
        </button>

      </div>
    </div>
  );
}

export default Signup;
