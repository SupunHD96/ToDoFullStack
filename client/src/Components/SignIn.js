import { Button, Container, Grid, TextField, Typography} from '@mui/material';
import { useState } from 'react';
import Axios from 'axios';

function SignIn ({triggerLogIn}) {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

function Login () {

    Axios.post("http://localhost:3002/login", {
            username: email,
            password: password,
    }).then((response) => {
        alert(response.data.message);
        console.log(response.data.message);
        triggerLogIn(true);
    }).catch((error) => {
        alert(error.response.data.message);
        console.log(error.response.data.message)
        triggerLogIn(false);
    });
}

    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5">Sign In</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField required id="emailLog" label="Email Address" name="emailLog" autoComplete='email' type="email" autoFocus
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField required id="passwordLog'" label="Password" name="passwordLog" type="password" autoComplete='current-password'
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" onClick={Login}>Sign In</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default SignIn;