<template>
  <div>
    <TableItem v-bind:people="people" />
  </div>
</template>

<script>
import TableItem from "./TableItem.vue";

export default {
  name: "Table",
  components: {
    TableItem
  },
  props: ["people"]
};
</script>

<style></style>
