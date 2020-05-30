import styled from 'styled-components';

export const FoodsContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 0;
  margin-top: -140px;

  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
`;

export const Food = styled.div`
  background: ${props => props.theme.colors.backgroundCard};
  border-radius: 8px;
  transition: all 400ms;
  cursor: pointer;
  border: 3px solid ${props => props.theme.colors.backgroundCard};
  /* box-shadow: 2px -2px 36px -4px rgba(0, 0, 0, 0.31); */

  &:hover {
    transform: translateY(-10px);
    border-color: ${props => props.theme.colors.secundary};
    /* box-shadow: 2px 8px 36px -4px rgba(0, 0, 0, 0.31); */
  }

  &:active {
    transform: translateY(0px);
    box-shadow: 2px -2px 36px -4px rgba(0, 0, 0, 0.31);
  }

  header {
    background: #ffb84d;
    border-radius: 4px 4px 0px 0px;
    height: 192px;
    overflow: hidden;
    transition: 0.3s opacity;
    text-align: center;

    img {
      pointer-events: none;
      user-select: none;
    }
  }

  section.body {
    padding: 30px;

    h2 {
      color: ${props => props.theme.colors.text};
    }

    p {
      color: ${props => props.theme.colors.text};

      margin-top: 16px;
    }

    .price {
      font-style: normal;
      font-size: 24px;
      line-height: 34px;
      color: ${props => props.theme.colors.secundaryVariant};

      b {
        font-weight: 600;
      }
    }
  }

  section.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px 30px;
    background: ${props => props.theme.colors.backgroundCard};
    border-radius: 0px 0px 8px 8px;

    div.icon-container {
      display: flex;

      button {
        background: ${props => props.theme.colors.text};
        padding: 10px;
        border-radius: 8px;
        display: flex;
        border: none;
        transition: 0.1s;

        svg {
          color: ${props => props.theme.colors.backgroundCard};
        }

        & + button {
          margin-left: 6px;
        }
      }
    }

    div.availability-container {
      display: flex;
      align-items: center;

      p {
        color: ${props => props.theme.colors.text};
      }

      .switch {
        position: relative;
        display: inline-block;
        width: 88px;
        height: 32px;
        margin-left: 12px;

        & input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: ${props => props.theme.colors.error};
          -webkit-transition: 0.4s;
          transition: 0.4s;
          border-radius: 16px;

          &:before {
            position: absolute;
            content: '';
            height: 20px;
            width: 40px;
            left: 8px;
            bottom: 6px;
            background-color: white;
            -webkit-transition: 0.4s;
            transition: 0.4s;
            border-radius: 10px;
          }
        }

        input:checked + .slider {
          background-color: ${props => props.theme.colors.secundaryVariant};
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #2196f3;
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(32px);
          -ms-transform: translateX(32px);
          transform: translateX(32px);
        }
      }
    }
  }
`;
