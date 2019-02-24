<template>
  <div>
    <table id="firstTable">
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
          <th>Column 5</th>
          <th>Column 6</th>
          <th>Column 7</th>
          <th>Column 8</th>
          <th>Column 9</th>
          <th>Column 10</th>
          <th>Column 11</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in people">
          <td>{{ person.first_name }}</td>
          <td>{{ person.last_name }}</td>
          <td>{{ person.company_name }}</td>
          <td>{{ person.address }}</td>
          <td>{{ person.city }}</td>
          <td>{{ person.province }}</td>
          <td>{{ person.postal }}</td>
          <td>{{ person.phone1 }}</td>
          <td>{{ person.phone2 }}</td>
          <td>{{ person.email }}</td>
          <td>{{ person.web }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableItem",
  props: ["people"]
};
</script>

<style scoped>
table {
  font-family: "Open Sans", sans-serif;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid #44475c;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475c;
  color: #fff;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7d82a8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #d4d8f9;
}
</style>
