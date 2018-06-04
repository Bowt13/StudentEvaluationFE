//Dependencies
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

//MaterialUI
import AppBar from 'material-ui/AppBar'
//Colors
import { red700 } from 'material-ui/styles/colors'

//Actions
import { getStudents } from '../../actions/students/studentsAction'

//Components
import StudentsCard from '../../components/students/studentsCard'

class StudentsPage extends PureComponent {
	calculatePercentages = students => {}

	componentWillMount() {
		const { students, authenticated, getStudents } = this.props
		if (authenticated) {
			if (students === null) getStudents()
		}
		this.calculatePercentages(students)
	}

	render() {
		const { students, authenticated, match } = this.props
		//const {percentageRed} = this.state
		if (!authenticated) return <Redirect to="/login" />
		return (
			<div>
				<AppBar
					showMenuIconButton={false}
					style={{
						position: 'fixed',
						top: 300,
						left: 0,
						width: '100%',
						backgroundColor: 'green'
					}}
				/>
				<AppBar
					showMenuIconButton={false}
					style={{
						position: 'fixed',
						top: 300,
						left: 0,
						width: '66%',
						backgroundColor: 'red'
					}}
				/>
				<div
					style={{
						height: 364,
						width: '100%',
						position: 'relative',
						top: 0,
						backgroundColor: red700
					}}>
					{students && (
						<h1
							style={{
								position: 'relative',
								top: 130,
								color: 'white'
							}}>{`/ Batch ${match.params.id} /`}</h1>
					)}
					<p
						style={{
							position: 'relative',
							top: 130,
							color: 'white'
						}}>
						Your Teaching journey starts here!
					</p>
				</div>
				{students && (
					<div>
						<div classname="percentage-wrapper" />
						<div className="cards-wrapper">
							{students.map(student => {
								if (!student.batch) return null
								console.log(student.batch.batchNumber === match.params.id)
								if (student.batch.batchNumber === match.params.id) {
									return <StudentsCard student={student} />
								} else return null
							})}
						</div>
					</div>
				)}
			</div>
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
)(StudentsPage)
