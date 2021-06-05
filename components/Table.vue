<template>
  <div class="tasksTable">
    <b-table :items="items" :per-page="perPage" :current-page="currentPage" class="table-hover table-striped"></b-table>
    <b-pagination v-model="currentPage" :total-rows="items.length" :per-page="perPage"></b-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1,
      perPage: 5,
      items: [
        { 
            id: 1, 
            name: "John Doe", 
            date: "01/01/2021",
            organization: "Organization One",
            callPriority: "High",
            status: "Open"
        },
        {
            id: 2, 
            name: "Mary Doe", 
            date: "01/02/2021",
            organization: "Organization Two",
            callPriority: "Low",
            status: "Closed"
        },
        { 
            id: 3, 
            name: "Karen Doe", 
            date: "01/03/2021",
            organization: "Organization Three",
            callPriority: "Medium",
            status: "Open"
        },
        { 
            id: 4, 
            name: "Phillip Doe", 
            date: "01/04/2021",
            organization: "Organization Four",
            callPriority: "High",
            status: "In Progress"
        },
        { 
            id: 5, 
            name: "Anne Doe", 
            date: "01/05/2021",
            organization: "Organization Four",
            callPriority: "Medium",
            status: "In Progress"
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