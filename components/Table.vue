<template>
  <div class="tasksTable">
    <b-table :items="items" :per-page="perPage" :current-page="currentPage" class="table-hover table-striped"></b-table>
    <b-pagination v-model="currentPage" :total-rows="items.length" :per-page="perPage"></b-pagination>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      currentPage: 1,
      perPage: 5,
      items: [
        { 
            id: 1, 
            firstName: "alex", 
            lastName: "green",
            organization: "eewewe",
            callType: "dwdwd",
            status: "resolved"
        },
        {
            id: 2,
            firstName: "may",
            lastName: "smith",
            organization: "eewewe",
            callType: "dwdwd",
            status: "resolved"
        },
        { 
            id: 3, 
            firstName: "james", 
            lastName: "jones",
            organization: "eewewe",
            callType: "dwdwd",
            status: "resolved"
        },
        { 
            id: 3, 
            firstName: "james", 
            lastName: "jones",
            organization: "eewewe",
            callType: "dwdwd",
            status: "resolved"
        },
        { 
            id: 3, 
            firstName: "james", 
            lastName: "jones",
            organization: "eewewe",
            callType: "dwdwd",
            status: "resolved"
        },
        { 
            id: 3, 
            firstName: "james", 
            lastName: "jones",
            organization: "eewewe",
            callType: "dwdwd",
            status: "resolved"
        },
        { 
            id: 3, 
            firstName: "james", 
            lastName: "jones",
            organization: "eewewe",
            callType: "dwdwd",
            status: "resolved"
        },
        { 
            id: 3, 
            firstName: "james", 
            lastName: "jones",
            organization: "eewewe",
            callType: "dwdwd",
            status: "resolved"
        },
      ]
    };
  }
};
</script>