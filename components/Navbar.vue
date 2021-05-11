<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto mr-auto">
                    <b-nav-item-dropdown text="Dashboard" right>
                        <b-dropdown-item to="/ecommerce">E-commerce</b-dropdown-item>
                        <b-dropdown-item to="/fleetmanagement">Fleet Management</b-dropdown-item>
                        <b-dropdown-item to="/hospital">Hospital</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="Pages" right>
                        <b-dropdown-item to="/settings">Settings</b-dropdown-item>
                        <b-dropdown-item to="/pricing">Pricing</b-dropdown-item>
                        <b-dropdown-item to="/invoice">Invoice</b-dropdown-item>
                        <b-dropdown-item to="/about">About</b-dropdown-item>
                        <b-dropdown-item to="/contact">Contact Us</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="Auth" right>
                        <b-dropdown-item to="/register">Register</b-dropdown-item>
                        <b-dropdown-item to="/login">Login</b-dropdown-item>
                        <b-dropdown-item to="/reset-password">Reset Password</b-dropdown-item>
                        <b-dropdown-item to="/error404">Error 404</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="User Interface" right>
                        <b-dropdown-item to="/alerts">Alerts</b-dropdown-item>
                        <b-dropdown-item to="/buttons">Buttons</b-dropdown-item>
                        <b-dropdown-item to="/cards">Cards</b-dropdown-item>
                        <b-dropdown-item to="/tabs">Tabs</b-dropdown-item>
                        <b-dropdown-item to="/carousel">Carousel</b-dropdown-item>
                        <b-dropdown-item to="/modal">Modal</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="Charts" right>
                        <b-dropdown-item to="/chartjs">Chart.js</b-dropdown-item>
                        <b-dropdown-item to="/high-charts">Highcharts</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="Tables" right>
                        <b-dropdown-item to="/bootstrap-tables">Bootstrap</b-dropdown-item>
                        <b-dropdown-item to="/data-tables">Data Tables</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="Maps" right>
                        <b-dropdown-item to="/maps">Google Maps</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>