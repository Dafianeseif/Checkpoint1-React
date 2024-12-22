// src/App.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const App = () => {
  const firstName = "Seif Dafiane"; // Vous pouvez remplacer "John" par votre propre prénom

  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Produit</Card.Title>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      
      <p>Bonjour, {firstName ? firstName : "!"}</p>
      {firstName && <img src="https://e7.pngegg.com/pngimages/378/793/png-clipart-nerd-geek-geek-face-photography.png" alt="Votre photo" style={{ width: '100px' }} />}
    </div>
  );
};

export default App;
