'use strict'

const Image = use('App/Model/Image')
class ImageController {
  * create (request, response) {
      let data = request.only('title', 'description', 'url');
      let image = yield Image.create(data);

      response.json(image);
  }

  * show (request, response) {
      let images = yield Image.query()

      response.json(images)
  }

  * delete (request, response) {
      let imageId = request.param('id')
      if (imageId) {
        let deleteImage = yield Image.query().where('id', imageId).del()
        let imageTable = yield Image.query()

        response.status(202).json('Image removed.', imageTable)
      } else {
        response.status(404).json({error: 'Image not found.'})
      }
  }
}

module.exports = ImageController
