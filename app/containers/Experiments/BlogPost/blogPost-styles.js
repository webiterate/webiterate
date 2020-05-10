import styled from 'styled-components';
import { primary, secondary, accent } from '../../../styles/helpers/variables';

export const ExperimentPageWrapper = styled.div`
  background-color: inherit;
  margin: auto;
  max-width: 1000px;
`;
ExperimentPageWrapper.displayName = 'ExperimentPageWrapper';

export const Topic = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: ${primary};
  margin: 2em 0;
  font-family: 'Exo 2', sans-serif;
`;
Topic.displayName = 'Topic';

export const Title = styled.h2`
  font-size: 2em;
  color: ${primary};
  margin-top: 1.5em;
  margin-left: 1em;
  font-family: 'Overclock', sans-serif;
`;
Title.displayName = 'Title';

export const Subtitle = styled.p`
  font-size: 1.2em;
  color: ${primary};
  margin-left: 0.2em;
  margin-bottom: 0;
  font-family: 'Overclock', sans-serif;
`;
Subtitle.displayName = 'Subtitle';

export const Tagline = styled.h2`
  font-size: 1em;
  color: ${secondary};
  margin-top: 0;
  margin-left: 1.5em;
  font-family: 'Overclock', sans-serif;
  font-style: italic;
`;
Tagline.displayName = 'Tagline';

export const Content = styled.p`
  font-family: 'Open-Sans', sans-serif;
  text-align: justify;
`;
Content.displayName = 'Content';

export const Link = styled.a`
  color: ${accent};

  &:hover {
    color: ${primary};
    text-decoration: none;
  }
`;
Link.displayName = 'Link';
