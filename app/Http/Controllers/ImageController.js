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
      let image = yield Image.findBy('id', imageId)
      if (image) {
        let deleteImage = yield Image.query().where('id', imageId).del()

        response.status(202).json({})
      } else {
        response.status(404).json({error: 'Image not found.'})
      }
  }

  * update (request, response) {
    let imageId = request.param('id')
    let newData = request.only('title', 'description', 'url', 'like_count')
    let updateImage = yield Image.findBy('id', imageId)
    if (updateImage) {
      updateImage.fill(newData)
      yield updateImage.save()

      response.status(201).json(updateImage)
    } else {
      response.status(404).json({error: 'Image not found.'})
    }

  }

  * showSingle(request, response) {
      let imageId = request.param('id')
      let image = yield Image.findBy('id', imageId)

      if (image) {
        response.json(image)
      } else {
        response.json({ error: 'Image not found.' })
      }
    }
}

module.exports = ImageController
