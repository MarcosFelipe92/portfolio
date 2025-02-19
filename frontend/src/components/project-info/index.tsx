import { FaGithub, FaGlobe } from "react-icons/fa";
import {
  ProjectInfoHeader,
  LinksContainer,
  ProjectInfoContainer,
} from "./style";

interface ProjectInfoProps {
  title: string;
  description: string;
  technologies: string[];
  gitHubUrl: string;
  siteUrl?: string;
}

export function ProjectInfo({
  title,
  description,
  technologies,
  gitHubUrl,
  siteUrl,
}: ProjectInfoProps) {
  return (
    <ProjectInfoContainer>
      <ProjectInfoHeader>
        <h3>{title}</h3>
        <LinksContainer>
          <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} color="white" />
          </a>
          {siteUrl && (
            <a href={siteUrl} target="_blank" rel="noopener noreferrer">
              <FaGlobe size={30} color="white" />
            </a>
          )}
        </LinksContainer>
      </ProjectInfoHeader>
      <p>{description}</p>
      <ul>
        {technologies.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </ProjectInfoContainer>
  );
}
