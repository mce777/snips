<script>
export default {
  name: "apolloUpdateResults",
  
  // both of the following work...
  
  apollo: {
    // name that is referenced in template
    // using "update" below, you are a bit more flexible with naming
    document: {
      query() {
        return documentQuery
      },
      variables() {
        return {
          id: Number(this.parent.routeParams.productId),
          idProductVersion: Number(this.parent.id),
          idProductVersionDocument: Number(this.$route.params.documentId),
        }
      },
      // you need to reference by name what is returned from the query (in this case 'products')
      update({ products }) {
        return products.items[0].productVersions.items[0].staticDocuments
            .items[0]
      },
    },
  },

  // alternatively, using "result"
  apollo_v2: {
    // if using 'result' below, you need to reference here by name what the query returns
    // in this case 'products'
    products: {
      query() {
        return documentQuery
      },
      variables() {
        return {
          id: Number(this.parent.routeParams.productId),
          idProductVersion: Number(this.parent.id),
          idProductVersionDocument: Number(this.$route.params.documentId),
        }
      },
      result({ data, loading }) {
        if (!loading) {
          // "document" is what you are referencing above in the template
          // you're basically mapping the result of the "products" query to "document"
          this.document = data.products.items[0].productVersions.items[0].staticDocuments.items[0]
        }
      },
    },
  },
}
</script>
