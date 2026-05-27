import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  padding-top: 60px;
`;

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const HeroSection = styled.section`
  background-color: ${({ theme }) => theme.colors.verde};
  padding: 80px 24px 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const HeroLogo = styled(motion.img)`
  width: clamp(180px, 36vw, 320px);
  height: auto;
  margin-bottom: 8px;
`;

export const HeroEyebrow = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.terracotaLt};
  letter-spacing: 4px;
  text-transform: uppercase;
`;

export const HeroTitle = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-variation-settings:
    "wght" 800,
    "opsz" 72,
    "SOFT" 100,
    "WONK" 1;
  font-size: clamp(28px, 5vw, 52px);
  color: ${({ theme }) => theme.colors.cremeLt};
  line-height: 1.1;
`;

export const HeroSub = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: rgba(245, 241, 228, 0.5);
  line-height: 1.75;
  max-width: 560px;
`;

// ─── Stats ────────────────────────────────────────────────────────────────────

export const StatsStrip = styled.div`
  background-color: ${({ theme }) => theme.colors.terracota};
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StatItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px 36px;
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
  font-size: 30px;
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

export const AboutImageCol = styled(motion.div)`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AboutImageBottom = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: 180px;
`;

export const AboutImg = styled.div<{ $src: string; $tall?: boolean }>`
  background-image: url(${({ $src }) => $src});
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  flex: 1;
  height: ${({ $tall }) => ($tall ? "260px" : "auto")};
  transition: transform ${({ theme }) => theme.transitions.slow};

  &:hover {
    transform: scale(1.02);
  }
`;

export const AboutTextCol = styled(motion.div)`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const SectionTag = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.terracota};
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-variation-settings:
    "wght" 800,
    "opsz" 72,
    "SOFT" 100,
    "WONK" 1;
  font-size: clamp(24px, 3.5vw, 36px);
  color: ${({ theme }) => theme.colors.verde};
  line-height: 1.15;
  margin-bottom: 24px;
`;

export const AboutParagraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.preto};
  opacity: 0.65;
  line-height: 1.85;
  margin-bottom: 16px;
`;

// ─── Quote ────────────────────────────────────────────────────────────────────

export const QuoteSection = styled.section`
  background-color: ${({ theme }) => theme.colors.verde};
  padding: 80px 24px;
`;

export const QuoteInner = styled(motion.div)`
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 28px;
`;

export const QuoteText = styled.blockquote`
  font-family: ${({ theme }) => theme.fonts.display};
  font-variation-settings:
    "wght" 500,
    "opsz" 72,
    "SOFT" 100,
    "WONK" 1;
  font-style: italic;
  font-size: clamp(20px, 3vw, 28px);
  color: ${({ theme }) => theme.colors.cremeLt};
  line-height: 1.5;

  &::before {
    content: '"';
    color: ${({ theme }) => theme.colors.terracotaLt};
    font-size: 1.2em;
  }

  &::after {
    content: '"';
    color: ${({ theme }) => theme.colors.terracotaLt};
    font-size: 1.2em;
  }
`;

// export const QuoteAuthor = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 4px;
// `;

export const QuoteAuthor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`;

export const QuoteAuthorName = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.cremeLt};
`;

export const QuoteAuthorRole = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.terracotaLt};
  letter-spacing: 0.5px;
`;

// ─── Timeline ─────────────────────────────────────────────────────────────────

export const TimelineSection = styled.section`
  background-color: ${({ theme }) => theme.colors.creme};
  padding: 80px 24px;
`;

export const TimelineInner = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const TimelineList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: 40px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 82px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: ${({ theme }) => theme.colors.verdeLt};
    opacity: 0.25;
  }
`;

export const TimelineItem = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  padding-bottom: 48px;
  position: relative;

  &:last-child {
    padding-bottom: 0;
  }
`;

export const TimelineYear = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-variation-settings:
    "wght" 700,
    "opsz" 72,
    "SOFT" 100;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.verde};
  min-width: 52px;
  padding-top: 4px;
  text-align: right;
`;

export const TimelineDot = styled.div<{ $last?: boolean }>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ $last, theme }) =>
    $last ? theme.colors.terracota : theme.colors.verde};
  flex-shrink: 0;
  margin-top: 6px;
  position: relative;
  z-index: 1;

  ${({ $last, theme }) =>
    $last &&
    `
    box-shadow: 0 0 0 4px ${theme.colors.terracotaLt}40;
  `}
`;

export const TimelineContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 2px;
`;

export const TimelineEditionTag = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.terracota};
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const TimelineText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.preto};
  opacity: 0.65;
  line-height: 1.8;
`;

export const TimelineStat = styled.span<{ $highlight?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.display};
  font-variation-settings:
    "wght" 700,
    "opsz" 72,
    "SOFT" 100;
  font-size: 15px;
  color: ${({ $highlight, theme }) =>
    $highlight ? theme.colors.terracota : theme.colors.verde};
  align-self: flex-start;
`;

export const QuoteAvatar = styled.div<{ $src: string }>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: url(${({ $src }) => $src});
  background-size: cover;
  background-position: center top;
  border: 3px solid ${({ theme }) => theme.colors.terracotaLt};
  flex-shrink: 0;
`;
