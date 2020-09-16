import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateCollections} from '../../redux/shop/shop.actions'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
import {firestore, convertCollectionsSnapShotToMap} from '../../firebase/firebase.utils'

class ShopPage extends Component {
  unsubscribeFromSnapshot = null

  componentDidMount() {
    const {updateCollections} = this.props
    const collectionsRef = firestore.collection('collections')
    
    collectionsRef.onSnapshot(async snapShot => {
      const collectionsMap = convertCollectionsSnapShotToMap(snapShot)
      updateCollections(collectionsMap)
    })
  }

  render() {
    const {match} = this.props

    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collection => dispatch(updateCollections(collection))
})

export default connect(null, mapDispatchToProps)(ShopPage)
