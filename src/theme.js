const theme = {
  colors: {
    background: '#FAF8F3',
    bandBackground: '#F1EBDD',
    surface: '#FFFFFF',
    ink: '#1A1A18',
    inkSoft: '#3D3B34',
    gray: '#6B675E',
    grayLight: '#8C8778',
    grayLine: '#D9D2C1',
    border: 'rgba(26, 26, 24, 0.09)',
    accent: '#1F4D3A',
    accentSoft: 'rgba(31, 77, 58, 0.08)',
    accentGold: '#A9792C',
    // Legacy aliases kept during the redesign so any not-yet-touched
    // component still resolves a color rather than rendering blank.
    accentBlue: '#1F4D3A',
    accentOrange: '#A9792C',
  },
  fonts: {
    display: "'Fraunces', 'Iowan Old Style', Georgia, serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
  },
  radii: {
    pill: '980px',
    card: '10px',
  },
  spacing: {
    xs: '0.5rem',
    sm: '0.85rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
  },
  breakpoints: {
    mobile: '600px',
    tablet: '780px',
  },
};

export default theme;
