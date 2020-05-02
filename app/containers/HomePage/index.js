/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import ContentWrapper from 'components/ContentWrapper';
import messages from './messages';

export default function HomePage() {
  return (
    <ContentWrapper>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    </ContentWrapper>
  );
}
