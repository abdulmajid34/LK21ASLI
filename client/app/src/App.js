// import logo from './logo.svg';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import Loading from './pages/Loading'
import LoginPage from './pages/LoginPage'
import MovieList from './pages/MovieList'
import NotFound from './pages/NotFound'
import LandingPage from './pages/LandingPage'
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { BrowserRouter as Router, Switch } from "react-router-dom";

const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (localStorage.getItem('access_token')) {
      next();
    }
    next.redirect('/login');
  } else {
    next();
  }
};

function App() {
  return (
    <Router>
      <GuardProvider guards={[requireLogin]} loading={Loading} error={NotFound}>
        <div className="App">
          <Switch>
            <GuardedRoute path="/movieList" meta={{ auth: true }}>
              <MovieList />
            </GuardedRoute>
            <GuardedRoute exact path="/register">
              <RegisterPage />
            </GuardedRoute>
            <GuardedRoute exact path="/login">
              <LoginPage />
            </GuardedRoute>
            <GuardedRoute exact path="/">
							<LandingPage />
						</GuardedRoute>
            <GuardProvider>
							<NotFound />
						</GuardProvider>
          </Switch>
        </div>
      </GuardProvider>
    </Router>
  );
}

export default App;
