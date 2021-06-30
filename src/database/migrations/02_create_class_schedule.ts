import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('class_schedule', table => {
    table.increments('id').primary();

    table.integer('week_day', 4).notNullable();
    table.integer('from', 6).notNullable();
    table.integer('to', 6).notNullable();

    table.integer('class_id')
    .notNullable()
    .references('id')
    .inTable('classes')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropSchema('class_schedule');
}