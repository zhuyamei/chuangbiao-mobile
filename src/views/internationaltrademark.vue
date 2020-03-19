<template>
  <el-container style="display: block;">
    <Nav></Nav>
    <el-row>
      <el-col>
        <div :style="bgimg" style="height: 617px;">
          <div class="topbg">
            <h4 style="color: #D2631B;padding-top: 10px;">申请前查询，有效提升授权率</h4>
            <div style="width: 60%;margin: 0 auto;height: 20%;">
              <el-input placeholder="请输入商标名称,如:创标" v-model="input2" prefix-icon="el-icon-search" style="border: 2px solid #D2631B;border-radius: 5px;">
                <template slot="append"><el-button style="background-color: #D2631B;color: white;border: #FF4500;border-radius: 0;">免费查询</el-button></template>
              </el-input>
            </div>
            <div class="smallfont" style="height: 30%;">
              <div>累计查询<span>2613383</span>次</div>
              <div>今日已有<span>1379</span>人获取查询结果</div>
            </div>
            <div><img src="../assets/p1.png" style="width: 100%;"></div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="rowsty">
        <div>
          <h1>国商标查询的必要性?</h1>
          <div style="color: gray;">选择创标，让您省时放心</div>
        </div>
        <div style="display: flex;justify-content: center;width: 80%;margin: 0 auto;"><!-- 三块容器 -->
          <div v-for="(o,index) in sbImg" :key="index" style="margin: 0 15px;width: 300px;height: 400px;border: 1px solid gainsboro;"> <!--每块 -->
            <div style="background-color: aliceblue;height: 100px;border-bottom: 1px solid gainsboro;padding: 10px 0;">
              <img src="../assets/n-seo-icon1.png" />
              <h3 style="color: orange;">{{o.title}}</h3>
            </div>
            <div>
              <div style="line-height: 28px;color: grey;margin-bottom: 10px;padding: 10px;">{{o.info}}</div>
              <el-button style="background-color: orange;color: white;border-radius: 20px;width: 60%;">咨询办理</el-button>
            </div>
          </div>
        </div>
    </el-row>
    <el-row class="rowsty" style="background-color: white;height: 1200px;">
      <h1>热门国家/地区</h1>
      <table class="mytab" cellspacing="25px">
        <tr>
          <td>
            <div style="height: 88%;padding: 5px;">
              <img src="../assets/re-eu.png" /><h4>欧盟商标注册</h4><span>European Union</span>
              <div>享28国保护，超高性价比</div>
            </div>
            <div style="border-top: 1px solid gainsboro;color: gainsboro;line-height: 26px;height: 12%;">
              <el-link :underline="false">查看服务</el-link>|<el-link :underline="false">咨询顾问</el-link>
            </div>
          </td>
          <td>
            <div style="height: 88%;padding: 5px;">
              <img src="../assets/re-uk.png" /><h4>欧盟商标注册</h4><span>European Union</span>
              <div>享28国保护，超高性价比</div>
            </div>
            <div style="border-top: 1px solid gainsboro;color: gainsboro;line-height: 26px;height: 12%;">
              <el-link :underline="false">查看服务</el-link>|<el-link :underline="false">咨询顾问</el-link>
            </div>
          </td>
          <td>
            <div style="height: 88%;padding: 5px;">
              <img src="../assets/re-jp.png" /><h4>欧盟商标注册</h4><span>European Union</span>
              <div>享28国保护，超高性价比</div>
            </div>
            <div style="border-top: 1px solid gainsboro;color: gainsboro;line-height: 26px;height: 12%;">
              <el-link :underline="false">查看服务</el-link>|<el-link :underline="false">咨询顾问</el-link>
            </div>
          </td>
          <td>
            <div style="height: 88%;padding: 5px;">
              <img src="../assets/re-us.png" /><h4>欧盟商标注册</h4><span>European Union</span>
              <div>享28国保护，超高性价比</div>
            </div>
            <div style="border-top: 1px solid gainsboro;color: gainsboro;line-height: 26px;height: 12%;">
              <el-link :underline="false">查看服务</el-link>|<el-link :underline="false">咨询顾问</el-link>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div style="height: 88%;padding: 5px;">
              <img src="../assets/re-kr.png" /><h4>欧盟商标注册</h4><span>European Union</span>
              <div>享28国保护，超高性价比</div>
            </div>
            <div style="border-top: 1px solid gainsboro;color: gainsboro;line-height: 26px;height: 12%;">
              <el-link :underline="false">查看服务</el-link>|<el-link :underline="false">咨询顾问</el-link>
            </div>
          </td>
          <td>
            <div style="height: 88%;padding: 5px;">
              <img src="../assets/re-fr.png" /><h4>欧盟商标注册</h4><span>European Union</span>
              <div>享28国保护，超高性价比</div>
            </div>
            <div style="border-top: 1px solid gainsboro;color: gainsboro;line-height: 26px;height: 12%;">
              <el-link :underline="false">查看服务</el-link>|<el-link :underline="false">咨询顾问</el-link>
            </div>
          </td>
          <td>
            <div style="height: 88%;padding: 5px;">
              <img src="../assets/re-de.png" /><h4>欧盟商标注册</h4><span>European Union</span>
              <div>享28国保护，超高性价比</div>
            </div>
            <div style="border-top: 1px solid gainsboro;color: gainsboro;line-height: 26px;height: 12%;">
              <el-link :underline="false">查看服务</el-link>|<el-link :underline="false">咨询顾问</el-link>
            </div>
          </td>
          <td>
            <div style="height: 88%;padding: 5px;">
              <img src="../assets/re-it.png" /><h4>欧盟商标注册</h4><span>European Union</span>
              <div>享28国保护，超高性价比</div>
            </div>
            <div style="border-top: 1px solid gainsboro;color: gainsboro;line-height: 26px;height: 12%;">
              <el-link :underline="false">查看服务</el-link>|<el-link :underline="false">咨询顾问</el-link>
            </div>
          </td>
        </tr>
      <tr>
        <td>
          <div style="height: 88%;padding: 5px;">
            <img src="../assets/re-au.png" /><h4>欧盟商标注册</h4><span>European Union</span>
            <div>享28国保护，超高性价比</div>
          </div>
          <div style="border-top: 1px solid gainsboro;color: gainsboro;line-height: 26px;height: 12%;">
            <el-link :underline="false">查看服务</el-link>|<el-link :underline="false">咨询顾问</el-link>
          </div>
        </td>
        <td>
          <div style="height: 88%;padding: 5px;">
            <img src="../assets/re-vi.png" /><h4>欧盟商标注册</h4><span>European Union</span>
            <div>享28国保护，超高性价比</div>
          </div>
          <div style="border-top: 1px solid gainsboro;color: gainsboro;line-height: 26px;height: 12%;">
            <el-link :underline="false">查看服务</el-link>|<el-link :underline="false">咨询顾问</el-link>
          </div>
        </td>
        <td>
          <div style="height: 88%;padding: 5px;">
            <img src="../assets/re-hk.png" /><h4>欧盟商标注册</h4><span>European Union</span>
            <div>享28国保护，超高性价比</div>
          </div>
          <div style="border-top: 1px solid gainsboro;color: gainsboro;line-height: 26px;height: 12%;">
            <el-link :underline="false">查看服务</el-link>|<el-link :underline="false">咨询顾问</el-link>
          </div>
        </td>
        <td>
          <div style="height: 88%;padding-top:50%">
            <h3>更多国家/地区/联盟</h3>
            <h5 style="color: orangered;">在线咨询</h5>
          </div>
          <div style="border-top: 1px solid gainsboro;color: gainsboro;line-height: 26px;height: 12%;">
            <el-link :underline="false">查看服务</el-link>|<el-link :underline="false">咨询顾问</el-link>
          </div>
        </td>
      </tr>
      </table>
    </el-row>
    <el-row class="rowsty" style="height: 400px;">
      <div style="display: flex;justify-content: center;">
        <el-card style="width: 20%;margin: 0 20px;" v-for="(c,index) in ftcar" :key="index">
          <div slot="header" class="catile">
            <img src="../assets/c1.png" /><h5 style="text-indent: 5px;">{{c.title}}</h5>
          </div>
          <div style="display: flex;">
            <div><img src="../assets/c2.png" /></div><div class="wz">{{c.ans}}</div>
          </div>
          <div class="ljzx"><el-link :underline="false" style="color: coral;">了解咨询<i class="el-icon-arrow-right"></i></el-link></div>
        </el-card>
      </div>
      <div>
        <el-button class="moveask"><i class="el-icon-back"></i>更多问题<i class="el-icon-right"></i></el-button>
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
          backgroundImage:"url("+require("@/assets/banner3.jpg")+")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1920px 617px"
        },
        sbImg:[
          {
            // url:require(''),
            title:'国际商标查询',
            info:'查询商标是申请,记得回访时间峰会上，目的是覅好久还是IP登记搜覅奇偶就快点发货快结束。士大夫红素粉红啊来就是伐啦及时答复'
          },
          {
            // url:require(''), //@/assets/n-seo-icon2.png
            title:'提高成功率',
            info:'查询商标是申请,记得回访时间峰会上，目的是覅好久还是IP登记搜覅奇偶就快点发货快结束。士大夫红素粉红啊来就是伐啦及时答复'
          },
          {
            // url:require(''), //@/assets/n-seo-icon3.png
            title:'防止财产流失',
            info:'查询商标是申请,记得回访时间峰会上，目的是覅好久还是IP登记搜覅奇偶就快点发货快结束。士大夫红素粉红啊来就是伐啦及时答复'
          }
        ],

        ftcar:[
          {title:'国际商标能保证100%成功吗?',ans:'不能。商标注册查询存在查询盲查期，任何承诺“100%注册成功”的都是缺乏一句的'},
          {title:'国际商标注册在中国有优先权吗?',ans:'有的。相同的申请人就同一商标如果首先在美国提出申请，享有优先权'},
          {title:'国际商标申请有什么好处吗?',ans:'可以防止他人进行商标抢注，降低维权、被诉讼等风险，建立完善的品牌助力全球化发展，享国家相关优惠...'},
        ]
      }
    }
  }
</script>

<style>
  .smallfont{display: flex;justify-content: space-between;width: 55%;margin: 5px auto;}
  .smallfont span{color: orangered;}
.topbg{width: 40%;height: 40%;margin: 0 auto;text-align: center;
    border-radius: 5px;box-shadow: 2px 2px 2px 2px gainsboro;
    position: relative;top:65%;z-index: 999;
  }
  .rowsty{background-color: ghostwhite;height: 700px;padding-top: 5%;}
  .mytab{width: 60%;margin: 0 auto;}

  .mytab td{width: 300px;border-top: 2px solid orangered;height: 280px;background-color: aliceblue}
  .wz{font-size: 14px;color: lightgrey;text-align: left;padding-left: 5px;}
  .catile{display: flex;align-items: center;height: 20px;}
  .ljzx{text-align: left;margin-top: 15px;}
  .moveask{color: coral;margin-top: 20px;border-radius: 20px;}
</style>
