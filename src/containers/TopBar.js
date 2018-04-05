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

//Actions
import {logout} from '../actions/login/loginAction'

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
    <MenuItem primaryText="Sign out" leftIcon={<PowerSettingsNew />} onClick={_ => this.handleLogout()}/>
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

  handleLogout = () => {
    this.props.logout()
  }

	render() {
		return (
      <div>
      <AppBar
      showMenuIconButton={false}
      style={{
        backgroundColor: '#d32f2f',
        height: 2,
        position: 'fixed',
        top: 0,
      }}/>
      <AppBar
        style={{
          backgroundColor:'#ffffff',
          height: 50,
          position: 'fixed',
          top: 2,
        }}
        titleStyle={{
          color:'#d32f2f',
          position: 'relative',
          top: -1,
        }}
        showMenuIconButton={false}
        title=
        { <div className= "appbar-title-wrapper">
          <h3
          style={{
            position: 'relative',
            top: -30,
            left: 20,
          }}>
          Student Evaluation
          </h3>
          <img
          style={{
            position: 'relative',
            top: -30,
            left: 290,
            textAlign: 'center',
          }}

          src={require (`../styling/images/logo.87bc4a59.svg`)}
          alt='codaiseur'
          />
          </div>
        }
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

export default connect(mapStateToProps, {logout})(TopBar)
