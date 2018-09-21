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
    },
    deletehigh_official(id){
        return knex('high_official').where('id', id).del()
    },
    posthigh_official(body){
        return knex('high_official').insert({
            first_name: body.first_name,
            last_name: body.last_name,
            degree: body.degree,
            photo_url: body.photo_url,
            position: body.position,
            vision: body.vision,
            create_at: new Date().toISOString(),
            modify_at: new Date().toISOString()
        })
    },
    updatehigh_official(id, body){
        return knex('high_official').where('id', id).update({
            first_name: body.first_name,
            last_name: body.last_name,
            degree: body.degree,
            photo_url: body.photo_url,
            position: body.position,
            vision: body.vision,
            modify_at: new Date().toISOString()

        })
    }

}