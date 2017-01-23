<script>
  import { range } from 'lodash'
  export default {
    props: [
      'source'
    ],
    data(){
      return {
        pages: []
      }
    },
    watch: {
      source(){
        //this.pages = range(1, this.source.last_page + 1)
      }
    }

  }

</script>

<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li>
        <a href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li><a href="#">1</a></li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#">5</a></li>
      <li>
        <a href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>  
</template>

<style type="text/css" scoped>
  
</style>