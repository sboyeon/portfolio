<template>
  <div class="project_wrap2 scroll">
    <h1 class="projectTxt2">Project</h1>
    <div class="project_bot_wrap2">
      <div class="project_txt_wrap2">
        <p>02.<br><span>NightSeomun</span></p>
        <div class="project_spans2">
          <span>#html</span>
          <span>#css</span>
          <span>#js</span>
          <span>#jQery</span>
          <span>#MySQL</span>
          <span>#Node.js</span>
        </div>
        <div class="project_date2">
          <span>제작기간: 3/11 - 4/14</span>
          <span>참여도: 100%</span>
        </div>
        <ul class="project_menu2">
          <li>메인 페이지</li>
          <li>Nav 재배치 및 Accordions 적용</li>
          <li>중복 내용 삭제 및 유사 카테고리끼리 재배열</li>
          <li>홍보영상 상단으로 배치</li>
        </ul>
        <ul class="project_menu2">
          <li>소개 페이지</li>
          <li>텍스트 재배열</li>
          <li>사진 통일감 부여</li>
          <li>지도 및 중요사항 통합 배열</li>
        </ul>
        <ul class="project_login2">
          <li>회원가입/로그인 페이지</li>
          <li>목적에 따라 회원가입 유형 선택</li>
          <li>셀러의 경우 필수 입력 문항 생성</li>
        </ul>
        <div class="project_link2">
            <p>Mockup<img class="project_arrow1" src="../assets/img/64818.png" alt="link"></p>
            <p>사이트바로가기<img class="project_arrow2" src="../assets/img/64818.png" alt="link"></p>
        </div>
      </div>
      <div class="progectImg2">
        <img src="../assets/img/seomunmain.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projectTwo_page',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

*{
  transition: all 0.5s ease;
}
 
.project_wrap2{
  background-color: rgba(255, 230, 207, 30%);
  height: 100vh;
}

.projectTxt2{
  font-family: Dutch801 Rm BT;
  font-size: 48px;
  color: #EB2039;
  padding: 50px 10%;
  box-sizing: border-box;
  margin: 0;
}

.project_bot_wrap2{
  display: flex;
  justify-content: space-around;
  padding: 50px;
  box-sizing: border-box;
  margin: 50px auto;
}

.project_txt_wrap2{
  text-align: left;
}

.project_txt_wrap2>p{
  font-family: Dutch801 Rm BT;
  font-size: 30px;
  margin: 10px 0;
  color: #424242;
}

.project_txt_wrap2>p>span{
  font-family: Dutch801 Rm BT;
  font-size: 40px;
  font-weight: 700;
  color: #424242;
}

.project_txt_wrap2 span{
  font-family: Dutch801 Rm BT;
  color: #9094A7;
  margin: 10px 0;
}

.project_date2{
  margin-top: 5px;
}

.project_date2>span{
  font-family: Dutch801 Rm BT;
  color: #9094A7;
}

.project_date2>span:nth-child(1){
  margin-right: 10px;
}

.project_menu2>li:nth-child(1),
.project_login2>li:nth-child(1){
  list-style: none;
  margin-bottom: 5px;
  font-size: 18px;
}

.project_menu2>li, .project_login2>li{
  font-family: Dutch801 Rm BT;
  font-size: 15px;
  color: #424242;
}

.project_link2{
  display: flex;
  position: relative;
  color: #424242;
}

.project_link2>p{
  margin: 16px 30px;
}

.project_arrow1{
  width: 30px;
  transform:rotate(-60deg);
  position: absolute;
  top: 50%; left: 21%;
}

.project_arrow2{
  width: 30px;
  transform:rotate(-65deg);
  position: absolute;
  top: 50%; left: 73%;
}

.progectImg2>img{
  width: 576px;
  margin: 100px auto;
  /* box-shadow: 10px 10px 3px rgb(0 0 0 / 20%); */
}



