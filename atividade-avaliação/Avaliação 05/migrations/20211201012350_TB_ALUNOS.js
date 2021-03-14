
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_ALUNOS', table => {
        table.increments('id').primary()
        table.string('nome_aluno').notNull()
    }).then(function () {
        return knex('TB_ALUNOS').insert([
            { nome_aluno: 'Carlos Micael'},
            { nome_aluno: 'Felipe dos Santos'},
        ])
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_ALUNOS')
};