<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-container>
                <b-navbar-brand to="/">jAdminer</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="mr-auto ml-auto">
                        <b-nav-item-dropdown text="Dashboard" right>
                            <b-dropdown-item to="/">Call Center</b-dropdown-item>
                            <b-dropdown-item to="/ecommerce">E-commerce</b-dropdown-item>
                            <b-dropdown-item to="/fleet">Fleet</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="Pages" right>
                            <b-dropdown-item to="/pricing">Pricing</b-dropdown-item>
                            <b-dropdown-item to="/about">About</b-dropdown-item>
                            <b-dropdown-item to="/contact">Contact</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="Auth" right>
                            <b-dropdown-item to="/register">Register</b-dropdown-item>
                            <b-dropdown-item to="/login">Login</b-dropdown-item>
                            <b-dropdown-item to="/reset-password">Reset Password</b-dropdown-item>
                            <b-dropdown-item to="/error-404">Error 404</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="Components" right>
                            <b-dropdown-item to="/alerts">Alerts</b-dropdown-item>
                            <b-dropdown-item to="/buttons">Buttons</b-dropdown-item>
                            <b-dropdown-item to="/calendar">Calendar</b-dropdown-item>
                            <b-dropdown-item to="/card">Cards</b-dropdown-item>
                            <b-dropdown-item to="/tabs">Tabs</b-dropdown-item>
                            <b-dropdown-item to="/carousel">Carousel</b-dropdown-item>
                            <b-dropdown-item to="/modal">Modal</b-dropdown-item>
                            <b-dropdown-item to="/accordion">Accordion</b-dropdown-item>
                            <b-dropdown-item to="/form">Form</b-dropdown-item>
                            <b-dropdown-item to="/form">Table</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="Charts" right>
                            <b-dropdown-item to="/apex-charts">Apex Charts</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="Extras" right>
                            <b-dropdown-item to="/maps">Maps</b-dropdown-item>
                            <b-dropdown-item to="/icons">Icons</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item href="#"><span class="tsx icon-settings"></span></b-nav-item>
                        <b-nav-item href="#"><span class="icon-bell"></span></b-nav-item>
                        <b-nav-item href="#"><span class="icon-envelope-open"></span></b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
    </div>
</template>