exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_ALUNO_DICIPLINA', table => {
        table.integer('nota').unsigned()
        table.integer('periodo').unsigned()
        table.integer('diciplinas_id').unsigned()
        table.integer('alunos_id').unsigned()
        table.foreign('diciplinas_id').references('TB_DICIPLINAS.id')
        table.foreign('alunos_id').references('TB_ALUNOS.id')
        table.primary(['diciplinas_id', 'alunos_id'])
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_ALUNO_DICIPLINA')
};