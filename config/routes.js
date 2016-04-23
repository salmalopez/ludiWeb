/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
  
  'POST /api/school' : 'SchoolsController.save',
  'GET /api/school' : 'SchoolsController.get',
  'GET /api/school/:id' : 'SchoolsController.get',
  'DELETE /api/school/:id' : 'SchoolsController.destroy',
  'PUT /api/school' : 'SchoolsController.update',




  'POST /api/user' : 'UserController.save',
  'GET /api/user' : 'UserController.get',
  'GET /api/user/:id' : 'UserController.get',
  'DELETE /api/user/:id' : 'UserController.destroy',
  'PUT /api/user' : 'UserController.update',

  /***************************************************************************
  *                                                                          *
  * Rutas MySQL                                                              *
  *                                                                          *
  ***************************************************************************/

  /***************************************************************************
  * INICIO DE SESION                                                         *
  ***************************************************************************/
  '/api/logout'                   : 'LoginController.logout',
  'GET      /'                    : 'AppController.main',
  'GET      /:param'              : 'AppController.main',
  'POST     /api/login'           : 'LoginController.login',
  'GET      /api/profile'         : 'LoginController.profile',
  'POST     /api/loginApp'        : 'LoginController.loginApp',

  /***************************************************************************
  * RUTAS USUARIOS                                                           *
  ***************************************************************************/

  'POST     /api/usuario'             : 'UsuarioController.crear',
  'GET      /api/usuario'             : 'UsuarioController.consultarUsuarios',
  'GET      /api/usuario/:id'         : 'UsuarioController.consultarUsuario',
  'PUT      /api/usuario'             : 'UsuarioController.actualizar',
  'DELETE   /api/usuario/:id'         : 'UsuarioController.borrar',

  /***************************************************************************
  * RUTAS NOTICIAS                                                           *
  ***************************************************************************/

  'POST     /api/noticia'                     : 'NoticiaController.crear',
  'GET      /api/noticia'                     : 'NoticiaController.consultarNoticias',
  'GET      /api/noticia/:id'                 : 'NoticiaController.consultarNoticia',
  'GET      /api/noticia/metodo/longitud'     : 'NoticiaController.longitudNoticia',
  'PUT      /api/noticia'                     : 'NoticiaController.actualizar',
  'DELETE   /api/noticia/:id'                 : 'NoticiaController.borrar',

  /***************************************************************************
  * RUTAS ESCUELAS                                                           *
  ***************************************************************************/

  'POST     /api/escuela'                     : 'EscuelaController.crear',
  'GET      /api/escuela'                     : 'EscuelaController.consultarEscuelas',
  'GET      /api/escuela/:id'                 : 'EscuelaController.consultarEscuela',
  'PUT      /api/escuela'                     : 'EscuelaController.actualizar',
  'DELETE   /api/escuela/:id'                 : 'EscuelaController.borrar',

  /***************************************************************************
  * RUTAS ESTADOS                                                            *
  ***************************************************************************/

  'POST     /api/estado'                      : 'EstadoController.crear',
  'GET      /api/estado'                      : 'EstadoController.consultarEstados',
  'GET      /api/estado/:id'                  : 'EstadoController.consultarEstado',
  'PUT      /api/estado'                      : 'EstadoController.actualizar',
  'DELETE   /api/estado/:id'                  : 'EstadoController.borrar',

  /***************************************************************************
  * RUTAS ESTATUS                                                            *
  ***************************************************************************/

  'POST      /api/estatus'                    : 'EstatusController.crear',
  'GET       /api/estatus/:id'                : 'EstatusController.consultarEstatus',   

};
