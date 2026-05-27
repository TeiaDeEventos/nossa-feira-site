import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

// ─── Shared ───────────────────────────────────────────────────────────────────

export const SectionTag = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.terracota};
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

export const SectionTitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-variation-settings:
    "wght" 800,
    "opsz" 72,
    "SOFT" 100,
    "WONK" 1;
  font-size: clamp(28px, 4vw, 40px);
  line-height: 1.1;
  margin-bottom: 20px;
`;

// ─── Hero ─────────────────────────────────────────────────────────────────────

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
`;

const grain = keyframes`
  0%, 100% { transform: translate(0, 0); }
  10%       { transform: translate(-2%, -3%); }
  30%       { transform: translate(3%, 2%); }
  50%       { transform: translate(-1%, 4%); }
  70%       { transform: translate(2%, -2%); }
  90%       { transform: translate(-3%, 1%); }
`;

export const HeroWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.verde};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 24px 64px;
  overflow: hidden;
  text-align: center;
`;

export const HeroBgImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url("/images/palco.jpeg");
  background-size: cover;
  background-position: center;
  opacity: 0.12;
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    animation: ${grain} 4s steps(1) infinite;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
    opacity: 0.4;
  }
`;

export const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 1;
  max-width: 700px;
  width: 100%;
`;

export const HeroEyebrow = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.terracotaLt};
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const HeroLogo = styled(motion.img)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  margin-bottom: 12px;
`;

export const HeroSub = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: rgba(245, 241, 228, 0.5);
  margin-bottom: 40px;
  letter-spacing: 0.5px;
`;

// ─── Countdown ────────────────────────────────────────────────────────────────

export const CountdownWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

export const CountdownUnit = styled.div`
  text-align: center;
  background: rgba(237, 232, 217, 0.08);
  border: 1px solid rgba(237, 232, 217, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 14px 18px;
  width: 90px;
  backdrop-filter: blur(8px);
`;

export const CountdownNumber = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-variation-settings:
    "wght" 800,
    "opsz" 72,
    "SOFT" 100,
    "WONK" 0;
  font-size: 42px;
  color: ${({ theme }) => theme.colors.creme};
  line-height: 1;
  display: block;
`;

export const CountdownLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 9px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.terracotaLt};
  letter-spacing: 2.5px;
  text-transform: uppercase;
  margin-top: 4px;
  display: block;
`;

export const CountdownSep = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.terracotaLt};
  opacity: 0.35;
  padding-bottom: 14px;
  align-self: center;

  @media (max-width: 540px) {
    display: none;
  }
`;

// ─── Hero CTAs & Badges ───────────────────────────────────────────────────────

export const HeroCtas = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 36px;
  flex-wrap: wrap;
`;

export const BtnPrimary = styled.a`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.branco};
  background-color: ${({ theme }) => theme.colors.terracota};
  padding: 14px 30px;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  cursor: pointer;
  transition:
    background-color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.terracotaLt};
    transform: translateY(-2px);
  }
`;

export const BtnSecondary = styled.a`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.cremeLt};
  background: transparent;
  border: 2px solid rgba(245, 241, 228, 0.25);
  padding: 12px 30px;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  cursor: pointer;
  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: rgba(245, 241, 228, 0.5);
    transform: translateY(-2px);
  }
`;

export const HeroBadges = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
`;

export const HeroBadge = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: rgba(245, 241, 228, 0.45);
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const FloatingImg = styled.div<{
  $src: string;
  $top: string;
  $left: string;
  $delay: string;
  $size?: string;
}>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: ${({ $size }) => $size || "160px"};
  aspect-ratio: 1;
  border-radius: 50%;
  background-image: url(${({ $src }) => $src});
  background-size: cover;
  background-position: center;
  opacity: 0.18;
  animation: ${float} 7s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay};
  z-index: 0;
  pointer-events: none;
`;

// ─── Stats Strip ────────────────────────────────────────────────────────────── //

export const StatsStrip = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.terracota};
`;

export const StatItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 18px 36px;
  border-right: 1px solid rgba(255, 255, 255, 0.18);

  &:last-child {
    border-right: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex: 0 0 50%;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);

    &:nth-child(odd) {
      border-right: 1px solid rgba(255, 255, 255, 0.12);
    }
  }
`;

export const StatNumber = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-variation-settings:
    "wght" 800,
    "opsz" 72,
    "SOFT" 100;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.branco};
  display: block;
  line-height: 1;
`;

export const StatLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: rgba(255, 255, 255, 0.65);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-top: 4px;
  display: block;
`;

// ─── About ────────────────────────────────────────────────────────────────────

export const AboutSection = styled.section`
  background-color: ${({ theme }) => theme.colors.cremeLt};
  padding: 80px 24px;
`;

export const AboutInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const AboutText = styled(motion.div)`
  flex: 1;
  min-width: 0;
