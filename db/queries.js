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
    },
    getSingleBerita(id){
        return knex('berita').where('id', id)
    },
    deleteBerita(id){
        return knex('berita').where('id', id).del()
    },
    postBerita(body){
        return knex('berita').insert({
             title: body.title,
             images_url: body.images_url,
             content: body.content,
             create_at: new Date().toISOString(),
             modify_at: new Date().toISOString()
        })
    },
    updateBerita(id, body){
        return knex('berita').where('id', id).update({
            title: body.title,
            images_url: body.images_url,
            content: body.content,
            modify_at: new Date().toISOString()
        })
    },
    getAllhigh_official(){
        return knex('high_official')
    },
    getSinglehigh_official(id){
        return knex('high_official').where('id', id)
    }
}