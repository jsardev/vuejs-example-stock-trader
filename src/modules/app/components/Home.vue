<template lang="pug">
    div.section
        div.container
            h2.title Home
            div.content
                h3 Introduction
                p Welcome to the Stock Trader! Here you can play around on the stock market and get a little bit of knowledge about what brokers are doing every day!
                h3 How to play
                p 
                    | This is really easy. Just buy some stocks on the 
                    router-link(to="/stocks") market 
                    | (of course if they're priced well), then end the day, check the prices again
                    | and decide if you would be profitable 
                    router-link(to="/portfolio") to sell them right now! 
                    | So it all ends up in few simple steps:
                ol
                    li Buy/sell stocks
                    li End the day
                    li Check the prices
                    li Profit & Repeat
</template>