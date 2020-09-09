import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore()

firestore.collection('users').doc('6eOg89hzqZD4Xflztyi5').collection('cartItems').doc('EPL8Az3RYbHZMrvFf0X2')
firestore.doc('users/6eOg89hzqZD4Xflztyi5/cartItems/EPL8Az3RYbHZMrvFf0X2')
firestore.collection('users/6eOg89hzqZD4Xflztyi5/cartItems')
