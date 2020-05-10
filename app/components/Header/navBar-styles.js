import styled from 'styled-components';
import { accent, primary } from '../../styles/helpers/variables';

export const NavBarWrapper = styled.div`
  background-color: ${primary};
  position: fixed;
  width: 100%;
  img {
    width: 150px;
  }
  a {
    color: ${accent} !important;
  }
  .navbar-toggler-icon {
  }
`;
NavBarWrapper.displayName = 'NavBarWrapper';
