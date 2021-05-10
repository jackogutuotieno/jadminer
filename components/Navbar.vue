<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown text="Dashboard" right>
                        <b-dropdown-item href="#">E-commerce</b-dropdown-item>
                        <b-dropdown-item href="#">Fleet Management</b-dropdown-item>
                        <b-dropdown-item href="#">Hospital</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item href="#">Link</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>