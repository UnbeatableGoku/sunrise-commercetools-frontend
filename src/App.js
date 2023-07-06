import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainRoute from './routes/Routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <MainRoute />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
