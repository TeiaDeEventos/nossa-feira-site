import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.verde};
`;

export const FooterTop = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 32px;
  display: flex;
  justify-content: space-between;
  gap: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-wrap: wrap;
    gap: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 36px;
  }
`;

export const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const FooterTeiaLogo = styled.img`
  height: 50px;
  width: auto;
  margin: -12px 0 0 -30px;
`;

export const FooterBrandText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: rgba(245, 241, 228, 0.45);
  line-height: 1.8;
`;

export const SocialRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const SocialBtn = styled.a`
  width: 36px;
  height: 36px;
  border: 1.5px solid rgba(245, 241, 228, 0.15);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts.body};
  color: rgba(245, 241, 228, 0.4);
  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.terracotaLt};
    color: ${({ theme }) => theme.colors.terracotaLt};
  }
`;

export const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  min-width: 130px;
`;

export const FooterColTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.terracota};
  letter-spacing: 2.5px;
  text-transform: uppercase;
`;

export const FooterColLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const FooterNavLink = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: rgba(245, 241, 228, 0.55);
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.cremeLt};
  }
`;

export const FooterExtLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: rgba(245, 241, 228, 0.55);
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.cremeLt};
  }
`;

export const FooterContactCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  min-width: 180px;
`;

export const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ContactLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.terracotaLt};
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const ContactValue = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: rgba(245, 241, 228, 0.55);
  line-height: 1.6;
`;

export const FooterBottom = styled.div`
  border-top: 1px solid rgba(245, 241, 228, 0.08);
`;

export const FooterBottomInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`;

export const FooterCopy = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: rgba(245, 241, 228, 0.2);
`;

export const FooterLocation = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: rgba(245, 241, 228, 0.25);
  display: flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: "●";
    color: ${({ theme }) => theme.colors.terracota};
    font-size: 8px;
  }
`;
