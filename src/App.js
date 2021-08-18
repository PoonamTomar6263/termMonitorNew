
import './App.css';
import Header from './Header';
import RightBody from './RightBody';
import Sidebar from './Sidebar';

function App() {
  return (
    
    <div className="App">
     <Header/>
     <div className="app_box">
     <Sidebar/>
     <RightBody/>
     </div>
    
    </div>
    
  );
  
}

export default App;
