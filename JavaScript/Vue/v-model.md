# V-Model (forms)

Creates two-way data-binding `input <--> data`. For reference, `v-bind` for one-way data-binding.

Creates a relationship between the `data` in the **instance/component** and a `form input`, so you can dynamically update values

v-model internally uses different properties and emits different events for different input elements:

- `text` and `textarea` elements use *value* **property** and `input` **event**;
- `checkboxes` and `radiobuttons` use *checked* **property** and `change` **event**;
- `select` fields use *value* as a **property** and `change` as an **event**.

## Modifiers

**v-model.trim** will strip any leading or trailing whitespace from the bound string

**v-model.number** changes strings to number inputs
