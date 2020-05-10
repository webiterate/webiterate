import styled from 'styled-components';
import { Container } from 'reactstrap';
import breakpoints from 'styles/helpers/breakpoints';
import { bodyBg } from 'styles/helpers/variables';

const ContentWrapper = styled(Container)`
  min-height: calc(100vh - 56px);
  background: ${bodyBg};
  margin: 56px 0 auto;
  padding: 0;

  ${breakpoints.large`
    max-width: 100%;
    min-height:calc(100vh - 56px);
  `};
`;
ContentWrapper.displayName = 'ContentWrapper';

export default ContentWrapper;
