import { useNavigate } from 'react-router-dom';

const FormItem = ({ name }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (name === "Register") {
            navigate('/register');
        };
        if (name === "Login") {
            navigate('/sign-in');
        };
        if (name === "Host Your Home") {
            navigate('/host_your_home');
        };
        if (name === "Help") {
            navigate('/help');
        };
        
    }

  return (
      <div className="flex justify-center h-32 pt-4 bg-blue-100">
          <div
              className="grid place-items-center rounded-2xl border-2 border-black 
                        w-1/3 h-20  bg-gray-100 hover:bg-pink-200 font-extrabold"
              onClick={() => handleClick()}
          >
              {name}
         </div>
      </div>
  );
};

export default FormItem;
