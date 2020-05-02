import styled from 'styled-components';
import { Container } from 'reactstrap';
import breakpoints from 'styles/helpers/breakpoints';
import { white } from 'styles/helpers/variables';

const ContentWrapper = styled(Container)`
  min-height: calc(100vh - 135px);
  background: ${white};
  margin: 0 auto;
  padding: 0;

  ${breakpoints.large`
    max-width:1170px;
    min-height:calc(100vh - 132px);
  `};
`;
ContentWrapper.displayName = 'ContentWrapper';

export default ContentWrapper;
