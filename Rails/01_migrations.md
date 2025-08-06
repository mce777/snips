#### Easy way to migrate
`bundle exec rails generate model NiceName color:string healthy:boolean`
- outside of Rails console
- will generate
  - model file
  - migration file
  - spec file
  - factory file
 
#### Updating a table
first run this: `bundle exec rails generate migration relevant_name`

```ruby
class AddNiceMigration < ActiveRecord::Migration[7.2]
  # this file will be generated, but the following zou need to define
  def change
    add_column :model_name_pluralized, :field_name, :type
  end
end
```
- then run `bundle exec db:migrate`
- check `schema.rb` to see your changes
- if you need to rollback your changes: `bundle exec rails db:rollback`

Nice reference: https://rails-generate.com
