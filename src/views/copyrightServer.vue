<template>
  <el-container style="display: block;">
    <Nav></Nav>
    <el-row>
      <div :style="bgimg" style="height: 622px;">
        <div class="topbg">
          <h4 style="color: #D2631B;padding-top: 10px;">申请前查询，有效提升授权率</h4>
          <div style="width: 60%;margin: 0 auto;height: 20%;">
            <el-input placeholder="请输入商标名称,如:创标" prefix-icon="el-icon-search" style="border: 2px solid #D2631B;border-radius: 5px;">
              <template slot="append"><el-button style="background-color: #D2631B;color: white;border: #FF4500;border-radius: 0;">查询能否注册</el-button></template>
            </el-input>
          </div>
          <div class="smallfont" style="height: 30%;">
            <div>累计查询<span>17525611</span>次</div>
            <div>今日已有<span>1379</span>人获取查询结果</div>
          </div>
          <div><img src="../assets/p1.png" style="width: 100%;"></div>
        </div>
      </div>
    </el-row>
    <el-row class="rowsty">
        <div>
          <h1>版权服务首选 "北京创标联合"</h1>
          <div style="color: gray;">保护您的创意，让您的作品独一无二</div>
        </div>
        <div style="display: flex;justify-content: center;width: 80%;margin: 0 auto;"><!-- 三块容器 -->
          <div v-for="(o,index) in bqImg" :key="index" style="margin: 0 15px;width: 300px;height: 400px;border: 1px solid gainsboro;"> <!--每块 -->
            <div style="background-color: aliceblue;height: 100px;border-bottom: 1px solid gainsboro;padding: 10px 0;">
              <img src="../assets/b1.png" />
              <h3 style="color: orange;">{{o.title}}</h3>
            </div>
            <div>
              <div style="line-height: 28px;color: grey;margin-bottom: 10px;padding: 10px;">{{o.info}}</div>
              <el-button style="background-color: orange;color: white;border-radius: 20px;width: 60%;">咨询办理</el-button>
            </div>
          </div>
        </div>
    </el-row>
    <el-row>
      <div :style="bgimg2" style="height: 683px;color: white;">
        <div style="height: 5%;padding-top: 5%;">
          <h1>为什么要登记版权？</h1><span>有利于作品实现经济价值，有利于企业文化传播，一旦发生侵权，轻松维护劳动成果</span>
        </div>
        <div style="display: flex;width: 60%;margin: 0 auto;height: 60%;align-items: center;">
          <div style="width: 25%;color: white;" v-for="(item,index) in copyinfos" :key="index">
            <img src="../assets/s11.png"><div>{{item.titel}}</div>
          </div>
        </div>
        <el-button class="ljmove">了解更多<i class="el-icon-arrow-right"></i></el-button>
      </div>
    </el-row>
    <el-row>
      <div>
        <h1>办理版权业务</h1>
        <div style="color: gray;">保护您的创意，让您的作品独一无二</div>
      </div>
      <div style="display: flex;width: 50%;margin: 0 auto;">
        <div style="width: 400px;color: grey;padding: 2%" v-for="(p,index) in 2">
          <img src="../assets/s1.png" />
          <h3>软件著作圈登记加急</h3>
          <span>直接链通国家版权保护中心，专业代理人快速处理递交，30个工作日即可拿到证书，全面保护您的软件权益</span>
          <div style="margin-top: 5%;"><el-button style="background-color: #6980C4;color: white;">了解详情</el-button>
          <el-button style="background-color: orangered;color: white;">咨询顾问</el-button></div>
        </div>
      </div>
    </el-row>
    <el-row style="background-color: #F5F8FF;margin-bottom: 5%;padding: 3%;">
      <div>
        <h1>版权案例分析</h1>
        <div style="color: gray;">经典案例告诉您:拥有知识产权，便拥有一本万利的商业武器</div>
      </div>
      <div style="width: 60%;margin: 5px auto;">
        <div style="width: 45%;background-color: white;height: 200px;float: left;margin: 10px;" v-for="(d,index) in bqmode">
          <div style="display: flex;align-items: center;text-align: left;padding: 15px;">
            <img src="../assets/a1.png">
            <div style="padding-left: 10px;line-height: 24px;">
              <div>{{d.title}}</div><span style="display: inline-block;width: 20%;border-bottom: 3px solid coral;"></span>
              <div>{{d.info}}</div>
              <el-link style="color: coral;margin: 5% 0;">查询详情<i class="el-icon-arrow-right"></i></el-link>
            </div>
          </div>

        </div>
      </div>
    </el-row>
    <NFoot></NFoot>
  </el-container>
