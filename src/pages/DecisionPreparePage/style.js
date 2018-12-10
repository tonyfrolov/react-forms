import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default theme => ({
  container: {
    backgroundColor: '#fff',
    padding: `${theme.margin * 1.5}px 100px`,
    width: '70vw',
    minHeight: '88vh',
    borderRadius: 6,
    margin: '0 auto',
  },

  formControls: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minWidth: '100%',
  },
  heading: {
    color: '#002882',
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottom: '1px solid #002882',
    marginBottom: '25px',
  },
  button: {
    width: '50%',
    '&:hover': {
      color: '#fff',
    },
  },
});
