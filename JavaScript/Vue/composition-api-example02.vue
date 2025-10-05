<template>
  <VForm v-if="!loading" @submit.prevent="submit">
    <VCard>
      <VCardTitle data-test="edit-payout-limit-header">
        <h2 class="text-h2">
          {{ $t('employees.employee.editPayoutLimit') }}
        </h2>
      </VCardTitle>

      <VCardText>
        <h5 class="text-h5">
          {{ $t('employees.actions.raiseDamageDisbursementLimits.standard') }}
        </h5>
        <p>
          {{ $t('employees.actions.raiseDamageDisbursementLimits.description') }}
        </p>
        <h5 class="text-h5">
          {{ $t('employees.actions.raiseDamageDisbursementLimits.specific') }}
        </h5>
        <p>
          {{ $t('employees.actions.raiseDamageDisbursementLimits.descriptionSpecific') }}
        </p>
        <VDivider class="mb-10" />
        <div
          v-for="(damageDisbursementLimit, index) in productData"
          :key="`disbursement-${index}`"
          class="d-flex"
        >
          <div
            class="col-md-5 py-4 pr-6"
            :class="!damageDisbursementLimit.scipProductsProductKey ? 'font-weight-bold' : ''"
          >
            {{
              damageDisbursementLimit.scipProductsProductKey ||
              $t('employees.actions.raiseDamageDisbursementLimits.defaultValue')
            }}
          </div>

          <div class="col-md-7 py-0 px-0">
            <VTextField
              v-model="damageDisbursementLimit.limit"
              :label="
                damageDisbursementLimit.scipProductsProductKey
                  ? $t('employees.actions.raiseDamageDisbursementLimits.limit')
                  : $t('employees.actions.raiseDamageDisbursementLimits.standardLimit')
              "
              outlined
              :rules="[rules.money]"
              :name="`amount-${index}`"
              data-test="moneyField"
            />
          </div>
        </div>
      </VCardText>

      <VCardActions>
        <VSpacer />

        <VBtn depressed data-test="cancel-button" color="primary" outlined @click="cancel()">
          {{ $t('general.forms.cancel') }}
        </VBtn>

        <VBtn
          depressed
          :loading="!!loading"
          :disabled="!!loading"
          type="submit"
          color="primary"
          data-test="submit-button"
        >
          {{ $t('employees.actions.raiseDamageDisbursementLimits.button') }}
        </VBtn>
      </VCardActions>
    </VCard>
  </VForm>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import {
  VBtn,
  VCard,
  VCardActions,
  VCardText,
  VCardTitle,
  VDivider,
  VForm,
  VSpacer,
  VTextField,
} from 'vuetify/lib'

import updateEmployeeMutation from '@baseSrc/api/admin/mutations/updateEmployee.gql'
import { useProductsListQuery } from '@baseSrc/api/components/generated/queries'
import { useRoute } from '@baseSrc/utils/composable/route'
import { useScip } from '@baseSrc/utils/composable/scipUtils'
import { useValidation } from '@baseSrc/utils/composable/validation'
import currency from '@baseSrc/validations/currency'

export default defineComponent({
  name: 'ChangeEmployeeDisbursementLimitsForm',
  components: {
    VForm,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions,
    VDivider,
    VSpacer,
    VBtn,
    VTextField,
  },

  inject: ['$validator'],

  props: {
    damageDisbursementLimits: {
      type: Array as PropType<ScipDamageDisbursementLimit[]>,
      required: true,
    },
  },

  setup(props, { emit }) {
    const { $formSubmit } = useScip()
    const $route = useRoute()
    const rules = useValidation()

    const { result: productsResult, loading } = useProductsListQuery({
      fetchPolicy: 'no-cache',
    })

    const productKeys = computed(() =>
      productsResult.value?.products
        .filter((item) => item.versions.some((version) => version.status === 'active'))
        .map((item) => item.key),
    )

    const productData = computed({
      get: () => {
        return [null, ...productKeys.value!]
          .map((key) => {
            return {
              scipProductsProductKey: key,
              limit: findByKey(key)?.limit?.formatted ?? undefined,
              id: findByKey(key)?.id ?? undefined,
            }
          })
          .sort(sortProducts)
      },
      set: (value) => emit('input', value),
    })

    const sortProducts = (
      a: { id: number | undefined; scipProductsProductKey: string | null },
      b: { id: number | undefined; scipProductsProductKey: string | null },
    ) => {
      if (a.id && !a.scipProductsProductKey) {
        return -1
      }
      if (a.id && !b.id) {
        return -1
      }
      if (!a.id) {
        return 1
      }
      return 0
    }

    const findByKey = (key: string | null) => {
      return props.damageDisbursementLimits.find((item) => item.scipProductsProductKey === key)
    }

    const cancel = () => emit('cancel')

    const isLoading = ref<boolean>(false)
    const submit = async () => {
      isLoading.value = true

      const productsWithLimitsSet = productData.value.filter((item) => !!item.limit)

      const inputData: {
        input: {
          id: number
          damageDisbursementLimits: {
            scipProductsProductKey: string | null
            limit: string | undefined
            id: number | undefined
          }[]
        }
      } = {
        input: {
          id: Number($route.params.userId),
          damageDisbursementLimits: productsWithLimitsSet,
        },
      }

      const submittedData = await $formSubmit(inputData, updateEmployeeMutation)

      isLoading.value = false

      if (submittedData && !submittedData.errors) {
        emit('success')
      }
    }

    return { productKeys, productData, cancel, loading, rules, submit }
  },

  computed: {
    currency() {
      return currency
    },
  },
})
</script>

<style scoped>
p {
  width: 650px;
}
</style>
