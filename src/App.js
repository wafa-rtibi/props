import React  from 'react';
import './App.css';
import Profil from './profil/Profil';


function App() {
  const handleName=(name)=>alert(name) //function props
  return (
    <div className="App">
      <Profil fullname="wafa rtibi" bio="welcome in my profil" profession="web developer" handle={handleName}>
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/user-profile-2871145-2384395.png" alt="picture"></img>
        </Profil>
      
    </div>
  );
}

export default App;
