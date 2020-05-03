/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

// Import images
import logoNoTextImage from '../../../assets/wiki/logo-no-text.svg';
import logoOnlyTextImage from '../../../assets/wiki/logo-only-text.svg';
import logoWithTextImage from '../../../assets/wiki/logo-with-text.svg';

// Export image variables
export const logoNoText = logoNoTextImage;
export const logoOnlyText = logoOnlyTextImage;
export const logoWithText = logoWithTextImage;

//
export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
