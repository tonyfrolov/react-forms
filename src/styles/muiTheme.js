export default {
  direction: 'ltr',
  palette: {
    primary: {
      light: '#33539b',
      main: '#002884',
      dark: '#001e6c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#33539b',
      main: '#002884',
      dark: '#001e6c',
      contrastText: '#fff',
    },
    error: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  margin: 15,
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    display4: {
      fontSize: '7rem',
      fontWeight: 300,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      letterSpacing: '-.04em',
      lineHeight: '1.14286em',
      marginLeft: '-.06em',
      color: 'rgba(0, 0, 0, 0.54)',
    },
    display3: {
      fontSize: '3.5rem',
      fontWeight: 400,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      letterSpacing: '-.02em',
      lineHeight: '1.30357em',
      marginLeft: '-.04em',
      color: 'rgba(0, 0, 0, 0.54)',
    },
    display2: {
      fontSize: '2.8125rem',
      fontWeight: 400,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '1.06667em',
      marginLeft: '-.04em',
      color: 'rgba(0, 0, 0, 0.54)',
    },
    display1: {
      fontSize: '2.125rem',
      fontWeight: 400,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '1.20588em',
      marginLeft: '-.04em',
      color: 'rgba(0, 0, 0, 0.54)',
    },
    headline: {
      fontSize: '1.5rem',
      fontWeight: 400,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '1.35417em',
      color: 'rgba(0, 0, 0, 0.87)',
    },
    title: {
      fontSize: '1.3125rem',
      fontWeight: 500,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '1.16667em',
      color: 'rgba(0, 0, 0, 0.87)',
    },
    subheading: {
      fontSize: '1rem',
      fontWeight: 400,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '1.5em',
      color: 'rgba(0, 0, 0, 0.87)',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '1.71429em',
      color: 'rgba(0, 0, 0, 0.87)',
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '1.46429em',
      color: 'rgba(0, 0, 0, 0.87)',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '1.375em',
      color: 'rgba(0, 0, 0, 0.54)',
    },
    button: {
      fontSize: 14,
      textTransform: 'uppercase',
      fontWeight: 500,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
  },
  overrides: {
    MuiFormControl: {
      root: {
        backgroundColor: '#fff',
        '&:hover': {
          backgroundColor: '#fff',
        },
        '&:focus': {
          backgroundColor: '#fff',
        },
        '&:active': {
          backgroundColor: '#fff',
        },
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: '#fff',
        '&:hover': {
          backgroundColor: '#fff',
        },
        '&:focus': {
          backgroundColor: '#fff',
        },
        '&:active': {
          backgroundColor: '#fff',
        },
      },
      underline: {},
    },
    MuiInput: {
      root: {},
      input: {},
      underline: {
        '&:after': {
          borderBottom: '0',
        },
      },
    },
    MuiSelect: {
      root: {},
      select: {},
    },
    MuiInputBase: {
      input: {
        borderRadius: 4,
        backgroundColor: '#fff',
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 12px',
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
          borderColor: '#0350ff',
          boxShadow: '0 0 0 0.2rem #dff6ff',
        },
      },
      underline: {},
    },
    MuiButton: {
      // Name of the component ⚛️ / style sheet
      root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        color: '#fff',
        padding: '6px 12px',
        border: '1px solid',
        backgroundColor: '#002882',
        borderColor: '#002882',
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
          backgroundColor: '#040c80',
          borderColor: '#040c80',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#040c80',
          borderColor: '#040c80',
        },
        '&:focus': {
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
      },
    },
  },
  props: {
    // Name of the component ⚛️
    // disableUnderline: false,
    MuiInput: {
      disableUnderline: false,
    },
    MuiSelect: {
      disableUnderline: false,
    },
    MuiInputBase: {
      disableUnderline: false,
    },
    MuiFilledInput: {
      disableUnderline: false,
    },
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
};
