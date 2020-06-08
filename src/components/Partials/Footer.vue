<template>
  <div class="bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-400 text-center text-sm">
    <div class="container mx-auto py-16">
      <div class="mb-4">
        <p>
          Copyright {{ new Date().getFullYear() }} by {{ $static.metadata.siteName}} &middot; Powered by
          <a
            href="https://www.gridsome.org"
            target="_blank"
            class="hover:text-blue-500"
          >Gridsome</a>
        </p>
      </div>
      <div class="mb-4">
        <ul class="list-reset flex justify-center">
          <li v-for="navItem in $static.metadata.footerNavigation" :key="navItem.name" class="px-4">
            <g-link
              class="hover:text-blue-500"
              :to="navItem.link"
              :title="navItem.name"
              v-if="navItem.external!=true"
            >{{ navItem.name}}</g-link>
            <a
              class="hover:text-blue-500"
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

<script>
export default {
  methods: {
    icon(icon) {
      return ['fab', icon]
    }
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
  
    footerNavigation {
        name
        link
        external
    }
  }
}
</static-query>