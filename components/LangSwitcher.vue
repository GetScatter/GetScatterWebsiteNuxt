<template>
  <!-- 
  For now I don't want a select switcher
  <select v-model="selected" @change="changeLocale()" class="lang-switcher">
    <option :value="selected" selected>{{ $i18n.locale }}</option>
    <option v-for="locale in $i18n.locales" v-if="locale.code !== $i18n.locale" :key="locale.code" >
      {{ locale.code }}
    </option>
  </select> -->
  <div class="change-language">
    <nuxt-link class="nav-item"
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>

  </div>
</template>

<script>
export default {
  name: 'LangSwitcher',
  data () {
    return {
      selected: ''
    }
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.setLocaleCookie(this.selected)
      // this.$router.push(this.switchLocalePath(locale))
      this.$router.push(this.switchLocalePath(this.selected));
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>
<style lang="scss" scoped>

@import "@/assets/_variables.scss";

.change-language {
  display: flex;
  flex-direction: row;
  height: 104px;
  align-items: center;
  justify-content: center;

  @media (max-width: $breakpoint-tablet) {
    height:54px;
  }

  @media (max-width: $breakpoint-mobile) {
    flex-direction:row;
    display: flex;
    justify-content: flex-end;
  }

  .nav-item {
      margin: 0 1.2rem;
      text-decoration:none;
      font-family: 'Poppins', sans-serif;
      font-weight:bold;
      font-size:$font-size-medium;
      color:$blue;
      white-space: nowrap;

      @media (max-width: $breakpoint-tablet) {
        margin: 0 .6rem;
        font-size:$font-size-standard;
      }

      @media (max-width: $breakpoint-mobile) {
        margin: 0 .6rem;
      }

      &.exact-active-link {
        color: black;
      }
  }
}

.lang-switcher {
    display: block;
    font-size: $font-size-small;
    font-family: sans-serif;
    font-weight: 700;
    color: $grey;
    line-height: 1.3;
    padding: 4px 16px 4px 12px;
    width: 100%;
    max-width: 100%; 
    box-sizing: border-box;
    margin: 2px 0 0 6px;
    border: 1px solid transparent;
    text-transform:uppercase;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    height: 104px;
    background-color: #fff;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
      linear-gradient(to bottom, #ffffff 0%,#ffffff 100%);
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;

    @media (max-width: $breakpoint-tablet) {
        height: 54px;
    }
}
.lang-switcher::-ms-expand {
    display: none;
}
.lang-switcher:hover {

}
.lang-switcher:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222; 
    outline: none;
}
.lang-switcher option {
    font-weight:normal;
}

</style>
