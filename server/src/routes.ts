import {
  AdminController,
  AppController,
} from './controllers';

// Routes for application server
const Routes = [
  {
    method: 'get',
    route: '/cards',
    controller: AdminController,
    action: 'getFlashCards',
    auth: false,
  }, {
    method: 'get',
    route: '/cards/valid',
    controller: AdminController,
    action: 'getValidFlashCards',
    auth: false,
  }, {
    method: 'post',
    route: '/cards/create',
    controller: AdminController,
    action: 'createFlashCard',
    auth: false,
  }, {
    method: 'post',
    route: '/cards/update',
    controller: AdminController,
    action: 'updateFlashCard',
    auth: false,
  }];

export default Routes;
