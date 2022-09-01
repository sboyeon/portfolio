<template>
  <div class="project_modal" v-if="modal1 == true">
    <div class="project_close" @click="modal1 = false"></div>
  </div>
  <div class="project_wrap1 scroll" id="project">
    <h1 class="projectTxt">Project</h1>
    <div class="project_bot_wrap">
      <div class="project_txt_wrap">
        <p>01.<br><span>TOUS les JOURS</span></p>
        <div class="project_spans">
          <span>#html</span>
          <span>#css</span>
          <span>#js</span>
          <span>#jQuery</span>
          <span>#MySQL</span>
          <span>#Node.js</span>
        </div>
        <div class="project_date">
          <span>제작기간: 5/10 - 6/30</span>
          <span>참여도: 30%</span>
        </div>
        <ul class="project_menu">
          <li>메뉴소개 페이지</li>
          <li>Animated search: 검색창이 뜨도록 css input속성 구현</li>
          <li>@keyframes: css @keyframes와 js로 hover시 이미지 흔들리는 효과구현</li>
          <li>Top button: 설정된 Y값으로 스크롤 시 해당 버튼의 Opacity 활성화</li>
        </ul>
        <ul class="project_login">
          <li>로그인 페이지</li>
          <li>공란 존재 시 '다시 확인해주세요.' 경고문 띄움</li>
        </ul>
        <div class="project_link">
          <p @click="modal1 = true">Mockup
            <img class="project_arrow1" src="../assets/img/64818.png" alt="link">
            <img src="../assets/img/touslesjoursMockup.jpg" alt="mockup">
          </p>
          <p>사이트바로가기<img class="project_arrow2" src="../assets/img/64818.png" alt="link"></p>
        </div>
      </div>
      <div class="progectImg">
        <img src="../assets/img/figma116.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'project-page',
  data() {
    return {
      modal1: false
  }
} 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
*{
  transition: all 0.5s ease;
}

.project_wrap1{
  background-color: rgba(255, 230, 207, 30%);
  height: 100vh;
  position: relative;
}

.projectTxt{
  font-family: Dutch801 Rm BT;
  font-size: 48px;
  color: #EB2039;
   padding: 50px 10%;
  box-sizing: border-box;
  margin: 0;
}

.project_bot_wrap{
  display: flex;
  justify-content: space-around;
  padding: 50px;
  box-sizing: border-box;
  margin: 50px auto;
}

.project_txt_wrap{
  text-align: left;
}

.project_txt_wrap>p{
  font-family: Dutch801 Rm BT;
  font-size: 30px;
  margin: 10px 0;
  color: #424242;
}

.project_txt_wrap>p>span{
  font-family: Dutch801 Rm BT;
  font-size: 40px;
  font-weight: 700;
  color: #424242;
}

.project_txt_wrap span{
  font-family: Dutch801 Rm BT;
  color: #9094A7;
  margin: 10px 0;
}

.project_date{
  margin-top: 5px;
}

.project_date>span{
  font-family: Dutch801 Rm BT;
  color: #9094A7;
}

.project_date>span:nth-child(1){
  margin-right: 10px;
}

.project_menu>li:nth-child(1),
.project_login>li:nth-child(1){
  list-style: none;
  margin-bottom: 5px;
  font-size: 18px;
}

.project_menu>li, .project_login>li{
  font-family: Dutch801 Rm BT;
  font-size: 15px;
  color: #424242;
}

.project_link{
  display: flex;
  position: relative;
  color: #424242;
}

.project_link>p{
  margin: 16px 30px;
  overflow-y: scroll;
}

.project_link>p>img:nth-child(2) {
  display: block;
  width: 100%;
}

.project_arrow1{
  width: 30px;
  transform:rotate(-60deg);
  position: absolute;
  top: 50%; left: 14%;
}

.project_arrow2{
  width: 30px;
  transform:rotate(-65deg);
  position: absolute;
  top: 50%; left: 48%;
}

.progectImg>img{
  width: 576px;
}

/* .project_modal {
  background: url(../assets/img/touslesjoursMockup.jpg) no-repeat;
  background-size: 100%;
  image-rendering: -webkit-optimize-contrast;
  position: fixed;
  top: 50%; right: 10%;
  transform: translate(-10%, -50%);
  height: 100%; 
  width: 30%;
  width: 20%;
  z-index: 99;
  overflow: scroll;
  padding: 50px;
  box-sizing: border-box
} */

