/*
 * WhatIsIit
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import H1 from 'components/H1';
import { FormattedMessage } from 'react-intl';
import { WhatIsItWrapper } from './whatIsIt-styles';
import messages from '../../messages';
import { logoWithText } from '../../../App/constants';

export function WhatIsIit() {
  return (
    <WhatIsItWrapper>
      <img src={logoWithText} alt="Webiterate logo" />
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    </WhatIsItWrapper>
  );
}

export default WhatIsIit;
