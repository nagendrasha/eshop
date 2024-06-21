import { Grid } from '@mui/material';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <>
    <Grid container sx={{ display:'flex',justifyContent:'center' }}>
      <Grid item lg={4}>
        <Header/>

      </Grid>
    </Grid>
    </>
  );
}

export default App;
