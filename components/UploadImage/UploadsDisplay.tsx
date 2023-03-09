import { useUploadedImagesStore } from "@/store";

export default function UploadsDisplay ({}: any) {
    const { images } = useUploadedImagesStore();
    const show = (image: any) => {
      return (
        <div>
          <img
            style={{
              height: "75px",
              width: "75px",
              objectFit: "cover",
              borderRadius: "5px",
              margin: "5px",
            }}
            alt="uploaded-image"
            src={URL.createObjectURL(image)}
          />
        </div>
      );
    };
    
    return (
      <div
        style={{
          display: "flex",
          flexFlow: "wrap",
        }}
      >
        {images.map(show)}
      </div>
    );
  };
  