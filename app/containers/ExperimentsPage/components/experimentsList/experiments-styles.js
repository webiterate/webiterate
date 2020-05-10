import styled from 'styled-components';
import { Card } from 'reactstrap';

export const ExperimentsWrapper = styled.div`
  background-color: inherit;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  max-width: 1000px;
`;
ExperimentsWrapper.displayName = 'ExperimentsWrapper';

export const ExperimentBriefWrapper = styled(Card)`
  width: 100%;
  margin-bottom: 20px;
`;
ExperimentBriefWrapper.displayName = 'ExperimentBriefWrapper';
