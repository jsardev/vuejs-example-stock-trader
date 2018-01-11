import { Home } from './modules/app';
import { Portfolio } from './modules/portfolio';
import { Stocks } from './modules/stock';

export default [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/stocks', component: Stocks }
];
