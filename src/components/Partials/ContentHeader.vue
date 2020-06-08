<template>
  <div >
    <div class="z-100 relative text-center bg-gray-200 dark:bg-gray-900 py-10 md:py-20">
      
      <div class="absolute top-0 left-0 bg-pattern object-cover max-h-screen h-full w-full -z-10"></div>

      <div>
        <slot>
          <h2 v-if="title!=null" class="h1 font-extrabold dark:text-gray-400">{{ title }}</h2>
          <p v-if="sub!=null" class="text-gray-600 text-light font-sans">{{ sub }}</p>
        </slot>
      </div>
    </div>

   
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    sub: {
      type: String,
      default: null
    },
    image: {
      type: String | Object,
      default: null
    },
    staticImage: {
      type: Boolean,
      default: true
    },
    opacity: {
      type: Number,
      default: 50
    }
  },
  computed: {
    hasImage() {
      return this.image ? true : false;
    }
  }
};
</script>

<style>
</style>