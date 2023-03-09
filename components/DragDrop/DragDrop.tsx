import { useDropzone } from "react-dropzone";
import UploadSvg from "@/assets/upload.svg";
import UploadGraySvg from "@/assets/upload-gray.svg";
import Image from "next/image";
import styles from "./DragDrop.module.css";


export default function DragDrop({ onDrop }: any) {
    const {
      getRootProps,
      getInputProps,
      isDragAccept,
      isFocused,
      isDragReject,
    } = useDropzone({
      accept: { "image/*": [] },
      onDrop,
      noClick: true,
      noKeyboard: true,
      maxSize: 100 * (1024 * 1024), 
      maxFiles: 5,
    });
    const isActive = isFocused || isDragAccept;
  
    return (
      <section
        className={styles.container}
        style={{
          borderColor: isActive ? "blue" : "grey",
          color: isActive ? "blue" : "grey",
        }}
      >
        <div
          className={styles.innerContainer}
          style={{
            border: `2px dotted ${isActive ? "blue" : "grey"}`,
          }}
          {...getRootProps({ isDragAccept, isFocused, isDragReject })}
        >
          <input {...getInputProps()} />
          <Image src={isActive ? UploadSvg : UploadGraySvg} alt="upload-image" />
          <div>Drag & Drop Your Images</div>
        </div>
      </section>
    );
  }
  