import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the journeyPage state domain
 */

const selectJourneyPageDomain = state => state.journeyPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by JourneyPage
 */

const makeSelectJourneyPage = () =>
  createSelector(
    selectJourneyPageDomain,
    substate => substate,
  );

export default makeSelectJourneyPage;
export { selectJourneyPageDomain };
