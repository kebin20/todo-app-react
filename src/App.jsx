import * as React from 'react';
import classes from './App.module.css';

function App() {
  return (
    <React.Fragment>
      <nav>
        <h1 className={classes.nav__title}>Todo</h1>
        <button className={classes.nav__toggle}></button>
      </nav>
      <header className={classes.header}></header>
    </React.Fragment>
  );
}

export default App;
