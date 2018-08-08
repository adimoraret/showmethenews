<template>
  <div class="featured-posts-grid__item featured-posts-grid__item--sm">
    <article class="entry card post-list featured-posts-grid__entry">
      <div class="entry__img-holder post-list__img-holder card__img-holder" :style="{backgroundImage: 'url(' + article.image.main  + ')'}">
        <a :href="article.url" class="thumb-url"></a>
        <img :src="article.image.main" :alt="article.title" class="entry__img d-none">
        <div class="thumb-text-holder">   
          <h2 class="thumb-entry-title">
            <a :href="article.url">{{article.title}}</a>
          </h2>
        </div>
      </div>
      <div class="entry__body post-list__body card__body">  
        <h2 class="entry__title">
          <a :href="article.url">{{article.title}}</a>
        </h2>
        <ul class="entry__meta">
          <li class="entry__meta-author">
            <span>Published at</span>
          </li>
          <li class="entry__meta-date">
            {{article.publishedDate}}
          </li>              
        </ul>
      </div>
    </article>
  </div>
</template>

<script>
export default {
    created: async function() {
      const articleResponse = await fetch("resources/news/NewYorkTimes/top_stories/technology/snapshot.json")
      const articles = await articleResponse.json()
      this.article = articles[1]
    },
  //   props: {
  //     article: {
  //         type: Object,
  //         required: true
  //     }
  //  },
    data : function(){
      return {
        article: {
          title: "",
          abstract: "",
          url:"",
          image: {
            thumbnail: "",
            main: ""
          },
          publishedDate: ""
        },
      }
    },
}
</script>

