import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function List () {

    const [taskList, setTaskList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        Axios.get("http://localhost:3002/getTasks").then((response) => {
            console.log(response.data);
            setTaskList(response.data);
            console.log(taskList);
            setIsLoading(false);
        })
    }, []);


    if (isLoading == true) {
        return(
            <p>Loading List, please wait...</p>
        );
    }

    else {
        return(
            taskList.map(( {_id, name, description, incharge, status}) => (
                <div key={_id}>
                    <Typography>Name: {name}</Typography>
                    <Typography>Description: {description}</Typography>
                    <Typography>In Charge: {incharge}</Typography>
                </div>
            ))
        );
    }
    
}

export default List;