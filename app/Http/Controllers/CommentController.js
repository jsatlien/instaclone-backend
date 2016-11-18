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
  * show (request, response) {
    let imageId = request.param('id')
    let comments = yield Comment.query().where('image_id', imageId).orderBy('created_at', 'desc')

    response.json(comments)
  }
  * update (request, response) {
    let commentId = request.param('comment_id')
    let newData = request.only('content')

    let comment = yield Comment.findBy('id', commentId)
    console.log(comment)
    if (comment) {
      comment.fill(newData)
      yield comment.save()

      response.status(201).json(comment)
    } else {
      response.status(404).json({error: 'Could not find comment.'})
    }
    console.log(newData)
  }
}

module.exports = CommentController
