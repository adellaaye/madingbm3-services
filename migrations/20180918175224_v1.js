
exports.up = function(knex, Promise) {

    return Promise.all([

        knex.schema.createTable('berita', (table) => {
            table.increments();
            table.text('title');
            table.text('images_url');
            table.text('content');
            table.timestamp("create_at").defaultTo(knex.fn.now())
            table.timestamp("modify_at").defaultTo(knex.fn.now())
        }),
        
        knex.schema.createTable('mading', (table) => {
            table.increments();
            table.text('images_url');
            table.text('title');
            table.text('content');
            table.timestamp("create_at").defaultTo(knex.fn.now())
            table.timestamp("modify_at").defaultTo(knex.fn.now())
        }),

        knex.schema.createTable('high_official', (table) => {
            table.increments();
            table.text('first_name');
            table.text('last_name');
            table.text('degree');
            table.text('photo_url');
            table.text('position');
            table.text('vision'); 
            table.timestamp("create_at").defaultTo(knex.fn.now())
            table.timestamp("modify_at").defaultTo(knex.fn.now())
        })

    ])
  
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('berita'),
        knex.schema.dropTable('mading'),
        knex.schema.dropTable('high_official')
    ])
};