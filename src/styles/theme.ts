export const theme = {
  colors: {
    verde: "#2c4a2e",
    verdeMed: "#3a5c3c",
    verdeLt: "#4e7550",
    creme: "#ede8d9",
    cremeLt: "#f5f1e4",
    terracota: "#c4856a",
    terracotaLt: "#d9a48e",
    preto: "#1a1a1a",
    branco: "#fafaf5",
  },
  fonts: {
    display:
      "'Bricolage Grotesque Variable', 'Helvetica Neue', Arial, sans-serif",
    body: "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
  },
  fontWeights: {
    regular: 400,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
    desktop: "1280px",
  },
  spacing: {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "40px",
    xl: "64px",
    xxl: "96px",
  },
  transitions: {
    fast: "0.15s ease",
    base: "0.25s ease",
    slow: "0.4s ease",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "16px",
    pill: "100px",
  },
} as const;

export type AppTheme = typeof theme;
