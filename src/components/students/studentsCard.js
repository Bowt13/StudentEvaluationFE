import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

//MaterialUI
  //Components
  import {
    Card,
    CardActions,
    CardHeader,
    CardText,
  } from 'material-ui/Card';
  import Avatar from 'material-ui/Avatar';
  //Icons

  //Colors
  import {red400, green400, yellow400, red900, green900, yellow900} from 'material-ui/styles/colors';


class StudentsCard extends PureComponent {
  static propTypes = {
  student: PropTypes.object.isRequired,
}

  capitalize = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
  }

   handleClick = (studentId) => {
     window.location=`/students/${studentId}`;
   }

	render() {
    const {student} = this.props
    var evaluations = Object.values(student.evaluations).sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
    let color
    if (evaluations[student.evaluations.length-1] !== undefined){
      switch (evaluations[student.evaluations.length-1].evaluation) {
        case 'red':
          color = red400
          break;
        case 'yellow':
          color = yellow400
          break;
        case 'green':
          color = green400
          break;
        default:
          color = red400
      }
    }

    let textColor
    if (evaluations[student.evaluations.length-1] !== undefined){
      switch (evaluations[student.evaluations.length-1].evaluation) {
        case 'red':
          textColor = red900
          break;
        case 'yellow':
          textColor = yellow900
          break;
        case 'green':
          textColor = green900
          break;
        default:
          textColor = red900
      }
    }

    return(
      <Card
      style={{
        backgroundColor: color,
        position: 'relative',
        top: 10,
        width: 230,
        height: 220,
        margin: 13,
      }}>
        <CardHeader
          style={{
            textAlign: 'left',
          }}
          title={`${this.capitalize(student.firstName)} ${this.capitalize(student.lastName)}`}
        />
        <CardActions
        style={{
          textAlign: 'center'
        }}>
          <Avatar
            onClick={_ => this.handleClick(student.id)}
            src={student.imgUrl}
            size={130}
            style={{
              position: 'relative',
              top: -20,
              left: -5,
              margin: 5,
              cursor: 'pointer',
            }}
          />
        </CardActions>
        <CardText style={{
          textAlign: 'left',
        }}>
        { evaluations[student.evaluations.length-1] &&
          <p style={{
            color: textColor,
            fontSize: 30,
            margin: 5,
            position: 'relative',
            top: -60,
            left: 0,
          }}>
          {`${evaluations[student.evaluations.length-1].evaluation}`}
          </p>}
        </CardText>
      </Card>
    )
	}
}


export default StudentsCard;
