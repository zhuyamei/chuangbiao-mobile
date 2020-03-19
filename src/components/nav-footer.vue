<template>
  <el-footer class="foot" style="width: 100%;height:638px;">
    <div class="lsblock">
      <div style="text-align: left;" v-for="(i,index) in ftlist" :key="index">
        <h1>{{i.title}}</h1>
        <div style="line-height: 30px;">
          <div v-for="(l,ind) in i.context" :key="ind"><el-link href="#" target="_blank">{{l.label}}</el-link></div>
        </div>
      </div>
    </div>
    <el-divider></el-divider>
    <div style="display: flex;justify-content: space-around;width: 80%;margin: 0 auto;line-height: 60px;">
      <span class="ftfont">京ICP备19013062号-1</span>
      <span class="ftfont"><img src="../assets/d2.png">&nbsp;国际只是产权局备案代理机构</span>
      <span class="ftfont"><img src="../assets/d3.png">&nbsp;备案号:苏ICP备18065457号-2</span>
      <span class="ftfont">版权所有：北京创标联合知识产权代理有限公司</span>
    </div>

    <div class="footform">
      <h1 style="line-height: 35px;">提交您的需求<div style="font-size: 14px;">我们直接联系您</div></h1>
      <el-form ref="form" :model="form" style="width: 80%;margin: 0 auto;">
         <el-form-item>
            <el-input type="textarea" placeholder="输入你想查询的内容,例如:我想注册创标联合商标"></el-input>
         </el-form-item>
         <el-form-item>
           <el-input placeholder="请输入你的手机号" >
               <i slot="prefix" class="el-icon-mobile-phone"></i>
             </el-input>
         </el-form-item>
         <el-form-item>
           <div class="anq"><img src="../assets/sd.png" class="sd"/>信息安全防护，请放心填写</div>
         </el-form-item>
         <el-form-item>
             <el-button class="subbut">提交</el-button>
         </el-form-item>
      </el-form>
    </div>
  </el-footer>
</template>

<script>
export default {
  data () {
    return{
        ftlist:[
          {
            title:'商标服务',
            context:[
              {label:'商标注册',linkUrl:'#'},
              {label:'商标查询',linkUrl:'#'},
              {label:'国际商标服务',linkUrl:'#'},
              {label:'商标变更',linkUrl:'#'},
              {label:'驳回复审',linkUrl:'#'}
            ],
          },
          {
            title:'专利服务',
            context:[
              {label:'专利申请',linkUrl:'#'},
              {label:'专利变更',linkUrl:'#'},
              {label:'专利维权',linkUrl:'#'}
            ],
          },
          {
            title:'版权服务',
            context:[
              {label:'版权登记',linkUrl:'#'},
              {label:'版权变更',linkUrl:'#'},
              {label:'版权转让',linkUrl:'#'}
            ],
          }
        ]
    }
  }
}
</script>

<style scoped>
.foot{
  /* width: 100%; */
  background-image:url(../assets/d5.png);
  color: white;padding-top: 2%;
  position: absolute;
}
.lsblock{display: flex;justify-content: space-around;width: 40%;margin: 0 0 12% 50%;}
.foot .el-link{color: white;font-size: 18px;line-height: 40px;}

.ftfont{display: flex;align-items: center;}

.footform{
  width: 20%;height:65%;
  background-color: white;
  position: absolute;
  bottom: 40%;
  left: 20%;
  border-top: 5px solid coral;
  color: gray;
}
</style>
