<template>
  <div>
    <div class="w-full mb-2 overflow-x-hidden dark:text-gray-400">
      <h2 class="text-xl my-0">Navigation</h2>
      <div class="menu-links">
        <ul>
          <li v-for="navItem in $static.metadata.headerNavigation" :key="navItem.name" class="py-1">
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

      <div class="menu-links border-t mt-4" v-if="sidebar.length>0">
        <div class="sidebar-section block" v-for="category in sidebar" :key="category.id">
          <h4 class="text-xl">{{ category.title }}</h4>
          <div class="category-links">
            <g-link
              :to="urlLink(link.url)"
              v-for="link in category.links"
              :key="link.id"
              class="block py-1 hover:text-blue-500"
            >{{ link.title }}</g-link>
          </div>
        </div>
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
export default {
  props: {
    sidebar: {
      type: Array,
      default: []
    }
  },
  methods: {
    urlLink(url) {
      return `/documentation/${this.$context.plugin}${url}`;
    }
  }
};
</script>

<style>
</style>