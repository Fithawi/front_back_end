//import logo from './logo.svg';
import './App.css';
import Root from './components/Root.jsx';
import Login from './components/Login.jsx';
import About from './components/About.jsx'
import Contacts from './components/Contacts.jsx'
import Services from './components/Services.jsx'
import Counter from './components/counter.js'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
const router = createBrowserRouter(createRoutesFromElements(
<Route path="/" element={<Root />}>
  <Route path="login" element={<Login />}/>
  <Route path="counter" element={<Counter />}/>
  <Route path="about" element={<About />}/>
  <Route path="services" element={<Services />}/>
  <Route path="contacts" element={<Contacts />}/>
</Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
