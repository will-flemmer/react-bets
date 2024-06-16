import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useQuery } from "@apollo/client";

const Index = () => {

  const {} = useQuery(BasicQuery)
  return (
    <div className="App">
      <div className="container">
        <Typography variant='h2'>React + Graphql + Go</Typography>
        <Button variant='contained'>Hello</Button>
      </div>
    </div>
  );
}

export default Index;
