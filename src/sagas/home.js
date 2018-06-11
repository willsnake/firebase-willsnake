import { call, takeEvery, put } from 'redux-saga/effects';

// API
import { callToApi } from '../api';

// Actions
import { setGreet } from '../redux/actions';

export function* homeFunction() {
  try {
    const response = yield call(callToApi);
    yield put(setGreet(response.message));
  } catch (e) {
    console.error('Something went wrong', e);
  }
}

export default function* homeSaga() {
  yield takeEvery('LOAD_INDEX', homeFunction);
}
