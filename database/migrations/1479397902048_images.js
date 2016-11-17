'use strict'

const Schema = use('Schema')

class ImagesTableSchema extends Schema {

  up () {
    this.create('images', (table) => {
      table.increments()
      table.timestamps()
      table.string('url')
      table.string('title')
      table.text('description')
      table.integer('like_count')
    })
  }

  down () {
    this.drop('images')
  }

}

module.exports = ImagesTableSchema
