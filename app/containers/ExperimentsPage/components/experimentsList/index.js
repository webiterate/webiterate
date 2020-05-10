/**
 *
 * ExperimentsPage
 *
 */

import React, { memo } from 'react';
import { compose } from 'redux';
// import { FormattedMessage } from 'react-intl';
import BlogPostBrief from './components/blogPostBrief';
import MojiPayBrief from './components/mojiPayBrief';
import { ExperimentsWrapper } from './experiments-styles';
// import messages from '../messages';

export function ExperimentsList() {
  return (
    <ExperimentsWrapper>
      <div>
        <h1>Experiments</h1>
        <p>Experiments will go here</p>
      </div>
      <BlogPostBrief />
      <MojiPayBrief />
      <div>More experiments coming...</div>
    </ExperimentsWrapper>
  );
}

export default compose(memo)(ExperimentsList);
