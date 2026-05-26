import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.verde};
  height: 60px;
  transition:
    box-shadow ${({ theme }) => theme.transitions.base},
    background-color ${({ theme }) => theme.transitions.base};

  ${({ $scrolled, theme }) =>
    $scrolled &&
    css`
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.25);
      background-color: ${theme.colors.verdeMed};
    `}
`;

export const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  transition: opacity ${({ theme }) => theme.transitions.fast};

  img {
    height: 50px;
    width: auto;
    display: block;
  }

  &:hover {
    opacity: 0.85;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: rgba(245, 241, 228, 0.65);
  letter-spacing: 0.3px;
  transition: color ${({ theme }) => theme.transitions.fast};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.terracota};
    transition: width ${({ theme }) => theme.transitions.base};
  }

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.cremeLt};

    &::after {
      width: 100%;
    }
  }
`;

export const CtaButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.branco};
  background-color: ${({ theme }) => theme.colors.terracota};
  padding: 7px 18px;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  letter-spacing: 0.3px;
  transition:
    background-color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.terracotaLt};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const HamburgerButton = styled.button<{ $open: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  padding: 4px;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.cremeLt};
    border-radius: 2px;
    transition:
      transform ${({ theme }) => theme.transitions.base},
      opacity ${({ theme }) => theme.transitions.fast};
    transform-origin: center;
  }

  ${({ $open }) =>
    $open &&
    css`
      span:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
        transform: scaleX(0);
      }
      span:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
  }
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 98;
`;

export const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.verdeMed};
  z-index: 99;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

export const MobileNavLink = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: rgba(245, 241, 228, 0.75);
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.cremeLt};
  }
`;

export const MobileCta = styled.button`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.branco};
  background-color: ${({ theme }) => theme.colors.terracota};
  padding: 13px;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  margin-top: 16px;
  transition: background-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.terracotaLt};
  }
`;
