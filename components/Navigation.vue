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
                        href: '/',
                        title: 'Dashboard',
                        icon: 'icon-home',
                        child: [
                            {
                                href: '/',
                                title: 'Default (Call Centre)'
                            },
                            {
                                href: '/ecommerce',
                                title: 'E-Commerce'
                            },
                            {
                                href: '/fleet',
                                title: 'Fleet'
                            }
                        ]
                    },
                    {
                        href: '/',
                        title: 'Pages',
                        icon: 'icon-doc',
                        child: [
                            {
                                href: '/settings',
                                title: 'Settings'
                            },
                            {
                                href: '/pricing',
                                title: 'Pricing'
                            },
                            {
                                href: '/invoice',
                                title: 'Invoice'
                            },
                            {
                                href: '/about',
                                title: 'About'
                            },
                            {
                                href: '/contact',
                                title: 'Contact'
                            },
                        ]
                    },
                    {
                        href: '/',
                        title: 'Auth',
                        icon: 'icon-lock',
                        child: [
                            {
                                href: '/register',
                                title: 'Register'
                            },
                            {
                                href: '/login',
                                title: 'Login'
                            },
                            {
                                href: '/reset-password',
                                title: 'Reset Password'
                            },
                            {
                                href: '/error-404',
                                title: 'Error 404'
                            },
                            
                        ]
                    },
                    {
                        href: '/',
                        title: 'User Interface',
                        icon: 'icon-pencil',
                        child: [
                            {
                                href: '/alerts',
                                title: 'Alerts'
                            },
                            {
                                href: '/buttons',
                                title: 'Buttons'
                            },
                            {
                                href: '/Cards',
                                title: 'Cards'
                            },
                            {
                                href: '/tabs',
                                title: 'Tabs'
                            },
                            {
                                href: '/carousel',
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