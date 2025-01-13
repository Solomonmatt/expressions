import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "i2802x1d",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});


const builder = imageUrlBuilder(client);
export const urlFor = (source) => {
  return builder.image(source);
}