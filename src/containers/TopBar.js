//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import PowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new';



//Components
import AppBar from 'material-ui/AppBar';

const Login = (props) => (
  <IconMenu/>
)

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <Divider/>
    <MenuItem primaryText="Sign out" leftIcon={<PowerSettingsNew />}/>
  </IconMenu>
)

 class TopBar extends PureComponent {
  state = {
  logged: false,
}
  componentWillMount() {
    const {authenticated} = this.props
    if (authenticated) {
      this.setState({
        logged: true
      })
    }
  }

	render() {
		return (
      <div>
      <AppBar
      showMenuIconButton={false}
      style={{
        backgroundColor: '#d32f2f',
        height: 2,
      }}/>
      <AppBar
        style={{
          backgroundColor:'#ffffff',
          height: 50,
        }}
        titleStyle={{
          color:'#d32f2f',
          position: 'relative',
          top: -1,
        }}
        showMenuIconButton={false}
        title={<img
          src={require (`../styling/images/logo.87bc4a59.svg`)} alt='codaiseur'/>}
        iconElementRight={this.state.logged ? <Logged /> : <Login />}
        iconStyleRight={{
          color:'#d32f2f',
          position: 'relative',
          top: -10,
        }}
        />
        </div>
		)
	}
}
const mapStateToProps = function (state) {
	return {
    authenticated: state.currentTeacher !== null,
	}
}

export default connect(mapStateToProps)(TopBar)
