<template>
  <div class="about_wrap">
    <h1 class="aboutTxt">About</h1>
    <div class="about_bottom_wrap">
      <div class="about_left_wrap">
        <ul class="about_left">
          <li><a>HTML</a></li>
          <li><a>CSS</a></li>
          <li><a>JS</a></li>
          <li><a>jQuery</a></li>
          <li><a>Vue.js</a></li>
          <li><a>Node.js</a></li>
          <li class="web_none"><a>GitHub</a></li>
          <li class="web_none"><a>Heroku</a></li>
          <li class="web_none"><a>MySQL</a></li>
          <li class="web_none"><a>Photoshop</a></li>
          <li class="web_none"><a>Illustrator</a></li>
        </ul>
      </div>
      <div class="about_center_wrap">
        <div>
          <ul class="about_center_t">
            <li><span>Name</span>&nbsp; 성보연 (Seong Boyeon)</li>
            <li><span>Birth</span>&nbsp; 1998.06.18</li>
            <li><span>Address</span>&nbsp; 서울특별시 도봉구 덕릉로63가길 43</li>
            <li><span>Education</span>&nbsp; [디지털컨버전스]스마트_뷰(Vue)활용 프론트엔드 웹개발자 양성과정</li>
            <li><span>Homepage</span>&nbsp; https://dashboard.heroku.com/apps</li>
          </ul>
          <p class="about_center_b pc_none">오랜 시간이 걸릴지라도 정해놓은 목표에 도달할 때까지 포기하지 않고 해내는 <span>인내심</span>과 <span>끈기</span>는 저의 장점입니다.<br>
          어려움이 닥쳐도 <span>긍정적인 생각</span>과 <span>문제를 해결</span>하고자 하는 마음이 있다면 무슨 일이든 해결할 수 있다고 생각합니다.<br>
          이 마음가짐을 가지고 어려운 것, 잘 모르는 것, 시도해보지 않았던 것을 겁먹지 않고 차근차근 해결해나가며 <span>제 것</span>으로 만들겠습니다.
          </p>
        </div>
      </div>
      <div class="about_right mo_none">
        <img src="../assets/img/d78df6_4517dc1e0b1545bf84dccd915203c870.jpg" alt="me">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about-page',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

*{
  transition: all 0.5s ease;
}

.web_none{
  display: none;
}

.about_wrap{
  height: 100vh;
  background-color: rgba(255, 230, 207, 30%);
}

.aboutTxt{
  font-family: Dutch801 Rm BT;
  font-size: 48px;
  color: #EB2039;
  padding: 50px 10%;
  box-sizing: border-box;
  margin: 0;
}

.about_bottom_wrap{
  display: flex;
  justify-content: space-evenly;
  padding: 50px;
  box-sizing: border-box;
  margin: 50px auto;
}

.about_left{
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  max-width: 240px;
}

.about_left>li{
  width: 120px; height: 120px;
  background: rgba(207, 182, 164, 40%);
  border-radius: 50%;
  position: relative;
  z-index: 2;
  transition: all 0.5s ease;
  overflow: hidden;
}

.about_left>li:nth-child(1)::after,
.about_left>li:nth-child(2)::after,
.about_left>li:nth-child(3)::after,
.about_left>li:nth-child(4)::after,
.about_left>li:nth-child(5)::after,
.about_left>li:nth-child(6)::after{
  content: "";
  position: absolute;
  width: 100%;
  height: 0;
  z-index: -1;
  bottom: 0;
  left: 0;
  transition: all 0.5s ease;
  background-color: rgba(94, 154, 205, 80%);
}

.about_left>li:nth-child(1):hover::after{
  height: 95%;
}

.about_left>li:nth-child(2):hover::after{
  height: 95%;
}

.about_left>li:nth-child(3):hover::after{
  height: 70%;
}

.about_left>li:nth-child(4):hover::after{
  height: 70%;
}

.about_left>li:nth-child(5):hover::after{
  height: 80%;
}

.about_left>li:nth-child(6):hover::after{
  height: 50%;
}

.about_left>li>a{
  position: absolute;
  content: "";
  color: #FFFAF6;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 18px;
}

