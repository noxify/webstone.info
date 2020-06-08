<template>
    <nav
      class="hidden md:block lg:block xl:block flex items-center justify-between flex-wrap container mx-auto py-3 z-20 dark:text-gray-400"
    >
      <div class="block flex-grow flex items-center w-auto mx-4">
        <div class="flex items-center flex-shrink-0 mr-6">
          <span class="font-semibold text-xl tracking-tight">{{ $static.metadata.siteName }}</span>
        </div>
        <div class="flex-grow">
          <ul class="list-none flex justify-left">
            <li v-for="navItem in $static.metadata.headerNavigation" :key="navItem.name" class="px-4 py-1">
              <g-link
                class="block py-1 hover:text-blue-500"
                :to="navItem.link"
                :title="navItem.name"
                v-if="navItem.external!=true"
              >{{ navItem.name}}</g-link>
              <a
                class="block py-1 hover:text-blue-500"
                :href="navItem.link"
                target="_blank"
                :title="navItem.name"
                v-if="navItem.external==true"
              >{{ navItem.name}}</a>
              
            </li>
           
          </ul>
        </div>

        <div class="inline-block">
          <ul class="list-none flex justify-center md:justify-end">
            <li class="mr-6">
              <search-button v-on="$listeners"></search-button>
            </li>
            <li>
              <theme-switcher v-on="$listeners" :theme="theme" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
import ThemeSwitcher from "~/components/Navbar/ThemeSwitcher.vue";
import SearchButton from "~/components/Navbar/SearchButton.vue";
import Subnavigation from "~/components/Navbar/NavbarSubNavigation.vue";

export default {
  data: function() {
    return {
      showSubNavigation: false,
      vcoConfig: {
        events: ["dblclick", "click"],
        isActive: true
      }
    };
  },
  components: {
    ThemeSwitcher,
    SearchButton,
    Subnavigation  
  },
  props: {
    theme: {
      type: String
    },
    hideSubnav: {
      type: Boolean
    }
  },
  methods: {
    toggleSubNavigation() {
      this.showSubNavigation = !this.showSubNavigation;
    },
    onClickOutside(event) {
      if (!event.defaultPrevented && this.showSubNavigation == true) {
        this.toggleSubNavigation();
      }
    },
    hideSubNavigation() {
      this.showSubNavigation = false;
    }
  },
  watch: {
    hideSubnav() {
      if( this.hideSubnav ) {
        this.hideSubNavigation()
      }
    },
    $route (to, from){
      this.hideSubNavigation();
    }
  },
  
};
</script>

<static-query>
query {
  metadata {
    siteName
    headerNavigation {
      name
      link
      external
      
    }
  }
}
</static-query>