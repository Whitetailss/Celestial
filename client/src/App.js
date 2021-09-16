import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography'
import Form from './components/Form/Form';

import useStyles from './styles';
import { Grid, Container } from '@material-ui/core';

function App() {

  const [currentId, setCurrentId] = useState(0);

  const classes = useStyles();

  return (
    <div className="App">
      <Typography className={classes.heading} variant="h2" color="initial" align="center"> Celestial </Typography>
        <Container >
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
          </Grid>
        </Container>
      </div>
      
  );
}

export default App;
