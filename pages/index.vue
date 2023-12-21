<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { VNavigationDrawer, VListItem } from "vuetify/lib/components/index.mjs";
console.log(VNavigationDrawer)

const clickCount = ref<any>(0)
const router = useRouter()
const clickHandler = () => {
  clickCount.value = clickCount.value + 2
}

const goTo = () => {
  router.push({
    name: 'child-id',
    params: { id: '3435' }
  })
}
</script>

<template>
  <div>
    <h1>Hello Jest!</h1>
    <!-- <p>{{ clickCount }} clicks</p>
    <VBtn @click="clickHandler">test button</VBtn>
    <VBtn @click="goTo">
      Go to child page
    </VBtn>

    <NuxtLink to="/link">
      Link page
    </NuxtLink> -->
    <VNavigationDrawer>
      <VListItem title="My Application" subtitle="Vuetify"></VListItem>
      <VDivider></VDivider>
      <VListItem link title="List Item 1"></VListItem>
      <VListItem link title="List Item 2"></VListItem>
      <VListItem link title="List Item 3"></VListItem>
    </VNavigationDrawer>
  </div>
</template>
