// import { take, call, put, select } from 'redux-saga/effects';
import {call, put} from 'redux-saga/effects';
import {takeLatest} from 'redux-saga';
import {REQUEST_LINKS} from './constants';
import {requestLinksSucceeded, requestLinksFailed} from './actions';


function fetchLinksFromServer(topicName) {
  return fetch(`http://localhost:3000/api/topics/${topic.name}/links`)
    .then(response => response.json());
}

function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topicName);
    yield put(requestLinksSucceeded(links));
    //dispatch action to store links
  } catch(e) {
    yield put(requestLinksFailed(e.message));
    //dispatch action to store error
  }
}
// Individual exports for testing
export function* defaultSaga() {
  yield* takeLatest(REQUEST_LINKS, fetchLinks);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
