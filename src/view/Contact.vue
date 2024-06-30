<template>
  <div>
    <div class="bannerH">
      <div class="bflex">
        <p>CONTACT US</p>
      </div>
    </div>
    <div class="cl_main1">
      <div class="cl_main_f">
        <div class="cl_main_flex">
          <div class="cl_main_center">
            <div class="cl_tab">
             <!--<div class="cl_contactus_tab active">SALES</div>-->
                 <div class="cl_contactus_tab">OPINION</div> 
            </div>
            <div class="cl_sales">
              <div class="cl_contact_sale">
                <el-form
                  class="el-form el-form--label-top"
                  ref="form"
                  :rules="rules"
                  :model="form"
                >
                  <el-row>
                    <el-col :span="12" style="width: 45%">
                      <el-form-item label="surname" prop="surname">
                        <el-input
                          placeholder="Please enter last name"
                          v-model="form.surname"
                        ></el-input>
                      </el-form-item>
                      <el-form-item label="company name" prop="company_name">
                        <el-input
                          placeholder="Please enter the company name"
                          v-model="form.company_name"
                        ></el-input>
                      </el-form-item>
                      <el-form-item label="email" prop="email">
                        <el-input
                          placeholder="Please enter your email address"
                          v-model="form.email"
                        ></el-input> </el-form-item
                    ></el-col>
                    <el-col :span="12" style="width: 45%; float: right">
                      <el-form-item label="name" prop="name">
                        <el-input
                          placeholder="Please enter your name"
                          v-model="form.name"
                        ></el-input>
                      </el-form-item>
                      <el-form-item label="country" prop="country">
                        <el-input
                          placeholder="Please enter your country"
                          v-model="form.country"
                        ></el-input>
                      </el-form-item>
                      <el-form-item label="Telephone number" prop="area">
                        <el-select
                          v-model="form.area"
                          placeholder="area"
                          style="width: 30%"
                        >
                          <el-option
                            v-for="(item, index) in countryList"
                            :key="index"
                            :value="item.nameEn"
                          >
                          </el-option>
                        </el-select>
                        <el-input
                          style="width: 70%"
                          placeholder="Please enter your phone number"
                          v-model="form.phone"
                        ></el-input></el-form-item
                    ></el-col>
                  </el-row>
                  <el-form-item label="Message board">
                    <el-input
                      type="textarea"
                      placeholder=""
                      v-model="form.message"
                    ></el-input>
                  </el-form-item>
                  <el-form-item style="display: flex; justify-content: center">
                    <el-button type="primary" @click="onSubmit()"
                      >SUBMIT</el-button
                    >
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cl_main2">
      <!-- <div class="africa-content">
        <div class="area_flex">
          <div class="line"></div>
          <div class="area_title">亚太地区</div>
          <div class="line"></div>
        </div>
        <div class="mainCenter">
          <ul>
            <li>
              <h3 class="list_title">TIG TECHNOLOGIES SDN. BHD.</h3>
              <p class="list_content">
                E3A-06, Menara Suezcap 2, KL Gateway, Jalan Kerinchi, 59200,
                Kuala Lumpur, Malaysia
              </p>
              <p class="list_name">Elrica Hiutanto</p>
              <p class="list_phone">Tel. +62 852 7586 6199</p>
              <p class="blue">qiu.elrica@253.com</p>
            </li>
            <li>
              <h3 class="list_title">TIG TECHNOLOGIES SDN. BHD.</h3>
              <p class="list_content">
                E3A-06, Menara Suezcap 2, KL Gateway, Jalan Kerinchi, 59200,
                Kuala Lumpur, Malaysia
              </p>
              <p class="list_name">Elrica Hiutanto</p>
              <p class="list_phone">Tel. +62 852 7586 6199</p>
              <p class="blue">qiu.elrica@253.com</p>
            </li>
            <li>
              <h3 class="list_title">TIG TECHNOLOGIES SDN. BHD.</h3>
              <p class="list_content">
                E3A-06, Menara Suezcap 2, KL Gateway, Jalan Kerinchi, 59200,
                Kuala Lumpur, Malaysia
              </p>
              <p class="list_name">Elrica Hiutanto</p>
              <p class="list_phone">Tel. +62 852 7586 6199</p>
              <p class="blue">qiu.elrica@253.com</p>
            </li>
            <li>
              <h3 class="list_title">TIG TECHNOLOGIES SDN. BHD.</h3>
              <p class="list_content">
                E3A-06, Menara Suezcap 2, KL Gateway, Jalan Kerinchi, 59200,
                Kuala Lumpur, Malaysia
              </p>
              <p class="list_name">Elrica Hiutanto</p>
              <p class="list_phone">Tel. +62 852 7586 6199</p>
              <p class="blue">qiu.elrica@253.com</p>
            </li>
            <li>
              <h3 class="list_title">TIG TECHNOLOGIES SDN. BHD.</h3>
              <p class="list_content">
                E3A-06, Menara Suezcap 2, KL Gateway, Jalan Kerinchi, 59200,
                Kuala Lumpur, Malaysia
              </p>
              <p class="list_name">Elrica Hiutanto</p>
              <p class="list_phone">Tel. +62 852 7586 6199</p>
              <p class="blue">qiu.elrica@253.com</p>
            </li>
            <li>
              <h3 class="list_title">TIG TECHNOLOGIES SDN. BHD.</h3>
              <p class="list_content">
                E3A-06, Menara Suezcap 2, KL Gateway, Jalan Kerinchi, 59200,
                Kuala Lumpur, Malaysia
              </p>
              <p class="list_name">Elrica Hiutanto</p>
              <p class="list_phone">Tel. +62 852 7586 6199</p>
              <p class="blue">qiu.elrica@253.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="africa-content">
        <div class="area_flex">
          <div class="line"></div>
          <div class="area_title">中东&非洲</div>
          <div class="line"></div>
        </div>
        <div class="mainCenter">
          <ul>
            <li>
              <h3 class="list_title">TIG TECHNOLOGIES SDN. BHD.</h3>
              <p class="list_content">
                E3A-06, Menara Suezcap 2, KL Gateway, Jalan Kerinchi, 59200,
                Kuala Lumpur, Malaysia
              </p>
              <p class="list_name">Elrica Hiutanto</p>
              <p class="list_phone">Tel. +62 852 7586 6199</p>
              <p class="blue">qiu.elrica@253.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="africa-content">
        <div class="area_flex">
          <div class="line"></div>
          <div class="area_title">亚太地区</div>
          <div class="line"></div>
        </div>
        <div class="mainCenter">
          <ul>
            <li>
              <h3 class="list_title">TIG TECHNOLOGIES SDN. BHD.</h3>
              <p class="list_content">
                E3A-06, Menara Suezcap 2, KL Gateway, Jalan Kerinchi, 59200,
                Kuala Lumpur, Malaysia
              </p>
              <p class="list_name">Elrica Hiutanto</p>
              <p class="list_phone">Tel. +62 852 7586 6199</p>
              <p class="blue">qiu.elrica@253.com</p>
            </li>
          </ul>
        </div>
      </div> -->
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
import { login } from "@/api/index.js";
import axios from 'axios';
export default {
  data() {
    return {
      countryList: [
        {
          nameEn: "Angola",
          nameCh: "安哥拉",
          code: "AO",
          codeNumber: "00244",
        },
        {
          nameEn: "Afghanistan",
          nameCh: "阿富汗",
          code: "AF",
          codeNumber: "0093",
        },
        {
          nameEn: "Albania",
          nameCh: "阿尔巴尼亚",
          code: "AL",
          codeNumber: "00355",
        },
        {
          nameEn: "Algeria",
          nameCh: "阿尔及利亚",
          code: "DZ",
          codeNumber: "00213",
        },
        {
          nameEn: "Andorra",
          nameCh: "安道尔共和国",
          code: "AD",
          codeNumber: "00376",
        },
        {
          nameEn: "Anguilla",
          nameCh: "安圭拉岛",
          code: "AI",
          codeNumber: "001264",
        },
        {
          nameEn: "Antigua and Barbuda",
          nameCh: "安提瓜和巴布达",
          code: "AG",
          codeNumber: "001268",
        },
        {
          nameEn: "Argentina",
          nameCh: "阿根廷",
          code: "AR",
          codeNumber: "0054",
        },
        {
          nameEn: "Armenia",
          nameCh: "亚美尼亚",
          code: "AM",
          codeNumber: "00374",
        },
        {
          nameEn: "Ascension",
          nameCh: "阿森松",
          code: "",
          codeNumber: "00247",
        },
        {
          nameEn: "Australia",
          nameCh: "澳大利亚",
          code: "AU",
          codeNumber: "0061",
        },
        {
          nameEn: "Austria",
          nameCh: "奥地利",
          code: "AT",
          codeNumber: "0043",
        },
        {
          nameEn: "Azerbaijan",
          nameCh: "阿塞拜疆",
          code: "AZ",
          codeNumber: "00994",
        },
        {
          nameEn: "Bahamas",
          nameCh: "巴哈马",
          code: "BS",
          codeNumber: "001242",
        },
        {
          nameEn: "Bahrain",
          nameCh: "巴林",
          code: "BH",
          codeNumber: "00973",
        },
        {
          nameEn: "Bangladesh",
          nameCh: "孟加拉国",
          code: "BD",
          codeNumber: "00880",
        },
        {
          nameEn: "Barbados",
          nameCh: "巴巴多斯",
          code: "BB",
          codeNumber: "001246",
        },
        {
          nameEn: "Belarus",
          nameCh: "白俄罗斯",
          code: "BY",
          codeNumber: "00375",
        },
        {
          nameEn: "Belgium",
          nameCh: "比利时",
          code: "BE",
          codeNumber: "0032",
        },
        {
          nameEn: "Belize",
          nameCh: "伯利兹",
          code: "BZ",
          codeNumber: "00501",
        },
        {
          nameEn: "Benin",
          nameCh: "贝宁",
          code: "BJ",
          codeNumber: "00229",
        },
        {
          nameEn: "Bermuda Is.",
          nameCh: "百慕大群岛",
          code: "BM",
          codeNumber: "001441",
        },
        {
          nameEn: "Bolivia",
          nameCh: "玻利维亚",
          code: "BO",
          codeNumber: "00591",
        },
        {
          nameEn: "Botswana",
          nameCh: "博茨瓦纳",
          code: "BW",
          codeNumber: "00267",
        },
        {
          nameEn: "Brazil",
          nameCh: "巴西",
          code: "BR",
          codeNumber: "0055",
        },
        {
          nameEn: "Brunei",
          nameCh: "文莱",
          code: "BN",
          codeNumber: "00673",
        },
        {
          nameEn: "Bulgaria",
          nameCh: "保加利亚",
          code: "BG",
          codeNumber: "00359",
        },
        {
          nameEn: "Burkina-faso",
          nameCh: "布基纳法索",
          code: "BF",
          codeNumber: "00226",
        },
        {
          nameEn: "Myanmar",
          nameCh: "缅甸",
          code: "MM",
          codeNumber: "0095",
        },
        {
          nameEn: "Burundi",
          nameCh: "布隆迪",
          code: "BI",
          codeNumber: "00257",
        },
        {
          nameEn: "Cameroon",
          nameCh: "喀麦隆",
          code: "CM",
          codeNumber: "00237",
        },
        {
          nameEn: "Canada",
          nameCh: "加拿大",
          code: "CA",
          codeNumber: "001",
        },
        {
          nameEn: "Cayman Is.",
          nameCh: "开曼群岛",
          code: "",
          codeNumber: "001345",
        },
        {
          nameEn: "Central African Republic",
          nameCh: "中非共和国",
          code: "CF",
          codeNumber: "00236",
        },
        {
          nameEn: "Chad",
          nameCh: "乍得",
          code: "TD",
          codeNumber: "00235",
        },
        {
          nameEn: "Chile",
          nameCh: "智利",
          code: "CL",
          codeNumber: "0056",
        },
        {
          nameEn: "China",
          nameCh: "中国",
          code: "CN",
          codeNumber: "0086",
        },
        {
          nameEn: "Colombia",
          nameCh: "哥伦比亚",
          code: "CO",
          codeNumber: "0057",
        },
        {
          nameEn: "Congo",
          nameCh: "刚果",
          code: "CG",
          codeNumber: "00242",
        },
        {
          nameEn: "Cook Is.",
          nameCh: "库克群岛",
          code: "CK",
          codeNumber: "00682",
        },
        {
          nameEn: "Costa Rica",
          nameCh: "哥斯达黎加",
          code: "CR",
          codeNumber: "00506",
        },
        {
          nameEn: "Cuba",
          nameCh: "古巴",
          code: "CU",
          codeNumber: "0053",
        },
        {
          nameEn: "Cyprus",
          nameCh: "塞浦路斯",
          code: "CY",
          codeNumber: "00357",
        },
        {
          nameEn: "Czech Republic",
          nameCh: "捷克",
          code: "CZ",
          codeNumber: "00420",
        },
        {
          nameEn: "Denmark",
          nameCh: "丹麦",
          code: "DK",
          codeNumber: "0045",
        },
        {
          nameEn: "Djibouti",
          nameCh: "吉布提",
          code: "DJ",
          codeNumber: "00253",
        },
        {
          nameEn: "Ecuador",
          nameCh: "厄瓜多尔",
          code: "EC",
          codeNumber: "00593",
        },
        {
          nameEn: "Egypt",
          nameCh: "埃及",
          code: "EG",
          codeNumber: "0020",
        },
        {
          nameEn: "EI Salvador",
          nameCh: "萨尔瓦多",
          code: "SV",
          codeNumber: "00503",
        },
        {
          nameEn: "Estonia",
          nameCh: "爱沙尼亚",
          code: "EE",
          codeNumber: "00372",
        },
        {
          nameEn: "Ethiopia",
          nameCh: "埃塞俄比亚",
          code: "ET",
          codeNumber: "00251",
        },
        {
          nameEn: "Fiji",
          nameCh: "斐济",
          code: "FJ",
          codeNumber: "00679",
        },
        {
          nameEn: "Finland",
          nameCh: "芬兰",
          code: "FI",
          codeNumber: "00358",
        },
        {
          nameEn: "France",
          nameCh: "法国",
          code: "FR",
          codeNumber: "0033",
        },
        {
          nameEn: "French Guiana",
          nameCh: "法属圭亚那",
          code: "GF",
          codeNumber: "00594",
        },
        {
          nameEn: "Gabon",
          nameCh: "加蓬",
          code: "GA",
          codeNumber: "00241",
        },
        {
          nameEn: "Gambia",
          nameCh: "冈比亚",
          code: "GM",
          codeNumber: "00220",
        },
        {
          nameEn: "Georgia",
          nameCh: "格鲁吉亚",
          code: "GE",
          codeNumber: "00995",
        },
        {
          nameEn: "Germany",
          nameCh: "德国",
          code: "DE",
          codeNumber: "0049",
        },
        {
          nameEn: "Ghana",
          nameCh: "加纳",
          code: "GH",
          codeNumber: "00233",
        },
        {
          nameEn: "Gibraltar",
          nameCh: "直布罗陀",
          code: "GI",
          codeNumber: "00350",
        },
        {
          nameEn: "Greece",
          nameCh: "希腊",
          code: "GR",
          codeNumber: "0030",
        },
        {
          nameEn: "Grenada",
          nameCh: "格林纳达",
          code: "GD",
          codeNumber: "001473",
        },
        {
          nameEn: "Guam",
          nameCh: "关岛",
          code: "GU",
          codeNumber: "001671",
        },
        {
          nameEn: "Guatemala",
          nameCh: "危地马拉",
          code: "GT",
          codeNumber: "00502",
        },
        {
          nameEn: "Guinea",
          nameCh: "几内亚",
          code: "GN",
          codeNumber: "00224",
        },
        {
          nameEn: "Guyana",
          nameCh: "圭亚那",
          code: "GY",
          codeNumber: "00592",
        },
        {
          nameEn: "Haiti",
          nameCh: "海地",
          code: "HT",
          codeNumber: "00509",
        },
        {
          nameEn: "Honduras",
          nameCh: "洪都拉斯",
          code: "HN",
          codeNumber: "00504",
        },
        {
          nameEn: "Hong Kong（China）",
          nameCh: "香港（中国）",
          code: "HK",
          codeNumber: "00852",
        },
        {
          nameEn: "Hungary",
          nameCh: "匈牙利",
          code: "HU",
          codeNumber: "0036",
        },
        {
          nameEn: "Iceland",
          nameCh: "冰岛",
          code: "IS",
          codeNumber: "00354",
        },
        {
          nameEn: "India",
          nameCh: "印度",
          code: "IN",
          codeNumber: "0091",
        },
        {
          nameEn: "Indonesia",
          nameCh: "印度尼西亚",
          code: "ID",
          codeNumber: "0062",
        },
        {
          nameEn: "Iran",
          nameCh: "伊朗",
          code: "IR",
          codeNumber: "0098",
        },
        {
          nameEn: "Iraq",
          nameCh: "伊拉克",
          code: "IQ",
          codeNumber: "00964",
        },
        {
          nameEn: "Ireland",
          nameCh: "爱尔兰",
          code: "IE",
          codeNumber: "00353",
        },
        {
          nameEn: "Israel",
          nameCh: "以色列",
          code: "IL",
          codeNumber: "00972",
        },
        {
          nameEn: "Italy",
          nameCh: "意大利",
          code: "IT",
          codeNumber: "0039",
        },
        {
          nameEn: "Jamaica",
          nameCh: "牙买加",
          code: "JM",
          codeNumber: "001876",
        },
        {
          nameEn: "Japan",
          nameCh: "日本",
          code: "JP",
          codeNumber: "0081",
        },
        {
          nameEn: "Jordan",
          nameCh: "约旦",
          code: "JO",
          codeNumber: "00962",
        },
        {
          nameEn: "Kampuchea (Cambodia )",
          nameCh: "柬埔寨",
          code: "KH",
          codeNumber: "00855",
        },
        {
          nameEn: "Kazakstan",
          nameCh: "哈萨克斯坦",
          code: "KZ",
          codeNumber: "007",
        },
        {
          nameEn: "Kenya",
          nameCh: "肯尼亚",
          code: "KE",
          codeNumber: "00254",
        },
        {
          nameEn: "Korea",
          nameCh: "韩国",
          code: "KR",
          codeNumber: "0082",
        },
        {
          nameEn: "Kuwait",
          nameCh: "科威特",
          code: "KW",
          codeNumber: "00965",
        },
        {
          nameEn: "Kyrgyzstan",
          nameCh: "吉尔吉斯坦",
          code: "KG",
          codeNumber: "00996",
        },
        {
          nameEn: "Laos",
          nameCh: "老挝",
          code: "LA",
          codeNumber: "00856",
        },
        {
          nameEn: "Latvia",
          nameCh: "拉脱维亚",
          code: "LV",
          codeNumber: "00371",
        },
        {
          nameEn: "Lebanon",
          nameCh: "黎巴嫩",
          code: "LB",
          codeNumber: "00961",
        },
        {
          nameEn: "Lesotho",
          nameCh: "莱索托",
          code: "LS",
          codeNumber: "00266",
        },
        {
          nameEn: "Liberia",
          nameCh: "利比里亚",
          code: "LR",
          codeNumber: "00231",
        },
        {
          nameEn: "Libya",
          nameCh: "利比亚",
          code: "LY",
          codeNumber: "00218",
        },
        {
          nameEn: "Liechtenstein",
          nameCh: "列支敦士登",
          code: "LI",
          codeNumber: "00423",
        },
        {
          nameEn: "Lithuania",
          nameCh: "立陶宛",
          code: "LT",
          codeNumber: "00370",
        },
        {
          nameEn: "Luxembourg",
          nameCh: "卢森堡",
          code: "LU",
          codeNumber: "00352",
        },
        {
          nameEn: "Macau（China）",
          nameCh: "澳门（中国）",
          code: "MO",
          codeNumber: "00853",
        },
        {
          nameEn: "Madagascar",
          nameCh: "马达加斯加",
          code: "MG",
          codeNumber: "00261",
        },
        {
          nameEn: "Malawi",
          nameCh: "马拉维",
          code: "MW",
          codeNumber: "00265",
        },
        {
          nameEn: "Malaysia",
          nameCh: "马来西亚",
          code: "MY",
          codeNumber: "0060",
        },
        {
          nameEn: "Maldives",
          nameCh: "马尔代夫",
          code: "MV",
          codeNumber: "00960",
        },
        {
          nameEn: "Mali",
          nameCh: "马里",
          code: "ML",
          codeNumber: "00223",
        },
        {
          nameEn: "Malta",
          nameCh: "马耳他",
          code: "MT",
          codeNumber: "00356",
        },
        {
          nameEn: "Mariana Is",
          nameCh: "马里亚那群岛",
          code: "",
          codeNumber: "001670",
        },
        {
          nameEn: "Martinique",
          nameCh: "马提尼克",
          code: "",
          codeNumber: "00596",
        },
        {
          nameEn: "Mauritius",
          nameCh: "毛里求斯",
          code: "MU",
          codeNumber: "00230",
        },
        {
          nameEn: "Mexico",
          nameCh: "墨西哥",
          code: "MX",
          codeNumber: "0052",
        },
        {
          nameEn: "Moldova",
          nameCh: "摩尔多瓦",
          code: "MD",
          codeNumber: "00373",
        },
        {
          nameEn: "Monaco",
          nameCh: "摩纳哥",
          code: "MC",
          codeNumber: "00377",
        },
        {
          nameEn: "Mongolia",
          nameCh: "蒙古",
          code: "MN",
          codeNumber: "00976",
        },
        {
          nameEn: "Montserrat Is",
          nameCh: "蒙特塞拉特岛",
          code: "MS",
          codeNumber: "001664",
        },
        {
          nameEn: "Morocco",
          nameCh: "摩洛哥",
          code: "MA",
          codeNumber: "00212",
        },
        {
          nameEn: "Mozambique",
          nameCh: "莫桑比克",
          code: "MZ",
          codeNumber: "00258",
        },
        {
          nameEn: "Namibia",
          nameCh: "纳米比亚",
          code: "NA",
          codeNumber: "00264",
        },
        {
          nameEn: "Nauru",
          nameCh: "瑙鲁",
          code: "NR",
          codeNumber: "00674",
        },
        {
          nameEn: "Nepal",
          nameCh: "尼泊尔",
          code: "NP",
          codeNumber: "00977",
        },
        {
          nameEn: "Netheriands Antilles",
          nameCh: "荷属安的列斯",
          code: "",
          codeNumber: "00599",
        },
        {
          nameEn: "Netherlands",
          nameCh: "荷兰",
          code: "NL",
          codeNumber: "0031",
        },
        {
          nameEn: "New Zealand",
          nameCh: "新西兰",
          code: "NZ",
          codeNumber: "0064",
        },
        {
          nameEn: "Nicaragua",
          nameCh: "尼加拉瓜",
          code: "NI",
          codeNumber: "00505",
        },
        {
          nameEn: "Niger",
          nameCh: "尼日尔",
          code: "NE",
          codeNumber: "00227",
        },
        {
          nameEn: "Nigeria",
          nameCh: "尼日利亚",
          code: "NG",
          codeNumber: "00234",
        },
        {
          nameEn: "Korea(dpr of) ",
          nameCh: "朝鲜",
          code: "KP",
          codeNumber: "00850",
        },
        {
          nameEn: "Norway",
          nameCh: "挪威",
          code: "NO",
          codeNumber: "0047",
        },
        {
          nameEn: "Oman",
          nameCh: "阿曼",
          code: "OM",
          codeNumber: "00968",
        },
        {
          nameEn: "Pakistan",
          nameCh: "巴基斯坦",
          code: "PK",
          codeNumber: "0092",
        },
        {
          nameEn: "Panama",
          nameCh: "巴拿马",
          code: "PA",
          codeNumber: "00507",
        },
        {
          nameEn: "Papua New Cuinea",
          nameCh: "巴布亚新几内亚",
          code: "PG",
          codeNumber: "00675",
        },
        {
          nameEn: "Paraguay",
          nameCh: "巴拉圭",
          code: "PY",
          codeNumber: "00595",
        },
        {
          nameEn: "Peru",
          nameCh: "秘鲁",
          code: "PE",
          codeNumber: "0051",
        },
        {
          nameEn: "Philippines",
          nameCh: "菲律宾",
          code: "PH",
          codeNumber: "0063",
        },
        {
          nameEn: "Poland",
          nameCh: "波兰",
          code: "PL",
          codeNumber: "0048",
        },
        {
          nameEn: "French Polynesia",
          nameCh: "法属玻利尼西亚",
          code: "PF",
          codeNumber: "00689",
        },
        {
          nameEn: "Portugal",
          nameCh: "葡萄牙",
          code: "PT",
          codeNumber: "00351",
        },
        {
          nameEn: "Puerto Rico",
          nameCh: "波多黎各",
          code: "PR",
          codeNumber: "001787",
        },
        {
          nameEn: "Qatar",
          nameCh: "卡塔尔",
          code: "QA",
          codeNumber: "00974",
        },
        {
          nameEn: "Reunion",
          nameCh: "留尼旺",
          code: "",
          codeNumber: "00262",
        },
        {
          nameEn: "Romania",
          nameCh: "罗马尼亚",
          code: "RO",
          codeNumber: "0040",
        },
        {
          nameEn: "Russia",
          nameCh: "俄罗斯",
          code: "RU",
          codeNumber: "007",
        },
        {
          nameEn: "Saint Lueia",
          nameCh: "圣卢西亚",
          code: "LCA",
          codeNumber: "001758",
        },
        {
          nameEn: "Saint Vincent",
          nameCh: "圣文森特岛",
          code: "VC",
          codeNumber: "001784",
        },
        {
          nameEn: "Samoa Eastern",
          nameCh: "东萨摩亚(美)",
          code: "",
          codeNumber: "00684",
        },
        {
          nameEn: "Samoa Western",
          nameCh: "西萨摩亚",
          code: "",
          codeNumber: "00685",
        },
        {
          nameEn: "San Marino",
          nameCh: "圣马力诺",
          code: "SM",
          codeNumber: "00378",
        },
        {
          nameEn: "Sao Tome and Principe",
          nameCh: "圣多美和普林西比",
          code: "ST",
          codeNumber: "00239",
        },
        {
          nameEn: "Saudi Arabia",
          nameCh: "沙特阿拉伯",
          code: "SA",
          codeNumber: "00966",
        },
        {
          nameEn: "Senegal",
          nameCh: "塞内加尔",
          code: "SN",
          codeNumber: "00221",
        },
        {
          nameEn: "Seychelles",
          nameCh: "塞舌尔",
          code: "SC",
          codeNumber: "00248",
        },
        {
          nameEn: "Sierra Leone",
          nameCh: "塞拉利昂",
          code: "SL",
          codeNumber: "00232",
        },
        {
          nameEn: "Singapore",
          nameCh: "新加坡",
          code: "SG",
          codeNumber: "0065",
        },
        {
          nameEn: "Slovakia",
          nameCh: "斯洛伐克",
          code: "SK",
          codeNumber: "00421",
        },
        {
          nameEn: "Slovenia",
          nameCh: "斯洛文尼亚",
          code: "SI",
          codeNumber: "00386",
        },
        {
          nameEn: "Solomon Is",
          nameCh: "所罗门群岛",
          code: "SB",
          codeNumber: "00677",
        },
        {
          nameEn: "Somali",
          nameCh: "索马里",
          code: "SO",
          codeNumber: "00252",
        },
        {
          nameEn: "South Africa",
          nameCh: "南非",
          code: "ZA",
          codeNumber: "0027",
        },
        {
          nameEn: "Spain",
          nameCh: "西班牙",
          code: "ES",
          codeNumber: "0034",
        },
        {
          nameEn: "Sri Lanka",
          nameCh: "斯里兰卡",
          code: "LK",
          codeNumber: "0094",
        },
        {
          nameEn: "Sudan",
          nameCh: "苏丹",
          code: "SD",
          codeNumber: "00249",
        },
        {
          nameEn: "Suriname",
          nameCh: "苏里南",
          code: "SR",
          codeNumber: "00597",
        },
        {
          nameEn: "Swaziland",
          nameCh: "斯威士兰",
          code: "SZ",
          codeNumber: "00268",
        },
        {
          nameEn: "Sweden",
          nameCh: "瑞典",
          code: "SE",
          codeNumber: "0046",
        },
        {
          nameEn: "Switzerland",
          nameCh: "瑞士",
          code: "CH",
          codeNumber: "0041",
        },
        {
          nameEn: "Syria",
          nameCh: "叙利亚",
          code: "SY",
          codeNumber: "00963",
        },
        {
          nameEn: "Taiwan（China）",
          nameCh: "台湾省（中国）",
          code: "TW",
          codeNumber: "00886",
        },
        {
          nameEn: "Tajikstan",
          nameCh: "塔吉克斯坦",
          code: "TJ",
          codeNumber: "00992",
        },
        {
          nameEn: "Tanzania",
          nameCh: "坦桑尼亚",
          code: "TZ",
          codeNumber: "00255",
        },
        {
          nameEn: "Thailand",
          nameCh: "泰国",
          code: "TH",
          codeNumber: "0066",
        },
        {
          nameEn: "Togo",
          nameCh: "多哥",
          code: "TG",
          codeNumber: "00228",
        },
        {
          nameEn: "Tonga",
          nameCh: "汤加",
          code: "TO",
          codeNumber: "00676",
        },
        {
          nameEn: "Trinidad and Tobago",
          nameCh: "特立尼达和多巴哥",
          code: "TT",
          codeNumber: "001868",
        },
        {
          nameEn: "Tunisia",
          nameCh: "突尼斯",
          code: "TN",
          codeNumber: "00216",
        },
        {
          nameEn: "Turkey",
          nameCh: "土耳其",
          code: "TR",
          codeNumber: "0090",
        },
        {
          nameEn: "Turkmenistan",
          nameCh: "土库曼斯坦",
          code: "TM",
          codeNumber: "00993",
        },
        {
          nameEn: "Uganda",
          nameCh: "乌干达",
          code: "UG",
          codeNumber: "00256",
        },
        {
          nameEn: "Ukraine",
          nameCh: "乌克兰",
          code: "UA",
          codeNumber: "00380",
        },
        {
          nameEn: "United Arab Emirates",
          nameCh: "阿拉伯联合酋长国",
          code: "AE",
          codeNumber: "00971",
        },
        {
          nameEn: "United Kiongdom",
          nameCh: "英国",
          code: "GB",
          codeNumber: "0044",
        },
        {
          nameEn: "United States of America",
          nameCh: "美国",
          code: "US",
          codeNumber: "001",
        },
        {
          nameEn: "Uruguay",
          nameCh: "乌拉圭",
          code: "UY",
          codeNumber: "00598",
        },
        {
          nameEn: "Uzbekistan",
          nameCh: "乌兹别克斯坦",
          code: "UZ",
          codeNumber: "00998",
        },
        {
          nameEn: "Venezuela",
          nameCh: "委内瑞拉",
          code: "VE",
          codeNumber: "0058",
        },
        {
          nameEn: "Vietnam",
          nameCh: "越南",
          code: "VN",
          codeNumber: "0084",
        },
        {
          nameEn: "Yemen",
          nameCh: "也门",
          code: "YE",
          codeNumber: "00967",
        },
        {
          nameEn: "Yugoslavia",
          nameCh: "南斯拉夫",
          code: "YU",
          codeNumber: "00381",
        },
        {
          nameEn: "Zimbabwe",
          nameCh: "津巴布韦",
          code: "ZW",
          codeNumber: "00263",
        },
        {
          nameEn: "Zambia",
          nameCh: "赞比亚",
          code: "ZM",
          codeNumber: "00260",
        },
        {
          nameEn: "Diego Garcia",
          nameCh: "迪戈加西亚岛 ",
          code: "",
          codeNumber: "00246",
        },
        {
          nameEn: "Aruba",
          nameCh: "阿鲁巴",
          code: "aw",
          codeNumber: "00297",
        },
        {
          nameEn: "Bhutan",
          nameCh: "不丹",
          code: "BTN",
          codeNumber: "00975",
        },
        {
          nameEn: "Bosnia and Herzegovina",
          nameCh: "波斯尼亚和黑塞哥维那",
          code: "BIH",
          codeNumber: "00387",
        },
        {
          nameEn: "Cape Verde",
          nameCh: "佛得角",
          code: "CPV",
          codeNumber: "00238",
        },
        {
          nameEn: "Comoros",
          nameCh: "科摩罗",
          code: "COM",
          codeNumber: "00269",
        },
        {
          nameEn: "Congo Dem",
          nameCh: "刚果金",
          code: "COD",
          codeNumber: "00243",
        },
        {
          nameEn: "Croatia",
          nameCh: "克罗地亚共和国",
          code: "HRV",
          codeNumber: "00385",
        },
        {
          nameEn: "Dominican Republic",
          nameCh: "多米尼加共和国",
          code: "DOM",
          codeNumber: "001809",
        },
        {
          nameEn: "Equatorial Guinea ",
          nameCh: "赤道几内亚",
          code: "GNQ",
          codeNumber: "00240",
        },
        {
          nameEn: "Falkland Is. ",
          nameCh: "福克兰群岛",
          code: "",
          codeNumber: "00500",
        },
        {
          nameEn: "Faroe Islands ",
          nameCh: "法罗群岛",
          code: "",
          codeNumber: "00298",
        },
        {
          nameEn: "Greenland ",
          nameCh: "格陵兰",
          code: "GRL",
          codeNumber: "00299",
        },
        {
          nameEn: "Guadeloupe ",
          nameCh: "瓜德罗普岛",
          code: "GP",
          codeNumber: "00590",
        },
        {
          nameEn: "Guinea-Bissau ",
          nameCh: "几内亚比绍",
          code: "GNB",
          codeNumber: "00245",
        },
        {
          nameEn: "Macedonia",
          nameCh: "马其顿",
          code: "MKD",
          codeNumber: "00389",
        },
        {
          nameEn: "Mauritania",
          nameCh: "毛里塔尼亚",
          code: "MRT",
          codeNumber: "00222",
        },
        {
          nameEn: "Micronesia ",
          nameCh: "密克罗尼西亚联邦",
          code: "FSM",
          codeNumber: "00691",
        },
        {
          nameEn: "Montenegro ",
          nameCh: "黑山",
          code: "MNE",
          codeNumber: "00382",
        },
        {
          nameEn: "New Caledonia ",
          nameCh: "新喀里多尼亚",
          code: "NCL",
          codeNumber: "00687",
        },
        {
          nameEn: "Norfolk Island",
          nameCh: "诺福克岛",
          code: "",
          codeNumber: "006723",
        },
        {
          nameEn: "Palau",
          nameCh: "帕劳",
          code: "PLW",
          codeNumber: "00680",
        },
        {
          nameEn: "Palestine",
          nameCh: "巴勒斯坦",
          code: "PLE",
          codeNumber: "00970",
        },
        {
          nameEn: "Rwanda",
          nameCh: "卢旺达共和国",
          code: "RWA",
          codeNumber: "00250",
        },
        {
          nameEn: "Saint Kitts and Nevis",
          nameCh: "圣基茨和尼维斯",
          code: "KNA",
          codeNumber: "001869",
        },
        {
          nameEn: "Serbia",
          nameCh: "塞尔维亚",
          code: "SRB",
          codeNumber: "00381",
        },
        {
          nameEn: "South Sudan",
          nameCh: "南苏丹",
          code: "SSD",
          codeNumber: "00211",
        },
        {
          nameEn: "Vanuatu",
          nameCh: "瓦努阿图",
          code: "VUT",
          codeNumber: "00678",
        },
        {
          nameEn: "Virgin Islands",
          nameCh: "英属维尔京群岛",
          code: "VG",
          codeNumber: "001809",
        },
        {
          nameEn: "Ivory Coast ",
          nameCh: "科特迪瓦共和国",
          code: "CIV",
          codeNumber: "00225",
        },
        {
          nameEn: "Dominica",
          nameCh: "多米尼克国",
          code: "",
          codeNumber: "001767",
        },
        {
          nameEn: "East Timor",
          nameCh: "东帝汶",
          code: "TP",
          codeNumber: "00670",
        },
        {
          nameEn: "Eritrea",
          nameCh: "厄立特里亚国",
          code: "ER",
          codeNumber: "00291",
        },
        {
          nameEn: "Wallis And Futuna Islands",
          nameCh: "沃利斯和富图纳群岛",
          code: "WF",
          codeNumber: "00681",
        },
        {
          nameEn: "Virgin Islands (U.S.)",
          nameCh: "维尔京群岛(美国)",
          code: "VI",
          codeNumber: "001340",
        },
        {
          nameEn: "Tuvalu",
          nameCh: "图瓦卢",
          code: "TV",
          codeNumber: "00688",
        },
        {
          nameEn: "Turks and Caicos Islands",
          nameCh: "特克斯和凯科斯群岛",
          code: "TC",
          codeNumber: "001809",
        },
        {
          nameEn: "Tokelau",
          nameCh: "托克劳",
          code: "TK",
          codeNumber: "00690",
        },
        {
          nameEn: "Marshall Islands",
          nameCh: "马绍尔群岛",
          code: "MH",
          codeNumber: "00692",
        },
        {
          nameEn: "Kiribati",
          nameCh: "基里巴斯",
          code: "KIR",
          codeNumber: "00686",
        },
        {
          nameEn: "Hawaii",
          nameCh: "夏威夷",
          code: "",
          codeNumber: "001808",
        },
        {
          nameEn: "San.Pierre And Miquelon I.",
          nameCh: "圣皮埃尔岛及密克隆岛",
          code: "SPM",
          codeNumber: "00508",
        },
        {
          nameEn: "Niue I. ",
          nameCh: "纽埃",
          code: "NIU",
          codeNumber: "00683",
        },
        {
          nameEn: "St.Helena ",
          nameCh: "圣赫勒拿 ",
          code: "SHN",
          codeNumber: "00290",
        },
        {
          nameEn: "Vatican",
          nameCh: "梵蒂冈",
          code: "",
          codeNumber: "00379",
        },
        {
          nameEn: "Wake I.",
          nameCh: "威克岛(美)",
          code: "",
          codeNumber: "001808",
        },
      ],
      form: {
        surname: "",
        name: "",
        country: "",
        company_name: "",
        email: "",
        area: "",
        phone: "",
        message: "",
      },
      rules: {
        surname: [{ required: true, trigger: "blur", message: "请输入姓" }],
        name: [{ required: true, trigger: "blur", message: "请输入姓名" }],
        country: [
          { required: true, trigger: "blur", message: "请填写所在区域" },
        ],
        company_name: [
          { required: true, trigger: "blur", message: "请填写公司名称" },
        ],
        email: [{ required: true, trigger: "blur", message: "请输入电子邮箱" }],
        area: [{ required: true, trigger: "blur", message: "请选择区域区域" }],
        phone: [{ required: true, trigger: "blur", message: "请输入手机号" }],
        message: [{ required: true, trigger: "blur", message: "请输入留言" }],
      },
    };
  },
  components: {},
  mounted() {},
  methods: {
    // onSubmit() {
    //   let data=this.form
    //   login(data).then((res) => {
    //     console.log(res);
    //   });
    // },

    async onSubmit() {
      const formData = {
        surname: "cheng",
        name: "huayi",
        country: "中国",
        company_name: "上海蘑谷云",
        email: "2719363448@qq.com",
        area: "0086",
        phone: "13409912451",
        message: "测试1",
      };
      const res=await axios.post('http://192.168.10.107:8081/door/v1/clue/add',formData);
      console.log(res);
    },
  },
};
</script>
<style scoped lang='less'>
/deep/ .el-input__inner {
  height: 50px;
  background-color: #f5f5f5;
}
/deep/ .el-input__suffix-inner {
  display: none;
}
/deep/ .el-textarea__inner {
  line-height: 5.5;
}
.bannerH {
  width: 100%;
  min-width: 1200px;
  background: url("../assets/images/cl_banner.png") no-repeat 0px 80px;
  height: 670px;
  background-size: 100%;
  margin: 0 auto;
  overflow: hidden;
  .bflex {
    height: 200px;
    line-height: 45px;
    margin-top: 225px;
    p {
      text-align: center;
      font-size: 58px;
      font-weight: bold;
      color: #1d256b;
      margin: 0 auto;
      width: 1002px;
      height: 72px;
    }
  }
}
.cl_main1 {
  width: 100%;
  min-width: 1200px;
  overflow: hidden;
  position: relative;
  margin-top: -196px;
  .cl_main_f {
    min-width: 1200px;
    margin: 0 auto;
    padding-top: 18px;
    padding-bottom: 100px;
    .cl_main_flex {
      width: 1200px;
      min-width: 1200px;
      box-shadow: 0px 0px 20px 0px rgba(72, 83, 179, 0.12);
      border-radius: 10px;
      height: 880px;
      background: #fff;
      padding-top: 115px;
      margin: 0 auto;
      .cl_main_center {
        width: 900px;
        margin: 0 auto;
        .cl_tab {
          height: 50px;
          display: flex;
          justify-content: center;
          text-align: center;
          .cl_contactus_tab {
            font-size: 32px;
            color: #4853b3;
            min-width: 100px;
            padding: 0 18px;
            width: 500px;
            cursor: pointer;
            text-align: center;
            border-bottom: 1px solid #4853b3;
            height: 43px;
            line-height: 43px;
          }
          .active {
            color: #3964f9;
            border-bottom: 2px solid #3964f9;
          }
        }
        .cl_sales {
          width: 100%;
          height: 1100px;
          padding-top: 20px;
          .cl_contact_sale {
            .el-button {
              font-size: 18px;
              margin-top: 50px;
              width: 240px;
              height: 60px;
              border-radius: 30px;
              background: #207aff;
            }
          }
        }
      }
    }
  }
}

.cl_main2 {
  width: 1200px;
  margin: 0 auto 100px;
  overflow: hidden;
  .africa-content {
    width: 1200px;
    margin: 100px auto 0;
    .area_flex {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 80px;
      .line {
        display: inline-block;
        width: 425px;
        border-top: 1px solid #ccc;
        vertical-align: 5px;
      }
      .area_title {
        font-size: 36px;
        font-weight: 500;
        color: #1d256b;
      }
    }
    .mainCenter {
      width: 1200px;
      margin: 0 auto;
      ul {
        width: 100%;
        li {
          width: 280px;
          display: inline-block;
          text-align: center;
          box-shadow: 0 10px 20px 0 rgba(72, 83, 179, 0.09);
          padding: 30px;
          height: 410px;
          line-height: 33px;
          margin: 30px;
          vertical-align: top;
          h3 {
            font-size: 24px;
            font-weight: 500;
            color: #1d256b;
            min-height: 50px;
          }
          .list_content {
            padding: 8px 0px;
          }
          p {
            font-size: 18px;
            color: #465980;
            line-height: 34px;
          }
          .blue {
            color: #207aff;
          }
        }
      }
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