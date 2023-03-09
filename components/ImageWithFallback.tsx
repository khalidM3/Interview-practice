import React, { useState } from 'react';
import Image from "next/image";
import ImageNotFoundPng from "@/assets/image-not-found.png";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  [key: string]: any;
}

function ImageWithFallback({ src, alt,width, height, ...props }: ImageWithFallbackProps) {
  const [imageSrc, setImageSrc] = useState(src || ImageNotFoundPng.src);
  const onError = () => {
    setImageSrc(ImageNotFoundPng.src);
  };
  return (
    <>
      <Image
        style={{  objectFit: 'cover', borderRadius: "10px" }}
        src={imageSrc}
        height={height}
        width={width}
        alt={alt}
        onError={onError}
        {...props}
      />
      </>
  );
}

export default ImageWithFallback;


