import Config from './Config';

const ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const PLATFORM = process.env.PLATFORM ? process.env.PLATFORM : 'local';
const VERSION = process.env.VERSION ? process.env.VERSION : 'stag';

const KEY = `${ENV}-${PLATFORM}-${VERSION}`;
// console.log('>>>>', KEY);
export const API_URL = Config[KEY].API_URL;
export const AUTH_URL = Config[KEY].AUTH_URL;

// Helpers
export const APP_AUTH = {
  set: ({ user, password }) => {
    localStorage.setItem('user', user);
    localStorage.setItem('password', password);
  },
  remove: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('password');
  },
  get: () => ({
    user: localStorage.getItem('user'),
    password: localStorage.getItem('password'),
  }),
  get notEmpty() {
    const cond1 = this.get().user !== null;
    const cond2 = this.get().user !== '';
    return cond1 && cond2;
  },
  getAuthHeader: () => {
    const { user, password } = APP_AUTH.get();
    return { Authorization: `Basic ${Buffer.from(`${user}:${password}`).toString('base64')}` };
  },
};
