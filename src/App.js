import React from 'react';
import './App.css';
import {CardBody, Card, CardHeader, CardTitle, Button, CardFooter, Row} from 'shards-react';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

function App() {
  return (
    <div>
      <header>
        Good Morning Shrey!!
      </header>
      <Card style={{ maxWidth: "1000px" }}>
        <CardHeader>Deposit Accounts (2)</CardHeader>
        <CardBody>
          <Row className='accountUI'>
            <div>
              <CardTitle>Chequing Account</CardTitle>
              <h3>$1900.34</h3>
            </div>
            <Button>Read more &rarr;</Button>
          </Row>
        </CardBody>
        <CardBody>
          <Row className='accountUI'>
            <div>
              <CardTitle>Savings Account</CardTitle>
              <h3>$3200.12</h3>
            </div>
            <Button>Read more &rarr;</Button>
          </Row>
        </CardBody>
        <CardFooter>Total: $5100.46</CardFooter>
      </Card>
    </div>
  );
}

export default App;
