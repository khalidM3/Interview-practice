import React, { useState, useCallback} from "react";

import { useUploadedImagesStore } from "@/store";
import DragDrop from "../DragDrop";
import UploadsDisplay from "./UploadsDisplay";
import styles from "./UploadImage.module.css";

export default function UploadImage() {

  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    useUploadedImagesStore.getState().addFiles(acceptedFiles);
  },[]);

  return (
    <section
      className={styles.container}
    >
      <h2> Upload Your Photos</h2>
      <div className="divider"></div>
      <p>
        Select up to 5 high quality images to upload into our database. If your
        image is selected, a member of our team will contact you for
        attribution.
      </p>

      <DragDrop onDrop={onDrop} />

      <UploadsDisplay />
    </section>
  );
}
