import React from "react";
import { Container } from "../container/style";
import { Header } from "../header";
import { WrapperHeaderSection } from "./style";

export function HeaderSection() {
  return (
    <WrapperHeaderSection>
      <Container>
        <Header />
      </Container>
    </WrapperHeaderSection>
  );
}
