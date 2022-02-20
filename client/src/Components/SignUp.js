import { Button, Container, Grid, TextField, Typography} from '@mui/material';
import { useState } from 'react';
import Axios from 'axios';

function SignUp () {

const [user, setUser] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

function Register() {
    Axios.post("http://localhost:3002/createUser", {
        username: user,
        password: password,
        admin: true,
    }).then((response) => {
      alert("You signed up")
    });
  }

    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5">Sign Up</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField required id="usernameReg" label="Username" name="usernameReg" autoComplete='username'
                    onChange={(e) => {
                        setUser(e.target.value);
                    }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField required id="emailReg" label="Email Address" name="emailReg" type="email" autoComplete='email'
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField required id="passwordReg'" label="Password" name="passwordReg" type="password" autoComplete='current-password'
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" onClick={Register} >Sign Up</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default SignUp;