import classes from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './Components/TopBar/Top-bar';
import Newscard from './Components/NewsCards/news cards';
import TypeAnimation from 'react-type-animation';
import React, {useState} from 'react';
import Footer from './Components/Footer/footer';

function App() {
  const [country, setcountry] = useState('in')
  const [language, setlanguage] = useState('hi')
  const [category, setcategory] = useState('world')

  function countryclick(value){
    setcountry(value);
  }
  function languageclick(value){
    setlanguage(value);
  }
  function categoryclick(value){
    setcategory(value);
  }
  return (
      <div className={classes.main}>
        
        <Topbar countryclick = {countryclick} languageclick = {languageclick} categoryclick = {categoryclick}/>
        <TypeAnimation 
          className = {classes.animation}
          cursor={false}
          sequence={['Welcome to the Top news headlines', 2000, 'Search by your Favourite language and Country', 2000]}
          wrapper="h2"
          repeat = {2}
        />
        <Newscard country = {country} language = {language} category = {category}/>
        <Footer/>
      </div>
  );
}

export default App;
