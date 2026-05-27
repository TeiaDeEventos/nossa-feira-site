import type { ReactNode } from "react";

import {
  FooterWrapper,
  FooterTop,
  FooterBrand,
  FooterTeiaLogo,
  FooterBrandText,
  SocialRow,
  SocialBtn,
  FooterCol,
  FooterColTitle,
  FooterColLinks,
  FooterNavLink,
  FooterContactCol,
  ContactItem,
  ContactLabel,
  ContactValue,
  FooterBottom,
  FooterBottomInner,
  FooterCopy,
  FooterLocation,
} from "./styles";

type SocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

import {
  InstagramLogoIcon,
  FacebookLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";

const SOCIAL: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/nossafeiranf",
    icon: <InstagramLogoIcon size={18} />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/nossafeiranf",
    icon: <FacebookLogoIcon size={18} />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5522988293467",
    icon: <WhatsappLogoIcon size={18} />,
  },
];

const NAV_LINKS = [
  { to: "/", label: "Início", onClick: () => window.scrollTo(0, 0) },
  { to: "/nossa-historia", label: "Nossa História" },
  { to: "/expositores", label: "Expositores" },
  { to: "/programacao", label: "Programação" },
];

const CONTACT = [
  { label: "Telefone", value: "(22) 2522-6942" },
  { label: "WhatsApp", value: "(22) 98829-3467" },
  { label: "E-mail", value: "contato@teiadeeventos.com.br" },
  {
    label: "Endereço",
    value:
      "Rua Pastor Meyer, 04 - Casa 04\nCentro - Nova Friburgo/RJ\nCEP: 28625-116",
  },
];

function Footer() {
  return (
    <FooterWrapper>
      <FooterTop>
        <FooterBrand>
          <FooterTeiaLogo src={"/logo.svg"} alt="Teia de Eventos" />
          <FooterBrandText>
            Cinco dias de negócios, cultura, gastronomia e muita música — com a
            cara e o coração de Nova Friburgo.
          </FooterBrandText>
          <SocialRow>
            {SOCIAL.map(({ label, href, icon }) => (
              <SocialBtn
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {icon}
              </SocialBtn>
            ))}
          </SocialRow>
        </FooterBrand>

        <FooterCol>
          <FooterColTitle>Navegação</FooterColTitle>
          <FooterColLinks>
            {NAV_LINKS.map(({ to, label, onClick }) => (
              <FooterNavLink key={to} to={to} onClick={onClick}>
                {label}
              </FooterNavLink>
            ))}
          </FooterColLinks>
        </FooterCol>

        <FooterContactCol>
          <FooterColTitle>Contato</FooterColTitle>
          {CONTACT.map(({ label, value }) => (
            <ContactItem key={label}>
              <ContactLabel>{label}</ContactLabel>
              <ContactValue style={{ whiteSpace: "pre-line" }}>
                {value}
              </ContactValue>
            </ContactItem>
          ))}
        </FooterContactCol>
      </FooterTop>

      <FooterBottom>
        <FooterBottomInner>
          <FooterCopy>
            © 2026 Nossa Feira — Teia de Eventos. Todos os direitos reservados.
          </FooterCopy>
          <FooterLocation>Nova Friburgo, RJ</FooterLocation>
        </FooterBottomInner>
      </FooterBottom>
    </FooterWrapper>
  );
}

export default Footer;
