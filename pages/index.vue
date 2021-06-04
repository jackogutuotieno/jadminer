<template>
  <div>
    <b-container fluid class="p-0">
      <Header />
    </b-container>
    <b-container class="counterSummary">
      <b-row>
        <b-col lg="3">
          <b-card title="Registered Users" shadow>
            <b-card-text>
              <h2><CountTo /></h2>
              <span class="icon-user-follow"></span>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col lg="3">
          <b-card title="Online Users" shadow>
            <b-card-text>
              <h2>100</h2>
              <span class="icon-people"></span>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col lg="3">
          <b-card title="Daily Visits" shadow>
            <b-card-text>
              <h2>2000</h2>
              <span class="icon-eye"></span>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col lg="3">
          <b-card title="Orders" shadow>
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
              <h3>No of Calls</h3>
            </div>
            <BarChart />
          </div>
          <div class="card mt-4">
            <div class="title-header">
              <h3>Calls Status</h3>
            </div>
            <Table />
          </div>
        </b-col>
        <b-col lg="4" class="right-col">
          <div class="chart">
            <div class="title-header">
              <h3>Clients by Sector</h3>
            </div>
            <DonutChart />
          </div>
          <div class="card block-list mt-4">
            <div class="title-header">
              <h3>My Tasks</h3>
            </div>
            <ul>
              <li>
                <h3>01</h3>
                <h4>Call John Doe</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span class="status">Done</span>
              </li>
              <li>
                <h3>02</h3>
                <h4>Call John Doe</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span class="status">In progress</span>
              </li>
              <li>
                <h3>03</h3>
                <h4>Call John Doe</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span class="status">Not done</span>
              </li>
            </ul>
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