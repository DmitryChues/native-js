import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { splitIntoWoprds } from './01-hello-tests/01'
import { sum } from './03-function/03';
import { User } from './06-callbacks/06-callback';

const a = sum;

const sentense = "Hello my friends!";
const result = splitIntoWoprds(sentense);


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<User />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
