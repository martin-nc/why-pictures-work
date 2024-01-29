import NextImage from "next/image"

type appProps = {
  src: string,
  alt: string,
  height ?: number,
  width: number
};

const Image = ({ src, alt, height, width }:appProps) => {
  const imageProps = {
    src,
    alt,
    height,
    width,
    layout: "responsive"
  }
  return <NextImage {...imageProps} />
}

export default Image;
