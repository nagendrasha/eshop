import { Grid } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Grid container sx={{ display:'flex',justifyContent:'center' }}>
      <Grid item lg={4}>
        <Header/>
        <Homepage/>
        <Footer/>
      </Grid>
    </Grid>
    </>
  );
}

export default App;
