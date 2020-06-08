<template>
  <div>
    <div class="w-full mb-2 overflow-x-hidden dark:text-gray-400">
      <h2 class="text-xl my-0">Navigation</h2>
      <div class="menu-links">
        <ul>
          <li
            v-for="navItem in $static.metadata.headerNavigation"
            :key="navItem.name"
            class="py-1"
          >
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
    </div>
    
  </div>
</template>


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
<script>
import Subnavigation from "~/components/Navbar/NavbarSubNavigation.vue";

export default {
  components: {
    Subnavigation
  }
};
</script>

<style>
</style>