.project_close {
  width: 20px; height: 20px;
  position: absolute;
  top: 0px; right: 3%;
  background: url(../assets/img/close.png) center center no-repeat;
  background-size: 100%;
}



@media screen and (max-width : 1280px) {

  .project_bot_wrap{
    padding: 40px;
    box-sizing: border-box;
  }

  .project_arrow1{
    left: 20%;
  }

  .project_arrow2{
    left: 69%;
  }

  .progectImg>img{
    width: 560px;
  }

}


@media screen and (max-width : 1024px) {

  .project_bot_wrap{
    padding: 30px;
  }

  .project_txt_wrap>p>span{
    font-size: 35px;
  }

  .project_spans>span{
    font-size: 15px;
    margin: 5px;
  }

  .project_date>span{
    font-size: 15px;
    margin: 5px;
  }

  .project_menu>li:nth-child(1),
  .project_login>li:nth-child(1){
    font-size: 16px;
  }

  .project_menu>li, .project_login>li{
    font-size: 14px;
  }

  .project_link>p{
    font-size: 15px;
  }

  .project_arrow1{
    left: 22%;
  }

  .project_arrow2{
    left: 75%;
  }

  .progectImg>img{
    width: 550px;
    margin: 30px 0;
  }

}


@media screen and (max-width : 948px) {

  .projectTxt{
    padding: 30px;
    box-sizing: border-box;
  }

  .project_bot_wrap{
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    align-items: center;
  }

   
  .project_txt_wrap>p{
    font-size: 27px;
    padding: 0px 0px 0px 20px;
    box-sizing: border-box;
  }

  .project_txt_wrap>p>span{
    font-size: 26px;
  }

  .project_spans{
    padding: 0px 0px 0px 20px;
  }

  .project_spans>span{
    font-size: 15px;
    margin: 5px;
  }

  .project_date{
    padding: 0px 0px 0px 20px;
  }

  .project_date>span{
    font-size: 15px;
    margin: 5px;
  }

  .project_link>p{
    margin: 10px 25px;
  }

  .project_arrow1{
    left: 15%;
  }

  .project_arrow2{
    left: 51%;
  }
  
  .progectImg>img{
    width: 440px;
    margin: 30px 0;
  }

}



@media screen and (max-width : 690px) {

  .project_menu>li:nth-child(1),
  .project_login>li:nth-child(1){
    font-size: 16px;
  }

  .project_menu>li, .project_login>li{
    font-size: 14px;
  }

  .project_arrow2{
    left: 51%;
  }

  .progectImg>img{
    width: 400px;
  }

}


@media screen and (max-width : 522px) {

  .project_menu>li:nth-child(1),
  .project_login>li:nth-child(1){
    font-size: 16px;
  }

  .project_menu>li, .project_login>li{
    font-size: 14px;
  }

  .project_arrow1{
    left: 16%;
  }

  .project_arrow2{
    left: 55%;
  }

  .progectImg>img{
    width: 400px;
  }

}


@media screen and (max-width : 480px) {

  .project_txt_wrap>p{
    font-size: 20px;
  }

  .project_txt_wrap>p>span{
    font-size: 23px;
  }

  .project_spans>span{
    font-size: 12px;
    margin: 3px;
  }

  .project_date>span{
    font-size: 12px;
    margin: 3px;
  }

  .project_menu>li:nth-child(1),
  .project_login>li:nth-child(1){
    font-size: 14px;
  }

  .project_menu>li{
    font-size: 12px;
  }

  .project_link{
    padding: 0px 0px 0px 10px;
    box-sizing: border-box;
  }

  .project_link>p{
    margin: 5px 15px;
    font-size: 14px;
  }

  .project_arrow1{
    left: 24%;
  }

  .project_arrow2{
    left: 74%;
  }

  .progectImg>img{
    width: 310px;
  }

}


@media screen and (max-width : 376px) {

  .project_txt_wrap span{
    font-size: 11px;
  }

  .project_link>p{
    margin: 8px 21px;
  }

  .project_arrow1{
    left: 23%;
  }

  .project_arrow2{
    left: 74%;
  }

  .progectImg>img{
    width: 230px;
  }

}

</style>
