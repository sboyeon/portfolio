<template>
  <div class="webClone_wrap3 scroll">
    <h1 class="webCloneTxt3">Web clone</h1>
    <div class="webClone_bot_wrap3">
      <div class="webClone_txt_wrap3">
        <p>03.<br><span>House.garden</span></p>
        <div class="webClone_spans3">
          <span>#html</span>
          <span>#css</span>
          <span>#js</span>
          <span>#jQery</span>
          <span>#MySQL</span>
          <span>#Node.js</span>
        </div>
        <div class="webClone_date3">
          <span>제작기간: 3/30 - 5/2</span>
          <span>참여도: 100%</span>
        </div>
        <pre class="webClone_explain3">반려식물부터 플랜테리어까지
식물과 함께하는 식물집사의 친환경 라이프
        </pre>
        <div class="webClone_link3">
          <a href="">
            <p>사이트바로가기<img class="webClone_arrow1" src="../assets/img/64818.png" alt="link"></p>
          </a>
        </div>
      </div>
      <div class="webCloneImg3">
        <img src="../assets/img/s_house.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'webCloneTwo-page',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


*{
  transition: all 0.5s ease;
}
 
.webClone_wrap3{
  background-color: rgba(255, 230, 207, 30%);
  height: 100vh;
}

.webCloneTxt3{
  font-family: Dutch801 Rm BT;
  font-size: 48px;
  color: #EB2039;
  padding: 50px 10%;
  box-sizing: border-box;
  margin: 0;
}

.webClone_bot_wrap3{
  display: flex;
  justify-content: space-around;
  padding: 50px;
  box-sizing: border-box;
  margin: 50px auto;
}

.webClone_txt_wrap3{
  text-align: left;
}

.webClone_txt_wrap3>p{
  font-family: Dutch801 Rm BT;
  font-size: 30px;
  margin: 10px 0;
  color: #424242;
}

.webClone_txt_wrap3>p>span{
  font-family: Dutch801 Rm BT;
  font-size: 40px;
  font-weight: 700;
  color: #424242;
}

.webClone_txt_wrap3 span{
  font-family: Dutch801 Rm BT;
  color: #9094A7;
  margin-right: 10px;
}

.webClone_date3{
  margin-top: 5px;
}

.webClone_date3>span{
  font-family: Dutch801 Rm BT;
  color: #9094A7;
}

.webClone_date3>span:nth-child(1){
  margin-right: 10px;
}

.webClone_explain3{
  font-family: Dutch801 Rm BT;
  font-size: 18px;
  font-weight: 500;
}

.webClone_link3{
  display: flex;
  position: relative;
}

.webClone_link3>a{
  display: flex;
  text-decoration: none;
  color: #424242;
}

.webClone_link3>a>p{
  margin-right: 30px;
}

.webClone_arrow1{
  width: 30px;
  transform:rotate(-65deg);
  position: absolute;
  top: 50%; left: 27%;
}

.webCloneImg3>img{
  width: 576px;
}





@media screen and (max-width : 1280px) {

  .webClone_bot_wrap2{
    padding: 32px;
    box-sizing: border-box;
  }

  .webCloneImg2>img{
    width: 530px;
  }

}


@media screen and (max-width : 1024px) {

  .webClone_bot_wrap2{
    padding: 20px;
  }

  .webClone_txt_wrap2>p>span{
    font-size: 35px;
  }

  .webClone_txt_wrap2 span{
    font-size: 14px;
  }

  .webClone_date2>span{
    font-size: 14px;
  }

  .webClone_explain2{
    font-size: 17px;
  }

  .webClone_link2>a>p{
    font-size: 15px;
  }

  .webCloneImg2>img{
    width: 470px;
    margin: 30px 0;
  }

}


@media screen and (max-width : 948px) {

  .webCloneTxt3{
    padding: 30px;
    box-sizing: border-box;
  }

  .webClone_bot_wrap3{
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    align-items: center;
  }
   
  .webClone_txt_wrap3>p{
    font-size: 27px;
    padding: 0px 0px 0px 20px;
    box-sizing: border-box;
  }

  .webClone_txt_wrap3>p>span{
    font-size: 26px;
  }

  .webClone_spans3{
    padding: 0px 0px 0px 20px;
  }

  .webClone_spans3>span{
    font-size: 15px;
    margin: 5px;
  }

  .webClone_date3{
    padding: 0px 0px 0px 20px;
  }

  .webClone_date3>span{
    font-size: 15px;
    margin: 5px;
  }

  .webClone_explain3{
    padding: 0px 0px 0px 20px;
    font-size: 16px;
  }

  .webClone_link3>a>p{
    margin: 10px 25px;
  }

  .webClone_arrow1{
    left: 34%;
  }

  .webCloneImg3>img{
    width: 430px;
    margin: 30px 0;
  }


}



@media screen and (max-width : 780px) {

  .webCloneImg3>img{
    width: 410px;
  }

}


@media screen and (max-width : 690px) {

  .webCloneImg3>img{
    width: 380px;
  }

}


@media screen and (max-width : 480px) {

  .webClone_txt_wrap3>p{
    font-size: 20px;
  }

  .webClone_txt_wrap3>p>span{
    font-size: 23px;
  }

  .webClone_spans3>span{
    font-size: 12px;
    margin: 3px;
  }

  .webClone_date3>span{
    font-size: 12px;
    margin: 3px;
  }

  .webClone_explain3{
    font-size: 14px;
  }

  .webClone_link3>a>p{
    margin: 5px 15px;
    font-size: 14px;
  }

  .webClone_arrow1{
    left: 32%;
  }

  .webCloneImg3>img{
    width: 300px;
  }

}


@media screen and (max-width : 376px) {

  .webCloneTxt3{
    font-size: 46px;
    padding: 30px;
    box-sizing: border-box;
  }

  .webClone_bot_wrap3{
    padding-top: 20%;
  }

  .webClone_txt_wrap3>p{
    padding: 10px 40px;
  }

  .webClone_txt_wrap3 span{
    font-size: 11px;
  }

  .webClone_spans3{
    padding: 0px 30px;
    box-sizing: border-box;
  }

  .webClone_date3{
    padding: 0px 30px;
    box-sizing: border-box;
  }

  .webClone_explain3{
    font-size: 12px;
    padding: 0px 30px;
    box-sizing: border-box;
  }

  .webClone_link3>a>p{
    padding: 10px;
    margin: 0px 10px;
  }

  .webClone_link3>a>p:first-child{
    margin-left: 25px;
  }

  .webClone_arrow1{
    left: 38%;
  }

  .webCloneImg3>img{
    width: 220px;
  }


}

</style>
