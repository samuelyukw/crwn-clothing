import {all, call} from 'redux-saga/effects'
import {fetchCollections} from './shop/shop.sagas'
import {userSagas} from './user/user.sagas'
import {cartSagas} from './cart/cart.sagas'

export default function* rootSaga() {
  yield all([
    call(fetchCollections),
    call(userSagas),
    call(cartSagas)
  ])
}