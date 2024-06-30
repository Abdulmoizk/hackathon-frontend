import logo from './logo.svg';
import './App.css';
import AttendanceReport from './component/AttendanceReport';
import Signin from './component/signin'
import Signup from './component/register';
import Router from './router/router';
function App() {
  return (
    <div className="App">
      <Router />
  </div>
  );
}

export default App;
