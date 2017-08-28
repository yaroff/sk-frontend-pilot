import { createSelector } from 'reselect';

/**
 * Direct selector to languageToggle state domain
 */
const selectLanguage = (state) => state.get('language');

/**
 * Select language locale
 */

const makeSelectLocale = () => createSelector(
  selectLanguage,
  (languageState) => languageState.get('locale')
);

export {
  selectLanguage,
  makeSelectLocale,
};
