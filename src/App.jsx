
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './companents';
import { Footer } from './companents';
import { Home, About, Contact, Users, UserSingle } from './page';
function App() {
  return ( 
    <div className="App container">
     <Header />
      
     <Routes>
       <Route path='/' element ={<Home />} />
       <Route path='/users' element ={<Users />} />
       <Route path='/users/:userId' element ={<UserSingle />} />
       <Route path='/about' element ={<About />} />
       <Route path='/contact' element ={<Contact />} />
       <Route path='*' element ={<Error />} />
     
     </Routes>
     <Footer />
    </div>
  );
}
function Error() {
  return <p>404 error</p>
}


export default App;
