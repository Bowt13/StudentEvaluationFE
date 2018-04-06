import React, {PureComponent} from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

export default class BatchCreator extends PureComponent {
	state = {}

	handleSubmit = () => {
    this.setState({
      BatchNumber: '',
      StartDate: '',
      EndDate: ''
    })
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

  handleDate = (event, name) => {
    this.setState({
      [name]: event
    })
    console.log(name)
    console.log(this.state.EndDate)
  }

	render() {
    const currentDate = new Date()
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
          <TextField
            floatingLabelText="Batch number"
            value={this.state.BatchNumber || ''}
            name='BatchNumber'
            type='BatchNumber'
            style={
              {
                position: 'relative',
                left: 15,
              }
            }
            onChange={this.handleChange}
          />
				</div>
        {this.state.BatchNumber &&
        <div>
          <DatePicker
          onChange={(x, event) => this.handleDate(event, 'StartDate')}
          defaultDate= {currentDate}
          minDate= {currentDate}
          hintText="Start date"
          mode="landscape"
          style={
            {
              position: 'relative',
              left: 15,
            }
          }/>
				</div>}
        {this.state.StartDate &&
        <div>
          <DatePicker
          onChange={(x, event) => this.handleDate(event, 'EndDate')}
          defaultDate= {this.state.StartDate}
          minDate= {this.state.StartDate}
          hintText="End date"
          mode="landscape"
          style={
            {
              position: 'relative',
              left: 15,
            }
          }/>
        </div>}
        {this.state.EndDate &&
        <RaisedButton
          label="Create"
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
        />}
			</form>
		)
	}
}
