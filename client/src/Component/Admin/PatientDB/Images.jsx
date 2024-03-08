import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Images = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="patient-content__image">
      <div className="patient-content__imgmain">
        <div className="patient-img__container">1</div>
        <div className="patient-img__container">2</div>
        <div className="patient-img__container">3</div>
        <div className="patient-img__container">4</div>
        <div className="patient-img__container">5</div>
        <div className="patient-img__container">6</div>
      </div>

      <div className="patient-content__imgnew" {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  );
};

export default Images;
