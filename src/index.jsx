import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './common/containers/App';
import './styles/main.css';
import Routes from './routes';

ReactDOM.render(
  <AppContainer>
    <Routes />
  </AppContainer>,
  document.getElementById('root')
);
