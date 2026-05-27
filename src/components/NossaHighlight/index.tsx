import styled from "styled-components";

type NossaType = {
  text: string;
};

const HighlightSpan = styled.span`
  color: ${({ theme }) => theme.colors.verde};
  letter-spacing: 1px;
`;

export const Highlight: React.FC<NossaType> = ({ text }) => (
  <HighlightSpan>{text}</HighlightSpan>
);
