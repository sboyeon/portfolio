<template>
  <div class="webClone_wrap1 scroll">
    <h1 class="webCloneTxt">Web clone</h1>
    <div class="webClone_bot_wrap">
      <div class="webClone_txt_wrap">
        <p>01.<br><span>Pollexzone</span></p>
        <div class="webClone_spans">
          <span>#html</span>
          <span>#css</span>
          <span>#js</span>
          <span>#jQery</span>
          <span>#MySQL</span>
          <span>#Node.js</span>
        </div>
        <div class="webClone_date">
          <span>제작기간: 04/26 - 5/16</span>
          <span>참여도: 100%</span>
        </div>
        <pre class="webClone_explain">컨택센터 운영 업무대행 서비스 분야
최고 수준의 지식과 경험으로 차별화된 마케팅
Total solution을 제공하는 상담운영 아웃소싱
        </pre>
        <div class="webClone_link">
          <a href="">
            <p>사이트바로가기<img class="webClone_arrow1" src="../assets/img/64818.png" alt="link"></p>
          </a>
        </div>
      </div>
      <div class="webCloneImg">
        <img src="../assets/img/pollex.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'project-page',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


*{
  transition: all 0.5s ease;
}
 
.webClone_wrap1{
  background-color: rgba(255, 230, 207, 30%);
  height: 100vh;
}

.webCloneTxt{
 font-family: Dutch801 Rm BT;
  font-size: 48px;
  color: #EB2039;
  padding: 50px 10%;
  box-sizing: border-box;
  margin: 0;
}

.webClone_bot_wrap{
  display: flex;
  justify-content: space-around;
  padding: 50px;
  box-sizing: border-box;
  margin: 50px auto;
}

.webClone_txt_wrap{
  text-align: left;
}

.webClone_txt_wrap>p{
  font-family: Dutch801 Rm BT;
  font-size: 30px;
  margin: 10px 0;
  color: #424242;
}

.webClone_txt_wrap>p>span{
  font-family: Dutch801 Rm BT;
  font-size: 40px;
  font-weight: 700;
  color: #424242;
}

.webClone_txt_wrap span{
  font-family: Dutch801 Rm BT;
  color: #9094A7;
  margin-right: 10px;
}

.webClone_date{
  margin-top: 5px;
}

.webClone_date>span{
  font-family: Dutch801 Rm BT;
  color: #9094A7;
}

.webClone_date>span:nth-child(1){
  margin-right: 10px;
}

.webClone_explain{
  font-family: Dutch801 Rm BT;
  font-size: 18px;
  font-weight: 500;
}

.webClone_link{
  display: flex;
  position: relative;
}

.webClone_link>a{
  display: flex;
  text-decoration: none;
  color: #424242;
}

.webClone_link>a>p{
  margin-right: 30px;
}

.webClone_arrow1{
  width: 30px;
  transform:rotate(-65deg);
  position: absolute;
  top: 50%; left: 27%;
}

.webCloneImg>img{
  width: 576px;
}






@media screen and (max-width : 1280px) {

  .webClone_bot_wrap{
    padding: 32px;
    box-sizing: border-box;
  }

  .webCloneImg>img{
    width: 530px;
  }

}


@media screen and (max-width : 1024px) {

  .webClone_bot_wrap{
    padding: 20px;
  }

  .webClone_txt_wrap>p>span{
    font-size: 35px;
  }

  .webClone_txt_wrap span{
    font-size: 14px;
  }

  .webClone_date>span{
    font-size: 14px;
  }

  .webClone_explain{
    font-size: 17px;
  }

  .webClone_link>a>p{
    font-size: 15px;
  }

  .webCloneImg>img{
    width: 470px;
    margin: 30px 0;
  }

}


@media screen and (max-width : 948px) {

  .webCloneTxt{
    padding: 30px;
    box-sizing: border-box;
  }

  .webClone_bot_wrap{
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    align-items: center;
  }
   
  .webClone_txt_wrap>p{
    font-size: 27px;
    padding: 0px 0px 0px 20px;
    box-sizing: border-box;
  }

  .webClone_txt_wrap>p>span{
    font-size: 26px;
  }

  .webClone_spans{
    padding: 0px 0px 0px 20px;
  }

  .webClone_spans>span{
    font-size: 15px;
    margin: 5px;
  }

  .webClone_date{
    padding: 0px 0px 0px 20px;
  }

  .webClone_date>span{
    font-size: 15px;
    margin: 5px;
  }

  .webClone_explain{
    padding: 0px 0px 0px 20px;
    font-size: 16px;
  }

  .webClone_link>a>p{
    margin: 10px 25px;
  }

  .webClone_arrow1{
    left: 34%;
  }

  .webCloneImg>img{
    width: 430px;
    margin: 30px 0;
  }


}



@media screen and (max-width : 780px) {

  .webCloneImg>img{
    width: 410px;
  }

}


@media screen and (max-width : 690px) {

  .webCloneImg>img{
    width: 380px;
  }

}


@media screen and (max-width : 480px) {

  .webClone_txt_wrap>p{
    font-size: 20px;
  }

  .webClone_txt_wrap>p>span{
    font-size: 23px;
  }

  .webClone_spans>span{
    font-size: 12px;
    margin: 3px;
  }

  .webClone_date>span{
    font-size: 12px;
    margin: 3px;
  }

  .webClone_explain{
    font-size: 14px;
  }

  .webClone_link>a>p{
    margin: 5px 15px;
    font-size: 14px;
  }

  .webClone_arrow1{
    left: 32%;
  }

  .webCloneImg>img{
    width: 300px;
  }

}


@media screen and (max-width : 376px) {

  .webCloneTxt{
    font-size: 46px;
    padding: 30px;
    box-sizing: border-box;
  }

  .webClone_bot_wrap{
    padding-top: 20%;
  }

  .webClone_txt_wrap>p{
    padding: 10px 40px;
  }

   .webClone_txt_wrap span{
    font-size: 11px;
  }

  .webClone_spans{
    padding: 0px 30px;
    box-sizing: border-box;
  }

  .webClone_date{
    padding: 0px 30px;
    box-sizing: border-box;
  }

  .webClone_explain{
    font-size: 12px;
    padding: 0px 30px;
    box-sizing: border-box;
  }

  .webClone_link>a>p{
    padding: 10px;
    margin: 0px 10px;
  }

  .webClone_link>a>p:first-child{
    margin-left: 25px;
  }

  .webClone_arrow1{
    left: 38%;
  }

  .webCloneImg>img{
    width: 220px;
  }


}

</style>
