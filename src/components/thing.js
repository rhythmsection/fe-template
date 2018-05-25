import React from 'react'
import PropTypes from 'prop-types'

const Thing = ({thing}) => {
  return (
    <div>
      {thing.id}, {thing.time}
    </div>
  )
}

Thing.propTypes = {
  thing: PropTypes.object.isRequired
}

export default Thing
