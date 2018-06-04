//Dependencies
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

//Containers
import TopBar from './containers/TopBar'
import LoginPage from './containers/login/loginPage'
import BatchesPage from './containers/batches/batchesPage'
import BatchCreatorPage from './containers/batches/batchCreatorPage'
import Students2Batches from './containers/students/students2Batches'
import StudentsPage from './containers/students/studentsPage'
import StudentPage from './containers/students/studentPage'
import StudentCreatorPage from './containers/students/studentCreatorPage'

//Styling
import './App.css'

class StudentEvaluationPage extends Component {
	render() {
		return (
			<Router className="centered">
				<div className="App">
					<MuiThemeProvider>
						<TopBar />
						<Route exact path="/login" component={LoginPage} />
						<Route exact path="/batches" component={BatchesPage} />
						<Route exact path="/batches/:id" component={StudentsPage} />
						<Route exact path="/batches/creator" component={BatchCreatorPage} />
						<Route
							exact
							path="/students2Batches"
							component={Students2Batches}
						/>
						<Route exact path="/students/:id" component={StudentPage} />
						<Route
							exact
							path="/student/creator"
							component={StudentCreatorPage}
						/>
					</MuiThemeProvider>
				</div>
			</Router>
		)
	}
}

class App extends Component {
	state = {
		currentBatch: null
	}
	render() {
		return <StudentEvaluationPage />
	}
}

export default App
