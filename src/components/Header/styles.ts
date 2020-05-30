import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.primary};
  padding: 30px 0;

  header {
    width: 1280px;
    margin: 0 auto;
    padding: 0 0 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      div {
        button {
          font-weight: 500;
          border-radius: 8px;
          border: 0;
          background: ${props => props.theme.colors.secundary};
          color: ${props => props.theme.colors.text};

          display: flex;
          flex-direction: row;
          align-items: center;

          .text {
            padding: 16px 15px;
          }

          .icon {
            display: flex;
            padding: 16px 16px;
            background: ${props => props.theme.colors.secundary};
            border-radius: 0 8px 8px 0;
            margin: 0 auto;
          }
        }
      }
    }
  }
`;
