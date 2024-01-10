import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { Container } from '@mui/system';

function App() {
  useEffect(()=>{
    document.title="Home"

  },[])
  return (
    <Container maxWidth="xl">
        <Button variant='contained'>TEST</Button>

    </Container>
    
    
    
  );
}

export default App;
