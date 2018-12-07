import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;

export default () => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    marginTop: '20px',
  },
  header: {
    marginBottom: '40px',
  },
  heading: {
    color: '#002882',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
