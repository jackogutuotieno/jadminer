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
                        icon: 'fas fa-tachometer-alt',
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
                        icon: 'fas fa-file',
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
                        icon: 'fas fa-lock',
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
                        icon: 'fas fa-paint-brush',
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
                        icon: 'fas fa-chart-line',
                        child: [
                            {
                                to: '/chartjs',
                                title: 'Chart.js'
                            },
                            {
                                to: '/highcharts',
                                title: 'Highcharts'
                            }
                        ]
                    },
                    {
                        to: '/',
                        title: 'Tables',
                        icon: 'fas fa-table',
                        child: [
                            {
                                to: '/bootstrap-tables',
                                title: 'Chart.js'
                            },
                            {
                                to: '/data-tables',
                                title: 'Data Tables'
                            }
                        ]
                    },
                    {
                        to: '/',
                        title: 'Maps',
                        icon: 'fas fa-map-marker-alt',
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