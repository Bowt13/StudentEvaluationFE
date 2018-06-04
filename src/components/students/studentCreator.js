import React, { PureComponent } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

//Actions

export default class StudentCreator extends PureComponent {
	state = {
		firstName: '',
		lastName: '',
		imgUrl: '',
		batchId: null
	}

	handleSubmit = () => {
		this.setState({
			firstName: '',
			lastName: '',
			imgUrl: ''
		})
		this.props.onSubmit(this.state)
	}

	handleChange = event => {
		const { name, value } = event.target

		this.setState({
			[name]: value
		})
		console.log(this.state)
	}

	handleDate = (event, name) => {
		this.setState({
			[name]: event
		})
		console.log(name)
		console.log(this.state.EndDate)
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<TextField
						floatingLabelText="first name"
						value={this.state.firstName || ''}
						name="firstName"
						type="firstName"
						style={{
							position: 'relative',
							left: 15
						}}
						onChange={this.handleChange}
					/>
				</div>
				{this.state.firstName && (
					<div>
						<TextField
							floatingLabelText="Last name"
							value={this.state.lastName || ''}
							name="lastName"
							type="lastName"
							style={{
								position: 'relative',
								left: 15
							}}
							onChange={this.handleChange}
						/>
					</div>
				)}
				{this.state.lastName && (
					<div>
						<div>
							<TextField
								floatingLabelText="Image url"
								value={this.state.imgUrl || ''}
								name="imgUrl"
								type="imgUrl"
								style={{
									position: 'relative',
									left: 15
								}}
								onChange={this.handleChange}
							/>
						</div>
						<RaisedButton
							label="Create"
							backgroundColor="#d32f2f"
							labelColor="#ffffff"
							style={{
								width: '10%',
								position: 'relative',
								top: -50,
								left: 300
							}}
							onClick={_ => this.handleSubmit()}
						/>
					</div>
				)}
			</form>
		)
	}
}
