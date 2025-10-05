<template>
  <div class="mb-4" data-test="car-contract-form">
    <ScipEnumSelect
      v-model="innerProductDatum.noClaimsClassFullyComprehensive"
      enum-type="NoClaimsClassFullyComprehensive"
      :label="$t('carInsuranceProduct.noClaimsClassFullyComprehensive.label')"
      name="noClaimsClassFullyComprehensive"
      clearable
      @click:clear="nccFullyComprehensiveInputCleared('whatever you wanna emit')"
    />
    <!-- you could also do something like @click="$emit('eventWeAreEmitting')-->
    <!-- then, the receiving component has something like @eventWeAreEmitting="usefulFunction"-->

    <!--the receiving component (in a SEPARATE file) looks like this....-->
    <!--see the nccFullyComprehensiveInputCleared function below -->
    <ScipProductSelectCard
        data-test="productSelect-input"
        :contract="contract"
        :hide-select="isEditView"
        :is-policed-contract="isPolicedContract"
        :product-key="$route.query.productkey"
        :product.sync="product"
        @ncc:change="activateNccFullyComprehensiveChange"
    />
    <!--note that if you're NOT receiving any event data,
    you need to call the function with "()" or it doesn't work-->
  </div>
</template>

<script>

export default {
  methods: {
    // this only works when the param is just 'e'
    nccFullyComprehensiveInputCleared(e) {
      // clearing out input now emits this event
      console.log(e, 'logging data from event')
      this.$parent.$emit('ncc:change', e)
    },

    // THIS method then in SEPARATE, receiving file...
    // see, no param where it's being called, but used here
    // you can potentially use 'e' if you need to cover more cases
    activateNccFullyComprehensiveChange(e) {
      console.log(e, '::::showing that event data is being received::::')
      this.nccFullyComprehensiveChanged = true
    },
  }
}
</script>
