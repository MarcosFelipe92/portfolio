import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { ContainerSocial } from "./style";

export function Social() {
  return (
    <ContainerSocial>
      <a
        href="https://github.com/MarcosFelipe92"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={30} color="white" />
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
