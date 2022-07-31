<template>
  <div class="introPage_wrap">
    <div class="intro">
      <h1 class="introMainTxt">Portfolio</h1>
      <div class="introImgs">
        <img src="../assets/img/amanda-souza-5XQKdy7koiY-unsplash.jpg" alt="mainImg"
        data-aos="fade-down" data-aos-easing="linear"
        data-aos-duration="1000">
        <img src="../assets/img/main-object1.png" alt="intro1"
        data-aos="fade-down-right" data-aos-easing="linear"
        data-aos-duration="1000">
        <img src="../assets/img/main-object2.png" alt="intro2" data-aos="fade-up-left" data-aos-easing="linear"
        data-aos-duration="1000" data-aos-offset="0">
        <div class="moveTxt">
          <span>This is Boyeon's portfolio. Where there’s a will there’s a way.</span>
          <span>This is Boyeon's portfolio. Where there’s a will there’s a way.</span>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  name: 'introPage-page',
 
}
</script>


<style scoped>

*{
  transition: all 0.5s ease;
}

.introPage_wrap{
  /* height: 650px; */
  height: 100vh;
  background-color: rgba(255, 230, 207, 30%);
  padding: 50px 20px;
}

.intro{
  max-width: 80%;
  height: 100%;
  margin: 0 auto;
}

.introMainTxt{
  font-family: Dutch801 Rm BT;
  font-size: 48px;
  color: #EB2039;
  margin: 0;
  text-align: right;
}

.introImgs{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.introImgs>img:nth-child(1){
  position: relative;
  left: 50%;
  transform: translate(-50%, 20%);
  z-index: 3;
}

.introImgs>img:nth-child(2){
  position: absolute;
  left: 20%; top: 2%;
  z-index: 1;
}

.introImgs>img:nth-child(3){
  position: absolute;
  bottom: 8%; right: 13%;
  z-index: 1;
}

.moveTxt {
  display: block;
  width: 200%;
  height: 30px;
  position: absolute;
  overflow: hidden;
  animation: marquee 8s linear infinite;
  color: #5E9ACD;
  font-size: 20px;
  font-family: Dutch801 Rm BT;
}

@keyframes marquee {
  0% {
    left: 0; 
  }
  100% { 
    left: -100%; 
 }

}

@media screen and (max-width : 1280px) {

  
  .introImgs>img:nth-child(1) {
    width: 300px;
  }

  .introImgs>img:nth-child(2) {
    width: 400px;
    left: 6%; top: 4%;
  }

  .introImgs>img:nth-child(3) {
    width: 350px;
    right: 2%; bottom: 7%;
  }

  .moveTxt{
    width: 200%; height: 30px;
    position: absolute;
    font-size: 20px;
  }

}


@media screen and (max-width : 948px) {

  .introImgs>img:nth-child(2) {
    width: 370px;
  }

  .introImgs>img:nth-child(3) {
    width: 330px;
    right: 0%; bottom: 5%;
  }


}



@media screen and (max-width : 780px) {

  .introImgs>img:nth-child(1) {
    width: 250px;
  }

  .introImgs>img:nth-child(2) {
    width: 320px;
    left: 1%; top: 3%;
  }

  .introImgs>img:nth-child(3) {
    width: 330px;
    right: 0%; bottom: 16%;
  }

  .moveTxt{
    width: 200%; height: 30px;
    position: absolute;
    font-size: 20px;
  }

}

@media screen and (max-width : 480px) {

.introImgs>img:nth-child(1) {
    width: 218px;
  }

  .introImgs>img:nth-child(2) {
    width: 290px;
    left: 1%; top: 3%;
  }

  .introImgs>img:nth-child(3) {
    width: 300px;
    right: 0%; bottom: 20%;
  }

  .moveTxt{
    display: none;
  }
  
}

@media screen and (max-width : 376px) {

  .introPage_wrap{
    padding: 30px 10px;
  }

   .introImgs>img:nth-child(1) {
    width: 130px;
    top: 3%;
  }

  .introImgs>img:nth-child(2) {
    width: 150px;
    left: 10%;
  }

  .introImgs>img:nth-child(3) {
    width: 150px;
    right: 9%; bottom: 52%;
  }

}




</style>