.about_center_wrap{
  width: 33.333%; height: 100%;
  margin: 10px;
}

.about_center_wrap>div{
  display: flex;
  flex-direction: column;
}

.about_center_t{
  list-style: none;
  color: #424242;
  font-family: Dutch801 Rm BT;
}

.about_center_t span{
  display: inline-block;
  font-size: 18px;
  font-weight: 600;
  color: #543d37;
  font-family: Dutch801 Rm BT;
}

.about_center_b{
  font-family: Noto Sans KR;
  font-size: 16px;
  color: #424242;
  line-height: 1.6;
  padding: 0px 0px 0px 40px;
}

.about_center_b>span{
  display: inline-block;
  color: #EB2039;
  font-size: 18px;
  font-family: Noto Sans KR;
}

.about_right{
  width: 10%;
  position: relative;
  top: -1.3%;
}

.about_right>img{
  width: 100%;
  position: absolute;
  transition: 1s;
}






@media screen and (max-width : 1280px) {

  .about_bottom_wrap{
    padding: 40px;
    box-sizing: border-box;
  }

  .about_left{
    max-width: 200px;
  }

  .about_left>li{
    width: 100px; height: 100px;
  }

  .about_left>li>a{
    font-size: 16px;
  }

  .about_center_t>li{
    font-size: 15px;
  }

  .about_center_t span{
    font-size: 17px;
  }

  .about_center_b{
    font-size: 15px;
  }

  .about_center_b>span{
    font-size: 17px;
  }

}


@media screen and (max-width : 1024px) {

  .about_bottom_wrap{
    padding: 30px;
  }

  .about_left{
    max-width: 190px;
  }

  .about_left>li{
    width: 95px; height: 95px;
  }

  .about_left>li>a{
    font-size: 15px;
  }

  .about_center_t>li{
    font-size: 14px;
  }

  .about_center_t span{
    font-size: 16px;
  }

  .about_center_b{
    font-size: 14px;
    line-height: 1.4;
  }

  .about_center_b>span{
    font-size: 16px;
  }

  .about_right{
    width: 12%;
  }

}

@media screen and (max-width : 948px) {

  .about_bottom_wrap{
    padding: 25px;
  }

  .about_left{
    max-width: 170px;
  }

  .about_left>li{
    width: 85px; height: 85px;
  }

  .about_center_b{
    line-height: none;
  }

  .about_right{
    padding: 20px 0;
  }

}

@media screen and (max-width : 780px) {

  .about_bottom_wrap{
    padding: 0;
  }

  .about_left{
    max-width: 150px;
  }

  .about_left>li{
    width: 75px; height: 75px;
  }

  .about_left>li>a{
    font-size: 14px;
  } 

  .about_center_t>li{
    font-size: 14px;
  } 

  .about_center_t span{
    font-size: 15px;
  }

  .about_center_b{
    line-height: 1.2;
  }

  .about_center_b>span{
    font-size: 16px;
  } 

  .about_right{
    padding: 20px 0;
  }

}

@media screen and (max-width : 690px) {

  .mo_none{
    display: none;
  }

  .about_center_b{
    font-size: 13px;
  }

  .about_center_b>span{
    font-size: 15px;
  }


}

@media screen and (max-width : 522px) {

  .pc_none{
    display: none;
  }

  /* .about_wrap{
    height: 80vh;
  } */

  .about_bottom_wrap{
    display: block;
  }
  
  .about_left_wrap,
  .about_center_wrap{
    width: 100%;
  }

  .about_center_t{
    padding: 0;
  }

  .about_center_t>li{
    font-size: 14px;
  }

  .about_left{
    padding: 5% 30%;
  }
}

@media screen and (max-width : 480px) {
  
  .about_center_t span{
    font-size: 14px;
  }

  .about_center_t>li{
    font-size: 11px;
  }

  .about_left{
    padding: 0 25%;
  }
  
}

@media screen and (max-width : 376px) {

  .about_center_t>li{
    font-size: 12px;
  }

  .about_left{
    max-width: 140px;
    padding: 0;
    margin: auto;
  }

  .about_left>li{
    width: 70px; height: 70px;
  }

}



</style>
