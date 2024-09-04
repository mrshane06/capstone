<template>
  <div>
    <navbar-comp>
      <router-link ></router-link>
    </navbar-comp>
    <router-view/>
  </div>
  <section>
    <div id="c_1">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-interval="5">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div id="ad-text">
                <p id="ad-title">Take a look at our gothic fiction genre and many others:</p>
                <div id="ad-but-1">
                  <a href="/products"><button id="btn"> View More</button></a>
                </div>
              </div>
              <img src="https://mrshane06.github.io/capstone-images/Carousel/GF_slide1.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <div id="ad-text">
                <p id="ad-title">Take a look at our many Romance novels.</p>
                <div id="ad-but-1">
                  <a href="/products"><button id="btn"> View More</button></a>
                </div>
              </div>
              <img src="https://mrshane06.github.io/capstone-images/Carousel/R_slide2.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <div id="ad-text">
                <p id="ad-title">Get lost in the fantasy worlds that we have in stock.</p>
                <div id="ad-but-1">
                  <a href="/products"><button id="btn"> View More</button></a>
                </div>
              </div>
              <img src="https://mrshane06.github.io/capstone-images/Carousel/F_slide3.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <div id="ad-text">
                <p id="ad-title">Learn about past events and eras with our highly entertaining historical fiction genre.</p>
                <div id="ad-but-1">
                  <a href="/products"><button id="btn"> View More</button></a>
                </div>
              </div>
              <img src="https://mrshane06.github.io/capstone-images/Carousel/HF_slide4.png" class="d-block w-100" alt="...">
            </div>
          </div>
        </div>
      </div>
  </section>

  <section id="home-login">
    <div class="h5">
        <h5 class="text">Login or create an account and browse through or wide selection of books :</h5>
        <div class="row">
          <div class="col-md-2 col-sm-12">
            <a href="/signup"><button class="bm">Sign Up</button></a>
            <br><br>
            <h5>Or</h5> 
            <br>
            <a href="/login"><button class="bm">Login</button></a>
          </div>
          <div  class="col-md-8 col-sm-12">
            <img src="https://mrshane06.github.io/capstone-images/Pexels/pexels-repuding-12064.jpg" id="section-img">
          </div>
        </div>
    </div>
  </section>
</template>
<script>
import navbarComp from '@/components/navbarComp.vue';
export default {
  navbarComp,
}
</script>
<style scoped>
  *{
    padding: 0;
    box-sizing: border-box;
  }

  /* Section */
  .text{
    padding-bottom: 30px;
  }
  .h5{
    padding: 25px;
    margin-left: 50px;
    padding-bottom: 15px;
  }
  #home-login{
    background-color: #2D6A4F;
    color: white;
    text-align: left;
  }
  h5{
    margin-left: 40px;
  }
  .bm{
    margin-left: 5px;
    border-radius: 60px;
    background-color: #D8F3DC;
    width: 105px;
    height: 40px;
  }
  #section-img{
    height: 174px;
    width: 785px;
    margin-left: 80px;
  }
  /* Carousel */
  #ad-text{
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 8vw;
    left: 25vw;
    width: 35vw;
  }
  #ad-title{
    color: black;
    font-size: 1.3vw;
    margin-left: 7vw;
    margin-bottom: 0vw;
  }
  #btn {
    margin-top: 1.5vw;
    width: 90px;
    height: 30px;
    right: 5vw;
    border-radius: 60px;
    color: rgb(255, 255, 255);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s;
    border-radius: 12px;
    background-color: #2D6A4F;
   }
   #btn:hover {
    background-color: #359D58;
    color: #fff;
   }
   #btn:active {
    transform: scale(0.9);
   }
</style>