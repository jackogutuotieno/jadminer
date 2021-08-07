<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :pagination-options="{
      enabled: true,
      mode: 'records',
      perPage: 5,
      position: 'top',
      perPageDropdown: [3, 7, 9],
      dropdownAllowAll: false,
      setCurrentPage: 1,
      nextLabel: 'next',
      prevLabel: 'prev',
      rowsPerPageLabel: 'Rows per page',
      ofLabel: 'of',
      pageLabel: 'page', // for 'pages' mode
      allLabel: 'All',
      infoFn: (params) => `Page ${params.firstRecordOnPage}`, 
    }"
    >
    </vue-good-table>
  </div>
</template>

<script>
export default {
  name: 'calls-status',
  data(){
    return {
      columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Company',
          field: 'company',
          type: 'text',
        },
        {
          label: 'Date',
          field: 'date',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'yyyy-MM-dd',
        },
        {
          label: 'Status',
          field: 'status',
          type: 'text',
        },
      ],
      rows: [
        { id:1, name:"John Doe", company: "Maecenas non eros iaculis", date: '2011-10-31',status: "Open" },
        { id:2, name:"Jane Doe", company: "Maecenas non eros iaculis", date: '2011-10-31', status: "Closed" },
        { id:3, name:"Susan Doe", company: "Maecenas non eros iaculis", date: '2011-10-30', status: "In Progress" },
        { id:4, name:"Chris Doe", company: "Maecenas non eros iaculis", date: '2011-10-11', status: "Active" },
        { id:5, name:"Dan Doe", company: "Maecenas non eros iaculis", date: '2011-10-21', status: "Closed" },
        { id:6, name:"John Doe", company: "Maecenas non eros iaculis", date: '2011-10-31', status: "In Progress" },
      ],
    };
  },
};
</script>