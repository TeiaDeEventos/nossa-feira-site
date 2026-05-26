import React, { memo } from "react";
import { Wrapper, LogoImg, Tag, Title, Sub } from "./styles";

const Expositores: React.FC = () => {
  return (
    <Wrapper>
      <LogoImg src={"/logo.svg"} alt="Nossa Feira" />
      <Tag>Em breve</Tag>
      <Title>Conheça nossos expositores</Title>
      <Sub>
        A lista completa de expositores da 3ª edição será divulgada em breve.
        Fique ligado!
      </Sub>
    </Wrapper>
  );
};

export default memo(Expositores);
