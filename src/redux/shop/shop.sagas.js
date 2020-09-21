import {takeLatest, call, put} from 'redux-saga/effects'
import {ShopActionTypes} from './shop.types'
import {firestore, convertCollectionsSnapShotToMap} from '../../firebase/firebase.utils'
import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.actions'

export function* fetchCollectionsAsync() {
  try {
    const collectionsRef = firestore.collection('collections')
    const snapshot = yield collectionsRef.get()
    const collectionsMap = yield call(convertCollectionsSnapShotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } 
  catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollections() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}
