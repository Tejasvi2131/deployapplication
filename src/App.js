import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './components/Header';
import First from './components/Firstarea';
import Second from './components/Secondarea';
import Third from './components/Thirdarea';
import Fourth from './components/Fourtharea';
import Fivth from './components/Fivtharea';
import Footer from './components/Footer';
function App() {
  return (
   <>
     <Header />
     <First />
     <Second />
     <Third />
     <Fourth />
     <Fivth />
     <Footer />
   </>
  );
}
export default App;
