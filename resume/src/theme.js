
export const lightTheme = {
  body: '#fdf6f8',
  fontColor: '#333',
  headerBg: 'rgba(255, 255, 255, 0.8)',
  borderColor: '#f8bbd0',
  titleColor: '#d81b60',
  subtitleColor: '#c2185b',
  cardBg: '#ffffff',
  shadow: '0 10px 30px rgba(216, 27, 96, 0.1)',
  highlight: '#fce4ec',
  interactive: '#d81b60',
};

export const darkTheme = {
  body: '#1a1a1a',
  fontColor: '#e0e0e0',
  headerBg: 'rgba(26, 26, 26, 0.8)',
  borderColor: '#bb86fc',
  titleColor: '#bb86fc',
  subtitleColor: '#d186f9',
  cardBg: '#2a2a2a',
  shadow: '0 10px 30px rgba(187, 134, 252, 0.1)',
  highlight: '#3a3a3a',
  interactive: '#bb86fc',
};

export const animations = {
  fadeIn: `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `,
  glow: `
    @keyframes glow {
      0% { box-shadow: 0 0 5px {theme.interactive}; }
      50% { box-shadow: 0 0 20px {theme.interactive}; }
      100% { box-shadow: 0 0 5px {theme.interactive}; }
    }
  `,
};
