import {groupBy} from 'lodash';
import React from 'react'
import reactDom from 'react-dom'
import App from './APP'
import {add, sub} from './utils';
// import groupBy from 'loadsh/groupBy'

console.log(add(1, 2));
reactDom.render(<APP/>, document.getElementById('app'))