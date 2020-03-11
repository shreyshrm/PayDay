import React from 'react';
import './Statement.css';
import {Card, CardHeader, Row, CardTitle} from 'shards-react';
import notification from './icons8-notification-100.png'
// import {CardBody, Card, CardHeader, CardTitle, Button, CardFooter, Row} from 'shards-react';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

function StatementPage() {
  return (
    <div class='centerClass'>
      <Card>
        <CardHeader>Transactions</CardHeader>
        <div className='totalMoney'>
          <h1>Total: $1900.34</h1>
        </div>
        <div>
          <CardTitle className='DateClass'>
            March 10, 2020
            <div className='DateBorder'></div>
          </CardTitle>
          <div className='MerchantName'>
            <h5>Amazon.ca</h5>
            <h5>-$18.07</h5>
          </div>
        </div>
        <div>
          <CardTitle className='DateClass'>
            March 09, 2020
            <div className='DateBorder'></div>
          </CardTitle>
          <div className='MerchantName'>
            <h5>Starbucks Reload</h5>
            <h5>-$5.00</h5>
          </div>
          <div className='MerchantName'>
            <h5>Uber Eats</h5>
            <h5>-$38.30</h5>
          </div>
        </div>
        <div>
          <CardTitle className='DateClass'>
            March 08, 2020
            <div className='DateBorder'></div>
          </CardTitle>
          <div className='MerchantName'>
            <h5>TD Pay</h5>
            <div className='payday'>
              <img src={notification} className='notification'></img>
              <h5>+$2262.00</h5>
            </div>
          </div>
          <div className='MerchantName'>
            <h5>Settlement Co.</h5>
            <h5>-$2.77</h5>
          </div>
        </div>
        <div>
          <CardTitle className='DateClass'>
            March 07s, 2020
            <div className='DateBorder'></div>
          </CardTitle>
          <div className='MerchantName'>
            <h5>Sharetea</h5>
            <h5>-$5.99</h5>
          </div>
          <div className='MerchantName'>
            <h5>Farm Boy</h5>
            <h5>-$14.97</h5>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default StatementPage;
