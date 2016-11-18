'use strict'

const Comment = use("App/Model/Comment")
class CommentController {
  * create (request, response) {
    let imageId = request.param('id')
    let data = request.only('content')
    data.image_id = imageId
    let newComment = yield Comment.create(data)

    response.status(201).json(newComment)
  }
}

module.exports = CommentController
