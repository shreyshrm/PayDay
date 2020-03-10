import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';

function App() {
  return (
    <div>
      <header>
        This is second page
      </header>

      <main>
        {this.props.children}
      </main>

      <footer>
        Your copyright message
      </footer>
    </div>
  );
}