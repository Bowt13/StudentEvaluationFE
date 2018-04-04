import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';



//MaterialUI
import {
  Card,
  CardActions,
  CardHeader,
  CardText
} from 'material-ui/Card';
import PersonOutline from 'material-ui/svg-icons/social/person-outline';
import PeopleOutline from 'material-ui/svg-icons/social/people-outline';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {red700} from 'material-ui/styles/colors';

class BatchesCard extends PureComponent {
  static propTypes = {
  batch: PropTypes.object.isRequired,
}

	render() {
    const {batch} = this.props
    return(
      <Card style={{
        width: 250,
        margin: 20,
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
        <FloatingActionButton style={{
          margin: 5,
          position: 'relative',
          right: 110,
        }}
        href={`/batches/${batch.id}`}
        >
        <PeopleOutline
        hoverColor={red700}/>
        </FloatingActionButton>
        <FloatingActionButton mini={true} style={{
          margin: 5,
          position: 'relative',
          top: 65,
        }}
        backgroundColor= {red700}>
          <PersonOutline/>
        </FloatingActionButton>
        </CardActions>
        <CardText style={{
          textAlign: 'left',
        }}>
        {`Start date: ${batch.startDate}`}
        <br/>
        {`End date: ${batch.endDate}`}
        </CardText>
      </Card>
    )
	}
}


export default BatchesCard;
