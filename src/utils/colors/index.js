const mainColors = {
  dark1: '#030303',
  dark2: '#3d3c3c',
  dark3: 'rgba(0, 0, 0, 0.5)',
  white1: '#F5E8E4',
  white2: '',
  border1: '#F5E8E4',
  border2: '#F5C7A9',
  primary1: '#0B5ED8',
};

export const colors = {
  dark: mainColors.dark1,
  secondary: mainColors.dark2,
  text: {
    default: mainColors.white1,
    secondary: mainColors.white2,
  },
  border: {
    default: mainColors.border1,
    secondary: mainColors.border2,
  },
  button: {
    primary: {
      background: '#D1512D',
      text: '#F5E8E4',
    },
    secondary: {
      background: 'black',
      text: 'white',
    },
  },
  loading: {
    background: mainColors.dark3,
    logo: mainColors.primary1,
  },
};
