import { FaAirbnb } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <FaAirbnb size={56} onClick={() => navigate('/') } />
  )
}

export default HomePage