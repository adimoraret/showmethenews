<template>
  <div class="col-md-4">
    <article class="entry card">
      <div class="entry__img-holder card__img-holder">
        <a :href="article.url">
          <div class="thumb-container thumb-70">
            <img :src="article.image.main" class="entry__img lazyloaded" :alt="article.title">
          </div>
        </a>
      </div>
      <div class="entry__body card__body">
        <div class="entry__header">
          <h2 class="entry__title">
            <a :href="article.url">{{article.title}}</a>
          </h2>
          <ul class="entry__meta">
            <li class="entry__meta-author">
              <span>Published</span>
            </li>
            <li class="entry__meta-date" v-date="article.publishedDate">
            </li>
          </ul>
        </div>
        <div class="entry__excerpt">
          <p>{{article.abstract}}</p>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
import DateDirective from '../date/DateDirective.js';
export default {
  directives: {
    date: DateDirective
  },
  props: {
    article: {
        type: Object,
        required: true
    }
  }
}
</script>
<style scoped>
.thumb-container.thumb-70{
  background-color: #dddddd
}
</style>
