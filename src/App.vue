<template>
  <div id="app">
    <appHeader v-show="$route.meta.show"></appHeader>
    <router-view/>
    <AppFooter></AppFooter>
  </div>
</template>

<style lang="scss">

</style>
