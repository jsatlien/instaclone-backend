'use strict'

const Image = use('App/Model/Image')
class ImageController {
  * create (request, response) {
      let data = request.only('title', 'description', 'url');
      let image = yield Image.create(data);

      response.json(image);
  }
}

module.exports = ImageController
