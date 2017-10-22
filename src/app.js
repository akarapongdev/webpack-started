import moment from 'moment';

import styles from './scss/app.scss';

var rightnow = moment().format('MMMM Do YYYY, h:mm:ss a');

console.log(rightnow);