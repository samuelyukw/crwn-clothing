import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import MenuItem from '../../components/menu-item/menu-item.component'
import {selectDirectorySections} from '../../redux/directory/directory.selectors'
import {DirectoryMenu} from './directory.styles'

const Directory = ({sections}) => (
  <DirectoryMenu>
    {sections.map(({id, ...otherSectionProps}) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenu>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
