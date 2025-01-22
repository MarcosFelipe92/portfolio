import { ContainerTop, PhotoWrapper, TitleTop, TitleWrapper } from "./style";

export function Top() {
  return (
    <ContainerTop>
      <TitleWrapper>
        <TitleTop>Desenvolvedor full-stack</TitleTop>
      </TitleWrapper>
      <PhotoWrapper>
        <img src="/foto.png" />
      </PhotoWrapper>
    </ContainerTop>
  );
}
