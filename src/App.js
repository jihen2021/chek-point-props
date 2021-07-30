
import './App.css';

import ProfileComponent from './profile/ProfileComponent';



const App = () => {
 function HandlName() {
   alert('jihen')
   
 }
 return (
  <div>
      
      <ProfileComponent Profile="Etudient" FullName="Jihen" Bio="salut les amies" data={HandlName}>
        <img src="./profil.png"/></ProfileComponent>
       
      </div>
 );
};
export default App;

