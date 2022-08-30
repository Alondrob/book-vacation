import { useState } from 'react';
import Header from '../../components/header/HeaderLayout';

const SignIn = () => {
    const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
    
    const login = () => {
            {
        console.log('before test')
        console.log('after test')
        
        
        
      }
 

    }
  return (
    <div className=" h-screen bg-vacation-pattern">
      <Header />

    
      {/* ****************************** */}
      <div className="flex justify-center mt-4 mb-6">
        <input
          className=" block text-center italic  hover:bg-red-200 font-bold rounded-full border-2 border-sky-900 w-80 h-12 space-y-4"
          placeholder="Email..."
          type="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
        />
      </div>
      {/* ****************************** */}
      <div className="flex justify-center mt-4 mb-6">
        <input
          className=" block text-center italic  hover:bg-red-200 font-bold rounded-full border-2 border-sky-900 w-80 h-12 space-y-4"
          placeholder="Password..."
          type="password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          value={formData.password}
        />
      </div>
      {/* ****************************** */}
   
      {/* ****************************** */}
      <div className=" flex justify-center mt-10 mb-4">
        <button
          className="block  font-extrabold italic text-center rounded-full h-16 w-80 border-6 border-blue-300 bg-gray-500 hover:bg-green-100"
          onClick={login}
        >
          Login
        </button>
      </div>
    </div>
  );
};



export default SignIn