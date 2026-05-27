import React, { memo } from "react";
import { Wrapper, LogoImg, Tag, Title, Sub } from "./styles";

const Programacao: React.FC = () => {
  return (
    <Wrapper>
      <LogoImg src={"/logo.svg"} alt="Nossa Feira" />
      <Tag>Em breve</Tag>
      <Title>Programação completa</Title>
      <Sub>
        A grade de atrações da 3ª edição será divulgada em julho. Aguarde!
      </Sub>
    </Wrapper>
  );
};

export default memo(Programacao);
