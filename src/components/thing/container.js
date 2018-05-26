import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions'
import { Button } from 'react-bootstrap'
import Thing from './thing'

class ThingContainer extends Component {
  componentDidMount () {
    this.props.actions.fetchThing()
  }

  refreshThing = () => {
    return this.props.actions.fetchThing()
  }

  render () {
    // all this does right now is create a refreshable object. 
    const { thing } = this.props

    return (
      <div>
        <Button onClick={this.refreshThing}>Refresh Thing</Button>
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
