<!-- user defined in the data props for example --> 
<!-- default is user last name, but user object exposed -->
<span>
  <slot v-bind:user="user">
    {{ user.lastName }}
  </slot>
</span>

<!-- parent then (optionally) accessig the first name instead -->
<current-user>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>
</current-user>
