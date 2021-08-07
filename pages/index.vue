<template>
  <div>
    <b-container fluid class="p-0">
      <Header />
    </b-container>
    <b-container class="counterSummary">
      <b-row>
        <b-col lg="3">
          <b-card title="Call Agents" shadow>
            <b-card-text>
              <h2><CallAgents /></h2>
              <span class="icon-earphones-alt"></span>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col lg="3">
          <b-card title="Active Callers" shadow>
            <b-card-text>
              <h2><ActiveCallers /></h2>
              <span class="icon-call-out"></span>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col lg="3">
          <b-card title="Daily Visits" shadow>
            <b-card-text>
              <h2><DailyVisits /></h2>
              <span class="icon-eye"></span>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col lg="3">
          <b-card title="Calls Resolved" shadow>
            <b-card-text>
              <h2>1900</h2>
              <span class="icon-cursor"></span>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row class="chartData">
        <b-col lg="8" class="left-col">
          <div class="chart">
            <div class="title-header">
              <h3>Monthly Calls Overview</h3>
            </div>
            <AreaChart />
          </div>
          <div class="card mt-4">
            <div class="title-header">
              <h3>Calls Status</h3>
            </div>
            <Table />
          </div>
          <div class="card block-list mt-4">
            <div class="title-header">
              <h3>My Tasks</h3>
            </div>
            <ul>
              <li v-for="task in tasks" :key="task.id">
                <h3>{{ task.id }}</h3>
                <h4>{{ task.title }}</h4>
                <p>{{ task.text }}</p>
                <span class="status">{{ task.status }}</span>
              </li>
            </ul>
            <b-link to="/" class="btn btn-primary m-2">View all tasks</b-link>
          </div>
        </b-col>
        <b-col lg="4" class="right-col">
          <div class="chart">
            <div class="title-header">
              <h3>Calls by Status</h3>
            </div>
            <DonutChart />
          </div>
          <div class="chart">
            <div class="title-header">
              <h3>Calls Priority Overwiew</h3>
            </div>
            <BarChart />
          </div>
          <div class="card block-list mt-4">
            <div class="title-header">
              <h3>Notifications</h3>
            </div>
            <ul class="mb-0">
              <li v-for="notification in notifications" :key="notification.id">
                <h4>{{ notification.title }}</h4>
                <p>{{ notification.text }}</p>
              </li>
            </ul>
            <b-link to="/" class="btn btn-primary m-2">View all <span class="icon-arrow-right"></span> </b-link>
          </div>
          <div class="calWidget">
            <h3>Calendar</h3>
            <Calendar />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        notifications: [
          { 
            id:'1', 
            title: 'First notification',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at purus et nisi eleifend venenatis.'
          },
          { 
            id:'2', 
            title: 'Second notification',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at purus et nisi eleifend venenatis.'
          },
          { 
            id:'3', 
            title: 'Third notification',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at purus et nisi eleifend venenatis.'
          },
        ],
        tasks: [
          { 
            id:'1', 
            title: 'Call John Doe',
            text: 'Nulla suscipit vel diam non commodo. Suspendisse sem felis, ornare sed bibendum nec, euismod sed neque. In semper nibh eget odio convallis, id molestie nunc aliquet.',
            status: 'Active'
          },
          { 
            id:'2', 
            title: 'Call John Doe',
            text: 'Nulla suscipit vel diam non commodo. Suspendisse sem felis, ornare sed bibendum nec, euismod sed neque. In semper nibh eget odio convallis, id molestie nunc aliquet.',
            status: 'Active'
          },
          { 
            id:'3', 
            title: 'Call John Doe',
            text: 'Nulla suscipit vel diam non commodo. Suspendisse sem felis, ornare sed bibendum nec, euismod sed neque. In semper nibh eget odio convallis, id molestie nunc aliquet.',
            status: 'Active'
          },
          { 
            id:'4', 
            title: 'Call John Doe',
            text: 'Nulla suscipit vel diam non commodo. Suspendisse sem felis, ornare sed bibendum nec, euismod sed neque. In semper nibh eget odio convallis, id molestie nunc aliquet.',
            status: 'Active'
          },
        ],
      }
    }
  }
</script>