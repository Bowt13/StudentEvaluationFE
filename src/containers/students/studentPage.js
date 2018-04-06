//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Paper from 'material-ui/Paper';

//Actions
import {getStudent} from '../../actions/students/studentsAction'
import {createEvaluation} from '../../actions/evaluations/evaluationsAction'

//Components
import StudentViewer from '../../components/students/studentViewer'

class LoginPage extends PureComponent {

  handleSubmit = (data) => {
    this.props.createEvaluation(data)
    window.location='/batches'
  }

  componentWillMount() {
    const {student, authenticated, getStudent, match} = this.props
    if (authenticated) {
      if (student === null) getStudent(match.params.id)
    }
  }

	render() {
    const {authenticated, student, match} = this.props
		if (!authenticated) return (
			<Redirect to="/login" />
		)
    if (!student) this.componentWillMount()
		return (
			<div>
      <Paper zDepth={2}
			style={{
				position: 'relative',
				top: 100,
        height: 320,
        width: 700,
        margin: 20,
        textAlign: 'left',
        display: 'inline-block',
      }}>
        {student && <StudentViewer student={student[match.params.id]} onSubmit={this.handleSubmit}/>}
      </Paper>
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		authenticated: state.currentTeacher !== null,
    student: state.student,
    error: state.login.error
	}
}

export default connect(mapStateToProps, {getStudent, createEvaluation})(LoginPage)
