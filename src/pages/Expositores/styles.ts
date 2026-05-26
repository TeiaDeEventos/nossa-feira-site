import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  padding-top: 60px;
  background-color: ${({ theme }) => theme.colors.terracota};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 120px 24px 80px;
  text-align: center;
`;

export const LogoImg = styled.img`
  width: clamp(200px, 40vw, 360px);
  height: auto;
  opacity: 0.9;
  margin-bottom: 12px;
`;

export const Tag = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.creme};
  letter-spacing: 4px;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-variation-settings:
    "wght" 800,
    "opsz" 72,
    "SOFT" 100,
    "WONK" 1;
  font-size: clamp(28px, 5vw, 48px);
  color: ${({ theme }) => theme.colors.cremeLt};
  line-height: 1.1;
`;

export const Sub = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: rgba(245, 241, 228, 0.7);
  max-width: 480px;
  line-height: 1.75;
`;
