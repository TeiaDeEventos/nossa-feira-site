import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeroWrapper,
  HeroBgImage,
  HeroContent,
  HeroEyebrow,
  HeroSub,
  CountdownWrapper,
  CountdownUnit,
  CountdownNumber,
  CountdownLabel,
  CountdownSep,
  HeroCtas,
  BtnPrimary,
  BtnSecondary,
  HeroBadges,
  HeroBadge,
  StatsStrip,
  StatItem,
  StatNumber,
  StatLabel,
  AboutSection,
  AboutInner,
  AboutText,
  AboutQuote,
  AboutParagraph,
  // SupportRow,
  // SupportLabel,
  // SupportChip,
  AboutImageGrid,
  AboutImg,
  CategoriesSection,
  CategoriesInner,
  CategoriesGrid,
  CategoryCard,
  CategoryIcon,
  CategoryName,
  // CategoryCount,
  SectionTag,
  SectionTitle,
  ScheduleSection,
  ScheduleInner,
  ScheduleTagLight,
  ScheduleTitleLight,
  DayTabs,
  DayTab,
  ScheduleList,
  ScheduleItem,
  ScheduleTime,
  ScheduleName,
  ScheduleType,
  InfoSection,
  InfoInner,
  InfoGrid,
  InfoBlock,
  InfoIcon,
  InfoLabel,
  InfoValue,
  CtaBand,
  CtaBandTitle,
  CtaBandText,
  CtaBandBtn,
  AboutImgFull,
  AboutImgTopRow,
  HeroLogo,
  ScheduleOverlay,
  OverlayEmoji,
  OverlayTitle,
  OverlayText,
  ScheduleBody,
  // SebraeSection,
  // SebraeInner,
  // SebraeImage,
  // SebraeText,
  // SebraeParagraph,
  // SebraeList,
  // SebraeListItem,
  // SebraeLink,
  FloatingImg,
  LotesSection,
  LotesInner,
  LotesTextCol,
  LotesParagraph,
  LotesTable,
  LoteRow,
  LoteLabel,
  LotePrice,
  LotesDisclaimer,
  LotesCtaBtn,
  LotesImageCol,
} from "./styles";
import { Highlight } from "../../components/NossaHighlight";

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { number: "3ª", label: "Edição" },
  { number: "+100", label: "Expositores" },
  { number: "5", label: "Dias" },
  { number: "Grátis", label: "Entrada" },
];

const CATEGORIES = [
  { icon: "👙", name: "Moda Íntima & Fitness", count: "50+ expositores" },
  { icon: "🍽️", name: "Gastronomia Local", count: "30+ expositores" },
  { icon: "🎨", name: "Arte & Artesanato", count: "40+ expositores" },
  { icon: "👗", name: "Moda Feminina", count: "35+ expositores" },
  { icon: "🧸", name: "Moda Infantil", count: "20+ expositores" },
  { icon: "🏠", name: "Casa & Utilidades", count: "25+ expositores" },
  { icon: "🩱", name: "Moda Praia", count: "20+ expositores" },
  { icon: "💼", name: "Serviços", count: "15+ expositores" },
];

type DayKey = "d1" | "d2" | "d3" | "d4" | "d5";

const DAYS: { key: DayKey; label: string }[] = [
  { key: "d1", label: "Qua 29" },
  { key: "d2", label: "Qui 30" },
  { key: "d3", label: "Sex 31" },
  { key: "d4", label: "Sáb 01" },
  { key: "d5", label: "Dom 02" },
];

const SCHEDULE: Record<DayKey, { time: string; name: string; type: string }[]> =
  {
    d1: [
      {
        time: "Em breve",
        name: "Programação a confirmar",
        type: "Fique ligado!",
      },
      {
        time: "Em breve",
        name: "Programação a confirmar",
        type: "Fique ligado!",
      },
      {
        time: "Em breve",
        name: "Programação a confirmar",
        type: "Fique ligado!",
      },
    ],
    d2: [
      {
        time: "Em breve",
        name: "Programação a confirmar",
        type: "Fique ligado!",
      },
      {
        time: "Em breve",
        name: "Programação a confirmar",
        type: "Fique ligado!",
      },
      {
        time: "Em breve",
        name: "Programação a confirmar",
        type: "Fique ligado!",
      },
    ],
    d3: [
      {
        time: "Em breve",
        name: "Programação a confirmar",
        type: "Fique ligado!",
      },
      {
        time: "Em breve",
        name: "Programação a confirmar",
        type: "Fique ligado!",
      },
      {
        time: "Em breve",
        name: "Programação a confirmar",
        type: "Fique ligado!",
      },
    ],
    d4: [
      {
        time: "Em breve",
        name: "Programação a confirmar",
        type: "Fique ligado!",
      },
      {
        time: "Em breve",
        name: "Programação a confirmar",
        type: "Fique ligado!",
      },
      {
        time: "Em breve",
        name: "Programação a confirmar",
        type: "Fique ligado!",
      },
    ],
    d5: [
      {
        time: "Em breve",
        name: "Programação a confirmar",
        type: "Fique ligado!",
      },
      {
        time: "Em breve",
        name: "Programação a confirmar",
        type: "Fique ligado!",
      },
      {
        time: "Em breve",
        name: "Programação a confirmar",
        type: "Fique ligado!",
      },
    ],
  };

