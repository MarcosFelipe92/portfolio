import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { ContainerSocial } from "./style";

export function Social() {
  return (
    <ContainerSocial>
      <a
        href="https://wa.me/5562993806140"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={30} color="white" />
      </a>
      <a
        href="https://www.linkedin.com/in/marcos-felipe-030127234/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={30} color="white" />
      </a>
    </ContainerSocial>
  );
}
