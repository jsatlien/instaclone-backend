'use strict'

const Schema = use('Schema')

class CommentsTableSchema extends Schema {

  up () {
    this.create('comments', (table) => {
      table.increments()
      table.timestamps()
      table.integer('image_id').notNullable()
      table.string('content', 150).notNullable()
    })
  }

  down () {
    this.drop('comments')
  }

}

module.exports = CommentsTableSchema
