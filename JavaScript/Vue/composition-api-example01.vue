<template>
  <ScipExpansionPanelContentFill :show-view="!loading">
    <template #headline>
      {{ $t('damages.widget.participants.account.heading') }}
    </template>

    <template #header>
      <VSpacer />

      <ScipWidgetActions
        :item="damage"
        :actions="['createReserve']"
        :available-actions="availableActions"
      />
    </template>

    <template #default>
      <ScipSimpleList
        :items="accounts"
        :row-action="
          (item) => ({
            name: 'DamageAccountDetail',
            params: {
              accountId: item.id,
              damageId: $route.params.damageId,
              damageFileId: $route.params.damageFileId,
            },
          })
        "
      >
        <template #default="{ item }">
          <td class="grey--text text--darken-1">
            {{ item.nameDecorated }}
          </td>

          <td align="right">
            {{ formatMoney(item.balance, $i18n.locale) }}
          </td>
        </template>
      </ScipSimpleList>
    </template>
  </ScipExpansionPanelContentFill>
</template>

<script lang="ts">
// import composition-api functions
import { computed, defineComponent, PropOptions, PropType } from 'vue'
import { VSpacer } from 'vuetify/lib'

import ScipExpansionPanelContentFill from '@baseSrc/components/ScipExpansionPanelContentFill.vue'
import ScipSimpleList from '@baseSrc/components/ScipList/ScipSimpleList.vue'
import ScipWidgetActions from '@baseSrc/components/ScipWidgetActions.vue'
import {
  ScipParticipantDamageAccountsQuery,
  useParticipantDamageAccountsQuery,
} from '@baseSrc/generated/queries'
import { useRoute } from '@baseSrc/utils/composable/route'
import generateActions from '@baseSrc/views/ScipDamage/generateActions'
import { formatMoney } from '@scip/common/src/i18n'

type GenerateActionsType = PropOptions<ReturnType<typeof generateActions>>

type ParticipantDamage =
  ScipParticipantDamageAccountsQuery['damageFiles']['items'][number]['damages']['items'][number]

// note: "defineComponent" and "name: ..." on the next line
export default defineComponent({
  name: 'DamageWidgetParticipantAccounts',
  components: {
    ScipExpansionPanelContentFill,
    ScipSimpleList,
    ScipWidgetActions,
    VSpacer,
  },

  // props relatively the same
  props: {
    availableActions: {
      default(): GenerateActionsType {
        // @ts-ignore
        return generateActions(this)
      },
      type: Object as PropType<GenerateActionsType>,
    },
  },

  // note the setup function. Maybe use <script setup> in the future
  setup() {
    // this and similar utility functions are available from core
    const route = useRoute()

    // this replaces the apollo client usage from before
    // useParticipantDamageAccountsQuery (this and similar functions are generated)
    const { result, loading, refetch } = useParticipantDamageAccountsQuery(
      {
        damageFileId: Number(route.params.damageFileId),
        damageId: Number(route.params.damageId),
        damagesParticipantId: Number(route.params.damageParticipantId),
      },
      { clientId: 'admin' },
    )

    // example computed
    // don't forget ".value" !!!
    const accounts = computed(() => {
      if (damage?.value?.accounts) {
        return damage.value.accounts.items
      }
      return []
    })

    // specifically typed computed
    const damage = computed<ParticipantDamage | undefined>(() => {
      return result.value?.damageFiles.items[0].damages?.items[0]
    })

    // don't forget to return/expose what you need
    return { formatMoney, accounts, damage, loading, refetch }
  },
})
</script>
