import './App.css';
import AlertDetails from './components/AlertDetails';
import AlertSubmit from './components/AlertSubmit';
import Container from './components/Container';
import Navbar from './components/Navbar';
import {Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Container>
        <Navbar />
        <AlertSubmit />
        <AlertDetails />
        {/* <Router>

<Switch>
<Route exact path="/" component={AlertDetails} />
  <Route exact path="/alert" component={AlertSubmit} />
  <Route exact path="/alerts" component={AlertDetails} />
</Switch>
</Router> */}
      </Container>

    </div>
  );
}

export default App;
