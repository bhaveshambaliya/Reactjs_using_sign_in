import Login from './component/Login';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="auth-wrapper d-flex no-block justify-content-center align-items-center">
      <Login />
    </div>
  );
}

export default App;
