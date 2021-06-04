<template>
  <div>
    <listable :headings="headings" @sorted="onSort" />
  </div>
</template>

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
}
</script>