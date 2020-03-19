<template>
  <div class="hello">
   <!-- 官网首页 -->
    <el-container style="display: block;">
      <NTop></NTop>
      <el-main style="width: 100%;">
        <el-row>
          <el-col :span="8" offset="8">
            <h1>为什么要选中创标联合</h1>
            <hr class="linesty" />
            <div>5分钟快速响应，办理进度及时通知，专业知识产权交易咨询服务</div>
          </el-col>
        </el-row>
        <el-row class="toprow">
          <el-col style="width: 15%;" v-for="(item,index) in imgArr" :key="index">
            <div>
              <div class="imgbg"><img :src="item.url"></div>
              <div class="imgfont">{{item.title}}</div>
              <span>{{item.info}}</span>
            </div>
          </el-col>
        </el-row>
        <el-row class="rthrsty">
          <div style="width: 65%;text-align: left;margin:50px 0px 0px 15%">
            <h2><span class="textline">创标</span>联合</h2>
            <div>除了把商标代理<br>做到专业我们什么都没做</div>
            <el-button class="zx">立即咨询</el-button>
          </div>
          <div style="width: 20%;"><img src="../assets/pa.png"></div>
          <div class="titleText">
            计划的顾客身份卡是否开始分开始放假快乐撒发生法是大家发生了卡手机设计规划萨的
            快乐就发生法律；多发点欧飒的合法康师傅。司机大哥hi飞洒发货阿卡帝文化凯撒的办法卡萨，
            阿斯达克和噶覅问候日瓦好人刷卡机的饭卡上覅的后果发生高发的撒很过分<span style="color: red;">
            的空间十分快速发货快速上看到就疯狂帅哥老师上来的结果了手机刚看到历史的看好了水果价格，点击可改善方法和考试kj
            看到和规范考试is度胡覅素颜日俄我立刻就司法快结婚的疯狂就会有轻微了；接口；是滴
            </span>
          </div>
        </el-row>
        <el-row style="margin-top: 50px;">
          <el-col :span="8" offset="8">
            <h1>我们的业务</h1>
            <hr class="linesty" />
            <div>我们已成功解决过上万个商标疑难问题，每天仍在持续...</div>
          </el-col>
        </el-row>
        <el-row>
          <div style="width: 40%;display: flex;justify-content: space-between;align-items: center;margin: 0 auto;">
            <el-button class="butlen" v-for="(item,index) in btnTaps" :key="index" @click="checkPone(index)">{{item}}</el-button>
          </div>
          <div class="btnpanesty" v-for="(c,index) in 4" :key="index" v-show="selectbtn===index">
            <div style="width: 40%;"><img src="../assets/ps.png"></div>
            <div style="width: 20%;text-align: left;line-height: 30px;margin-top: 5%;">
              <h1>国内商标</h1>
              <div>
                商标注册，知识产权重要部分。北京创标为您提供免费商标持续服务，
                资深商标顾问一对一服务。行业专家维商标注册提供分先评估与应对策略，助理商标注册成功
              </div>
              <el-button class="move">了解更多&nbsp;&nbsp;<i class="el-icon-arrow-right"></i></el-button>
            </div>
          </div>
        </el-row>
        <el-row>
          <div class="twsty">
               <div v-for="(item,index) in cardImg" :key="index" class="cardsty">
                 <img :src="item.url" >
                 <div style="padding: 0px 10px;height: 260px;">
                   <div style="display: flex;justify-content: space-between;align-items: center;">
                     <h3>{{item.title}}</h3>
                     <span style="color: coral">更多></span>
                   </div>
                   <div style="text-align: left;">
                     <div v-for="(sub,index) in item.context"><i class="el-icon-arrow-right"></i>{{sub.label}}</div>
                   </div>
                 </div>
               </div>
           </div>
        </el-row>

      </el-main>
      <NFoot></NFoot>
    </el-container>
  </div>


</template>

<script>
  import NTop from "@/components/nav-top.vue"
  import NFoot from "@/components/nav-footer.vue";
  export default {
    name: 'HelloWorld',
    components: {
      NTop,
    	NFoot
    },
    data () {
      return {
        imgArr:[
          {url:require('@/assets/01.png'),title:'成功率高',info:'风险评估，提高注册成功率'},
          {url:require('@/assets/02.png'),title:'成功率高',info:'风险评估，提高注册成功率'},
          {url:require('@/assets/03.png'),title:'成功率高',info:'风险评估，提高注册成功率'},
          {url:require('@/assets/04.png'),title:'成功率高',info:'风险评估，提高注册成功率'},
          {url:require('@/assets/05.png'),title:'成功率高',info:'风险评估，提高注册成功率'},
        ],
        btnTaps:["国内商标","国际商标","专利服务","版权服务"],
        btnPones:[],
        cardImg:[
          {
            url:require('@/assets/pc1.png'),
            title:'企业动态',
            context:[
              {label:'商标注册需要什么申请材料?'},
              {label:'商标注册需要什么申请材料?'},
              {label:'商标注册需要什么申请材料?'}
            ]
          },
          {
            url:require('@/assets/pc2.png'),
            title:'企业动态',
            context:[
              {label:'商标注册需要什么申请材料?'},
              {label:'商标注册需要什么申请材料?'},
              {label:'商标注册需要什么申请材料?'}
            ]
          },
          {
            url:require('@/assets/pc3.png'),
            title:'企业动态',
            context:[
              {label:'商标注册需要什么申请材料?'},
              {label:'商标注册需要什么申请材料?'},
              {label:'商标注册需要什么申请材料?'}
            ]
          },
        ],
        selectbtn:0
      }
    },
    methods:{
      checkPone(p){
        this.selectbtn=p;
      }
    }
  }
</script>

<style scoped>
  .linesty{width: 50px;border: 1px solid orangered;}
.imgbg{width: 100px;height: 100px;background-color: gainsboro;border-radius: 50%;display: flex;
align-items: center;justify-content: center;margin: 0px auto;margin-bottom: 10px;}
.imgfont{font-size: 16px;font-weight: bolder;padding-top: 30px;}
.toprow{display: flex;justify-content: center;align-items: center;height: 250px;}
.textline{border-bottom: 2px solid #FF4500;padding-bottom: 5px;}
.rthrsty{text-align: right;display: flex;justify-content: flex-end;background-color: gainsboro;;}
.zx{width: 20%;border-radius: 25px;background-color: #FF4500;color: white;margin-top: 20px;}
.titleText{padding: 5px;width: 30%;height: 25%;border-radius: 5px;position: relative;top:9.375rem;left:-35%;background-color: white;}
.butlen{width: 20%;margin:3% 0;}
.butlen:hover{background-color: #FF4500;color: white;border-color: #FF4500;}
.btnpanesty{background-color: gainsboro;height: 531px;display: flex;justify-content: center;}
.move{width: 50%;margin-top: 15%;border:1px solid #FF4500;border-radius: 15px;color: #FF4500;}
.move:hover{background-color: #FF4500;color: white;}
.twsty{display: flex;justify-content:center;align-items: center;height: 500px;}
.cardsty{margin: 0px 10px;background-color: gainsboro;border-radius: 10px;}

</style>