</template>
<script>
  import Nav from "../components/nav.vue"
  import NFoot from "../components/nav-footer.vue";
  export default{
    components:{
      Nav,
      NFoot
    },
    data(){
      return{
        bgimg:{
          backgroundImage:"url("+require("@/assets/banner1.png")+")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1920px 622px"
        },
        bgimg2:{
          backgroundImage:"url("+require("@/assets/f1.png")+")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1920px 683px"
        },
        bqImg:[
          {
            // url:require(''), //@/assets/n-seo-icon3.png
            title:'版权变更',
            info:'版权名称、申请人姓名、地址、以及版权其他著作事项变动时应向国家版权保护中心递交变更申请'
          },
          {
            // url:require(''), //@/assets/n-seo-icon3.png
            title:'版权补证',
            info:'版权名称登记后需办理补证的，应向国建版权中心申请，1-2个月完成审核并发证'
          },
          {
            // url:require(''), //@/assets/n-seo-icon3.png
            title:'版权转让',
            info:'版权名所有者将版权的财产权利转给他人享有，影响国家版权保护中心转让登记'
          }
        ],
        copyinfos:[
          {url:'',titel:'取得著作权后，可促进软件的交易与发行'},
          {url:'',titel:'提高自身和作品的知名度一次申请，不用续展'},
          {url:'',titel:'是主张去哪了的有力武器请求司法保护的前提'},
          {url:'',titel:'可以通过专利获得政府资助'},
          {url:'',titel:'版权局定期对已登记版权进行公告，增加品牌知名度'},
          {url:'',titel:'软件著作权登记后可享受国家或地方税收减免，退税政策'},
        ],
        bqmode:[
          {
            title:'邓丽君经典歌曲演出会案',
            info:'2009年5月。被告在北京展览馆主办了名为“何日君再来”的邓丽君经典歌曲2009全球巡回演唱会北京站的演出',
          },
          {
            title:'庄羽诉郭敬明',
            info:'作家庄羽创作了长篇小说《圈里圈外》,其指称郭敬明的长篇小说《梦里花落知多少》抄袭了《圈里圈外》的',
          },
          {
            title:'《曼哈顿的印第安人》绘画展',
            info:'原告托马斯.克尔创作了人物肖像画《曼哈顿的印第安人》中人物突出特征是显现了纽约曼哈顿摩天大厦',
          },
          {
            title:'提供软件破解补丁案',
            info:'北京文泰科技公司开发出了"文泰刻绘"软件，并设置了技术措施。该技术措施会自动验证用户试图运行的是什么',
          },
        ]
      }
    }
  }
</script>

<style scoped="">
  .smallfont{display: flex;justify-content: space-between;width: 55%;margin: 5px auto;}
  .smallfont span{color: orangered;}
  .topbg{width: 40%;height: 40%;margin: 0 auto;text-align: center;background-color: white;
    border-radius: 5px;box-shadow: 2px 2px 2px 2px gainsboro;
    position: relative;top:65%;z-index: 999;
  }
  .rowsty{background-color: ghostwhite;height: 700px;padding-top: 5%;}
  .ljmove{width: 10%;background-color: transparent;color: white;border-radius: 20px;letter-spacing: 2px;}
</style>
