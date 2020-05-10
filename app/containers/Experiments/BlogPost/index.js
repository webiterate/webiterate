/**
 *
 * ExperimentsPage
 *
 */

import React, { memo } from 'react';
import { compose } from 'redux';
// import { FormattedMessage } from 'react-intl';
// import messages from '../messages';

export function BlogPost() {
  return (
    <div>
      <div>
        <h1>Blog Post Experiment</h1>
        <p>The description will go here</p>
      </div>
    </div>
  );
}

export default compose(memo)(BlogPost);
