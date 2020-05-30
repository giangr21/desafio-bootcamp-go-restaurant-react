import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { FiPlusSquare } from 'react-icons/fi';
import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface IHeaderProps {
  openModal: () => void;
  toggleTheme: () => void;
}

const Header: React.FC<IHeaderProps> = ({ openModal, toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <Container>
      <header>
        <img src={Logo} alt="GoRestaurant" />
        <div style={{ marginLeft: 'auto', paddingRight: 10 }}>
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            height={10}
            width={40}
            handleDiameter={20}
            onColor={colors.secundary}
            offColor={colors.secundary}
          />
        </div>
        <nav>
          <div>
            <button type="button" onClick={openModal}>
              <div className="text">Novo Prato</div>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
