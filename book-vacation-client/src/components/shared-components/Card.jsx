import React from "react";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Card = ({ value }) => {
  const [color, setColor] = useState(false);
  const navigate = useNavigate();

  const getProperty = (e) => {
    const id = value.id;
    navigate(`/property/${id}`);
  };
  const handleSave = () => {
    const id = value.id
    console.log(id)
  }
  return (
    <button className="bg-white">
      <div className=" max-w-sm rounded-xl overflow-hidden shadow-xl hover:scale-105 ">
        <div  onClick={getProperty}>
          <img className="  w-64 h-64" src={value.image} />
        </div>

        <div className="space-x-48">
          <p className=" h-16">{value.title} </p>
          <FaHeart
            size={36}
            className=" mt-8 mb-2 mr-32"
            color={color ? 'red' : 'gray'}
            onMouseOver={() => setColor(true)}
            onMouseLeave={() => setColor(false)}
            onClick={handleSave}
          />
        </div>
      </div>
    </button>
  );
};

export default Card;
