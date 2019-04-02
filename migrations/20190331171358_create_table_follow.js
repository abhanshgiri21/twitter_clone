exports.up = knex => {
    return knex.schema.createTable('follow', table => {
        table.increments();
        table
            .integer('following_user')
            .unsigned()
            .references('id')
            .inTable('user')
            .onDelete('cascade');
        table
            .integer('followed_user')
            .unsigned()
            .references('id')
            .inTable('user')
            .onDelete('cascade');
        table.timestamps(false, true);
    })
};

exports.down = knex => {

};
