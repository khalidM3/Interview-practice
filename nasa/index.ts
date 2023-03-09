export interface Camera {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}

export interface Rover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
}

export interface NasaPhoto {
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: string;
  rover: Rover;
}

export interface Photo {
  id: string;
  src: string;
  title: string;
}

export async function getNasaPhotos(
  page: number = 1
): Promise<Array<NasaPhoto>> {
  return fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=${page}&sol=1000&api_key=${process.env.NASA_API_KEY}`
  )
    .then((res) => res.json())
    .then((res) => res.photos);
}

export const mapToPhoto = (nasaPhoto: NasaPhoto): Photo => ({
  id: String(nasaPhoto.id),
  src: nasaPhoto.img_src,
  title: `${nasaPhoto.id} ${nasaPhoto.rover.name} ${nasaPhoto.camera.name}`,
});
