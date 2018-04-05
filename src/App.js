//Dependencies
import
React,
{Component}
from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//Containers
import TopBar from './containers/TopBar';
import LoginPage from './containers/login/loginPage';
import BatchesPage from './containers/batches/batchesPage';
import StudentsPage from './containers/students/studentsPage';
import StudentPage from './containers/students/studentPage';

//Styling
import './App.css';

class StudentEvaluationPage extends Component {
  state = {
  currentBatch: null
}
  render() {
    return (
      <MuiThemeProvider>
        <TopBar/>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/batches" component={BatchesPage} />
        <Route exact path="/batches/:id" component={StudentsPage} />
        <Route exact path="/students/:id" component={StudentPage} />
      </MuiThemeProvider>
    );
  }
}


class App extends Component {
  state = {
  currentBatch: null
}
  render() {
    return (
      <Router>
        <div className='App'>
          <StudentEvaluationPage />
        </div>
      </Router>
    );
  }
}

export default App;
