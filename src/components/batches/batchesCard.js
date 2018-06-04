import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//MaterialUI
//Components
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FloatingActionButton from 'material-ui/FloatingActionButton'
//Icons
import PersonOutline from 'material-ui/svg-icons/social/person-outline'
import PeopleOutline from 'material-ui/svg-icons/social/people-outline'
import DateRange from 'material-ui/svg-icons/action/date-range'
//Colors
import { red700 } from 'material-ui/styles/colors'

//Actions
import { getStudents } from '../../actions/students/studentsAction'

class BatchesCard extends PureComponent {
	static propTypes = {
		batch: PropTypes.object.isRequired
	}
	handleAlgoritm = () => {
		let r1 = Math.random()
		let randomStudents = []
		let color
		if (r1 <= 0.53) color = 'red'
		if (r1 > 0.53 && r1 <= 0.81) color = 'yellow'
		if (r1 > 0.81) color = 'green'
		this.props.students.map(student => {
			if (!student.batch) return 'student has no batch'
			if (student.batch.id === this.props.batch.id) {
				if (student.evaluations.length === 0 && color === 'red') {
					randomStudents.push(student.id)
				} else {
					if (student.evaluations.length === 0 && color === 'yellow') {
					} else {
						if (student.evaluations.length === 0 && color === 'green') {
						} else {
							if (
								student.evaluations[student.evaluations.length - 1]
									.evaluation === color
							)
								randomStudents.push(student.id)
						}
					}
				}
			}
			return 'expected'
		})
		if (randomStudents.length === 0) return this.handleAlgoritm()
		let r2 = Math.abs(
			Math.round((Math.random() * randomStudents.length * 0.1) / 0.1)
		)
		if (randomStudents[r2] === undefined) return this.handleAlgoritm()
		window.location = `/students/${randomStudents[r2]}`
	}

	componentWillMount() {
		const { students, authenticated, getStudents } = this.props
		if (authenticated) {
			if (students === null) getStudents()
		}
	}
	render() {
		const { batch } = this.props
		return (
			<Card
				style={{
					position: 'relative',
					top: 10,
					width: 230,
					height: 180,
					margin: 13
				}}>
				<CardHeader
					style={{
						textAlign: 'left'
					}}
					title={`Batch ${batch.batchNumber}`}
				/>
				<CardActions
					style={{
						textAlign: 'right'
					}}>
					<FloatingActionButton
						href={`/batches/${batch.batchNumber}`}
						style={{
							margin: 5,
							position: 'relative',
							top: -10,
							right: 0
						}}>
						<PeopleOutline hoverColor={red700} />
					</FloatingActionButton>
					<label
						style={{
							margin: 5,
							position: 'relative',
							top: -27,
							right: 0
						}}>
						Students: {batch.students.length}
					</label>
					<FloatingActionButton
						mini={true}
						onClick={_ => this.handleAlgoritm()}
						backgroundColor={red700}
						style={{
							margin: 5,
							position: 'relative',
							top: 45
						}}>
						<PersonOutline />
					</FloatingActionButton>
				</CardActions>
				<CardText
					style={{
						textAlign: 'left'
					}}>
					<DateRange
						style={{
							margin: 5,
							position: 'relative',
							top: -20
						}}
					/>
					<p
						style={{
							width: 120,
							margin: 5,
							position: 'relative',
							top: -60,
							left: 30
						}}>
						{`Start: ${batch.startDate.split('T', 1)}`}
						<br />
						{`End: ${batch.endDate.split('T', 1)}`}
					</p>
				</CardText>
			</Card>
		)
	}
}
const mapStateToProps = function(state) {
	return {
		authenticated: state.currentTeacher !== null,
		students:
			state.students === null
				? null
				: Object.values(state.students).sort((a, b) => a.id - b.id)
	}
}

const mapDispatchToProps = {
	getStudents
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BatchesCard)
