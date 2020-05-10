/**
 *
 * ExperimentsPage
 *
 */

import React, { memo } from 'react';
import { compose } from 'redux';
// import { FormattedMessage } from 'react-intl';
import { IntroBannerWrapper } from './introBanner-styles';
// import messages from '../messages';

export function IntroBanner() {
  return (
    <IntroBannerWrapper>
      <div>
        <h1>Explorer</h1>
        <p>Text will go here</p>
      </div>
    </IntroBannerWrapper>
  );
}

export default compose(memo)(IntroBanner);
