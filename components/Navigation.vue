<template>
  <sidebar-menu :menu="menu" :collapsed="true" />
</template>

<script>
    export default {
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'Main Navigation',
                        hiddenOnCollapse: true
                    },
                    {
                        to: '/',
                        title: 'Dashboard',
                        icon: 'icon-home',
                        child: [
                            {
                                to: '/index',
                                title: 'Default (Call Centre)'
                            },
                            {
                                to: '/ecommerce',
                                title: 'E-Commerce'
                            },
                            {
                                to: '/fleet',
                                title: 'Fleet'
                            }
                        ]
                    },
                    {
                        to: '/',
                        title: 'Pages',
                        icon: 'icon-doc',
                        child: [
                            {
                                to: '/settings',
                                title: 'Settings'
                            },
                            {
                                to: '/pricing',
                                title: 'Pricing'
                            },
                            {
                                to: '/invoice',
                                title: 'Invoice'
                            },
                            {
                                to: '/about',
                                title: 'About'
                            },
                            {
                                to: '/contact',
                                title: 'Contact'
                            },
                        ]
                    },
                    {
                        to: '/',
                        title: 'Auth',
                        icon: 'icon-lock',
                        child: [
                            {
                                to: '/register',
                                title: 'Register'
                            },
                            {
                                to: '/login',
                                title: 'Login'
                            },
                            {
                                to: '/reset-password',
                                title: 'Reset Password'
                            },
                            {
                                to: '/error-404',
                                title: 'Error 404'
                            },
                            
                        ]
                    },
                    {
                        to: '/',
                        title: 'User Interface',
                        icon: 'icon-pencil',
                        child: [
                            {
                                to: '/alerts',
                                title: 'Alerts'
                            },
                            {
                                to: '/buttons',
                                title: 'Buttons'
                            },
                            {
                                to: '/Cards',
                                title: 'Cards'
                            },
                            {
                                to: '/tabs',
                                title: 'Tabs'
                            },
                            {
                                to: '/carousel',
                                title: 'Carousel'
                            },
                            {
                                to: '/modal',
                                title: 'Modal'
                            },
                        ]
                    },
                    {
                        to: '/',
                        title: 'Charts',
                        icon: 'icon-graph',
                        child: [
                            {
                                to: '/apex-charts',
                                title: 'Apex Charts'
                            },
                        ]
                    },
                    {
                        to: '/',
                        title: 'Maps',
                        icon: 'icon-map',
                        child: [
                            {
                                to: '/google-maps',
                                title: 'Google Maps'
                            }
                        ]
                    },
                ],
            }
        }
    }
</script>