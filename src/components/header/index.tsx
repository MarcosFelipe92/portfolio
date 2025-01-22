import Description from "../description";
import Top from "../top";
import { ContainerHeader } from "./style";

export function Header() {
  return (
    <ContainerHeader>
      <Top />
      <Description />
    </ContainerHeader>
  );
}
