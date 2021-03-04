const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./atividade-avaliação/Avaliação04.db', (error) => {
if (error) console.log(error);
});

db.serialize(() => {
db.run('create table if not exists TB_ALUNOS (id integer primary key autoincrement , NOME_ALUNO text)', (error) => {
if (error) console.log(error);
});
});

db.serialize(() => {
db.run('create table if not exists TB_DISCIPLINAs (id integer primary key autoincrement , NOME_DISCIPLINA text)', (error) => {
if (error) console.log(error);
});

});

db.serialize(() => {
db.run('create table if not exists TB_ALUNO_DISCIPLINA (Periodo integer, Nota real, TB_ALUNOS_ID integer not null, TB_DISCIPLINAS_ID integer not null, FOREIGN KEY (TB_ALUNOS_ID) REFERENCES TB_ALUNOS (ID), FOREIGN KEY (TB_DISCIPLINAS_ID) REFERENCES TB_DISCIPLINAS(ID), PRIMARY KEY (TB_ALUNOS_ID,TB_DISCIPLINAs_ID))', (error) => {
if (error) console.log(error);
});
});