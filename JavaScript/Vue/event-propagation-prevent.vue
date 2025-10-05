<template>
  <!-- @click is the event listener -->
  <!-- ".native.stop" prevents the event from propagating up and starting shit -->
  <VBtn @click.native.stop="onClick">
    button text
  </VBtn>

</template>

<script>
export default {
  name: "event-propagation-prevent",
  methods: {
    onClick() {
      return 'something'
    }
  }
}
</script>
