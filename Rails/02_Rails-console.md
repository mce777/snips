`bundle exec rails c`

```
pry(main)> User.count
pry(main)> User.find(id: 4)
pry(main)> User.where(id: 4)
pry(main)> User.where.not(id: 4)
pry(main)> User.where.not(id: 4).count // mostly want to use count
pry(main)> User.where.not(id: 4).size
```
