import { motion } from "framer-motion";
import React, { memo } from "react";

import {
  Wrapper,
  HeroSection,
  HeroLogo,
  HeroEyebrow,
  HeroTitle,
  HeroSub,
  TimelineSection,
  TimelineInner,
  SectionTag,
  SectionTitle,
  TimelineList,
  TimelineItem,
  TimelineYear,
  TimelineDot,
  TimelineContent,
  TimelineEditionTag,
  TimelineText,
  TimelineStat,
  QuoteSection,
  QuoteInner,
  QuoteText,
  QuoteAuthor,
  QuoteAuthorName,
  QuoteAuthorRole,
  AboutSection,
  AboutInner,
  AboutImageCol,
  AboutImg,
  AboutImageBottom,
  AboutTextCol,
  AboutParagraph,
  StatsStrip,
  StatItem,
  StatNumber,
  StatLabel,
  QuoteAvatar,
} from "./styles";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const TIMELINE = [
  {
    year: "2024",
    edition: "1ª Edição",
    text: "A Nossa Feira nasce com o desejo de criar um evento acessível, autêntico e com impacto real sobre Nova Friburgo. No NF Country Clube, a cidade abraça a ideia e supera todas as expectativas.",
    stat: "28 mil visitantes",
  },
  {
    year: "2025",
    edition: "2ª Edição",
    text: "Voltamos ainda mais preparados. Com uma programação ampliada, mais expositores e atrações musicais, a segunda edição consolida a Nossa Feira como o maior evento de varejo e cultura de Nova Friburgo.",
    stat: null,
  },
  {
    year: "2026",
    edition: "3ª Edição",
    text: "De 4 a 8 de setembro, a Nossa Feira chega à sua terceira edição com entrada gratuita e tudo o que a cidade tem de melhor. Mais expositores, mais música, mais Friburgo.",
    stat: "Em breve",
  },
];

const STATS = [
  { number: "28 mil", label: "Visitantes na 1ª edição" },
  { number: "3", label: "Edições realizadas" },
  { number: "200+", label: "Expositores" },
  { number: "5", label: "Dias de evento" },
];

const NossaHistoria: React.FC = () => {
  return (
    <Wrapper>
      {/* ── Hero ── */}
      <HeroSection>
        <motion.div
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <HeroLogo
            variants={fadeUp}
            custom={0}
            src={"/logo.svg"}
            alt="Nossa Feira"
          />
          <HeroEyebrow variants={fadeUp} custom={0.1}>
            Nossa História
          </HeroEyebrow>
          <HeroTitle variants={fadeUp} custom={0.2}>
            Nascido em Friburgo,
            <br />
            feito para todos
          </HeroTitle>
          <HeroSub variants={fadeUp} custom={0.3}>
            Nascida em 2024, a Nossa Feira é o encontro de tudo o que a cidade
            <br />
            tem de melhor — em negócios, cultura, gastronomia e música.
          </HeroSub>
        </motion.div>
      </HeroSection>

      {/* ── Stats ── */}
      <StatsStrip>
        {STATS.map((s, i) => (
          <StatItem
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <StatNumber>{s.number}</StatNumber>
            <StatLabel>{s.label}</StatLabel>
          </StatItem>
        ))}
      </StatsStrip>

      {/* ── About ── */}
      <AboutSection>
        <AboutInner>
          <AboutImageCol
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <AboutImg $src={"/images/visitantes.jpeg"} $tall />
            <AboutImageBottom>
              <AboutImg $src={"/images/coral.jpeg"} />
              <AboutImg $src={"/images/equipe.jpeg"} />
            </AboutImageBottom>
          </AboutImageCol>

          <AboutTextCol
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionTag>Sobre o evento</SectionTag>
            <SectionTitle>Da ideia à maior feira de Nova Friburgo</SectionTitle>
            <AboutParagraph>
              A Nossa Feira foi idealizada a partir do desejo de criar um evento
              acessível, autêntico e com impacto real sobre Nova Friburgo. Em
              sua primeira edição em 2024, o evento surpreendeu ao levar
              milhares de pessoas ao Nova Friburgo Country Clube.
            </AboutParagraph>
            <AboutParagraph>
              Unimos tudo o que a cidade oferece em um evento único e completo,
              com os mais variados segmentos: moda, beleza, decoração,
              artesanato, utilidades e muito mais.
            </AboutParagraph>
            <AboutParagraph>
              Venha se surpreender. Participe da Nossa Feira!
            </AboutParagraph>
          </AboutTextCol>
        </AboutInner>
      </AboutSection>

      {/* ── Quote ── */}
      <QuoteSection>
        <QuoteInner
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <QuoteText>
            Ver a cidade abraçar essa ideia na primeira edição foi emocionante —
            e agora voltamos ainda mais preparados, com uma programação pensada
            para fortalecer quem acredita em Friburgo.
          </QuoteText>
          <QuoteAuthor>
            <QuoteAvatar $src={"/images/edson.jpg"} />
            <div>
              <QuoteAuthorName>Edson Almeida · Biá</QuoteAuthorName>
              <QuoteAuthorRole>Idealizador da Nossa Feira</QuoteAuthorRole>
            </div>
          </QuoteAuthor>
        </QuoteInner>
      </QuoteSection>

      {/* ── Timeline ── */}
      <TimelineSection>
        <TimelineInner>
          <SectionTag>Linha do tempo</SectionTag>
          <SectionTitle style={{ color: "var(--verde-styled)" }}>
            De edição em edição,
            <br />
            crescendo com a cidade
          </SectionTitle>

          <TimelineList>
            {TIMELINE.map((item, i) => (
              <TimelineItem
                key={item.year}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <TimelineYear>{item.year}</TimelineYear>
                <TimelineDot $last={i === TIMELINE.length - 1} />
                <TimelineContent>
                  <TimelineEditionTag>{item.edition}</TimelineEditionTag>
                  <TimelineText>{item.text}</TimelineText>
                  {item.stat && (
                    <TimelineStat $highlight={item.stat === "Em breve"}>
                      {item.stat}
                    </TimelineStat>
                  )}
                </TimelineContent>
              </TimelineItem>
            ))}
          </TimelineList>
        </TimelineInner>
      </TimelineSection>
    </Wrapper>
  );
};

export default memo(NossaHistoria);
