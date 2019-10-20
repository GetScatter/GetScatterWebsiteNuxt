const languages = {
    WEB:'Web',
    JSON:'JSON'
};

import Vue from 'vue'

Vue.mixin({
    data(){ return {
        downloadLink:'https://github.com/GetScatter/ScatterDesktop/releases/',
        languages,
        language:languages.WEB
    }},
    methods: {

    }
})