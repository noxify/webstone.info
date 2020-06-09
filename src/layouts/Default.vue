<template>
  <div id="app" class="dark:bg-black">
    <navbar @setTheme="setTheme" :theme="this.theme" :fixedHeader="fixedHeader" :sidebar="sidebar"></navbar>

    <slot />

    <v-footer v-if="!hideFooter"></v-footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from "~/components/Navbar/Navbar.vue";
import VFooter from "~/components/Partials/Footer.vue";
export default {
  props: {
    fixedHeader : {
      type: Boolean,
      default: false
    },
    hideFooter : {
      type: Boolean,
      default: false
    },
    sidebar : {
      type: Array,
      default:[]
    }
  },
  data: function() {
    return {
      theme: "light"
    };
  },
  components: {
    Navbar,
    VFooter
  },
  methods: {
    setTheme(mode) {
      this.theme = mode;
    }
  }
};
</script>