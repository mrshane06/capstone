<template>
  <navbar-comp>
    <router-link ></router-link>
  </navbar-comp>
  <router-view/>
  <div>
      <footer-comp>

      </footer-comp>
    </div>
</template>

<script>

import footerComp from './components/footerComp.vue'
import NavbarComp from './components/navbarComp.vue';
export default{
  components:{
    footerComp,
    NavbarComp,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap');

*{
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Irish Grover", system-ui;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

body{
  background-color: #D9D9D9;
  text-align: center;
  min-height: 100vh;
}


/* navbar settings */
nav {
  overflow: hidden;
  top: 0;
  width: 100%;
  background-color: #1B4332;
  box-shadow: 3px 3px 3px;
}

li {
  padding: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
}

li a {
  color: white;
  text-decoration: none;
}

li :active{
  color: #2dad77;
}

@media only screen and (max-width:400px){
  nav{
    width: 100%;
  }
  #logo{
    margin: 0;
  }
}

@media only screen and (max-width:300px){
  nav{
    width: 100%;
  }
}
</style>
