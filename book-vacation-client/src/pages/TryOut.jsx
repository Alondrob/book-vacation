import { useState } from "react";
import axios from "axios";
const TryOut = () => {
  const [image, setImage] = useState({});
  const url = "http://localhost:3001/property/images";

  const uploadImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

    const formData = new FormData();
   formData.append("file", image);



  const submitPics = async () => {
      const response = await axios.post(
          url, formData,
          {
              
          });
      console.log(response)
  };


  return (
    <div className="flex justify-center mt-4">
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={uploadImage}
      />
      <button
        onClick={submitPics}
        className="h-12 w-12 border-2 border-blue-200"
      >
        Click
          </button>
          <img src="https://bookvacation.s3.amazonaws.com/3c8af7bb7196deaa0e0cd05c135af78f"/>
    </div>
  );
};

export default TryOut;

// router.post("/upload-image", uploadImage);
