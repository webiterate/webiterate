/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  mission: {
    id: `${scope}.mission`,
    defaultMessage: 'Mission',
  },
  journey: {
    id: `${scope}.journey`,
    defaultMessage: 'The Journey',
  },
  experiments: {
    id: `${scope}.experiments`,
    defaultMessage: 'Experiments',
  },
});
