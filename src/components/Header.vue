<template lang="pug">
    nav.navbar.is-dark
        div.container
            div.navbar-brand
                router-link(to="/" class="navbar-item") 
                    h1.title.is-4.has-text-white Stock Trader
                router-link(to="/portfolio" class="navbar-item") Portfolio
                router-link(to="/stocks" class="navbar-item") Stocks
</template>
