import { ContainerTop, PhotoWrapper, TitleTop, TitleWrapper } from "./style";

export default function Top() {
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
