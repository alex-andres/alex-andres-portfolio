import Image from "next/image";
import styled from "styled-components";
import Button from "./Button";

export default function Card({
  title,
  imageSrc,
  alt,
  description,
  buttonText,
  path,
  className,
}) {
  return (
    <article className={className}>
      <div className="header">
        <div className="image-wrapper">
          <Image layout="fill" objectFit="cover" src={imageSrc} alt={alt} />
        </div>
        <div className="heading-wrapper">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="text-container">
        <p>{description}</p>
        <Button buttonText={buttonText} path={path} />
      </div>
    </article>
  );
}
