// import logo from './logo.svg';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import Loading from './pages/Loading'
import LoginPage from './pages/LoginPage'
import MovieList from './pages/MovieList'
import NotFound from './pages/NotFound'
import LandingPage from './pages/LandingPage'
import DetailMovies from './pages/DetailMovies'
import WatchList from './pages/WatchList'
import MovieSearch from './pages/MovieSearch'
// import Navbar from './components/Navbar'
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Upcoming from './pages/Upcoming';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';

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
            <GuardedRoute exact path="/upcoming">
              <Upcoming />
            </GuardedRoute>
            <GuardedRoute exact path="/popular">
              <Popular />
            </GuardedRoute>
            <GuardedRoute exact path="/topRated">
              <TopRated />
            </GuardedRoute>
            <GuardedRoute exact path="/register">
              <RegisterPage />
            </GuardedRoute>
            <GuardedRoute exact path="/movieSearch">
              <MovieSearch />
            </GuardedRoute>
            <GuardedRoute exact path="/login">
              <LoginPage />
            </GuardedRoute>
            <GuardedRoute exact path="/watchList">
              <WatchList />
            </GuardedRoute>
            <GuardedRoute exact path="/movies/detail/:id">
              <DetailMovies />
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
