<template>
<article class="mainNav scroll" id="top">
  <div>
    <a href="introPage.vue">
      <img class="mainLogo mo_none" src="../src/assets/img/peachLogo.png">
    </a>
  </div>
  <nav>
    <ul class="main_nav mo_none">
      <li v-on:click="gotointro">Intro</li>
      <li v-on:click="gotoabout">About</li>
      <li v-on:click="gotoproject">Project</li>
      <li v-on:click="gotoWebclone">Web clone</li>
      <li v-on:click="gotocontact">Contact</li>
    </ul>
  </nav>
  <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <a v-on:click="gotointro">Intro</a>
    <a v-on:click="gotoabout">About</a>
    <a v-on:click="gotoproject">Project</a>
    <a v-on:click="gotoWebclone">Web Clone</a>
    <a v-on:click="gotocontact">Contact</a>
</div>
<span class="web_none" style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span>
</article>
<introPage id="intro"></introPage>
<about id="about"></about>
<project></project>
<proTwo id="proTwo"></proTwo>
<webclone id="webclone"></webclone>
<webTwo id="webTwo"></webTwo>
<webThird id="webThird"></webThird>
<contactMe id="contact"></contactMe>
<p class="fotCopy">Copyright 2022. Web Publisher portfolio -- by Seong Boyeon</p>
<div class="moveTopBtn" id="container" @click="gototop"></div>

</template>

<script>
import introPage from './components/introPage.vue'
import about from './components/about.vue'
import project from './components/project.vue'
import proTwo from './components/projectTwo.vue'
import webclone from './components/webClone.vue'
import webTwo from './components/webCloneTwo.vue'
import webThird from './components/webCloneThr.vue'
import contactMe from './components/contactMe.vue'


export default {
  name: 'App',

  methods: {
     gotointro() {
      const intro = document.getElementById('intro')
      if(intro) {
        intro.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotoabout() {
      const about = document.getElementById('about')
      if(about) {
        about.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotoproject() {
      const project = document.getElementById('project')
      if(project) {
        project.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotoproTwo() {
      const proTwo = document.getElementById('project')
      if(proTwo) {
        proTwo.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotoWebclone() {
      const webclone = document.getElementById('webclone')
      if(webclone) {
        webclone.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotowebTwo() {
      const webTwo = document.getElementById('webTwo')
      if(webTwo) {
        webTwo.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotowebThird() {
      const webThird = document.getElementById('webTwo')
      if(webThird) {
        webThird.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotocontact() {
      const contact = document.getElementById('contact')
      if(contact) {
        contact.scrollIntoView({behavior : 'smooth'})
      }
    },
    gototop() {
      const contact = document.getElementById('top')
      if(contact) {
        contact.scrollIntoView({behavior : 'smooth'})
      }
    }

  },

  components: {
    introPage,
    about,
    project,
    proTwo,
    webclone,
    webTwo,
    webThird,
    contactMe
  }

}


</script>

<style scoped>

  *{
    transition: all 0.5s ease;
  }

  .mainNav{
    display: flex;
    /* position: sticky;
    position: -webkit-sticky;  사파리 브라우저 지원
    top: 0; */
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgba(255, 230, 207, 30%);
  }

  .mainLogo{
    width: 120px;
  }

  .main_nav{
    list-style: none;
    display: flex;
    justify-content: flex-end;
  }

  .main_nav>li{
    padding: 5px 20px;
    font-size: 30px;
    font-family: Dutch801 Rm BT;
    color: #CFB6A4;
    cursor: pointer;
  }

  .main_nav>li:hover{
    text-decoration: underline;
    text-decoration-style: wavy;
    text-decoration-color: rgba(94, 154, 205, 60%);
  }

  .sidenav {
    width: 0; height: 100%;
    position: fixed;
    z-index: 1;
    top: 0; right: 0;
    background-color: #CFB6A4;
    overflow-x: hidden;
    padding-top: 60px;
  }

  .sidenav a {
    display: block;
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 24px;
    color: #FFFAF6;
    font-family: Dutch801 Rm BT;
  }

  .sidenav a:hover {
    color: #EB2039;
  }

  .sidenav .closebtn {
    position: absolute;
    top: 0; right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }

  .fotCopy{
    font-family: Noto Sans KR;
    font-size: 16px;
    color: #424242;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgba(255, 230, 207, 30%);
    margin: 0;
  }

  .moveTopBtn{
    position: fixed;
    width: 60px; height: 60px;
    border-radius: 50%;
    right: 50px; bottom: 94px;
    box-shadow: 3px 3px 18px 15px rgb(0 0 0 / 5%);
    transition: all 0.3s ease-out;
    text-decoration: none;
    text-align: center;
    animation: avia_pop 0.3s cubic-bezier(0.175, 0.885, 0.320, 1.275);
    -webkit-font-smoothing: antialiased;
    z-index: 99;
    cursor: pointer;
    background: url(../src/assets/img/btn_scrollTop.png) center center no-repeat;
    background-size: 100%;
    image-rendering: -webkit-optimize-contrast;
  }

  #container{
    transition-duration: 1s;
    opacity: 0;
  }

  .web_none{
    display: none;
  }


 @media screen and (max-width : 1280px) {

  .mainNav {
    width: 100%;
  }

  .mainNav>div {
    width: 0px;
  }

  .mainLogo {
    width: 100%;
  }

  .main_nav>li {
    font-size: 25px;
  }

}



@media screen and (max-width : 1024px) {

  .main_nav>li {
    font-size: 20px;
    padding: 5px 20px;
    box-sizing: border-box;
  }

}


@media screen and (max-width : 948px) {

  .main_nav>li {
    font-size: 18px;
  }

}




@media screen and (max-width : 780px) {

  .web_none{
    display: block;
  }

  .mo_none{
    display: none;
  }

  .main_nav>li {
    font-size: 16px;
    padding: 10px;
  }

  .moveTopBtn{
    width: 50px; height: 50px;
    padding: 16px 0;
    box-sizing: border-box;
    right: 30px; bottom: 30px;
    box-shadow: 2px 2px 12px 7px rgb(0 0 0 / 5%);
  }

  .moveTopBtn::before{
    width: 12px; height: 7px;
    margin: 0 auto 7px;
  }
  
  .moveTopBtn>span{
    font-size: 13px;
    letter-spacing: 0.2px;
  }

}

@media screen and (max-width : 522px) {

  .main_nav>li {
    font-size: 14px;
    padding: 5px;
  }

}


@media screen and (max-width : 480px) {

  .main_nav>li {
    font-size: 13px;
    padding: 3px;
  }

  .sidenav {
    padding-top: 15px;
  }

  .sidenav a {
    font-size: 18px;
  }

  .moveTopBtn{
    width: 45px; height: 45px;
    padding: 16px 0;
    box-sizing: border-box;
    right: 30px; bottom: 85px;
    box-shadow: 2px 2px 12px 7px rgb(0 0 0 / 5%);
  }

  .moveTopBtn::before{
    width: 12px; height: 7px;
    margin: 0 auto 7px;
  }
  
  .moveTopBtn>span{
    font-size: 13px;
    letter-spacing: 0.2px;
  }

}


@media screen and (max-width : 376px) {


  nav{
    width: 100%;
  }

  .main_nav{
    padding: 0;
    justify-content: flex-start;
  }
  
  .mainLogo{
    display: none;
  }

  .main_nav>li{
    font-size: 9px;
    padding: 2px;
  }

  .fotCopy{
    font-size: 14px;
    padding: 13px;
  }
  
}



</style>
