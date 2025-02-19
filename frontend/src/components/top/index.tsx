import {
  ContainerTop,
  PhotoContainer,
  TitleTop,
  TitleContainer,
} from "./style";

export function Top() {
  return (
    <ContainerTop>
      <TitleContainer>
        <TitleTop>Desenvolvedor full-stack</TitleTop>
      </TitleContainer>
      <PhotoContainer>
        <img src="/foto.png" />
      </PhotoContainer>
    </ContainerTop>
  );
}
