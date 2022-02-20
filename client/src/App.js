import { Button, Grid, Typography } from '@mui/material';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import List from './Components/List';
import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {

const [userDetails, setUserDetails] = useState([])
const [isLogged, setIsLogged] = useState(false)

const triggerLogIn =  (trigger) => {
  setIsLogged(trigger);
  console.log(trigger);
}

useEffect(() => {
  Axios.get("http://localhost:3002/getUsers").then((response => {
    setUserDetails(response.data);
    console.log(response.data);
  }))
}, []);

  if ((isLogged) == true) {
    return(
      <div className='App'>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <List/>
          </Grid>
        </Grid>
      </div>
    );
  }

  else {
    return (
      <div className="App">
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <SignIn triggerLogIn={triggerLogIn}/>
            </Grid>
            <Grid item xs={12}>
              <SignUp/>
            </Grid>
            <Grid item xs={12}>
              <Button onClick={() => triggerLogIn(true)}>Click</Button>
            </Grid>
          </Grid>
      </div>
    );
  }
  
}

export default App;
