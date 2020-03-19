<template>
  <el-container style="display: block;">
    <Nav></Nav>
    <el-row>
      <div :style="bgimg" style="height: 683px;color: white;">
      </div>
    </el-row>
    <el-row>
      <div style="width: 50%;margin: 0 auto;">
        <h1>北京创标联合知识产权代理有限公司</h1>
        <div style="color: gray;">商标局直属代理机构<hr style="width: 40px;border:2px solid coral">
        北京创标联合知识产权代理有限公司子成立以来，利用旗下法律平台多年积聚的能量加上与地方科技局支持所设成立创标联合
        知识产权运营中心，持续深度耕耘国内中小企业服务市场，为中国产业转型升级特备是千万小企业发展，缔造跟家美好生活贡献一份力量
        </div>
      </div>
      <el-row style="width: 50%;margin: 2% auto;text-align: left;">
        <div style="height: 345px;">
          <img src="../assets/aa1.png">
          <div class="fk">
            <h3>我们凭借优质的服务赢得了国内外客户的<span>信赖和赞誉</span>,综合实力文具国内同行前列</h3>
            <span>创标联合先手子啊北京，南京香港等十几个城市设立了知识产权代理公司、专利事务所、
            知识产权管理咨询公司等10余家独立机构，并多次荣获知识产权局颁发的优秀知识产权服务机构称号，
            同事成为国际保护知识产权协会（AIPPI）、国际商标协会（INTA）、欧盟商标协会（ECTA）等多个国际组合
            的会员，与世界上200多个国际和地区的专业机构简历了稳定良好的合作关系，与国家市场部、中国国家专利局
            、中国科技院、国际科技部。国家商务部一直保持这良好的写作关系</span>
          </div>
        </div>
        <div>
          <el-col class="divk"  v-for="(m,index) in infod">
            <div style="display: flex;align-items: center;justify-content: space-between;"><h1>{{m.title}}</h1><img src="../assets/a2.png"></div>
            <div>{{m.context}}</div>
            <div style="margin-top: 10px;"><a href="#">了解更多<i class="el-icon-arrow-right"></i></a></div>
          </el-col>
        </div>
      </el-row>
    </el-row>
    <!-- 企业理念 -->
    <el-row style="height: 521px;color: white;" :style="bgimg2">
      <div style="width:50%;margin: 0 auto;padding:5% 0;">
        <h1>企业理念</h1><h3>"站在客户的角度考虑每一个问题"、"全身心地关注客户的每一个细节"</h3>
        <div>
          在数年的发展始终以这一理念维服务导向，使之成为不断创新发展的文化精髓，并让越来越多的客户通过享受专业化、细节胡的服务而
          感受到代理机构"能站在客户的教的考虑每一个问题"、"全身心地关注客户的每一个细节"的必要性。在专业化的服务基础上，每一位员工
          能先客户细节处着手，实现客户的利益。始终保持创业者的拼搏气度
        </div>
      </div>
      <el-button style="width: 10%;">联系我们</el-button>
    </el-row>
    <el-row style="margin-bottom: 3%;">
     <div style="width: 50%;margin: 2% auto;">
       <h1>企业文化</h1>
       <div style="color: gray;">用服务致敬你的商业梦想<hr style="width: 40px;border:2px solid coral">
       北京创标联合知识产权代理有限公司子成立以来，利用旗下法律平台多年几句的能量加上与地方科技局支持所设成立创标联合
       知识产权运营中心，持续深度耕耘国内中小企业服务市场
       </div>
     </div>
     <div style="width: 50%;margin: 2% auto;display: flex;">
       <div class="list" v-for="(i,index) in cards" :key="index">
          <img src="../assets/q1.png">
          <div><strong>{{i.title}}</strong></div>
          <div v-for="(s,index) in i.list">{{s}}</div>
          <div style="height: 80px;line-height: 80px;"><el-button style="color: coral;border: 1px solid coral;margin-left: 30%;">免费咨询</el-button></div>
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
          backgroundImage:"url("+require("@/assets/banner4.png")+")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1920px 622px"
        },
        bgimg2:{
          backgroundImage:"url("+require("@/assets/row2.png")+")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1920px 521px"
        },
        cards:[
          {
            path:'',
            title:'我们的优势',
            list:['专家行人才，是我们的宝贵财富','科学化管理，是我们向国际化迈进的基石',
                  '独特的企业文化，是我们不断前行的动力结构，保障团队效率','知识产权诉讼专家的称号，是客户；利益的保证'
            ]
          },
          {
            path:'',
            title:'我们的服务',
            list:['企业知识产权发展战略','企业内部知识产权管理',
                  '行业知识产权','专业知识产权顾问','免费咨询'
            ]
          },
          {
            path:'',
            title:'我们的服务',
            list:['国内专利','涉外专利',
                  '商标申请','涉外商标','版权','反假冒事宜'
            ]
          }
        ],
        infod:[
          {title:'我的团队',url:'',context:'创标联合知识产权拥有从业人员500余人，其中商标代理人、专利代理人、律师、科技项目咨询师百余人团队商标服务申请两联系多年居同行业前列。团队成员5年以上经验者进80%，经验丰富，技术工地扎实，精通中国及美、日、韩、欧等各地主要国家知识产权相关法律'},
          {title:'服务范围',url:'',context:'团队专利服务单位设计通信、网络、计算机、电子仪器、机械制造、化工、生物医药等多个技术领域。我们凭借幼稚的服务赢得了国内热、我客户的信赖和在赞誉，综合实力稳居国内同行前列'},
          {title:'我们的愿景',url:'',context:'创标联合知识产权将打造一个集体大数据、人工智能、知识产权基础代理、咨询服务等为一体的企业产业服务生态链，促进企业服务市场商业化运作，两盒构建开放式的企业，服务商业生态圈，实现品牌以及产业链上下游的协同发展。为企业成功保驾护航'},
        ]

      }
    }
  }
</script>

<style scoped>
.list{width: 351px;text-align: left;background-color: #F5F8FD;margin: 0 5px; padding-bottom: 10px;}
.list div{line-height: 24px;color: gray;font-size: 14px;padding-left: 10px;}
.fk{
  width:48%;height: 220px;background-color: aliceblue;border-radius: 15px;
  position: relative;bottom: 75%;left: 50%;font-size: 14px;padding:10px 10px 30px 15px;
}
a{line-height: 28px;color: coral;text-decoration: none;}
a:hover{text-decoration: underline;}
.divk{
  background-color: white; border: 1px solid gainsboro;width: 33.3%;height: 300px;padding: 20px;font-size: 14px;color: gray;
}
</style>
