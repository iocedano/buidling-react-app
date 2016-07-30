
import ReactDom from 'react-dom';
import React, { component } from 'react';
import { Router, browserHistory } from 'react-router';

import routes from './routes';
import jQuery from 'jquery';

const $ = jQuery;

ReactDom.render((<Router history={browserHistory} routes={routes} />), document.getElementById('app'));
