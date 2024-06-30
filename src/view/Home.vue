<template>
  <div>
    <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/images/1.png" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <div class="bannerH">
              <div class="bflex">
                <div class="flex-left">
                  <p
                    style="width: 654px; font-style: inherit; padding-top: 74px"
                  >
                    Connect the world and enjoy the communication new era
                  </p>
                  <router-link to="/contact">
                    <a><div class="register">Contact us</div></a>
                  </router-link>
                </div>
                <!-- <div class="flex-right">
                  <img
                    src="../assets/images/newlogo.png"
                    alt=""
                    class="b_right_p animated fadeInRight delay-3s"
                  />
                </div> -->
                <!-- <div class="flex-right">
          <img
            src="../assets/images/b_left_p.png"
            alt=""
            class="b_left_p animated fadeInDown delay-2s"
          />
          <img
            src="../assets/images/b_right_p.png"
            alt=""
            class="b_right_p animated fadeInRight delay-3s"
          />
          <img
            src="../assets/images/ball_l.png"
            alt=""
            class="ball_l animated fadeInUp delay-1s"
          />
          <img
            src="../assets/images/ball_s.png"
            alt=""
            class="ball_s animated fadeIn delay-4s"
          />
        </div> -->
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/images/2.png" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/images/3.png" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="productNotice">
      <div class="product-fl">
        <div class="message-num">
          <ul>
            <li>
              <img src="../assets/images/num_1.png" alt="" />
            </li>
            <li>
              <h3>230+</h3>
              <p>countries and regions</p>
            </li>
          </ul>
          <ul>
            <li>
              <img src="../assets/images/num_2.png" alt="" />
            </li>
            <li>
              <h3>50000+</h3>
              <p>paying customers</p>
            </li>
          </ul>
          <ul>
            <li>
              <img src="../assets/images/num_3.png" alt="" />
            </li>
            <li>
              <h3>1.5 billion +</h3>
              <p>coverage terminal</p>
            </li>
          </ul>
        </div>
        <div>
          <p class="cl-pro-header">Product</p>
          <div class="cl_top">
            <img src="../assets/images/cl_pro.png" alt="" />
          </div>
        </div>
        <div class="produc-flex">
          <div class="left-flex">
            <img src="../assets/images/cl_pro_l1.png" alt="" style="width: 430px;"/>
          </div>
          <div class="right-flex">
            <ul class="cl-ul">
              <li class="cl-li">
                <div class="top">
                  <span class="cricle"></span>
                  <span class="cl_span">International SMS</span>
                </div>
                <div class="down">
                  Meet the mobile communication and marketing needs of
                  enterprises around the world, and help enterprises and their
                  users achieve more efficient and convenient communication
                </div>
              </li>
            </ul>
            <ul class="cl-ul">
              <li class="cl-li">
                <div class="top">
                  <span class="cricle cl_yellow"></span>
                  <span class="cl_span">International Voice</span>
                </div>
                <div class="down">
                  The implementation and application of SIP turnk has greatly
                  improved the way and effect of modern communication, bringing
                  more convenience, significant economic benefits and
                  technological advancement to users and enterprises.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="mainAdvant">
        <div class="advant-m">
          <img src="../assets/images/cl_adv.png" alt="" />
        </div>
        <p style="padding-left: 120px">Keunggulan</p>
      </div>
      <div class="mainCenter1">
        <ul class="ul">
          <li class="li">
            <a><img src="../assets/images/cl_fast.png" alt="" /></a>
            <h3>Voice verification code</h3>
            <p>
              An authentication method that broadcasts a random digit
              verification code to the end user through a voice call.
              Registration login Used to register and log in to platforms such
              as apps and websites, using voice verification codes to avoid
              malicious registration and ensure user authenticity.
            </p>
          </li>
          <li class="li">
            <a><img src="../assets/images/cl_ad_2.png" alt="" /></a>
            <h3>Recover password</h3>
            <p>
              By calling the mobile phone number reserved by the user when
              registering, the system automatically broadcasts the verification
              code to confirm the user's identity and complete the password
              reset
            </p>
          </li>
          <li class="li">
            <a><img src="../assets/images/cl_ad_3.png" alt="" /></a>
            <h3>Voice notification</h3>
            <p>
              Remind users to receive goods, give feedback on orders, etc., to
              improve customer satisfaction and reduce user churn with
              thoughtful services
            </p>
          </li>
          <li class="li">
            <a><img src="../assets/images/cl_f_2.png" alt="" /></a>
            <h3>Repayment reminder</h3>
            <p>
              Voice notification repayment reminders can not only improve
              repayment rates, reduce expected risks, and enhance customer
              experience, but also save human resources. It is one of the
              important tools for financial institutions and other organizations
              to manage loans and debts.
            </p>
          </li>
          <li class="li">
            <a><img src="../assets/images/cl_ad_4.png" alt="" /></a>
            <h3>Customer Service Hotline</h3>
            <p>
              Connect to corporate call centers, customer service systems, etc.
              through SIP Trunk voice relays to promptly answer various
              inquiries and complaints
            </p>
          </li>
          <li class="li">
            <a><img src="../assets/images/cl_ad_5.png" alt="" /></a>
            <h3>Marketing scenarios</h3>
            <p>
              Outbound marketing is a multifunctional marketing tool used for
              customer acquisition, relationship maintenance, market research,
              sales promotion and customer service, and plays an important role
              in the company's marketing and customer management.
            </p>
          </li>
          <li class="li">
            <a><img src="../assets/images/cl_ad_5.png" alt="" /></a>
            <h3>AI Outbound Calling</h3>
            <p>
              The advantages of AI outbound calling technology include
              automation, high efficiency, and low cost. At the same time, it
              can also continuously optimize the outbound calling process
              through machine learning, improve call success rate and customer
              satisfaction.
            </p>
          </li>
          <li class="li">
            <a><img src="../assets/images/cl_ad_5.png" alt="" /></a>
            <h3>High reach</h3>
            <p>
              The arrival rate is 99%, with "one main and four backup" channels
              and reliable operator partners to select the best for delivery
            </p>
          </li>
          <li class="li">
            <a><img src="../assets/images/cl_ad_5.png" alt="" /></a>
            <h3>Security and stability</h3>
            <p>
              Independent platform, irreversible data encryption, and
              enterprise-level firewall to ensure data security
            </p>
          </li>
          <li class="li">
            <a><img src="../assets/images/cl_ad_5.png" alt="" /></a>
            <h3>Convenience</h3>
            <p>
              The cooperation process is simple, the docking test is fast, and
              the project is promoted efficiently
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="main" style="background: #f8f8fa">
      <div class="mainCenter" style="height: 856px; margin: 0 auto">
        <div class="cl_top">
          <img src="../assets/images/cl_quotation.png" alt="" />
        </div>
        <p class="cl-card-header" style="padding-right: 140px">Quote Card</p>
        <div class="cl_netease_title">
          <div class="cl_net_fl">
            <ul class="cf acti-ul">
              <li
                class="fl"
                v-for="(item, index) in imgArr"
                :key="index"
                v-show="activeIndex == index"
              >
                <div class="flex-img">
                  <img :src="item.img" alt="" />
                </div>
                <div>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.text }}</p>
                </div>
              </li>
            </ul>
            <ol>
              <li class="curr-circle cf"></li>
              <li></li>
              <li></li>
              <li></li>
              <div class="cl-circle"></div>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="main">
      <div class="mainNews">
        <div class="news-flex">
          <div class="advant-m">
            <img src="../assets/images/cl_news.png" alt="" />
          </div>
          <p style="padding-left: 126px">新闻中心</p>
        </div>
      </div>
      <div class="mainCenter">
        <ul style="margin-bottom: 60px">
          <li class="main3-li">
            <img src="../assets/images/new_model1.png" alt="" />
            <div class="cl-con-center">
              <div class="date">2019-12-11</div>
              <p class="title f-left">
                SMS在应用程序对人的短信业务上仍然保持活力
              </p>
              <p class="text">
                自2014年以来，并依靠应用程序对人的短信业务每年增长20%，到2008年达到2100亿条消息。
              </p>
              <p class="details">
                <a>详情</a>
                <i class="el-icon-right"></i>
              </p>
            </div>
          </li>
          <li class="second-li main3-li">
            <img src="../assets/images/new_model2.png" alt="" />
            <div class="cl-con-center">
              <div class="date f2">2019-06-11</div>
              <p class="title">行业内能够更好地利用短信（以及如何）</p>
              <p class="text">
                经常遇到这样的问题：你知道你的手机现在在哪里吗？很有可能你会这么做。很可能你甚至知道你有多少未读的短信...
              </p>
              <p class="details">
                <a>详情</a>
              </p>
            </div>
          </li>
          <li class="main3-li">
            <img src="../assets/images/new_model3.png" alt="" />
            <div class="cl-con-center">
              <div class="date f3">2019-03-22</div>
              <p class="title">
                APP出海不能忽略的一个市场：印度成移动互联网应用新蓝海
              </p>
              <p class="text">
                印度作为世界第二人口大国，其人口基数可能带来的流量和市场潜力将不亚于世界上任何一个国家。
              </p>
              <p class="details">
                <a>详情</a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div> -->
    <div class="main">
      <div class="mainCenter">
        <div class="main-flex">
          <div class="left-bg"></div>
          <div class="left-flex">
            <img
              src="../assets/images/cl_fast_register.png"
              style="width: 65%"
            />
            <div class="center-bg"></div>
          </div>
          <div class="right-flex" style="margin-right: -100px; width: 410px">
            <div>
              <span class="cut">
                <span class="word">Hello,New Friend</span>
              </span>
              <span class="target"></span>
              <p>Welcome to bujingyun International Business Service</p>
              <div class="line"></div>
            </div>
            <a><div class="register">Contact us quickly</div></a>
          </div>
          <div class="right-bg"></div>
        </div>
      </div>
    </div>
    <div
      class="main"
      style="
        height: 500px;
        background: #3a69f7;
        border-radius: 0 100px 0 0;
        display: flex;
      "
    >
      <div class="mainCenter5">
        <div>
          <img src="../assets/images/cl_logo.png" alt="" />
        </div>
        <p>What's the problem? Contact us now!</p>
        <ul>
          <li><span>Product quick consultation</span></li>
          <li><span>Find the best solution</span></li>
          <li><span>Learn about product quotes</span></li>
        </ul>
        <a>
          <div class="contact-us">Contact us</div>
        </a>
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
      <div class="copyright">
        " © 2018 All rights reserved "&nbsp;&nbsp;PTbujingyun
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgArr: [
        {
          title: "Bala rabbit",
          img: require("../assets/images/blt.png"),
          text: "Balle Rabbit business Director: Balle Rabbit as an online rental platform, most of the early customers need to contact by telephone. Then we pay great attention to the stability of the outbound system and the line. After more than two years of cooperation with mushroom Cloud, basically no problems, the usual communication is very smooth. I hope that Guogyun can maintain long-term stability and develop better and better.",
        },
        {
          title: "I love my family.",
          img: require("../assets/images/wawj.png"),
          text:"Certain business line director: engaged in outbound industry for a long time, and the cooperation with mushroom cloud makes me most satisfied, generally there are problems, can be solved very quickly, the response is very fast, the problem can be solved on the same day. Before the fixed line mixed show that kind of number pool, the response is really too bad, since the cooperation with mushroom cloud, contact with mushroom cloud's unique trumpet, the response is significantly improved, I do not know how much better than before, and the number is marked for a long time, and can help us replace"
        },
        {
          title: "Ping An of China",
          img: require("../assets/images/pa.png"),
          text:"General Manager: The use of your company's outbound call system, to vigorously solve our data inconsistent statistics, recording storage, can timely access and check the quality of service. Save a lot of time for managers, the group's decentralized unified management and scheduling of various departments, technical feedback interface debugging encountered the most convenient, the past number interception rate is high, free replacement within a period of time, greatly improve our response rate. A product worth recommending"
        }
      ],
      activeIndex: 0,
      intervalId: null,
    };
  },
  components: {},
  mounted() {
    this.startCarousel();
  },
  methods: {
    startCarousel() {
      this.intervalId = setInterval(() => {
        this.activeIndex = (this.activeIndex + 1) % this.imgArr.length;
      }, 3000); // 每3秒切换一次
    },
    stopCarousel() {
      clearInterval(this.intervalId);
    },
  },
};
</script>
<style scoped lang="less">
.header-content {
  z-index: 99;
  width: 100%;
  min-width: 1200px;
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 1px solid rgba(224, 224, 224, 0.1);
  .header {
    margin: 0 auto;
    text-align: center;
    min-width: 1200px;
    .imgcont {
      padding-right: 18px;
      padding-top: 16px;
      padding-left: 25px;
    }
    .content-right {
      line-height: 76px;
      position: relative;
      margin: auto;
      .navList li {
        float: left;
        margin-right: 20px;
        a {
          font-size: 15px;
          color: #1d256b;
          line-height: 22px;
          font-weight: 700;
        }
      }
    }
  }
}
.bannerH {
  min-height: 800px;
  width: 100%;
  min-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  background-size: 100%;
  .bflex {
    line-height: 57px;
    padding-top: 164px;
    width: 1200px;
    min-width: 1200px;
    margin: 0 auto;
    height: 200px;
    text-align: left;
    box-sizing: border-box;
    .flex-left {
      float: left;
      p {
        font-size: 46px;
        color: #1d256b;
        font-weight: 700;
      }
      a {
        display: block;
        width: 240px;
        height: 60px;
        .register {
          background: #4271f5;
          border-radius: 50px;
          line-height: 54px;
          color: #fff;
          text-align: center;
          cursor: pointer;
          font-size: 20px;
          margin-top: 60px;
          letter-spacing: 1px;
        }
      }
    }
    .flex-right {
      float: right;
      .b_left_p {
        z-index: 1;
        position: absolute;
        margin-left: -110px;
        top: 70px;
      }
      .animated .delay-2s {
        animation-delay: 2s;
      }
      .animated {
        animation-duration: 1s;
        animation-fill-mode: both;
      }
      .fadeInDown {
        animation-name: fadeInDown;
      }
      .b_right_p {
        // z-index: 2;
        // position: absolute;
        // margin-left: 40px;
        // margin-top: 12px;
        width: 60%;
        float: right;
        transform: translate(60px, -200px);
      }
      .animated .delay-3s {
        animation-delay: 3s;
      }
      .fadeInRight {
        animation-name: fadeInRight;
      }
      .ball_l {
        margin-top: -27px;
      }
      .animated .delay-1s {
        animation-delay: 1s;
      }

      .fadeInUp {
        animation-name: fadeInUp;
      }
      .ball_s {
        position: absolute;
        z-index: 0;
        margin-top: 322px;
        margin-left: -110px;
      }
      .animated .delay-4s {
        animation-delay: 4s;
      }
      .fadeIn {
        animation-name: fadeIn;
      }
    }
  }
}
.productNotice {
  width: 100%;
  min-width: 1200px;
  overflow: hidden;
  .product-fl {
    width: 1200px;
    min-width: 1200px;
    margin: 0 auto;
    .message-num {
      width: 1200px;
      min-width: 1200px;
      margin: 0 auto;
      height: 200px;
      background-color: #fff;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      position: absolute;
      margin-top: -100px;
      box-shadow: 0 10px 20px 0 rgba(72, 83, 179, 0.09);
      z-index: 1;
      ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        li {
          font-size: 18px;
          line-height: 28px;
          height: 67px;
          h3 {
            color: #1d256b;
            word-spacing: 1px;
            font-weight: bold;
            font-size: 1.17em;
          }
          p {
            color: #465980;
          }
        }
      }
    }
    .cl-pro-header {
      width: 1000px;
      height: 140px;
      font-size: 46px;
      font-weight: 500;
      color: #4271f5;
      display: flex;
      justify-content: flex-end;
      border-left: 4px solid #4271f5;
      line-height: 300px;
      margin: 0 auto;
      padding-top: 100px;
    }
    .cl_top {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: relative;
      top: -70px;
    }
    .produc-flex {
      display: flex;
      margin-bottom: 80px;
      .left-flex {
        float: left;
        img {
          height: 500px;
        }
      }
      .right-flex {
        margin-left: 50px;
        .cl-ul {
          padding-top: 80px;
          .cl-li {
            width: 100%;
            height: 76px;
            .top {
              padding: 20px 0 20px 35px;
              display: flex;
              align-items: center;
              .cricle {
                display: inline-block;
                width: 7px;
                height: 7px;
                background: #4271f5;
                border-radius: 50%;
                margin-right: 8px;
              }
              .cl_span {
                color: #1d256b;
                font-size: 30px;
                font-weight: bold;
              }
            }
            .down {
              color: #465980;
              font-size: 18px;
              padding-left: 35px;
              line-height: 28px;
            }
          }
        }
      }
    }
  }
}
.main {
  width: 100%;
  min-width: 1200px;
  overflow: hidden;
  .mainAdvant {
    width: 100%;
    min-width: 1200px;
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
    .advant-m {
      float: left;
    }
    p {
      font-size: 42px;
      font-weight: 500;
      color: #4271f5;
      display: -webkit-box;
      border-right: 4px solid #f279b6;
      position: absolute;
      width: 1200px;
      height: 170px;
      line-height: 180px;
    }
  }
  .mainCenter1 {
    width: 1200px;
    height: 560px;
    margin: 0 auto;
    margin-top: 60px;
    ul {
      width: 100%;
      li {
        width: 380px;
        height: 310px;
        float: left;
        text-align: center;
        h3 {
          color: #1d256b;
          margin-top: 20px;
          font-size: 24px;
          word-spacing: 1px;
          font-weight: bold;
        }
        p {
          font-size: 16px;
          color: #465980;
          // margin-top: 15px;
          line-height: 25px;
          padding: 20px;
        }
      }
    }
  }
  .mainCenter {
    width: 1200px;
    height: 560px;
    margin: 0 auto;
    margin-top: 60px;
    .cl_top {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
    .cl-card-header {
      display: flex;
      justify-content: flex-end;
      border-left: 4px solid #f279b6;
      -webkit-box-pack: end;
      // width: 1200px;
      height: 150px;
      font-size: 46px;
      font-weight: 500;
      color: #4271f5;
      margin-top: -200px;
      line-height: 160px;
    }
    .cl_netease_title {
      width: 1110px;
      margin: 0 auto;
      .cl_net_fl {
        width: 1000px;
        height: 380px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        position: absolute;
        background: #fff;
        box-shadow: 0 10px 20px 0 rgba(72, 83, 179, 0.09);
        border-radius: 5px;
        z-index: 1;
        margin-top: 135px;
        ul {
          display: flex;
          align-items: center;
          li {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-right: 110px;
            text-align: left;
            .flex-img {
              padding-right: 35px;
              img {
                width: 150px;
              }
            }
            h3 {
              height: 36px;
              font-size: 30px;
              font-weight: 700;
              color: #1d256b;
              line-height: 36px;
            }
            p {
              width: 608px;
              font-size: 18px;
              color: #465980;
              margin-top: 12px;
              line-height: 26px;
              letter-spacing: 0.5px;
            }
          }
        }
        ol {
          width: 240px;
          height: 100px;
          background-color: #fff;
          box-shadow: 0 10px 20px 0 rgba(72, 83, 179, 0.09);
          border-radius: 5px;
          position: absolute;
          z-index: 1;
          bottom: -45px;
          right: -120px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          li {
            width: 12px;
            height: 12px;
            background-color: #fde5f1;
            border-radius: 50%;
            cursor: pointer;
            margin-right: 20px;
            display: inline-block;
          }
          .cl-circle {
            width: 60px;
            height: 60px;
            background: url("../assets/images/cl_hearts.gif");
          }
        }
      }
    }
    .second-li {
      margin: 0 24px;
    }
    .main3-li {
      width: 382px;
      height: 560px;
      background-color: #fff;
      border: 1px solid #e6e9ef;
      float: left;
      transition: all 0.4s ease-in-out;
      .f2 {
        background: #d2e9be;
      }
      .date {
        width: 100px;
        height: 24px;
        color: #fff;
        margin: 15px 23px;
        text-align: center;
        line-height: 24px;
      }
      .title {
        font-size: 22px;
        font-weight: 500;
        padding: 0 20px;
        margin-bottom: 30px;
        line-height: 29px;
        color: #1d256b;
      }
      .text {
        font-size: 16px;
        font-weight: 400;
        padding: 0 20px;
        line-height: 28px;
        color: #465980;
      }
      .details {
        padding: 0 20px;
        width: 100px;
        height: 20px;
        font-size: 16px;
        color: #3a69f7;
        font-weight: 400;
        line-height: 20px;
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-top: 40px;
      }
    }
    .main-flex {
      display: flex;
      margin-top: 80px;
      align-items: center;
      width: 1200px;
      justify-content: space-between;
      .left-bg {
        height: 384px;
        background: linear-gradient(
          180deg,
          rgba(238, 238, 238, 0.51) 0,
          #c7c9de 100%
        );
        margin-top: 45px;
        opacity: 0.3;
      }
      .left-flex {
        z-index: 0;
        display: flex;

        .center-bg {
          width: 60px;
          height: 384px;
          margin-left: -50px;
          margin-top: 45px;
          opacity: 0.3;
          z-index: -1;
          background: linear-gradient(
            180deg,
            rgba(238, 238, 238, 0.51) 0,
            #c7c9de 100%
          );
        }
      }
      .right-flex {
        z-index: 1;
        margin-left: 100px;
        .cut {
          font-size: 44px;
          font-weight: 700;
          color: #1d256b;
          line-height: 54px;
          margin-left: -34px;
        }
        .target {
          width: 20px;
          height: 5px;
          background: #191c3d;
          display: inline-block;
          margin-top: 38px;
          margin-left: 14px;
          animation: flash 1.5s linear infinite;
        }
        p {
          font-size: 16px;
          color: #465980;
          line-height: 22px;
          padding-top: 10px;
        }
        .line {
          width: 56px;
          height: 5px;
          background: #3a69f7;
          border-radius: 2px;
          margin-top: 8px;
        }
        a {
          display: block;
          width: 172px;
          height: 48px;
          margin-top: 100px;
          .register {
            background: #3a69f7;
            border-radius: 24px;
            font-size: 14px;
            color: #fff;
            text-align: center;
            cursor: pointer;
            line-height: 48px;
          }
        }
      }
      .right-bg {
        width: 176px;
        height: 384px;
        background: linear-gradient(
          180deg,
          rgba(238, 238, 238, 0.51) 0,
          #c7c9de 100%
        );
        margin-top: 45px;
        opacity: 0.3;
      }
    }
  }

  .mainNews {
    width: 100%;
    min-width: 1200px;
    overflow: hidden;
    margin-bottom: 80px;
    .news-flex {
      width: 1200px;
      margin: 0 auto;
      height: 160px;
      // border-right: 4px solid #f2be55;
      .advant-m {
        float: left;
      }
      p {
        font-size: 42px;
        font-weight: 500;
        color: #4271f5;
        display: -webkit-box;
        border-right: 4px solid #f279b6;
        position: absolute;
        width: 1200px;
        height: 170px;
        line-height: 150px;
      }
    }
  }

  .mainCenter5 {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      color: #fff;
      line-height: 48px;
      font-size: 40px;
      margin: 40px 0 10px 0;
    }
    ul {
      width: 850px;
      display: flex;
      flex-direction: row;
      font-size: 18px;
      justify-content: space-around;
      li {
        list-style-type: disc;
        color: #ff7f95;
        span {
          color: #fff;
        }
      }
    }
    a {
      width: 340px;
      height: 60px;
      display: inline-block;
      margin-top: 70px;
      background: #fff;
      border-radius: 34px;
      opacity: 0.9;
      text-align: center;
      line-height: 60px;
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
</style>
