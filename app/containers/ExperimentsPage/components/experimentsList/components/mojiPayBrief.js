/**
 *
 * ExperimentsPage
 *
 */

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
// import { FormattedMessage } from 'react-intl';
import { ExperimentBriefWrapper } from '../experiments-styles';
// import messages from '../messages';

export function MojiPayBrief() {
  return (
    <ExperimentBriefWrapper>
      <div>
        <h1>Moji Pay Experiment</h1>
        <p>The description will go here</p>
      </div>
      <Link to="/experiment/moji_pay">Check it out</Link>
    </ExperimentBriefWrapper>
  );
}

export default compose(memo)(MojiPayBrief);