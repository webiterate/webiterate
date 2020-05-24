/**
 *
 * ExperimentsPage
 *
 */

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import paidContent from 'components/PaidContent';
// import { FormattedMessage } from 'react-intl';
import { ExperimentBriefWrapper } from '../experiments-styles';
// import messages from '../messages';

export function BlogPostBrief(props) {
  return (
    <ExperimentBriefWrapper>
      <div>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        <h1 onClick={props.togglePaid}>Blog Post Experiment</h1>
        {props.paid && <p>The description will go here</p>}
      </div>
      <Link to="/experiment/blog_post">Check it out</Link>
    </ExperimentBriefWrapper>
  );
}

BlogPostBrief.propTypes = {
  togglePaid: PropTypes.bool,
  paid: PropTypes.bool,
};

export default compose(
  memo,
  paidContent,
)(BlogPostBrief);
