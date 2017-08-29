import { fromJS } from 'immutable';
import authPageReducer from '../reducer';

describe('authPageReducer', () => {
  it('returns initial state', () => {
    expect(authPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
