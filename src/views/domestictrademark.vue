<template>
  <el-container style="display: block;">
    <Nav></Nav>
    <el-row>
      <el-col>
        <div :style="bgimg" style="height: 617px;">
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
      </el-col>
    </el-row>
    <el-row class="rowsty">
        <div>
          <h1>国内商标注册</h1>
          <div style="color: gray;margin-bottom: 15px;">早一天申报，早一天实现您的品牌梦想，创标联合知识产权提供多种服务供您选择</div>
        </div>
        <div class="rq">
          <div style="display: flex;">
            <ul>
              <h3><img src="../assets/n4.png">&nbsp;服务介绍</h3>
              <li>官方自营：联合创标自营注册业务</li>
              <li>用户口碑：累计服务用户超十万</li>
              <li>专业快速：比同行业快50%，1对1服务</li>
              <li>服务保障：品牌保障，全程陪同护航</li>
              <li>法律援助：专业法律团队，全程法律护航</li>
            </ul>
            <ul>
              <h3><img src="../assets/n5.png">&nbsp;注册流程</h3>
              <li>1、免费查询病分析，提高成功率</li>
              <li>2、提交申请，核对资料无误，提交商标局</li>
              <li>3、下发商标申请受理书</li>
              <li>4、商标局核查</li>
              <li>5、下发注册证书</li>
            </ul>
          </div>
        </div>
        <div class="fwinfo">
          <div style="width:80%;margin-left: 15%;color: gray;">
            <h4 ><img src="../assets/n6.png">&nbsp;常见问题</h4>
            <div class="fp">
              <div style="width:40%">Q1&nbsp;商标申报后多久发受理通知书?</div><a>获取解答</a>
              <div style="width:40%">Q2&nbsp;收到补证通知书后多久再次提交?</div><a>获取解答</a>
            </div>
            <div class="fp">
              <div style="width:40%">Q3&nbsp;商标被驳回怎么办?</div><a>获取解答</a>
              <div style="width:40%">Q2&nbsp;申请和比尔在同一天怎么办?</div><a>获取解答</a>
            </div>
          </div>
        </div>
        <div style="margin-top: 30px;">
          <el-button><i class="el-icon-back"></i>更多问题<i class="el-icon-right"></i></el-button>
        </div>
    </el-row>
    <el-row>
      <div :style="bgimg2" style="height: 683px;color: white;">
        <div style="height: 5%;padding-top: 5%;">
          <h1>注册商标的重要性</h1><span>收到客户完整且正确的纸件申报材料次日起1个工作日内进行网上商标申报</span>
        </div>
        <div style="display: flex;width: 60%;margin: 0 auto;height: 50%;align-items: center;">
          <div style="width: 20%;color: white;" v-for="(item,index) in 5">
            <img src="../assets/s11.png"><div>消费者"认牌购物"选择产品的强力依据</div>
          </div>
        </div>
        <div class="tk">
          <div>
            <h1><img src="../assets/a9.png">&nbsp;商标注册所需材料</h1>
            <div style="display: flex;justify-content: center;">
              <img src="../assets/a10.png">
              <ul>
                <li>申请书(创标联合准备)</li><li>委托书(创标联合准备)</li><li>清晰商标图样</li><li>身份证复印件</li><li>个体工商户营业执照</li>
              </ul>
            </div>
          </div>
          <div>
            <h1><img src="../assets/a9.png">&nbsp;商标注册所需材料</h1>
            <div style="display: flex;justify-content: center;">
              <img src="../assets/a11.png">
              <ul>
                <li>申请书(创标联合准备)</li><li>委托书(创标联合准备)</li><li>清晰商标图样</li><li>营业执照副本复印件</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </el-row>
    <el-row>
      <el-col :span="24">
       <div style="margin-top: 10%;text-align: center;">
         <h1 style="color: royalblue;">成功案例</h1><span style="color: grey;">成立以来越来越多的客户选择了我们</span>
       </div>
      </el-col>
    </el-row>
    <el-row style="width: 60%;margin: 5% auto;">
      <table cellspacing="20px">
           <tr>
             <td class="tdbg"><img src="../assets/pn1.png"/></td>
             <td class="tdbg"><img src="../assets/pn2.png"/></td>
             <td class="tdbg"><img src="../assets/pn3.png"/></td>
             <td class="tdbg"><img src="../assets/pn4.png"/></td>
             <td class="tdbg"><img src="../assets/pn5.png"/></td>
             <td class="tdbg"><img src="../assets/pn6.png"/></td>
           </tr>
           <tr>
             <td class="tdbg"><img src="../assets/pn7.png"/></td>
             <td class="tdbg"><img src="../assets/pn8.png"/></td>
             <td class="tdbg"><img src="../assets/pn9.png"/></td>
             <td class="tdbg"><img src="../assets/pn10.png"/></td>
             <td class="tdbg"><img src="../assets/pn11.png"/></td>
             <td class="tdbg"><img src="../assets/pn12.png"/></td>
           </tr>
      </table>
      <table cellspacing="20px">
        <tr>
             <td class="tdbg">
               <div class="tdwh">
                 <img src="../assets/pv1.png"/>
                 <h5>商标注册需要准备哪些资料？</h5>
                 <el-button round style="color: #6495ED;border-color: #6495ED;">免费咨询</el-button>
               </div>
             </td>
             <td class="tdbg">
               <div class="tdwh">
                 <img src="../assets/pv2.png"/>
                 <h5>注册国际商标有哪些竞争优势？</h5>
                 <el-button round style="color: coral;border-color: coral;">免费咨询</el-button>
               </div>
             </td>
             <td class="tdbg">
               <div class="tdwh">
                 <img src="../assets/pv3.png"/>
                 <h5>商标注册的四大品牌价值有哪些？</h5>
                 <el-button round style="color:green ;border-color: green;">免费咨询</el-button>
               </div>
             </td>
           </tr>
      </table>
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
        bgimg2:{
          backgroundImage:"url("+require("@/assets/a8.png")+")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1920px 683px"
        },

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
  .rq{display: flex;justify-content: center;width: 50%;background-color: white;margin: 0 auto;padding: 10px;}
  .btk{width: 33%;background-color: orangered;color: white;display: flex;height: 60px;
      align-items: center;justify-content: space-around;border: 1px solid white;}
  .rq ul li{list-style: none;line-height: 26px; border-bottom: 1px dashed gray;text-align: left;color: gray;}
  .rq ul li:hover{color: coral;}
  .rq ul h3{text-align: left;}
  .fwinfo{background-color: white;width: 50%;margin: 0 auto;padding: 10px;text-align: left;}
  .fp{display: flex;justify-content: space-around;}
  .fp a{color: coral;text-decoration: underline;}
  .tdbg{background-color: #DCDCDC; width: 10%;}
  .tdwh{height: 20%;padding: 5px 0px; }
  .tk{width: 60%;display: flex;margin: 0 auto;justify-content: space-between;text-align:left;color: gray;
  background-color: white;border-radius: 15px;padding: 20px;box-shadow: 5px 5px 5px darkgray;}
  .tk ul li{line-height: 30px;border-bottom: 1px dashed gray;}
</style>
