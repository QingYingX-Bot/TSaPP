<script setup>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <v-app theme="light" class="app-root">
    <TheHeader />
    <v-main class="app-main">
      <v-container class="container-narrow" fluid>
        <router-view />
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<style>
/* 整页 flex：主内容撑满，页脚始终贴底 */
.app-root .v-application__wrap {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.app-main {
  flex: 1 1 auto;
  min-height: 0;
  padding-top: 56px; /* 避免被固定顶栏遮挡 */
}
.container-narrow {
  max-width: 880px;
  margin: 0 auto;
  padding: 32px 24px 40px !important;
}
</style>
