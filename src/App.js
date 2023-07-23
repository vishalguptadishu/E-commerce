
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './page/Home';
import Category from './componenntes/Category/Category';
import Contact from './page/Contact/CONTACT';
import Blogs_pags from "./page/blogs_page/blogs_page"
import { Route, Routes } from 'react-router-dom';
import Footer from './componenntes/Footer/Footer';
import Navbarcom from './componenntes/Navbar/Navbar';
import SignIn from './page/SingIn/SingIn';
import LogIn from './page/LogIn/Login';

function App() {
  return (
    <div className="App">
      <Navbarcom />
     <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/shop' element={ <Category />} />
      <Route path='/men' element={ <Category />} />
      <Route path='/woman' element={ <Category />} />
      <Route path='/blog' element={ <Blogs_pags />} />
      <Route path='/contact' element={ <Contact />} />
      <Route path='/sign' element={ <SignIn />} />
      <Route path='/LogIn' element={ <LogIn />} />

     </Routes>
     <Footer />
    


    </div>
  );
}

export default App;
