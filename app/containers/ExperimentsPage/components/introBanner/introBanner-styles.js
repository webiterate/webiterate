import styled from 'styled-components';
// import { Card } from 'reactstrap';
import { primary, accent } from '../../../../styles/helpers/variables';

export const IntroBannerWrapper = styled.div`
  background-color: ${primary};
  width: 100%;
  height: 200px;
  h1,
  p {
    color: ${accent};
  }
`;
IntroBannerWrapper.displayName = 'IntroBannerWrapper';
