<template>
  <div class="w-full md:w-1/2 lg:w-1/3 px-4 my-4">
    <div class="post-card border-gray-200 dark:border-gray-900 bg-white dark:bg-black rounded-lg hover:shadow-xl z-100 dark:bg-gray-900" :id="record.id">

      <g-link :to="record.path" class="post-card-image-link">
        
        <g-image :src="record.image" :alt="record.title" class="post-card-image"></g-image>
      </g-link>
      <div class="post-card-content bg-white dark:bg-gray-900 h-full rounded-b-lg">
        <g-link
          :to="record.path"
          class="flex-col relative flex justify-between rounded-b-lg px-6 h-40 mt-2 dark:text-white"
        >
          <h3 class="post-card-title tracking-wide mt-0">{{ record.title }}</h3>

          <div class="text-xs leading-none absolute bottom-0 pb-6">
            <p>
              <time :datetime="record.datetime">{{ record.humanTime }}</time>
              &nbsp;&bull;&nbsp;
              {{ record.timeToRead }} min read
            </p>
          </div>
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    record: {}
  },
  computed: {
    
  }
};
</script>

<style>
</style>