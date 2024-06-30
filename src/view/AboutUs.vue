<template>
  <div>
    <div class="bannerH">
      <div class="bflex">
        <p class="h3">About Us</p>
        <p>
          bujingyun is committed to being a global intelligent cloud
          communications service provider
        </p>
      </div>
    </div>
    <div class="main1">
      <div class="mainNews">
        <div class="news-flex">
          <div class="news-m">
            <img src="../assets/images/cl_Introduct.png" alt="" />
          </div>
          <p class="intro-head">Company introduction</p>
        </div>
      </div>
      <form class="el-form cl-scen-form">
        <!-- <div class="cl-col-left">
          <ul>
            <li class="active">公司简介</li>
          </ul>
        </div> -->
        <div class="cl-col-right-zh el-col el-col-24">
          <div class="el-carousel el-carousel--vertical">
            <div class="el-carousel__container" style="height: 350px">
              <div class="el-carousel__item is-animating">
                <img
                  src="../assets/images/cl_intro_1.png"
                  alt=""
                  class="image"
                />
              </div>
              <p style="line-height: 33px">
                Bujingyun was founded in 2018, with Indonesia as the core of its
                headquarters development, and set up branches in Singapore, Hong
                Kong, China and Shanghai, China. The company is committed to
                becoming the world's leading intelligent cloud communication
                service provider, providing notification and marketing
                management solutions by integrating one-stop messaging, voice
                lines, international SMS and other communication functions to
                meet the mobile communication and marketing needs of enterprises
                on a global scale, helping enterprises and users to achieve
                smoother communication. Based on its strong technical strength
                and years of accumulated customer service experience, Bujingyun
                has a significant advantage in the field of intelligent cloud
                communications
              </p>
              <p class="p2"></p>
              <p class="p3"></p>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- <div class="cl_main1">
      <div class="cl-main-center">
        <img src="../assets/images/cl_flex.png" alt="" class="cl-flex" />
        <p class="cl-awards aw-right" style="padding-left: 90px">荣誉资质</p>
        <div class="cl-center">
          <img
            src="../assets/images/cl_sms_service.png"
            alt=""
            class="cl-sms-service"
          />
          <span class="cl-sms-con">xxxxxxxxxxxx</span>
        </div>
        <div class="cl-sms-foot">
          <ul>
            <li><img src="../assets/images/z01.png" alt="" /></li>
            <li><img src="../assets/images/z02.png" alt="" /></li>
            <li><img src="../assets/images/z03.png" alt="" /></li>
            <li><img src="../assets/images/z04.png" alt="" /></li>
            <li><img src="../assets/images/z05.png" alt="" /></li>
            <li><img src="../assets/images/z06.png" alt="" /></li>
          </ul>
        </div>
      </div>
    </div> -->
    <div class="cl_main2">
      <div class="cl_main_center">
        <div class="cl_top">
          <img src="../assets/images/cl_pro.png" alt="" />
        </div>
        <p class="cl-team-header cl-head" style="margin-right: 40px">
          Milestone
        </p>
      </div>
      <div class="processBox">
        <div class="timelineProcessBox">
          <el-timeline class="timeline">
            <el-timeline-item
              class="lineitem"
              :class="activity.done ? 'active' : 'inactive'"
              v-for="(activity, index) in activities"
              :key="index"
              :timestamp="activity.time"
            >
              <span
                style="display: flex; flex-direction: column; margin-top: 40px"
              >
                <span style="margin: 10px 0; font-size: 26px; color: #3a60f7">
                  {{ activity.content }}
                </span>
              </span>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </div>
    <div class="main2">
      <div class="mainCenter">
        <p class="title">Are you the one we've been waiting for?</p>
        <p class="text">
          We believe there is a strong attraction between like-minded people. If
          you are interested in us and would like to join us, or want to get to
          know us better, please contact us today!
        </p>
        <a><div class="contact-us">Contact us</div></a>
      </div>
    </div>
    <footer class="footer-content">
      <div class="footer-main clearfix">
        <div class="footerLogo fl">
          <img
            src="../assets/images/logo-footer.png"
            alt=""
            style="width: 80px"
          />
          <ul class="imgList">
            <li class="fl">
              <a href="live:.cid.eeeeb459e12512ec" target="_blank">
                <img src="../assets/images/in.png" alt="" />
              </a>
            </li>
            <li class="fl wxBg">
              <img src="../assets/images/wx.png" alt="" class="wxIcon" />
            </li>
            <li class="fl">
              <a>
                <img src="../assets/images/wb.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <ul class="footer-products fl">
          <li>Products</li>
          <li>Short message</li>
          <li>sipturnk</li>
        </ul>
        <ul class="footer-products fl">
          <li>Developer</li>
          <li class="faq">User service agreement</li>
          <li class="faq">Privacy Policy</li>
          <li class="faq">Source security commitment</li>
        </ul>
        <ul class="footer-products fl">
          <li>Company information</li>
          <li><a style="color: #465980">about us</a></li>
          <li>Enterprise dynamics</li>
          <li>Join us</li>
        </ul>
        <ul class="footer-products fl">
          <li>Contact us</li>
          <li>alex.jiang@bujingyun.vip</li>
          <li>PTbujingyun</li>
        </ul>
      </div>
      <div class="copyright">" © 2018 All rights reserved "&nbsp;&nbsp;PTbujingyun</div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities: [
        {
          content: "2018",
          time: "Bujingyun	was	established",
          done: true,
        },
        {
          content: "2019",
          done: false,
          time: "Revenue	exceeded	10	million",
        },
        {
          content: "2020",
          done: false,
          time: "Revenue exceeded	10 million",
        },
        {
          content: "2021",
          done: false,
          time: "Established	in	Indonesia	Headquarters",
        },
      ],
    };
  },
  components: {},
  mounted() {
   
  },
  methods: {
  },
};
</script>
<style scoped lang="less">
.bannerH {
  background: url("../assets/images/banner-bg.png") no-repeat 0px 80px;
  height: 685px;
  width: 100%;
  min-width: 1200px;
  background-size: 100%;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 80px;
  .bflex {
    height: 200px;
    line-height: 45px;
    margin-top: 190px;
    .h3 {
      height: 72px;
      line-height: 72px;
      font-size: 58px;
      font-weight: bold;
      color: #1d256b;
    }
    p {
      font-size: 32px;
      color: #465980;
      line-height: 32px;
      width: 1000px;
      text-align: center;
      margin: 0 auto;
      margin-top: 20px;
      margin-bottom: 35px;
    }
  }
}
.main1 {
  width: 100%;
  min-width: 1200px;
  height: 650px;
  overflow: hidden;
  padding-top: 80px;
  .mainNews {
    width: 100%;
    min-width: 1200px;
    overflow: hidden;
    margin-bottom: 80px;
    .news-flex {
      width: 1200px;
      margin: 0 auto;
      height: 160px;
      .news-m {
        display: flex;
        flex-direction: row;
        align-items: center;
        float: left;
      }
      .intro-head {
        font-size: 42px;
        font-weight: 500;
        color: #4271f5;
        display: -webkit-box;
        position: absolute;
        width: 1200px;
        height: 170px;
        line-height: 150px;
        padding-left: 35px;
      }
    }
  }
  .cl-scen-form {
    width: 1200px;
    height: 560px;
    margin: 0 auto;
    .cl-col-left ul {
      width: 340px;
      height: 30px;
      display: flex;
      justify-content: space-evenly;
      position: absolute;
      margin-top: -70px;
      line-height: 30px;
      color: #1d256b;
      margin-left: 865px;
      .active {
        background: #3a69f7;
        color: #fff;
      }
    }
    .cl-col-right-zh {
      p {
        width: 819px;
        font-size: 16px;
        font-weight: 400;
        color: #465980;
        position: absolute;
        top: -6px;
        right: 85px;
      }
      .p2 {
        margin-top: 40px;
      }
      .p3 {
        margin-top: 8px;
      }
    }
  }
}
.cl_main1 {
  width: 100%;
  min-width: 1200px;
  overflow: hidden;
  background-color: #f8f8fa;
  .cl-main-center {
    width: 1200px;
    height: 750px;
    margin: 0 auto;
    .cl-flex {
      position: absolute;
      z-index: 0;
    }
    .cl-awards {
      height: 160px;
      width: 100%;
      border-right: 3px solid #3a69f7;
      font-size: 44px;
      font-weight: 500;
      color: #4271f5;
      line-height: 135px;
      position: relative;
      z-index: 0;
    }
    .cl-center {
      width: 1100px;
      margin: 0 auto;
      margin-top: 100px;
      .cl-sms-con {
        width: 615px;
        height: 60px;
        font-size: 22px;
        font-weight: 400;
        color: #465980;
        line-height: 30px;
        margin-top: -136px;
        display: block;
        margin-left: 95px;
      }
    }
  }
  .cl-sms-foot {
    width: 920px;
    margin: 0 auto;
    margin-top: 120px;
    ul {
      li {
        float: left;
        margin: 0 30px;
      }
    }
  }
}
.cl_main2 {
  width: 100%;
  min-width: 1200px;
  overflow: hidden;
  background-color: #f8f8fa;
  .cl_main_center {
    width: 1200px;
    margin: 0 auto;
    .cl_top {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
    .cl-team-header {
      height: 140px;
      font-size: 46px;
      font-weight: 500;
      color: #4271f5;
      display: flex;
      -webkit-box-pack: end;
      justify-content: flex-end;
      border-left: 3px solid #f2be55;
      margin-top: -202px;
      line-height: 140px;
    }
    .cl-head {
      padding-right: 80px;
    }
  }
}
.main2 {
  width: 100%;
  min-width: 1200px;
  overflow: hidden;
  height: 500px;
  background: #3a69f7;
  border-radius: 0 100px 0 0;
  display: flex;
  .mainCenter {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
      color: #fff;
      line-height: 48px;
      font-size: 39px;
      margin: 40px 0 20px 0;
    }
    .text {
      width: 784px;
      height: 50px;
      font-size: 17px;
      color: #fff;
      line-height: 25px;
      text-align: center;
    }
    a {
      width: 340px;
      height: 60px;
      display: inline-block;
      background: #fff;
      border-radius: 34px;
      opacity: 0.9;
      text-align: center;
      line-height: 60px;
      margin-top: 70px;
      cursor: pointer;
    }
  }
}
.footer-content {
  width: 100%;
  min-width: 1200px;
  background: #e9f2ff;
  .footer-main {
    display: flex;
    justify-content: space-around;
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 0 100px 0;
    min-width: 323px;
    .footerLogo {
      padding-left: 30px;
      .imgList {
        margin-top: 15px;
        li {
          padding-right: 10px;
        }
      }
    }
    .footer-products > li:nth-child(1) {
      font-size: 14px;
      color: #1d256b;
      height: 20px;
      line-height: 20px;
      margin-bottom: 25px;
      font-weight: 700;
    }
    .footer-products > li {
      min-height: 20px;
      font-size: 14px;
      color: #465980;
      line-height: 20px;
      margin-bottom: 15px;
      clear: both;
    }
  }
  .copyright {
    text-align: center;
    height: 60px;
    font-size: 14px;
    color: #576271;
    line-height: 60px;
    background: #d7e7f8;
  }
}

.processBox {
  background-color: #f8f8fa;
  height: 210px;
  padding-bottom: 50px;

  .timelineProcessBox {
    .timeline {
      display: flex;
      width: 95%;
      margin: 140px auto;
      .lineitem {
        transform: translateX(50%);
        width: 25%;
      }
    }
  }
}

:deep .el-timeline-item__tail {
  border-left: none;
  border-top: 2px dashed #465980;
  width: 100%;
  position: absolute;
  top: 6px;
}
:deep .el-timeline-item__node {
  background-color: #3a69f7;
}
:deep .el-timeline-item__wrapper {
  padding-left: 0;
  position: absolute;
  top: 20px;
  transform: translateX(-50%);
  text-align: center;
}
:deep .el-timeline-item__timestamp {
  font-size: 20px;
  font-weight: 500;
  color: #465980;
  line-height: 24px;
}
</style>
