<template>
  <div id="app">
    <header class="header-content">
      <div class="header">
        <div class="imgcont fl">
          <a href="/">
            <img src="./assets/images/logo_EN.png" alt="" style="width: 80px" />
          </a>
        </div>
        <div class="content-right fl">
          <!-- <ul class="navList">
            <li>
              <el-dropdown trigger="click">
                <span class="el-dropdown-link"
                  >产品介绍<i class="el-icon-arrow-down"></i
                ></span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>1</el-dropdown-item>
                  <el-dropdown-item>2</el-dropdown-item>
                  <el-dropdown-item>3</el-dropdown-item>
                  <el-dropdown-item>4</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
            <li><a>关于我们</a></li>
            <li><a>客户简介</a></li>
            <li><a>文档</a></li>
            <li><a>联系我们</a></li>
          </ul> -->

          <el-menu
            default-active='/'
            router
            class="el-menu-demo"
            mode="horizontal"
            text-color='#1d256b'
            active-text-color="#207aff"
            style="font-weight:700;"
          >
          <el-menu-item index="/">PRODUCTS</el-menu-item>
            <el-menu-item index="/about-us">ABOUT US</el-menu-item>
            <el-menu-item index="/contact">CONTACT US</el-menu-item>
          </el-menu>
        </div>
        <div class="content-rt fr"></div>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    };
  },
  components: {},
};
</script>

<style lang='less' scoped>
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
/deep/ .el-submenu__title i{
  color: #1d256b;
  font-weight:500;
}
.header-content {
  z-index: 99;
  width: 100%;
  min-width: 1200px;
  height: 80px;
  line-height: 80px;
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
    // .content-right {
    //   line-height: 76px;
    //   position: relative;
    //   margin: auto;
    //   .navList li {
    //     float: left;
    //     margin-right: 20px;
    //     .el-dropdown-link {
    //       font-size: 15px;
    //       color: #1d256b;
    //       line-height: 22px;
    //       font-weight: 700;
    //       cursor: pointer;
    //     }
    //   }
    // }

    .content-right{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80px;
    }
  }
}
</style>
