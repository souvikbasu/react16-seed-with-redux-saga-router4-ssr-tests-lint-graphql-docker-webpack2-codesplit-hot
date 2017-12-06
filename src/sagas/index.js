import { call, put, takeLatest } from 'redux-saga/effects'
import * as api from '../api/contributors'

function* fetchUsers(action) {
   try {
      const contributors = yield call(api.fetchContributors, action.payload.userId);
      yield put({type: "CONTRI_FETCH_SUCCEEDED", contributors: contributors});
   } catch (e) {
      yield put({type: "CONTRI_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
  yield takeLatest("FETCH_REACT_CONTRI", fetchUsers);
}

export default mySaga;