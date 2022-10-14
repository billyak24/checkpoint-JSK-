import './App.css';
import FullName from './Components/Profile/FullName'
import Address from './Components/Profile/Address'
import ProfilePhoto from './Components/Profile/ProfilePhoto'

function App() {
  return (
    <div id='pPhoto'>
     <ProfilePhoto/>
    
      <div id='container'>
      <FullName />
      <b>lm a Full stack developer 😊 <br></br> in my courses l learned a lot of programming languages , <br></br>i had some experience at work also <br></br>hope you like my little website </b>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <  Address />
      <br></br>
      <div id='HEY'>
      <a href='https://github.com/billyak24'> <img src='/github.png' alt='img'/></a>
      </div>
      </div>
      
    </div>

  );
}

export default App;
