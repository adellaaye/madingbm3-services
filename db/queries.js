const knex = require('./knex');

module.exports = {
    getAllBerita() {
        return knex('berita')
    },
    getAllMading() {
        return knex('mading')
    },
    getSingleMading(id){
        return knex('mading').where('id', id)
    },
    deleteMading(id){
        return knex('mading').where('id', id).del()
    },
    postMading(body) {
        return knex('mading').insert({
            images_url: body.images_url,
            title: body.title,
            content: body.content,
            create_at: new Date().toISOString(),
            modify_at: new Date().toISOString()
        })
    },
    updateMading(id, body){
        return knex('mading').where('id', id).update({
            images_url: body.images_url,
            title: body.title,
            content: body.content,
            modify_at: new Date().toISOString()
        })
    }
}