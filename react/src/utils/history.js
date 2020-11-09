import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const navigateTo = url => history.push(url);

export default history;

export { navigateTo };
