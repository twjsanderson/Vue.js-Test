<template>
  <div id="app">
    <Verify v-bind:people="people" />
    <Table v-bind:people="people" />
  </div>
</template>

<script>
import Verify from "../components/Verify";
import Table from "../components/Table";
import Data from "../assets/data.json";

export default {
  name: "Home",
  components: {
    Verify,
    Table
  },
  data() {
    return {
      people: Data
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>
