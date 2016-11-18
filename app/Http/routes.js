'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.post('/images', 'ImageController.create')
Route.get('/images', 'ImageController.show')

Route.delete('/images/:id', 'ImageController.delete')
Route.patch('/images/:id', 'ImageController.update')
Route.get('/images/:id', 'ImageController.showSingle')

Route.post('/images/:id/comments', 'CommentController.create')
Route.patch('/image/:id/comments/:comment_id', 'CommentController.update')