@media screen and (max-width : 1280px) {

  .project_bot_wrap2{
    padding: 40px;
    box-sizing: border-box;
  }

  .project_arrow2{
    left: 73%;
  }

  .progectImg2>img{
    width: 560px;
  }

}


@media screen and (max-width : 1024px) {

  .project_bot_wrap2{
    padding: 30px;
  }

  .project_txt_wrap2>p>span{
    font-size: 35px;
  }

  .project_spans2>span{
    font-size: 15px;
    margin: 5px;
  }

  .project_date2>span{
    font-size: 15px;
    margin: 5px;
  }

  .project_menu2>li:nth-child(1),
  .project_login2>li:nth-child(1){
    font-size: 16px;
  }

  .project_menu2>li, .project_login2>li{
    font-size: 14px;
  }

  .project_link2>p{
    font-size: 15px;
  }

  .project_arrow1{
    left: 21%;
  }

  .project_arrow2{
    left: 72%;
  }

  .progectImg2>img{
    width: 550px;
    margin: 30px 0;
  }

}


@media screen and (max-width : 948px) {

  .projectTxt2{
    padding: 30px;
    box-sizing: border-box;
  }

  .project_bot_wrap2{
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    align-items: center;
  }

   
  .project_txt_wrap2>p{
    font-size: 27px;
    padding: 0px 0px 0px 20px;
    box-sizing: border-box;
  }

  .project_txt_wrap2>p>span{
    font-size: 26px;
  }

  .project_spans2{
    padding: 0px 0px 0px 20px;
  }

  .project_spans2>span{
    font-size: 15px;
    margin: 5px;
  }

  .project_date2{
    padding: 0px 0px 0px 20px;
  }

  .project_date2>span{
    font-size: 15px;
    margin: 5px;
  }

  .project_link2>p{
    margin: 10px 25px;
  }

  .project_arrow1{
    left: 19%;
  }

  .project_arrow2{
    left: 64%;
  }

  .progectImg2>img{
    width: 440px;
    margin: 30px 0;
  }

}


@media screen and (max-width : 690px) {

  .project_menu2>li:nth-child(1),
  .project_login2>li:nth-child(1){
    font-size: 16px;
  }

  .project_menu2>li, .project_login2>li{
    font-size: 14px;
  }

   .project_arrow2{
    left: 63%;
  }

  .progectImg2>img{
    width: 400px;
  }

}


@media screen and (max-width : 522px) {

  .project_menu2>li:nth-child(1),
  .project_login2>li:nth-child(1){
    font-size: 16px;
  }

  .project_menu2>li, .project_login2>li{
    font-size: 14px;
  }

  .project_arrow1{
    left: 19%;
  }

  .project_arrow2{
    left: 64%;
  }

}


@media screen and (max-width : 480px) {

  .project_txt_wrap2>p{
    font-size: 20px;
  }

  .project_txt_wrap2>p>span{
    font-size: 23px;
  }

  .project_spans2>span{
    font-size: 12px;
    margin: 3px;
  }

  .project_date2>span{
    font-size: 12px;
    margin: 3px;
  }

  .project_menu2>li:nth-child(1),
  .project_login2>li:nth-child(1){
    font-size: 14px;
  }

  .project_menu2>li{
    font-size: 12px;
  }

  /* .project_link2{
    padding: 0px 0px 0px 10px;
    box-sizing: border-box;
  } */

  .project_link2>p{
    margin: 5px 15px;
    font-size: 14px;
  }

  .project_arrow1{
    left: 17%;
  }

  .project_arrow2{
    left: 65%;
  }
  
  .progectImg2>img{
    width: 290px;
  }

}


@media screen and (max-width : 376px) {

  .project_txt_wrap2 span{
    font-size: 11px;
  }

  .project_link2>p{
    padding: 15px;
    margin: 0px 10px;
  }

   .project_arrow1{
    left: 22%;
  }

  .project_arrow2{
    left: 79%;
  }

  .progectImg2>img{
    width: 220px;
  }

}

</style>
