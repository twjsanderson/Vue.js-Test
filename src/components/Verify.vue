<template>
  <div>
    <div>
      <h2>Use the dropdown menus to correctly label the Province and Email columns shown below.</h2>
      <br>
      <p>Once you have correctly validated each column a chart will be displayed.</p>
      <p>This chart will contain the number of user emails in the following categories: 'Gmail', 'Yahoo', 'AOL' and 'Other.</p>
      <p>You will then be able to filter through this data by Province.</p>
      <b>***Simply click on the name of a Province at the top of the chart to remove/add it from the display</b>
    </div>
    <div>
      <form @submit="checkForm">
        <br>
        <p>
          <label for="Province">Province</label>
          <select name="Province" id="Province" v-model="Province">
            <option>Column 1</option>
            <option>Column 2</option>
            <option>Column 3</option>
            <option>Column 4</option>
            <option>Column 5</option>
            <option>Column 6</option>
            <option>Column 7</option>
            <option>Column 8</option>
            <option>Column 9</option>
            <option>Column 10</option>
            <option>Column 11</option>
          </select>
        </p>
        <p>
          <label for="Email">Email</label>
          <select name="Email" id="Email" v-model="Email">
            <option>Column 1</option>
            <option>Column 2</option>
            <option>Column 3</option>
            <option>Column 4</option>
            <option>Column 5</option>
            <option>Column 6</option>
            <option>Column 7</option>
            <option>Column 8</option>
            <option>Column 9</option>
            <option>Column 10</option>
            <option>Column 11</option>
          </select>
        </p>
         <p>
          <input type="submit" value="Submit">
        </p>
      </form>
      <p v-if="errors.length">
        <b>The following label(s) are incorrect:</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>
      <bar-example v-if="showChart"></bar-example>
    </div>
    <Chart v-bind:people="people"/>
  </div>
</template>

<script>
import BarExample from '../components/Chart.js';

export default {
  name: "Verify",
  components: {
    BarExample
  },
  props: ["people"],
  data() {
    return {
      Province: null,
      Email: null,
      checks: 0,
      errors: []
    }
  },
  methods: {
    checkForm: function(e) {
      if (this.Province === "Column 6" && this.Email === "Column 10") {
        this.checks += 2
      }
      this.errors = [];
      if (this.Province !== "Column 6") {
        this.errors.push('The Province column is incorrectly labelled')
      }
      if (this.Email !== "Column 10") {
        this.errors.push('The Email column is incorrectly labelled')
      }
      e.preventDefault();
    }
  },
  computed: {
    showChart() {
      return this.checks === 2
    }
  }
}
</script>

<style scoped>

  form p {
    display: inline-flex;
    flex-direction: row;
    padding: 5px;
    margin-right: 3px;
  }

</style>


