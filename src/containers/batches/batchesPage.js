//Dependencies
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

//MaterialUI

//Actions
import {getBatches} from '../../actions/batches/batchesAction'

//Components
import BatchesCard from '../../components/batches/batchesCard'


class BatchesPage extends PureComponent {

  componentWillMount() {
    const {batches, authenticated, getBatches} = this.props
    if (authenticated) {
      if (batches === null) getBatches()
    }
  }

	render() {
    const {batches, authenticated} = this.props
    if (!authenticated) return (
      <Redirect to="/login" />
    )
		return (
      <div>
      {batches &&
        <div className='batches-wrapper'>
          {batches.map((batch) => (
            <BatchesCard batch={batch}/>
          ))}
      </div>}
      </div>

		)
	}
}

const mapStateToProps = function (state) {
	return {
    authenticated: state.currentTeacher !== null,
    batches: state.batches === null ?
    null : Object.values(state.batches).sort((a, b) => a.id - b.id)

	}
}

const mapDispatchToProps = {
  getBatches,
}

export default connect(mapStateToProps, mapDispatchToProps)(BatchesPage)
