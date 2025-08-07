#### Byebug stops the application at the stop it is placed within your code.

```rb
private def inform_person(whatever, attributes)
  byebug
  return if whatever.the_person.email.blank?
  return if attributes[:the_person].blank?

  # do stuff
end
```
- press `n` to go to next line
  - you can type `whatever.the_person.email.blank?` to see what the output is (same for next line)
- press `c` to continue with the app
