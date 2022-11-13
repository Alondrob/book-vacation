import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import HeaderLayout from "../../components/header/HeaderLayout";
import { uploadImage } from "../../redux/api-requests/propertyRequests";
import { useSelector } from "react-redux";

const UploadImagePage = () => {
  const [imageFile, setImageFile] = useState();
  const params = useParams();
  const formData = new FormData();

  const userProperties = useSelector((state) => state.user.userProperties);

  const uploadFile = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    setImageFile(file);
  };
  const checkIfUploaded = (arrIndex) => {
    const selectedProperty = userProperties.filter(propertyObject => propertyObject._id === params.id)
      console.log(selectedProperty[0]);
    //   if (selectedProperty[0]['image'][arrIndex]) {
    //       return true;
    //   } else {
    //       return;
    //   }
  };

  formData.append("file", imageFile);
  formData.append("property_id", params.id);

  const data = {
    file: imageFile,
    id: params.id,
  };
  const postImage = (arrIndex) => {
      uploadImage(formData);
      checkIfUploaded(arrIndex)
  };

  return (
    <>
      <HeaderLayout />
      <div>
        <div className="flex mb-8 mt-8">
          <input
            className="mt-4 ml-4 w-64"
            type="file"
            accept="image/png, image/jpeg"
            onChange={uploadFile}
          />
          <button
            className="border-4 border-blue-800  bg-yellow-100 mt-4
                      rounded-xl w-36 font-bold"
            onClick={(index) => postImage(0)}
          >
                      {checkIfUploaded() ? "Uploaded" : "Upload"}
          </button>
        </div>
        <div className="h-20 w">
          <input className="mt-4 ml-4 w-64" type="file" />
          <button
            className="border-4 border-blue-800  bg-yellow-100 mt-4
                      rounded-xl w-36 font-bold"
          >
            Upload
          </button>
        </div>
        <div className="h-20 w">
          <input className="mt-4 ml-4 w-64" type="file" />
          <button
            className="border-4 border-blue-800  bg-yellow-100 mt-4
                      rounded-xl w-36 font-bold"
          >
            Upload
          </button>
        </div>
        <div className="h-20 w">
          <input className="mt-4 ml-4 w-64" type="file" />
          <button
            className="border-4 border-blue-800  bg-yellow-100 mt-4
                      rounded-xl w-36 font-bold"
          >
            Upload
          </button>
        </div>
        <div className="h-20 w">
          <input className="mt-4 ml-4 w-64" type="file" />
          <button
            className="border-4 border-blue-800  bg-yellow-100 mt-4
                      rounded-xl w-36 font-bold"
          >
            Upload
          </button>
        </div>
        <div className="h-20 w">
          <input className="mt-4 ml-4 w-64" type="file" />
          <button
            className="border-4 border-blue-800  bg-yellow-100 mt-4
                      rounded-xl w-36 font-bold"
          >
            Upload
          </button>
        </div>
        <div className="h-20 w">
          <input className="mt-4 ml-4 w-64" type="file" />
          <button
            className="border-4 border-blue-800  bg-yellow-100 mt-4
                      rounded-xl w-36 font-bold"
          >
            Upload
          </button>
        </div>
      </div>
    </>
  );
};

export default UploadImagePage;
