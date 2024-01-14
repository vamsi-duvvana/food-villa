import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';

function App() {

  const [user, setUser] = useState({
    name: "Vamsi",
    email: "varia@gmail.com"
  })

  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: setUser
      }}
    >
      <Header />
      {/* Outlet */}
      {/* <Body /> */}
      <Outlet />
      {/* <AboutUs/>
      <Contact/> */}
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
