<template>
  <div v-if="home">
    <spinner-comp>

    </spinner-comp>
  </div>
  <div v-else>
    <section>
    <div id="c_1">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-interval="5">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div id="ad-text">
                <p id="ad-title">Take a look at our gothic fiction genre where we will explore dark, eerie settings and combines horror, romance, and psychological tension to create a mysterious and unsettling atmosphere.</p>
                <div id="ad-but-1">
                  <a href="/products"><button id="btn"> View More</button></a>
                </div>
              </div>
              <img src="https://mrshane06.github.io/capstone-images/Carousel/GF_slide1.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <div id="ad-text">
                <p id="ad-title">Take a look at our many Romance novels that focus on the emotional journey of characters falling in love and overcoming obstacles to be together.</p>
                <div id="ad-but-1">
                  <a href="/products"><button id="btn"> View More</button></a>
                </div>
              </div>
              <img src="https://mrshane06.github.io/capstone-images/Carousel/R_slide2.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <div id="ad-text">
                <p id="ad-title">Dark fantasy blends magical elements with darker themes, creating a world where fantastical and ominous forces intertwine, often exploring complex, shadowy narratives.</p>
                <div id="ad-but-1">
                  <a href="/products"><button id="btn"> View More</button></a>
                </div>
              </div>
              <img src="https://mrshane06.github.io/capstone-images/Carousel/F_slide3.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <div id="ad-text">
                <p id="ad-title">Historical fiction recreates past eras, blending factual events with imaginative storytelling to bring historical periods and figures to life.</p>
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

  <section id="mobile">
    <img src="https://mrshane06.github.io/capstone-images/Carousel/GF_mobile.png" id="mobile-img">
    <p id="title">Take a look at our gothic fiction genre where we will explore dark, eerie settings and combines horror, romance, and psychological tension to create a mysterious and unsettling atmosphere.</p>
    <a href="/products"><button id="btn"> View More</button></a>
  </section>

  <section id="home-login">
    <div class="h5">
        <h5 class="text">Login or create an account and browse through our wide selection of books :</h5>
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
  </div>
</template>
<script>
import spinnerComp from '@/components/spinnerComp.vue';
export default {
  components:{
    spinnerComp
  }
}
</script>
<style scoped>
  *{
    padding: 0;
    box-sizing: border-box;
  }

  #mobile{
    display: none;
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
    top: 5.4vw;
    left: 25vw;
    width: 45vw;
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

   @media only screen and (max-width:400px){
    /* mobile */
    *{
      margin: 0;
    }
    #mobile{
      display: block;
    }
    #mobile-img{
      width: 150px;
      height: 195px;
      margin-right: 185px;
      margin-top: 15px;
      margin-bottom: 10px;
    }
    #title{
    position: absolute;
    display: flex;
    flex-direction: column;
    font-size: 12.4px;
    top: 35vw;
    left: 43vw;
    width: 55vw;
  }
  #btn {
    margin-top: 1.5vw;
    width: 90px;
    height: 30px;
    top: 75vw;
    left: 58vw;
    border-radius: 60px;
    color: rgb(255, 255, 255);
    cursor: pointer;
    position: absolute;
    overflow: hidden;
    transition: all 0.3s;
    border-radius: 12px;
    background-color: #2D6A4F;
   }
    /* section */
    .text{
      text-align: left;
      padding: 0;
      font-size: 18px;
    }
    #section-img{
      display: none;
      margin: 0;
    }
    .bm{
    margin-left: 0px;
    border-radius: 60px;
    background-color: #D8F3DC;
    width: 80px;
    height: 40px;
    place-content: center;
    font-size: 15px;
    margin-left: 140px;
    }
    .h5{
    padding: 25px;
    margin-left: 0px;
    padding-bottom: 40px;
  }
  #home-login{
    background-color: #2D6A4F;
    color: white;
    text-align: left;
  }
  h5{
    padding-left: 130px;
  }
   #c_1{
    display: none;
   }
  }
  @media only screen and (max-width:300px){
    *{
      margin: 0;
    }
    /* top */
    #mobile-img{
      width: 120px;
      height: 175px;
      margin-right: 160px;
      margin-top: 23px;
      margin-bottom: 22px;
    }
    #title{
    font-size: 10px;
    top: 45vw;
    left: 45vw;
    width: 50vw;
  }
  #btn {
    margin-top: 1.5vw;
    width: 90px;
    height: 30px;
    top: 85vw;
    left: 54vw;
    position: absolute;
   }
    /* section */
    .text{
      width:80vw;
      padding-bottom: 30px;
      margin: 0;
      font-size: 14px;
    }
    .bm{
    width: 80px;
    height: 40px;
    font-size: 15px;
    margin-left: 85px;
    }
    .h5{
    padding: 25px;
    margin-left: 0px;
    padding-bottom: 24px;
  }
  h5{
    padding-left: 75px;
  }
   #c_1{
    display: none;
   }
  }
</style>