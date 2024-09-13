<template>
  <section id="about">
            <img src="https://mrshane06.github.io/capstone-images/Pexels/pexels-lina-1741231.jpg" id="about-img">
            <p id="about-text">Welcome to The Book Nook, your cozy haven for literary adventures! Nestled in the heart of town, our charming bookstore invites you to explore a curated collection of novels, fiction, and everything in between. Whether you're searching for your next great read, a thoughtful gift, or simply a quiet corner to escape into a world of words, you'll find it here.The Book Nook is more than just a store—it's a community of fellow book lovers. Come in, browse our shelves, and let your imagination take flight!</p>
  </section>
  <section id="about-bottom">
    <div class="row">
          <div class="col-md-4 col-sm-6">
            <img src="https://mrshane06.github.io/capstone-images/Pexels/pexels-karlsolano-2883049.jpg" id="img1">
          </div>
          <div  class="col-md-4 col-sm-6">
            <img src="https://mrshane06.github.io/capstone-images/Pexels/pexels-ekrulila-2203051.jpg" id="img2">
          </div>
          <div  class="col-md-4 col-sm-12">
            <img src="https://mrshane06.github.io/capstone-images/Pexels/pexels-juanpphotoandvideo-877971.jpg" id="img3">
          </div>
        </div>
  </section>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  /* about section */
  #about{
    background-color: #2D6A4F;
  }
  #about-img{
    width: 400px;
    height: 250px;
    margin-right: 710px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  #about-text{
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 8vw;
    left: 50vw;
    width: 35vw;
    color: white;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  /* bottom half */
  #about-bottom{
    background-color: color;
  }
  #img1{
    width: 400px;
    height: 300px;
    padding: 10px;
  }
  #img2{
    width: 500px;
    height: 300px;
    padding: 10px;
  }
  #img3{
    width: 400px;
    height: 300px;
    padding: 10px;
  }
  @media only screen and (max-width:400px){
  /* about section */
    #about{
    background-color: #2D6A4F;
  }
  #about-img{
    width: 275px;
    height: 175px;
    margin-right: 0px;
    margin-top: 15px;
    margin-bottom: 5px;
  }
  #about-text{
    position:sticky;
    display: flex;
    flex-direction: column;
    top: 50vw;
    left: 12vw;
    font-size: 10px;
    width: 75vw;
    color: white;
    margin-top: 15px;
    padding-bottom: 15px;
  }
  /* bottom half */
  #about-bottom{
    background-color: color;
  }
  #img1{
    display: none;
  }
  #img2{
    width: 350px;
    height: 200px;
    padding-top: 0px;
    padding-bottom: 10px;
  }
  #img3{
    display: none;
  }
  }

  @media only screen and (max-width:360px){
    #img1{
    width: 320px;
    height: 165px;
    }
  }

  @media only screen and (max-width:320px){
    #img1{
    width: 300px;
    height: 160px;
    padding-top: 0px;
    padding-bottom: 10px;
    }
    #about-img{
    width: 275px;
    height: 137px;
    margin-right: 0px;
    margin-top: 15px;
    margin-bottom: 5px;
  }
  #about-text{
    top: 50vw;
    left: 12vw;
    font-size: 9.3px;
    width: 75vw;
    margin-top: 15px;
    padding-bottom: 15px;
  }
  #img2{
    width: 300px;
    height: 200px;
    padding-top: 0px;
    padding-bottom: 10px;
  }
  }
</style>