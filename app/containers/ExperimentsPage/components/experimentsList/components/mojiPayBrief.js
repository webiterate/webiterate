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

export function MojiPayBrief(props) {
  return (
    <ExperimentBriefWrapper>
      <div>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events */}
        <h1 onClick={props.togglePaid}>Moji Pay Experiment</h1>
        {props.paid && <p>The description will go here</p>}
      </div>
      <Link to="/experiment/moji_pay">Check it out</Link>
    </ExperimentBriefWrapper>
  );
}

MojiPayBrief.propTypes = {
  togglePaid: PropTypes.bool,
  paid: PropTypes.bool,
};

export default compose(
  memo,
  paidContent,
)(MojiPayBrief);