const INFO = [
  { icon: "📅", label: "Data", value: "29 de julho a 02 de agosto de 2026" },
  {
    icon: "📍",
    label: "Local",
    value: "Nova Friburgo Country Clube\nAv. Conselheiro Julius Arp, 140",
  },
  {
    icon: "🕐",
    label: "Horário",
    value: "Qua – Sex: 13h às 22h\nSáb – Dom: 10h às 22h",
  },
  {
    icon: "🎟️",
    label: "Ingresso",
    value: "Entrada gratuita\nnos 5 dias do evento",
  },
];

const ABOUT_IMAGES = [
  "/images/corredor-principal.jpeg",
  "/images/expositores.jpeg",
  "/images/salao-social.jpeg",
];

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// ─── Countdown hook ───────────────────────────────────────────────────────────

function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

// ─── Component ────────────────────────────────────────────────────────────────

function Home() {
  const [activeDay, setActiveDay] = useState<DayKey>("d1");
  const { days, hours, minutes, seconds } = useCountdown(
    new Date("2026-07-29T13:00:00-03:00"),
  );

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <>
      {/* ── Hero ── */}
      <HeroWrapper>
        <HeroBgImage />

        <FloatingImg
          $src={"/images/corredor-principal.jpeg"}
          $top="20%"
          $left="2%"
          $delay="0s"
          $size="130px"
        />
        <FloatingImg
          $src={"/images/atracao-musical.jpeg"}
          $top="70%"
          $left="5%"
          $delay="1.5s"
          $size="150px"
        />
        <FloatingImg
          $src={"/images/stand.jpeg"}
          $top="18%"
          $left="80%"
          $delay="0.8s"
          $size="130px"
        />
        <FloatingImg
          $src={"/images/praca-de-alimentacao.jpeg"}
          $top="68%"
          $left="85%"
          $delay="2.2s"
          $size="160px"
        />

        <HeroContent variants={stagger} initial="hidden" animate="visible">
          <HeroEyebrow variants={fadeUp} custom={0}>
            3ª Edição · Nova Friburgo
          </HeroEyebrow>

          <HeroLogo
            variants={fadeUp}
            custom={0.1}
            src="/logo.svg"
            alt="Nossa Feira"
          />

          <HeroSub variants={fadeUp} custom={0.2}>
            29 de julho a 02 de agosto · Nova Friburgo Country Clube · Entrada
            Gratuita
          </HeroSub>

          <CountdownWrapper variants={fadeUp} custom={0.3}>
            <CountdownUnit>
              <CountdownNumber>{days}</CountdownNumber>
              <CountdownLabel>dias</CountdownLabel>
            </CountdownUnit>
            <CountdownSep>:</CountdownSep>
            <CountdownUnit>
              <CountdownNumber>{pad(hours)}</CountdownNumber>
              <CountdownLabel>horas</CountdownLabel>
            </CountdownUnit>
            <CountdownSep>:</CountdownSep>
            <CountdownUnit>
              <CountdownNumber>{pad(minutes)}</CountdownNumber>
              <CountdownLabel>min</CountdownLabel>
            </CountdownUnit>
            <CountdownSep>:</CountdownSep>
            <CountdownUnit>
              <CountdownNumber>{pad(seconds)}</CountdownNumber>
              <CountdownLabel>seg</CountdownLabel>
            </CountdownUnit>
          </CountdownWrapper>

          <HeroCtas variants={fadeUp} custom={0.4}>
            <BtnPrimary href="#info">Quero Visitar</BtnPrimary>
            <BtnSecondary
              href="https://wa.me/5522988293467"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero Ser Expositor
            </BtnSecondary>
          </HeroCtas>

          <HeroBadges variants={fadeUp} custom={0.5}>
            <HeroBadge>📅 29 jul – 02 ago 2026</HeroBadge>
            <HeroBadge>📍 Nova Friburgo Country Clube</HeroBadge>
            <HeroBadge>🎟️ Entrada gratuita</HeroBadge>
          </HeroBadges>
        </HeroContent>
      </HeroWrapper>

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
          <AboutText
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
          >
            <SectionTag>Sobre o evento</SectionTag>
            <AboutQuote>
              "Porque a feira é <Highlight text="Nossa" />,{"\n"}e é de todos."
            </AboutQuote>
            <AboutParagraph>
              A <Highlight text="Nossa Feira" /> nasceu com uma missão simples:
              celebrar o que é feito aqui. Um espaço onde o empreendedor
              friburguense encontra seu público, onde famílias passam horas
              descobrindo novidades, e onde a cidade inteira vira vitrine.
            </AboutParagraph>
            <AboutParagraph>
              São 5 dias de negócios, cultura, gastronomia e muita música — com
              a cara e o coração de Nova Friburgo.
            </AboutParagraph>
            {/* <SupportRow>
              <SupportLabel>Apoio</SupportLabel>
              {[
                "SEBRAE",
                "FACERJ",
                "UNIMED",
                "SICREDI",
                "FRIONLINE",
                "ACIANF",
              ].map((s) => (
                <SupportChip key={s}>{s}</SupportChip>
              ))}
            </SupportRow> */}
          </AboutText>

          <AboutImageGrid
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <AboutImgTopRow>
              <AboutImg $src={ABOUT_IMAGES[0]} />
              <AboutImg $src={ABOUT_IMAGES[1]} />
            </AboutImgTopRow>
            <AboutImgFull $src={ABOUT_IMAGES[2]} />
          </AboutImageGrid>
        </AboutInner>
      </AboutSection>

    {/* ── Tabela de Valores ── */}
      <LotesSection>
        <LotesInner>
          <LotesTextCol
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionTag>Seja Expositor</SectionTag>
            <SectionTitle
              style={{ color: "var(--verde)" } as React.CSSProperties}
            >
              Garanta seu estande
              <br />
              na Nossa Feira
            </SectionTitle>
            <LotesParagraph>
              Os estandes são vendidos por m², com opções que vão do piso sem
              montagem até estruturas cenográficas completas com mobiliário
              especial e serviços. Escolha o formato ideal para o seu negócio.
            </LotesParagraph>

            <LotesTable>
              <LoteRow $variant="dark">
                <LoteLabel>Piso sem montagem</LoteLabel>
                <LotePrice>M²: R$ 416,00</LotePrice>
              </LoteRow>
              <LoteRow $variant="light">
                <LoteLabel>Estande com montagem básica em octanorme</LoteLabel>
                <LotePrice>M²: R$ 500,00</LotePrice>
              </LoteRow>
              <LoteRow $variant="dark">
                <LoteLabel>
                  Estande com montagem diferenciada em vidro e octanorme
                </LoteLabel>
                <LotePrice>M²: R$ 800,00</LotePrice>
              </LoteRow>
              <LoteRow $variant="light">
                <LoteLabel>Estande com montagem cenográfica + Mobiliário</LoteLabel>
                <LotePrice>M²: R$ 1.000,00</LotePrice>
              </LoteRow>
              <LoteRow $variant="dark">
                <LoteLabel>
                  Estande com montagem cenográfica, mobiliário especial e serviços
                </LoteLabel>
                <LotePrice>M²: R$ 1.200,00</LotePrice>
              </LoteRow>
            </LotesTable>

            <LotesDisclaimer>
              * Outras taxas burocráticas municipais poderão ser somadas ao valor
              total.
            </LotesDisclaimer>

            <LotesCtaBtn
              href="https://wa.me/5522988293467"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Quero garantir meu estande →
            </LotesCtaBtn>
          </LotesTextCol>

          <LotesImageCol
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={"/images/nossa-feira-lotes.jpeg"}
              alt="Tabela de valores por área do estande Nossa Feira 2026"
            />
          </LotesImageCol>
        </LotesInner>
      </LotesSection>

      {/* ── Categories ── */}
      <CategoriesSection>
        <CategoriesInner>
          <SectionTag>O que você encontra</SectionTag>
          <SectionTitle
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ color: "var(--verde)" } as React.CSSProperties}
          >
            Centenas de expositores e{"\n"}o que há de melhor em diversidade na
            <Highlight text=" Nossa" /> cidade
          </SectionTitle>

          <CategoriesGrid
            as={motion.div}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {CATEGORIES.map((cat) => (
              <CategoryCard key={cat.name} variants={itemFade}>
                <CategoryIcon>{cat.icon}</CategoryIcon>
                <CategoryName>{cat.name}</CategoryName>
                {/* <CategoryCount>{cat.count}</CategoryCount> */}
              </CategoryCard>
            ))}
          </CategoriesGrid>
        </CategoriesInner>
      </CategoriesSection>

      {/* ── Schedule ── */}
      <ScheduleSection>
        <ScheduleInner>
          <ScheduleTagLight>Atrações musicais</ScheduleTagLight>
          <ScheduleTitleLight
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Música pra{"\n"}todo mundo!
          </ScheduleTitleLight>
          <DayTabs>
            {DAYS.map((d) => (
              <DayTab
                key={d.key}
                $active={activeDay === d.key}
                onClick={() => setActiveDay(d.key)}
              >
                {d.label}
              </DayTab>
            ))}
          </DayTabs>
          <ScheduleBody>
            <ScheduleOverlay>
              <OverlayEmoji>🎵</OverlayEmoji>
              <OverlayTitle>Em breve!</OverlayTitle>
              <OverlayText>
                A programação completa será divulgada próxima ao evento
              </OverlayText>
            </ScheduleOverlay>
            <AnimatePresence mode="wait">
              <ScheduleList
                key={activeDay}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
              >
                {SCHEDULE[activeDay].map((item, i) => (
                  <ScheduleItem key={i}>
                    <ScheduleTime>{item.time}</ScheduleTime>
                    <div>
                      <ScheduleName>{item.name}</ScheduleName>
                      <ScheduleType>{item.type}</ScheduleType>
                    </div>
                  </ScheduleItem>
                ))}
              </ScheduleList>
            </AnimatePresence>
          </ScheduleBody>
        </ScheduleInner>
      </ScheduleSection>

      {/* ── Info ── */}
      <InfoSection id="info">
        <InfoInner>
          <SectionTag>Como chegar & horários</SectionTag>
          <SectionTitle
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ color: "var(--verde)" } as React.CSSProperties}
          >
            Tudo que você{"\n"}precisa saber
          </SectionTitle>

          <InfoGrid>
            {INFO.map((item, i) => (
              <InfoBlock
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <InfoIcon>{item.icon}</InfoIcon>
                <div>
                  <InfoLabel>{item.label}</InfoLabel>
                  <InfoValue style={{ whiteSpace: "pre-line" }}>
                    {item.value}
                  </InfoValue>
                </div>
              </InfoBlock>
            ))}
          </InfoGrid>
        </InfoInner>
      </InfoSection>

      {/* ── Movimenta SEBRAE ── */}
      {/* <SebraeSection>
        <SebraeInner>
          <SebraeImage
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={"/images/movimenta-sebrae.jpeg"}
              alt="Movimenta SEBRAE na Nossa Feira"
            />
          </SebraeImage>

          <SebraeText
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionTag>Evento Paralelo</SectionTag>
            <SectionTitle style={{ color: "inherit" }}>
              Movimenta SEBRAE
            </SectionTitle>
            <SebraeParagraph>
              Programação especial do SEBRAE Rio dentro da Nossa Feira:
              palestras práticas, atendimento com especialistas, soluções
              financeiras, Empório de empreendedores, Shopping MEI e
              experiências interativas — impressão 3D, drones, produção de
              conteúdo e muito mais.
            </SebraeParagraph>
            <SebraeList>
              <SebraeListItem>
                Totalmente gratuito para quem empreende ou quer começar
              </SebraeListItem>
              <SebraeListItem>
                Conteúdo sobre gestão, vendas, inovação e formalização
              </SebraeListItem>
              <SebraeListItem>
                Conexões reais para impulsionar negócios locais
              </SebraeListItem>
            </SebraeList>
            <SebraeLink
              href="https://sebraerj.com.br/movimenta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Saiba mais →
            </SebraeLink>
          </SebraeText>
        </SebraeInner>
      </SebraeSection> */}

      {/* ── CTA Band ── */}
      <CtaBand>
        <CtaBandTitle
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Quer expor na{"\n"}Nossa Feira?
        </CtaBandTitle>
        <CtaBandText>
          Leve sua marca para milhares de friburguenses.
          <br />
          Vagas limitadas para a edição 2026.
        </CtaBandText>
        <CtaBandBtn
          href="https://wa.me/5522988293467"
          target="_blank"
          rel="noopener noreferrer"
          as={motion.a as React.ElementType}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Garanta seu estande →
        </CtaBandBtn>
      </CtaBand>
    </>
  );
}

export default Home;
