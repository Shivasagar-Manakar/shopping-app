
import './App.css';
import PublicApp from './user/publicapp';
import AdminApp from './admin/adminapp';

function App() {
  if (localStorage.getItem("id") == null) {
    return (<PublicApp />);
  } else {
    return (<AdminApp />);
  }


}

export default App;


// import { ToastContainer, toast } from 'react-toastify';