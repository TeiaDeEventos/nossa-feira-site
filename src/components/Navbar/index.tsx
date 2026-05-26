import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import {
  Nav,
  NavInner,
  Logo,
  NavLinks,
  StyledNavLink,
  CtaButton,
  HamburgerButton,
  MobileMenu,
  MobileNavLink,
  MobileCta,
  Overlay,
} from "./styles";

const NAV_LINKS = [
  { to: "/nossa-historia", label: "Nossa História" },
  { to: "/expositores", label: "Expositores" },
  { to: "/programacao", label: "Programação" },
];

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.15 } },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCtaClick = () => {
    setMenuOpen(false);
    window.open("https://wa.me/5522988293467", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Nav
        $scrolled={scrolled}
        role="navigation"
        aria-label="Navegação principal"
      >
        <NavInner>
          <Logo to="/" aria-label="Nossa Feira — Página inicial">
            <img src="/logo-mini.svg" alt="Nossa Feira" />
          </Logo>

          <NavLinks>
            {NAV_LINKS.map(({ to, label }) => (
              <StyledNavLink key={to} to={to}>
                {label}
              </StyledNavLink>
            ))}
            <CtaButton onClick={handleCtaClick}>Seja Expositor</CtaButton>
          </NavLinks>

          <HamburgerButton
            $open={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </HamburgerButton>
        </NavInner>
      </Nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <Overlay
              key="overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setMenuOpen(false)}
            />
            <MobileMenu
              key="menu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {NAV_LINKS.map(({ to, label }) => (
                <MobileNavLink
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </MobileNavLink>
              ))}
              <MobileCta onClick={handleCtaClick}>Seja Expositor</MobileCta>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
