import Typography from '@material-ui/core/Typography'

import useStyles from './styles';

function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <Typography className={classes.heading} variant="h2" color="initial" align="center"> Celestial </Typography>

      </div>
      
  );
}

export default App;
