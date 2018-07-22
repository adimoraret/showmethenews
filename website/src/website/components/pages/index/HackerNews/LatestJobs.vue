<template>
  <div class="widget-content">
    <ul>
      <li v-for="job in jobs" :key="job.url" class="inline">
        <a :href="job.url" :title="job.title"> {{job.title}} </a>
      </li>
    </ul>
  </div>
</template>
<script>
import HackerNewsAccess from '../../../../access/hackernews/HackerNewsAccess.js'
const hackerNewsAccess = new HackerNewsAccess();
export default {
    created: async function(){
      this.jobs = await hackerNewsAccess.getJobStories();
    },
    data : function(){
      return {
        jobs: [],      
      }
    },  
}
</script>
<style>
  .inline {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 12px;
  }
</style>

