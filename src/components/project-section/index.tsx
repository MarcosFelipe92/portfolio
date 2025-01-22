import {
  ProjectContainer,
  ProjectImage,
  ProjectInfo,
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
        <ProjectInfo>
          <h3>FastShop</h3>
          <p>
            Uma loja virtual moderna com carrinho de compras, autenticação e
            gerenciamento de produtos.
          </p>
          <ul>
            <li>Next.js</li>
            <li>React</li>
            <li>Spring Boot</li>
            <li>PostgreSQL</li>
          </ul>
        </ProjectInfo>
      </ProjectContainer>

      <ProjectContainer>
        <ProjectImage>
          <img src="/book-explorer.png" alt="BookExplorer" />
        </ProjectImage>
        <ProjectInfo>
          <h3>BookExplorer</h3>
          <p>
            Explore uma coleção de livros da API do Google Books, visualize
            detalhes e marque seus favoritos.
          </p>
          <ul>
            <li>Next.js</li>
            <li>React</li>
            <li>Express.js</li>
            <li>Prisma ORM</li>
          </ul>
        </ProjectInfo>
      </ProjectContainer>

      <ProjectContainer>
        <ProjectImage>
          <img src="/app-contato.png" alt="Gerenciador de Contatos" />
        </ProjectImage>
        <ProjectInfo>
          <h3>Gerenciador de Contatos</h3>
          <p>
            Aplicativo simples para cadastro, edição e exclusão de contatos,
            utilizando padrão MVC.
          </p>
          <ul>
            <li>SQLite</li>
            <li>Repository Pattern</li>
            <li>MVC</li>
          </ul>
        </ProjectInfo>
      </ProjectContainer>
    </WrapperProjectSection>
  );
}