`;

export const AboutQuote = styled.blockquote`
  font-family: ${({ theme }) => theme.fonts.display};
  font-variation-settings:
    "wght" 500,
    "opsz" 72,
    "SOFT" 100,
    "WONK" 1;
  font-size: clamp(20px, 3vw, 26px);
  font-style: italic;
  color: ${({ theme }) => theme.colors.verde};
  line-height: 1.4;
  border-left: 4px solid ${({ theme }) => theme.colors.terracota};
  padding-left: 20px;
  margin-bottom: 20px;
`;

export const AboutParagraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.preto};
  opacity: 0.65;
  line-height: 1.85;
  margin-bottom: 28px;
`;

export const SupportRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const SupportLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.terracota};
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const SupportChip = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.verdeLt};
  border: 1.5px solid rgba(44, 74, 46, 0.2);
  padding: 4px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  letter-spacing: 0.5px;
`;

export const AboutImageGrid = styled(motion.div)`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
`;

export const AboutImgTopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 10px;
  height: 200px;
`;

export const AboutImg = styled.div<{ $src: string }>`
  background-image: url(${({ $src }) => $src});
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  flex: 1;
  transition: transform ${({ theme }) => theme.transitions.slow};

  &:hover {
    transform: scale(1.03);
  }
`;

export const AboutImgFull = styled.div<{ $src: string }>`
  background-image: url(${({ $src }) => $src});
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  height: 200px;
  width: 100%;
  transition: transform ${({ theme }) => theme.transitions.slow};

  &:hover {
    transform: scale(1.03);
  }
`;

// ─── Categories ───────────────────────────────────────────────────────────────

export const CategoriesSection = styled.section`
  background-color: ${({ theme }) => theme.colors.cremeLt};
  padding: 80px 24px;
`;

export const CategoriesInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const CategoriesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 12px;
  margin-top: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

export const CategoryCard = styled(motion.div)`
  width: 140px;
  height: 130px;
  background-color: ${({ theme }) => theme.colors.cremeLt};
  border: 1.5px solid rgba(44, 74, 46, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 20px 16px;
  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};
  cursor: default;

  &:hover {
    border-color: ${({ theme }) => theme.colors.verdeLt};
    box-shadow: 0 4px 20px rgba(44, 74, 46, 0.1);
  }
`;

export const CategoryIcon = styled.div`
  width: 38px;
  height: 38px;
  background-color: ${({ theme }) => theme.colors.verde};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  margin-bottom: 12px;
`;

export const CategoryName = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.verde};
  line-height: 1.35;
  margin-bottom: 4px;
`;

export const CategoryCount = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.terracota};
`;

// ─── Schedule ─────────────────────────────────────────────────────────────────

export const ScheduleSection = styled.section`
  background-color: ${({ theme }) => theme.colors.verde};
  padding: 80px 24px;
`;

export const ScheduleInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const ScheduleBody = styled.div`
  position: relative;
`;

export const ScheduleTagLight = styled(SectionTag)`
  color: ${({ theme }) => theme.colors.terracotaLt};
`;

export const ScheduleTitleLight = styled(SectionTitle)`
  color: ${({ theme }) => theme.colors.cremeLt};
`;

export const DayTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

export const DayTab = styled.button<{ $active: boolean }>`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: 7px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  border: 1.5px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.terracota : "rgba(245, 241, 228, 0.2)"};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.terracota : "transparent"};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.branco : "rgba(245, 241, 228, 0.55)"};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.terracota};
    color: ${({ theme }) => theme.colors.branco};
  }
`;

export const ScheduleList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ScheduleItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
  padding: 14px 16px;
  background: rgba(245, 241, 228, 0.06);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border-left: 3px solid ${({ theme }) => theme.colors.terracota};
`;

export const ScheduleTime = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.terracotaLt};
  min-width: 46px;
  margin-top: 2px;
  letter-spacing: 0.5px;
`;

export const ScheduleName = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.cremeLt};
  line-height: 1.4;
`;

export const ScheduleType = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.verdeLt};
  margin-top: 4px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;

// ─── Info ─────────────────────────────────────────────────────────────────────

export const InfoSection = styled.section`
  background-color: ${({ theme }) => theme.colors.cremeLt};
  padding: 80px 24px;
`;

export const InfoInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const InfoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 28px;
  margin-top: 32px;
`;

export const InfoBlock = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
  flex: 0 0 calc(50% - 14px);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex: 0 0 100%;
  }
`;

export const InfoIcon = styled.div`
  width: 44px;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.verde};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
`;

export const InfoLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.terracota};
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 6px;
`;

export const InfoValue = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.preto};
  opacity: 0.7;
  line-height: 1.65;
