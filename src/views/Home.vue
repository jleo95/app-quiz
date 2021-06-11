<template>
  <div class="home-page" :class="{'left-img': hoverLeft, 'right-img': hoverRigth}">
    <div class="content">
      <div class="btns">
        <h1>--- Welcom ---</h1>
      </div>
      <div class="paraText" style="width: 60%; margin-top: 33px;">
        <div>
          <p style="line-height: 1.7" class="paraText-1">Welcome to Computer science Quiz. Computer science quiz is test based on some computer question, to allow you to test your computer knowledge.
            the test is divided into three levels: easy, confirm and difficult.</p>
          <div class="clear"></div>
        </div>
        <p style="line-height: 1.7" class="paraText-2">
          To start, please click to this button <i class="fas fa-hand-point-down" style="color: var(--blue-color);"></i>
        </p>
        <div style="margin-top: 20px;">
          <router-link to="/quiz" class="btnStart">Start Quiz</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>
<style scoped>

  .home-page {
    background-color: var(--white-color);
    background-image: url(/img/img1.png);
    background-repeat: no-repeat;
    background-position: 122px 32px;
    background-size: 33%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-content: center;
    height: 500px;
    /*width: 100vw;*/
    /*padding: 0 10px;*/
  }
  .home-page {
    flex-grow: 1;
  }

  .home-page .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    padding-left: 30px;
    margin-left: 174px;
    text-align: center;
  }
  .btns h1 {
    color: var(--dark-grey-color);
  }

  .btnStart {
    font-size: 18px;
    text-decoration: none;
    color: var(--white-color);
    background-color: var(--dark-grey-color);
    border: 1px solid var(--dark-grey-color);
    padding: 12px 25px;
    border-radius: 5px;
    margin-top: 150px;
  }
  @media screen and (max-width: 840px) {
    .home-page {
      background-position: 50px 120px;
      background-size: 33%;
    }
    .home-page .content{
      display: block;
      width: 100vw;
      margin: 30px auto;
    }
    .home-page .content .btns {
      width: 100%;
      text-align: center;
    }
    .home-page .content .btns h1{
      font-size: 38px;
    }
    .home-page .content .paraText{
      width: 100% !important;
    }
    .home-page .content .paraText p.paraText-1{
      width: 55%;
      float: right;
      padding-right: 8px;
      text-align: left;
    }
    .home-page .content .paraText p.paraText-2{
      width: 100%;
      text-align: left;
    }

    .btnStart {
      padding: 12px 25px;
      border-radius: 5px;
      font-size: 14px;
      margin-top: 150px;
    }

    .bnt-signIn {
      background: var(--red-color);
      color: var(--white-color);
      border-color: var(--red-color);
    }
  }
</style>
