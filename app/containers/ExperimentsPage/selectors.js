import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the experimentsPage state domain
 */

const selectExperimentsPageDomain = state =>
  state.experimentsPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ExperimentsPage
 */

const makeSelectExperimentsPage = () =>
  createSelector(
    selectExperimentsPageDomain,
    substate => substate,
  );

export default makeSelectExperimentsPage;
export { selectExperimentsPageDomain };
