<template>
  <div class="row">
      <div class="col-12 col-md-6">
          <div class="world-catagory-slider owl-carousel wow fadeInUpBig" data-wow-delay="0.1s">

              <!-- Single Blog Post -->
              <div class="single-blog-post">
                  <!-- Post Thumbnail -->
                  <div class="post-thumbnail">
                      <img src="theme/img/blog-img/b1.jpg" alt="">
                      <!-- Catagory -->
                      <div class="post-cta"><a href="#">travel</a></div>
                  </div>
                  <!-- Post Content -->
                  <div class="post-content">
                      <a href="#" class="headline">
                          <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                      </a>
                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                      <!-- Post Meta -->
                      <div class="post-meta">
                          <p><a href="#" class="post-author">Katy Liu</a> on <a href="#" class="post-date">Sep 29, 2017 at 9:48 am</a></p>
                      </div>
                  </div>
              </div>

              <!-- Single Blog Post -->
              <div class="single-blog-post">
                  <!-- Post Thumbnail -->
                  <div class="post-thumbnail">
                      <img src="theme/img/blog-img/b2.jpg" alt="">
                      <!-- Catagory -->
                      <div class="post-cta"><a href="#">travel</a></div>
                  </div>
                  <!-- Post Content -->
                  <div class="post-content">
                      <a href="#" class="headline">
                          <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                      </a>
                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                      <!-- Post Meta -->
                      <div class="post-meta">
                          <p><a href="#" class="post-author">Katy Liu</a> on <a href="#" class="post-date">Sep 29, 2017 at 9:48 am</a></p>
                      </div>
                  </div>
              </div>

              <!-- Single Blog Post -->
              <div class="single-blog-post">
                  <!-- Post Thumbnail -->
                  <div class="post-thumbnail">
                      <img src="theme/img/blog-img/b3.jpg" alt="">
                      <!-- Catagory -->
                      <div class="post-cta"><a href="#">travel</a></div>
                  </div>
                  <!-- Post Content -->
                  <div class="post-content">
                      <a href="#" class="headline">
                          <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                      </a>
                      <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                      <!-- Post Meta -->
                      <div class="post-meta">
                          <p><a href="#" class="post-author">Katy Liu</a> on <a href="#" class="post-date">Sep 29, 2017 at 9:48 am</a></p>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div class="col-12 col-md-6">
          <!-- Single Blog Post -->
          <div class="single-blog-post post-style-2 d-flex align-items-center wow fadeInUpBig" data-wow-delay="0.2s">
              <!-- Post Thumbnail -->
              <div class="post-thumbnail">
                  <img src="theme/img/blog-img/b10.jpg" alt="">
              </div>
              <!-- Post Content -->
              <div class="post-content">
                  <a href="#" class="headline">
                      <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                  </a>
                  <!-- Post Meta -->
                  <div class="post-meta">
                      <p><a href="#" class="post-author">Katy Liu</a> on <a href="#" class="post-date">Sep 29, 2017 at 9:48 am</a></p>
                  </div>
              </div>
          </div>

          <!-- Single Blog Post -->
          <div class="single-blog-post post-style-2 d-flex align-items-center wow fadeInUpBig" data-wow-delay="0.3s">
              <!-- Post Thumbnail -->
              <div class="post-thumbnail">
                  <img src="theme/img/blog-img/b11.jpg" alt="">
              </div>
              <!-- Post Content -->
              <div class="post-content">
                  <a href="#" class="headline">
                      <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                  </a>
                  <!-- Post Meta -->
                  <div class="post-meta">
                      <p><a href="#" class="post-author">Katy Liu</a> on <a href="#" class="post-date">Sep 29, 2017 at 9:48 am</a></p>
                  </div>
              </div>
          </div>

          <!-- Single Blog Post -->
          <div class="single-blog-post post-style-2 d-flex align-items-center wow fadeInUpBig" data-wow-delay="0.4s">
              <!-- Post Thumbnail -->
              <div class="post-thumbnail">
                  <img src="theme/img/blog-img/b12.jpg" alt="">
              </div>
              <!-- Post Content -->
              <div class="post-content">
                  <a href="#" class="headline">
                      <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                  </a>
                  <!-- Post Meta -->
                  <div class="post-meta">
                      <p><a href="#" class="post-author">Katy Liu</a> on <a href="#" class="post-date">Sep 29, 2017 at 9:48 am</a></p>
                  </div>
              </div>
          </div>

          <!-- Single Blog Post -->
          <div class="single-blog-post post-style-2 d-flex align-items-center wow fadeInUpBig" data-wow-delay="0.5s">
              <!-- Post Thumbnail -->
              <div class="post-thumbnail">
                  <img src="theme/img/blog-img/b13.jpg" alt="">
              </div>
              <!-- Post Content -->
              <div class="post-content">
                  <a href="#" class="headline">
                      <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                  </a>
                  <!-- Post Meta -->
                  <div class="post-meta">
                      <p><a href="#" class="post-author">Katy Liu</a> on <a href="#" class="post-date">Sep 29, 2017 at 9:48 am</a></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
    components: {

    },
    created: async function(){
        $('.world-catagory-slider, .world-catagory-slider2').owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3500, // Autoplay Timeout 1s = 1000ms
            smartSpeed: 2000,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });
    },
    data : function(){
      return {
      }
    },  
}
</script>