`;

// ─── CTA Band ─────────────────────────────────────────────────────────────────

export const CtaBand = styled.section`
  background-color: ${({ theme }) => theme.colors.terracota};
  padding: 80px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const CtaBandTitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-variation-settings:
    "wght" 800,
    "opsz" 72,
    "SOFT" 100,
    "WONK" 1;
  font-size: clamp(28px, 5vw, 40px);
  color: ${({ theme }) => theme.colors.branco};
  line-height: 1.15;
  margin-bottom: 12px;
`;

export const CtaBandText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: rgba(250, 250, 245, 0.7);
  line-height: 1.75;
  margin-bottom: 32px;
`;

export const CtaBandBtn = styled(motion.a)`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.cremeLt};
  background-color: ${({ theme }) => theme.colors.verde};
  padding: 14px 36px;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  cursor: pointer;
  transition:
    background-color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.verdeMed};
    transform: translateY(-2px);
  }
`;

export const ScheduleOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(28, 46, 30, 0.82);
  backdrop-filter: blur(3px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  z-index: 2;
`;

export const OverlayEmoji = styled.span`
  font-size: 40px;
`;

export const OverlayTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-variation-settings:
    "wght" 700,
    "opsz" 72,
    "SOFT" 100;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.cremeLt};
`;

export const OverlayText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: rgba(245, 241, 228, 0.5);
  letter-spacing: 0.5px;
`;

// ─── Movimenta SEBRAE ─────────────────────────────────────────────────────────

export const SebraeSection = styled.section`
  background-color: ${({ theme }) => theme.colors.cremeLt};
  padding: 80px 24px;
`;

export const SebraeInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 36px;
  }
`;

export const SebraeImage = styled(motion.div)`
  flex: 1;
  min-width: 0;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  height: 380px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    transition: transform ${({ theme }) => theme.transitions.slow};

    &:hover {
      transform: scale(1.03);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    height: 260px;
  }
`;

export const SebraeText = styled(motion.div)`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const SebraeParagraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.preto};
  opacity: 0.65;
  line-height: 1.85;
  margin-bottom: 20px;
`;

export const SebraeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 28px;
  padding-left: 0;
  list-style: none;
`;

export const SebraeListItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.preto};
  opacity: 0.7;
  line-height: 1.6;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.terracota};
    flex-shrink: 0;
    margin-top: 7px;
  }
`;

export const SebraeLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.verde};
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color ${({ theme }) => theme.transitions.fast};
  align-self: flex-start;

  &:hover {
    color: ${({ theme }) => theme.colors.verdeLt};
  }
`;

// ─── Lotes ────────────────────────────────────────────────────────────────────

export const LotesSection = styled.section`
  background-color: ${({ theme }) => theme.colors.creme};
  padding: 80px 24px;
`;

export const LotesInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const LotesTextCol = styled(motion.div)`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const LotesParagraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.preto};
  opacity: 0.65;
  line-height: 1.85;
  margin-bottom: 28px;
`;

export const LotesTable = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  border: 1.5px solid rgba(44, 74, 46, 0.12);
`;

export const LoteRow = styled.div<{ $active?: boolean; $disabled?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(44, 74, 46, 0.08);
  background-color: ${({ $active, $disabled, theme }) =>
    $active
      ? `${theme.colors.verdeLt}22`
      : $disabled
        ? "rgba(0,0,0,0.03)"
        : theme.colors.cremeLt};

  &:last-child {
    border-bottom: none;
  }
`;

export const LoteLabel = styled.span<{
  $active?: boolean;
  $disabled?: boolean;
}>`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ $disabled, theme }) =>
    $disabled ? "rgba(26,26,26,0.3)" : theme.colors.verde};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const LoteStatus = styled.span<{ $active?: boolean }>`
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts.body};
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.verde : "rgba(26,26,26,0.08)"};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.cremeLt : "rgba(26,26,26,0.35)"};
`;

export const LotePrice = styled.span<{
  $active?: boolean;
  $disabled?: boolean;
}>`
  font-family: ${({ theme }) => theme.fonts.display};
  font-variation-settings:
    "wght" 700,
    "opsz" 72,
    "SOFT" 100;
  font-size: 16px;
  color: ${({ $disabled, $active, theme }) =>
    $disabled
      ? "rgba(26,26,26,0.25)"
      : $active
        ? theme.colors.verde
        : theme.colors.preto};
`;

export const LotesDisclaimer = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: rgba(26, 26, 26, 0.4);
  margin-top: 12px;
  line-height: 1.6;
`;

export const LotesCtaBtn = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.branco};
  background-color: ${({ theme }) => theme.colors.terracota};
  padding: 14px 28px;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  margin-top: 24px;
  align-self: flex-start;
  cursor: pointer;
  transition:
    background-color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.terracotaLt};
    transform: translateY(-2px);
  }
`;

export const LotesImageCol = styled(motion.div)`
  flex: 0 0 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: 0 12px 48px rgba(44, 74, 46, 0.15);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex: 0 0 auto;
    width: 100%;
    max-width: 340px;
  }
`;
