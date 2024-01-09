import { makeStyles } from '@material-ui/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Homepage from './pages/Homepage';
import Coinpage from './pages/Coinpage';

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",

  }
}))



function App() {

  const classes = useStyles()

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/coin/:id' element={<Coinpage />} />
        </Routes>

      </div>
    </BrowserRouter >
  );
}

export default App;
