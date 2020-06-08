<template>
  <Layout>
    <content-header
      title="Blog"
      sub="Knowledge sharing, news about the topics who I'm interested in and other stuff"
    ></content-header>

    <div class="container mx-auto py-16">
      <div class="flex flex-wrap my-4">
        <CardItem v-for="edge in $page.entries.edges" :key="edge.node.id" :record="edge.node" />
      </div>
      <div class="pagination flex justify-center mb-8">
        <Pagination
          baseUrl="/blog"
          :currentPage="$page.entries.pageInfo.currentPage"
          :totalPages="$page.entries.pageInfo.totalPages"
          :maxVisibleButtons="5"
          v-if="$page.entries.pageInfo.totalPages > 1"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($page: Int) {
    
    entries: allBlog(perPage: 9, page: $page, sortBy:"created") @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          image(width: 800)
          path
          timeToRead
          featured
          humanTime: created(format: "DD MMM YYYY")
          datetime: created
          category {
            id
            title
            path
          }
          author {
            id
            name
            image(width: 64, height: 64, fit: inside)
            path
          }
        }
      }
    }
  }
</page-query>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import CardItem from "~/components/Content/CardItem.vue";
import ContentHeader from "~/components/Partials/ContentHeader.vue";
import Pagination from "~/components/Content/Pagination.vue";

export default {
  metaInfo: {
    title: "Blog"
  },
  components: {
    CardItem,
    ContentHeader,
    Pagination
  }
};
</script>
