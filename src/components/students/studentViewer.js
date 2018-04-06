import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

//MaterialUI
  //Components
    import Avatar from 'material-ui/Avatar';
    import Paper from 'material-ui/Paper';
    import TextField from 'material-ui/TextField';
    import RaisedButton from 'material-ui/RaisedButton';
    import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
  //Icons
    import ActionFavorite from 'material-ui/svg-icons/action/favorite';
    import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
  //Colors
  //import {red400, green400, yellow400, red900, green900, yellow900} from 'material-ui/styles/colors';


class StudentViewer extends PureComponent {
  static propTypes = {
    student: PropTypes.object.isRequired,
  }
  state = {
    currentState: 'post',
    currentStudent: '0',
    currentEvaluation: 'new'
  }

	handleSubmit = () => {
    const {currentColorCode, Remark} = this.state
    const {student, currentTeacher} = this.props
    let evaluation = {date: new Date(), evaluation: currentColorCode, remark: Remark, student: student, teacher: currentTeacher.jwt}
    console.log(evaluation);
		this.props.onSubmit(evaluation)
    this.setState({
      Remark: '',
      currentState: 'post',
      currentEvaluation: 'new',
    })
	}

  handleCreate = () => {
    this.setState({
      Remark: '',
      currentState: 'post',
      currentEvaluation: 'new',
    })
  }

	handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleEvaluationClick= (evaluation) => {
    console.log(evaluation)
    if(evaluation.teacher === this.props.currentTeacher.id)
    this.setState({
      Remark: evaluation.remark,
      currentState: 'patch',
      currentColorCode: evaluation.evaluation,
      currentEvaluation: evaluation.id,
    })
  }

  handleRadiobuttonClick= (value) => {
    console.log(value)
    this.setState({
      currentColorCode: value,
    })
  }

  capitalize = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
  }

  componentWillMount() {
    const {student} = this.props
    if (!student) {return}
    if (student) {this.setState({
      currentStudent: student.id
    })}
    }

	render() {
    const {student} = this.props
    let evaluations
    if (student) {evaluations = Object.values(student.evaluations).sort((a, b) => Date.parse(a.date) - Date.parse(b.date))}
    return(
      <div>
        <h1
          style={{
            position: 'relative',
            left: 200,
          }}
        >{student.firstName} {student.lastName}</h1>
        <h1
          style={{
            position: 'relative',
            top: -10,
            left: 230,
          }}
        >batch: {student.batch.batchNumber}</h1>
        <Avatar
          src={student.imgUrl}
          size={200}
          style={{
            position: 'relative',
            top: -120,
            left: 10,
            margin: 5,
            cursor: 'pointer',
          }}
        />
         <div className='evaluation-wrapper'>
          {!evaluations[0] && <Paper
            style={{
              height: 50,
              width: 50,
              margin: 2,
              opacity: 0,
            }}
            />
          }
          {evaluations.map((evaluation) => {
            const evaluationColor = evaluation.evaluation
            return <Paper
              style={{
                height: 50,
                width: 50,
                margin: 2,
                backgroundColor:`${
                  this.state.currentState === 'post' &&
                  evaluationColor
                }`,
                textAlign: 'center',
                display: 'inline-block',
              }}
              onClick= {_=> this.handleEvaluationClick(evaluation)}></Paper>
            })}
        </div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            style={{
              position: 'relative',
              top: -200,
              left: 300,
            }}
            underlineStyle={{
              borderColor: 'blue'
            }}
            underlineFocusStyle={{
              borderColor: this.state.currentColorCode
            }}
            textareaStyle={{
              color: this.state.currentColorCode
            }}
            name='Remark'
            type='Remark'
            value={this.state.Remark || ''}
            onChange={this.handleChange}
            hintText="Add remark"
          />
          <div>
          <RadioButtonGroup
            style={{
              width: 20,
              position: 'relative',
              top: -250,
              left: 190,
            }}>
            <RadioButton
              value="green"
              label="Green"
              checkedIcon={<ActionFavorite style={{color: '#F44336'}} />}
              uncheckedIcon={<ActionFavoriteBorder />}
              style={{
                margin: 5,
              }}
              onClick={_=> this.handleRadiobuttonClick('green')}
            />
            <RadioButton
              value="yellow"
              label="Yellow"
              style={{
                margin: 5,
              }}
              onClick={_=> this.handleRadiobuttonClick('yellow')}
            />
            <RadioButton
              value="red"
              label="Red"
              style={{
                margin: 5,
              }}
              onClick={_=> this.handleRadiobuttonClick('red')}
            />
          </RadioButtonGroup>
          </div>
          { this.state.currentState === 'post' &&
            <RaisedButton
              label="Submit"
              backgroundColor='#d32f2f'
              labelColor='#ffffff'
              style={
                {
                  width:'10%',
                  position: 'relative',
                  top: -290,
                  left: 470,
                }
              }
              onClick={_ => this.handleSubmit()}
            />
          }
          { this.state.currentState === 'patch' &&
            <div>
              <RaisedButton
                label="Update"
                backgroundColor='#d32f2f'
                labelColor='#ffffff'
                style={
                  {
                    width:'10%',
                    position: 'relative',
                    top: -290,
                    left: 470,
                  }
                }
                onClick={_ => this.handleSubmit()}
              />
              <RaisedButton
                label="Create"
                backgroundColor='#d32f2f'
                labelColor='#ffffff'
                style={
                  {
                    width:'10%',
                    position: 'relative',
                    top: -290,
                    left: 270,
                  }
                }
                onClick={_ => this.handleCreate()}
              />
            </div>
          }
        </form>
      </div>
    )
	}
}

const mapStateToProps = function (state) {
	return {
		authenticated: state.currentTeacher !== null,
    currentTeacher: state.currentTeacher,
    error: state.login.error
	}
}

export default connect(mapStateToProps)(StudentViewer)
