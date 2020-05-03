/**
 *
 * JourneyPage
 *
 */

import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectJourneyPage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import * as constants from './constants';

export function JourneyPage() {
  useInjectReducer({ key: 'journeyPage', reducer });
  useInjectSaga({ key: 'journeyPage', saga });
  const [pages, setPages] = useState({
    homeSection: '',
    brandSection: '',
  });

  useEffect(() => {
    const pageEndpoints = Object.keys(constants.GITHUB_HH_API.ENDPOINTS);
    const pagePromises = pageEndpoints.map(pageName =>
      axios.get(
        constants.GITHUB_HH_API.URL +
          constants.GITHUB_HH_API.ENDPOINTS[pageName],
      ),
    );

    const parseMarkdownComponent = base64Data => {
      const markdownContent = atob(base64Data);
      return <ReactMarkdown source={markdownContent} escapeHtml={false} />;
    };

    Promise.all(pagePromises).then(respArr => {
      const pageData = {
        homeSection: '',
        brandSection: '',
      };
      respArr.forEach(resp => {
        if (resp.data.name.toLowerCase().includes('home')) {
          pageData.homeSection = parseMarkdownComponent(resp.data.content);
        } else if (resp.data.name.toLowerCase().includes('brand')) {
          pageData.brandSection = parseMarkdownComponent(resp.data.content);
        }
      });
      setPages(pageData);
    });
  });

  const { homeSection, brandSection } = pages;

  return (
    <div>
      <Helmet>
        <title>JourneyPage</title>
        <meta name="description" content="Description of JourneyPage" />
      </Helmet>
      <h1>About Us</h1>
      {homeSection}
      <h1>Brand</h1>
      {brandSection}
      {/* <FormattedMessage {...messages.header} /> */}
    </div>
  );
}

JourneyPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  journeyPage: makeSelectJourneyPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(JourneyPage);
