import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import App from './components/App';

// CSS
import './index.css'

ReactDOM.render(<BrowserRouter ><App /></BrowserRouter>, document.querySelector("#root"));

