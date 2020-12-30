import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SinglePost from './pages/SinglePost';
import Post from './pages/Post';
import Project from './pages/Project';
import NavBar from './components/Navbar';
import SingleProject from './pages/SingleProject';



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={SingleProject} path='/project/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />
      </Switch>
    </BrowserRouter>
  )
  
}

export default App;
