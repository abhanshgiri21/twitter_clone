exports.up = knex => {
    return knex.schema.createTable('tweets', table => {
        table.increments();
        table
            .integer('userId')
            .unsigned()
            .references('id')
            .inTable('user')
            .onDelete('cascade');
        table.string('tweet');
        table.timestamps(false, true);
    })
};

exports.down = knex => {

};
