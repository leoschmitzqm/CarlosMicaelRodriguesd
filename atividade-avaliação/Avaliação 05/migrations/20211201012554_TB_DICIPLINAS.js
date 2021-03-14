exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_DICIPLINAS', table => {
        table.increments('id').primary()
        table.string('nome_diciplina').notNull()
    }).then(function () {
        return knex('TB_DICIPLINAS').insert([
            { nome_diciplina: 'Programação Web'},
            { nome_diciplina: 'Banco de Dados'},
        ])
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_DICIPLINAS')
};