import Image from "next/image";
import asset from "../../assets/svg/logo.svg";
const ImageLogo = ({
  src,
  width,
  height,
  alt,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
}) => {
  return <Image src={src} width={width} height={height} alt={alt} />;
};

export default function Logo() {
  return (
    <div>
      <a href="">
        <ImageLogo src={asset} width={100} height={50} alt="Logo stepsync" />
      </a>
    </div>
  );
}
