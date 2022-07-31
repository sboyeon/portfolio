<template>
  <div class="contact_wrap scroll">
    <h1 class="contactTxt">Contact</h1>
    <div class="contact_bottom_wrap">
      <div class="contact_bot_l">
        <p class="contact_bottom_txt">“ 책임감과 성실함을 기본으로<br>
          작업속도는 빠르게 퀄리티는 떨어지지 않게,<br>
          <span>사용하기 쉽고 직관적인 UI/UX</span>를 제작하는<br>
          <span>웹퍼블리셔</span>가 되겠습니다. ”
        </p>
        <ul>
          <li><img src="../assets/img/542638.png">sung2032@naver.com</li>
          <li><img src="../assets/img/126509.png">010-9475-9041</li>
          <li><img src="../assets/img/3771343.png">https://dashboard.heroku.com/apps</li>
          <li><a href=""><img src="../assets/img/2915423.png">PDF 다운로드</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contactMe-page',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

*{
  transition: all 0.5s ease;
}

.contact_wrap{
  background-color: rgba(255, 230, 207, 30%);
  /* height: 100vh; */
}

.contactTxt{
  font-family: Dutch801 Rm BT;
  font-size: 48px;
  color: #EB2039;
   padding: 50px 10%;
  box-sizing: border-box;
  margin: 0;
}

.contact_bottom_wrap{
  padding: 50px 20px;
  box-sizing: border-box;
}

.contact_bot_l{
  display: flex;
  justify-content: space-around;
}

.contact_bottom_txt{
  font-family: Dutch801 Rm BT;
  font-size: 20px;
  font-weight: 700;
  color: #424242;
  line-height: 1.8;
}

.contact_bottom_txt span{
  display: inline-block;
  color: #EB2039;
  font-size: 20px;
}

.contact_bot_l>ul{
  list-style: none;
  display: block;
  padding: 0;
  line-height: 2;
}

.contact_bot_l>ul>li{
  font-family: Noto Sans KR;
  font-weight: 400;
}

.contact_bot_l>ul>li>a{
  font-family: Noto Sans KR;
  font-weight: 400;
  text-decoration: none;
  color: #000;
}

.contact_bot_l>ul>li>img{
  width: 23px; height: 23px;
  margin-right: 10px;
}

.contact_bot_l>ul>li>a>img{
  width: 23px; height: 23px;
  margin-right: 10px;
}







@media screen and (max-width : 1280px) {

  .contact_wrap{
    padding: 40px;
    box-sizing: border-box;
  }

}


@media screen and (max-width : 1024px) {

  .contact_bottom_wrap{
    padding: 40px 15px;
  }

  .contact_bottom_txt{
    font-size: 18px;
    line-height: 1.6;
  }

  .contact_bottom_txt span{
    font-size: 18px;
  }

  .contact_bot_l>ul{
    line-height: 1.8;
  }

  .contact_bot_l>ul>li>img{
    width: 20px; height: 20px;
  }

  .contact_bot_l>ul>li>a>img{
    width: 20px; height: 20px;
  }

}


@media screen and (max-width : 948px) {

  .contactTxt{
    padding: 30px;
    box-sizing: border-box;
  }

  .contact_bottom_wrap{
    padding: 15px;
  }

  .contact_bottom_txt{
    font-size: 16px;
    margin: 16px;
  }

 .contact_bottom_txt span{
    font-size: 16px;
 }

 .contact_bot_l>ul{
    line-height: 1.6;
 }


}


@media screen and (max-width : 780px) {

  .contact_wrap{
    padding: 18px;
    box-sizing: border-box;
  }

  .contact_bottom_wrap{
    padding: 0;
  }

  .contact_bottom_txt{
    font-size: 15px;
    margin: 10px;
  }

 .contact_bottom_txt span{
    font-size: 15px;
 }

 .contact_bot_l>ul{
    line-height: 1.4;
 }

  .contact_bot_l>ul>li>img{
    width: 19px; height: 19px;
  }

  .contact_bot_l>ul>li>a>img{
    width: 19px; height: 19px;
  }

}

@media screen and (max-width : 690px) {

  .contact_wrap{
    padding: 15px 0;
    box-sizing: border-box;
  }

  .contact_bottom_wrap{
    margin: 0px 50px;
  }

  .contact_bot_l{
    display: block;
  }

  .contact_bot_l>ul{
    margin: 10px;
 }

}

@media screen and (max-width : 480px) {

  .contact_bottom_wrap{
    margin: 0px 30px;
  }

  .contact_bottom_txt{
    font-size: 13px;
    margin: 0px;
  }

  .contact_bot_l>ul{
    margin: 5px 0px;
  }

  .contact_bot_l>ul>li{
    font-size: 13px;
  }

  .contact_bot_l>ul>li>img{
    width: 17px; height: 17px;
  }

  .contact_bot_l>ul>li>a>img{
    width: 17px; height: 17px;
  }

}


@media screen and (max-width : 376px) {

  .contact_bottom_wrap{
    margin: 0px 15px;
  }

  .contact_bottom_txt{
    font-size: 11px;
  }

  .contact_bottom_txt span{
    font-size: 11px;
  }

  .contact_bot_l>ul>li{
    font-size: 11px;
  }

  .contact_bot_l>ul>li>img{
    width: 15px; height: 15px;
  }

  .contact_bot_l>ul>li>a>img{
    width: 15px; height: 15px;
  }

}
 
</style>
