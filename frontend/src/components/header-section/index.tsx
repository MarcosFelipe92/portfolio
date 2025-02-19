import { Container } from "../container/style";
import { Top } from "../top";
import {
  DescriptionContainer,
  ParagraphDescription,
  HeaderSectionContainer,
} from "./style";

export function HeaderSection() {
  return (
    <HeaderSectionContainer>
      <Container>
        <Top />
        <DescriptionContainer>
          <ParagraphDescription>
            Sou desenvolvedor full-stack com experiência em HTML, CSS,
            JavaScript, TypeScript, React e Next, além de Java,Spring Boot,
            node, MySql e Postgres . Tenho trabalhado em projetos pessoais
            focados no aprendizado prático de diferentes tecnologias. Minhas
            habilidades incluem a criação de interfaces, além de integração com
            APIs e implementação de funcionalidades essenciais em sistemas web.
          </ParagraphDescription>
        </DescriptionContainer>
      </Container>
    </HeaderSectionContainer>
  );
}
