import { ProjectInfo } from "../project-info";
import {
  ProjectContainer,
  ProjectImage,
  TitleProject,
  WrapperProjectSection,
} from "./style";

export function ProjectSection() {
  return (
    <WrapperProjectSection>
      <TitleProject>Projetos</TitleProject>

      <ProjectContainer>
        <ProjectImage>
          <img src="/fastshop.png" alt="FastShop" />
        </ProjectImage>
        <ProjectInfo
          title="FastShop"
          description="Uma loja virtual moderna com carrinho de compras, autenticação e
            gerenciamento de produtos."
          technologies={[
            "Java",
            "Next.js",
            "React",
            "Spring Boot",
            "API Rest",
            "JWT",
          ]}
        />
      </ProjectContainer>

      <ProjectContainer>
        <ProjectImage>
          <img src="/book-explorer.png" alt="BookExplorer" />
        </ProjectImage>
        <ProjectInfo
          title="BookExplorer"
          description="Explore uma coleção de livros da API do Google Books, visualize
            detalhes e marque seus favoritos."
          technologies={[
            "Typescript",
            "Next.js",
            "React",
            "Express.js",
            "API Rest",
            "Prisma ORM",
          ]}
        />
      </ProjectContainer>

      <ProjectContainer>
        <ProjectImage>
          <img src="/app-contato.png" alt="Gerenciador de Contatos" />
        </ProjectImage>
        <ProjectInfo
          title="App Contatos"
          description="Aplicativo simples para cadastro, edição e exclusão de contatos,
            utilizando padrão MVC."
          technologies={["Dart", "Flutter", "SQLite", "Mvc"]}
        />
      </ProjectContainer>
    </WrapperProjectSection>
  );
}
