import { WrapperProjectInfo } from "./style";

interface ProjectInfoProps {
  title: string;
  description: string;
  technologies: string[];
}

export function ProjectInfo({
  title,
  description,
  technologies,
}: ProjectInfoProps) {
  return (
    <WrapperProjectInfo>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {technologies.map((t) => (
          <li>{t}</li>
        ))}
      </ul>
    </WrapperProjectInfo>
  );
}
