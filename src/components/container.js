import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import Thing from './thing'

class ThingContainer extends Component {
  componentDidMount () {
    this.props.actions.fetchThing()
  }

  render () {
    const { thing } = this.props

    return (
      <div>
        <Thing thing={thing} />
      </div>
    )
  }
}

ThingContainer.propTypes = {
  thing: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps (state, props) {
  return {
    thing: state.thing
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThingContainer)
