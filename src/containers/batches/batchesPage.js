//Dependencies
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

//MaterialUI
//Colors
import { red700 } from 'material-ui/styles/colors'

//Actions
import { getBatches } from '../../actions/batches/batchesAction'

//Components
import BatchesCard from '../../components/batches/batchesCard'

class BatchesPage extends PureComponent {
	componentWillMount() {
		const { batches, authenticated, getBatches, currentTeacher } = this.props
		if (authenticated) {
			console.log(currentTeacher)
			if (batches === null) getBatches()
		}
	}

	render() {
		const { batches, authenticated } = this.props
		if (!authenticated) return <Redirect to="/login" />
		return (
			<div>
				<div
					style={{
						height: 364,
						width: '100%',
						position: 'relative',
						top: 0,
						backgroundColor: red700
					}}>
					<h1
						style={{
							position: 'relative',
							top: 130,
							color: 'white'
						}}>
						/ All Batches /
					</h1>
					<p
						style={{
							position: 'relative',
							top: 130,
							color: 'white'
						}}>
						Your Teaching journey starts here!
					</p>
				</div>
				{batches && (
					<div className="cards-wrapper">
						{batches.map(batch => <BatchesCard batch={batch} />)}
					</div>
				)}
			</div>
		)
	}
}

const mapStateToProps = function(state) {
	return {
		authenticated: state.currentTeacher !== null,
		currentTeacher: state.currentTeacher,
		batches:
			state.batches === null
				? null
				: Object.values(state.batches).sort((a, b) => a.id - b.id)
	}
}

const mapDispatchToProps = {
	getBatches
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BatchesPage)
