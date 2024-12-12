import React, { useState } from "react";
import axios from "axios";

export default function UploadFile() {
  const [image, setImage] = useState();
  const handleFiles = async (event) => {
    const presetKey = "dt7e2phg";
    const cloudName = "dti31w70n";

    const files = event.target.files[0]; // Use event.target.files[0] to access the file
    const formData = new FormData();
    formData.append("file", files); // Use "file" instead of "files"
    formData.append("upload_preset", presetKey);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set Content-Type header
          },
        }
      );
      setImage(res.data.secure_url);
      console.log(res.data.secure_url);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <input type="file" name="image" onChange={handleFiles} />

      <img src={image} alt="test" width="200px" />
    </div>
  );
}
