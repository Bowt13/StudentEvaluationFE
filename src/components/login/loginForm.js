import React, {PureComponent} from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class LoginForm extends PureComponent {
	state = {}

	handleSubmit = () => {
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	checkKey = (x, event) => {
		console.log(x)
		console.log(event)
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
          <TextField
            floatingLabelText="Email"
            value={this.state.Email || ''}
            name='Email'
            type='Email'
            style={
              {
                position: 'relative',
                left: 15,
              }
            }
            onChange={this.handleChange}
          />
				</div>

        <div>
          <TextField
            floatingLabelText="Password"
            value={this.state.Password || ''}
            name='Password'
            type='Password'
            style={
              {
                position: 'relative',
                left: 15,
              }
            }
            onChange={this.handleChange}
						onkeydown={(x, event) => this.checkKey(event, 'EndDate')}
          />
				</div>

        <RaisedButton
          label="Sign in"
          backgroundColor='#d32f2f'
          labelColor='#ffffff'
          style={
            {
              width:'10%',
              position: 'relative',
              left: 15,
            }
          }
          onClick={_ => this.handleSubmit()}
        />
			</form>
		)
	}
}
