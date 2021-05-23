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
    <b-container class="chartData">
      <b-row>
        <b-col lg="5">
          <BarChart />
        </b-col>
        <b-col lg="5">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>