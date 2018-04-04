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
import StudentsPage from './containers/students/studentPage';

//Styling
import './App.css';

const StudentEvaluationPage = () => (
  <MuiThemeProvider>
    <TopBar/>
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/batches" component={BatchesPage} />
    <Route exact path="/games/:id" component={StudentsPage} />
  </MuiThemeProvider>
);

class App extends Component {
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
