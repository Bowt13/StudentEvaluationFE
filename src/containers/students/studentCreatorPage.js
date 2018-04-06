//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


//MaterialUI
  //Components
  import Paper from 'material-ui/Paper';
  import Snackbar from 'material-ui/Snackbar';
  //Colors
  import {red700} from 'material-ui/styles/colors';

//Actions
import {createStudent} from '../../actions/students/studentsAction'

//Components
import StudentCreator from '../../components/students/studentCreator'

class StudentCreatorPage extends PureComponent {
  state = {
    open: false,
  }

	handleSubmit = (data) => {
    if (data.imgUrl === '') {data.imgUrl ='https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg'
    }
    if (data.batchId === null) {data.batchId = 1
    }
		this.props.createStudent(data)
    this.setState({
      open: true,
    })
	}

	render() {
		if (!this.props.currentTeacher) return (
			<Redirect to="/login" />
		)

		return (
      <div>
        <div style={{
          height: 364,
          width: '100%',
          position: 'relative',
          top: 0,
          backgroundColor: red700,
        }}>
          <h1 style={{
            position: 'relative',
            top: 130,
            color: 'white',
          }}>/ Student Creator /
          </h1>
          <p style={{
            position: 'relative',
            top: 130,
            color: 'white',
          }}>Your Teaching journey starts here!
          </p>
        </div>
      <Paper zDepth={2}
			style={{
				position: 'relative',
				top: 100,
        height: 300,
        width: 450,
        margin: 20,
        textAlign: 'left',
        display: 'inline-block',
      }}>
				<h1 style={
          {
            position: 'relative',
            top: 5,
            left: 30,
            textAlign: 'left',
            display: 'inline-block',
          }
        }>Student creator</h1>

				<StudentCreator onSubmit={this.handleSubmit} />

        { this.props.error &&
          <span style={
            {
              color:'red',
              position: 'relative',
              top: 10,
              left: 30,
              display: 'inline-block',
            }
          }>{this.props.error}</span> }
        </Paper>
        <Snackbar
          open={this.state.open}
          message="Student added"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		currentTeacher: state.currentTeacher,
    error: state.login.error
	}
}

export default connect(mapStateToProps, {createStudent})(StudentCreatorPage)
