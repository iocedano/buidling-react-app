
import ReactDom from 'react-dom';
import React, { component } from 'react';
import { Router, browserHistory } from 'react-router';
import InitializeActions from './actions/initializeActions';

InitializeActions.initApp();

import jQuery from 'jquery';
const $ = jQuery;
import routes from './routes';

ReactDom.render((<Router history={browserHistory} routes={routes} />), document.getElementById('app'));
