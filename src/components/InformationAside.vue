<template>
  <aside>
    <MonkeyExplained />
  </aside>
</template>

<script>
import MonkeyExplained from "./MonkeyExplained.vue";
export default {
  name: "InformationAside",
  components: {
    MonkeyExplained
  }
};
</script>

<style lang="scss">
aside {
  height: calc(100vh - 120px);
  padding: 0 12px;
  margin-left: 32px;
  // max-width: 400px;
  overflow-y: auto;
  text-align: left;
  flex: 1;
  background: lighten(#5e00cf, 15%);
}
</style>
