import styled from 'styled-components';
import { accent, primary } from '../../styles/helpers/variables';

export const NavBarWrapper = styled.div`
  background-color: ${primary};
  img {
    width: 150px;
  }
  a {
    color: ${accent};
  }
`;
NavBarWrapper.displayName = 'NavBarWrapper';
