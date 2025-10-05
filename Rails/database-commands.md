`db:migrate` runs (single) migrations that have not run yet.

`db:create` creates the database

`db:drop` deletes the database

`db:schema:load` creates tables and columns within the existing database following schema.rb. This will delete existing data.

`db:setup` does `db:create`, `db:schema:load`, `db:seed`

`db:reset` does `db:drop`, `db:setup`

`db:migrate:reset` does `db:drop`, `db:create`, `db:migrate`

https://stackoverflow.com/questions/10301794/difference-between-rake-dbmigrate-dbreset-and-dbschemaload
