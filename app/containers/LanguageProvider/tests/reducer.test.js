import { fromJS } from 'immutable';

import languageProviderReducer from '../reducer';
import {
  CHANGE_LOCALE,
} from '../constants';

describe('languageProviderReducer', () => {
  it('returns initial state', () => {
    expect(languageProviderReducer(undefined, {})).toEqual(fromJS({
      locale: 'en',
    }));
  });

  it('changes locale', () => {
    expect(languageProviderReducer(undefined, { type: CHANGE_LOCALE, locale: 'de' }).toJS()).toEqual({
      locale: 'de',
    });
  });
});
