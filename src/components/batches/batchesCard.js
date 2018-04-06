import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

//MaterialUI
  //Components
import {
  Card,
  CardActions,
  CardHeader,
  CardText
} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
  //Icons
import PersonOutline from 'material-ui/svg-icons/social/person-outline';
import PeopleOutline from 'material-ui/svg-icons/social/people-outline';
import DateRange from 'material-ui/svg-icons/action/date-range';
  //Colors
import {red700} from 'material-ui/styles/colors';


class BatchesCard extends PureComponent {
  static propTypes = {
  batch: PropTypes.object.isRequired,
}

  handleClick = () => {

  }

	render() {
    const {batch} = this.props
    return(
      <Card style={{
        position: 'relative',
        top: 10,
        width: 230,
        height: 180,
        margin: 13,
      }}>
        <CardHeader
          style={{
            textAlign: 'left',
          }}
          title={`Batch ${batch.batchNumber}`}
        />
        <CardActions style={{
          textAlign: 'right',
        }}>
        <FloatingActionButton
        href={`/batches/${batch.id}`}
        style={{
          margin: 5,
          position: 'relative',
          top: -10,
          right: 0,
        }}
        >
        <PeopleOutline
        hoverColor={red700}/>
        </FloatingActionButton>
        <label
        style={{
          margin: 5,
          position: 'relative',
          top: -27,
          right: 0,
        }}
        >Students: {batch.students.length}</label>
        <FloatingActionButton mini={true}
        backgroundColor= {red700}
        style={{
          margin: 5,
          position: 'relative',
          top: 45,
        }}>
        <PersonOutline/>
        </FloatingActionButton>
        </CardActions>
        <CardText style={{
          textAlign: 'left',
        }}>
        <DateRange style={{
          margin: 5,
          position: 'relative',
          top: -20,
        }}/>
        <p style={{
          margin: 5,
          position: 'relative',
          top: -60,
          left: 30,
        }}>
        {`Start: ${batch.startDate.split('T', 1)}`}
        <br/>
        {`End: ${batch.endDate.split('T', 1)}`}
        </p>
        </CardText>
      </Card>
    )
	}
}


export default BatchesCard;
