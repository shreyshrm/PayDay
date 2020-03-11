import React from 'react';
import './Home.css';
import {CardBody, Card, CardHeader, CardTitle, Button, CardFooter, Row} from 'shards-react';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='centerClass'>
      <Card style={{ maxWidth: "1000px" }}>
        <CardHeader>Deposit Accounts (2)</CardHeader>
        <CardBody>
          <Row className='accountUI'>
            <div>
                <CardTitle>Chequing Account</CardTitle>
              <h3>$1900.34</h3>
            </div>
            <Link to='/statement'> <Button>See more &rarr;</Button></Link>
          </Row>
        </CardBody>
        <CardBody>
          <Row className='accountUI'>
            <div>
              <CardTitle>Savings Account</CardTitle>
              <h3>$3200.12</h3>
            </div>
            <Button>See more &rarr;</Button>
          </Row>
        </CardBody>
        <CardFooter>Total: $5100.46</CardFooter>
      </Card>
    </div>
  );
}

export default Home;
