<template>
    <div class="single-blog-post post-style-2 d-flex align-items-center widget-post">
        <div class="post-thumbnail">
            <img :src="thumbnail" alt="thumbnail">
        </div>
        <div class="post-content">
            <a :href="article.url" class="headline">
                <h5 class="mb-0">{{article.title}}</h5>
            </a>
        </div>
    </div>
</template>
<script>
export default {
   props: {
        thumbnail: {
            type: String,
            required: true
        },
        article: {
            type: Object,
            required: true
        }
   }
}
</script>
