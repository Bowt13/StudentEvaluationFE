//Dependencies
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Paper from 'material-ui/Paper'
import Snackbar from 'material-ui/Snackbar'

//Actions
import { createBatch } from '../../actions/batches/batchesAction'

//Components
import BatchCreator from '../../components/batches/batchCreator'

class BatchCreatorPage extends PureComponent {
	state = {
		open: false
	}

	handleSubmit = data => {
		console.log({
			batchNumber: data.BatchNumber,
			startDate: data.StartDate,
			endDate: data.EndDate
		})
		this.props.createBatch({
			batchNumber: data.BatchNumber,
			startDate: data.StartDate,
			endDate: data.EndDate
		})
		this.setState({
			open: true
		})
	}

	render() {
		if (!this.props.currentTeacher) return <Redirect to="/login" />

		return (
			<div>
				<Paper
					zDepth={2}
					style={{
						position: 'relative',
						top: 100,
						height: 300,
						width: 450,
						margin: 20,
						textAlign: 'left',
						display: 'inline-block'
					}}>
					<h1
						style={{
							position: 'relative',
							top: 5,
							left: 30,
							textAlign: 'left',
							display: 'inline-block'
						}}>
						Batch creator
					</h1>

					<BatchCreator onSubmit={this.handleSubmit} />

					{this.props.error && (
						<span
							style={{
								color: 'red',
								position: 'relative',
								top: 10,
								left: 30,
								display: 'inline-block'
							}}>
							{this.props.error}
						</span>
					)}
				</Paper>
				<Snackbar
					open={this.state.open}
					message="Batch added"
					autoHideDuration={4000}
					onRequestClose={this.handleRequestClose}
				/>
			</div>
		)
	}
}

const mapStateToProps = function(state) {
	return {
		currentTeacher: state.currentTeacher,
		error: state.login.error
	}
}

export default connect(
	mapStateToProps,
	{ createBatch }
)(BatchCreatorPage)
