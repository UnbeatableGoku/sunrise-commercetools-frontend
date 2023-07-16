import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainRoute from "./routes/Routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { VersionProvider } from "./context/versionContext";

function App() {
  return (
    <BrowserRouter>
      <VersionProvider>
        <MainRoute />
        <ToastContainer />
      </VersionProvider>
    </BrowserRouter>
  );
}

export default App;
