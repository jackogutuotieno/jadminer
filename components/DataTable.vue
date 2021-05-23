<listable :headings="headings" @sorted="onSort" />

<script>
export default {
  data: () => ({
    headings: [
      {
        display: "ID",
        column: "id",
        sortable: true,
        ascending: true
      },
      {
        display: "Name",
        column: "name"
      },
      {
        display: "Date",
        column: "created_at",
        sortable: true,
        ascending: false
      }
    ]
  }),
  methods: {
    onSort(sort) {
      let column = sort.column;
      let descending = sort.descending;
      let ascending = !descending;
      console.log(column);
      console.log(descending);
      console.log(ascending);
    }
  }
}
</script>