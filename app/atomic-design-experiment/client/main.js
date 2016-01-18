import {initContext} from './configs/context';
import {initRoutes} from './configs/routes';
import actions from './actions';

const context = initContext();
initRoutes(context, actions);
