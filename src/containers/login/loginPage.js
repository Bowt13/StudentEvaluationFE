//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Paper from 'material-ui/Paper';

//Actions
import {login} from '../../actions/login/loginAction'

//Components
import LoginForm from '../../components/login/loginForm'

class LoginPage extends PureComponent {
	handleSubmit = (data) => {
		this.props.login(data.Email, data.Password)
    console.log(data.Email, data.Password)
	}

	render() {
		if (this.props.currentTeacher) return (
			<Redirect to="/batches" />
		)

		return (
			<div>
      <Paper zDepth={2} style={
        {
          height: 300,
          width: 450,
          margin: 20,
          textAlign: 'left',
          display: 'inline-block',
        }
      }>
				<h1 style={
          {
            position: 'relative',
            top: 5,
            left: 30,
            textAlign: 'left',
            display: 'inline-block',
          }
        }>Sign in</h1>

				<LoginForm onSubmit={this.handleSubmit} />

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

export default connect(mapStateToProps, {login})(LoginPage)
