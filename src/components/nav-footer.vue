<template>
  <el-footer class="foot" style="height: 638px;">
    <el-row style="padding-bottom: 200px">
      <el-col :md="{span:3 ,offset:12}">
        <div style="text-align: left;">
          <h1>商标服务</h1>
          <div>
            <el-link href="#" target="_blank">商标注册</el-link><br>
            <el-link href="#" target="_blank">商标查询</el-link><br>
            <el-link href="#" target="_blank">国际商标服务</el-link><br>
            <el-link href="#" target="_blank">商标变更</el-link><br>
            <el-link href="#" target="_blank">驳回复审</el-link>
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <div style="text-align: left;">
          <h1>专利服务</h1>
          <div>
            <el-link href="#" target="_blank">专利申请</el-link><br>
            <el-link href="#" target="_blank">专利变更</el-link><br>
            <el-link href="#" target="_blank">专利维权</el-link>
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <div style="text-align: left;">
          <h1>版权服务</h1>
          <div>
            <el-link href="#" target="_blank">版权登记</el-link><br>
            <el-link href="#" target="_blank">版权变更</el-link><br>
            <el-link href="#" target="_blank">版权转让</el-link>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row style="line-height: 60px;">
      <el-col :md="{span:4 ,offset:3}"><div class="ftfont">京ICP备19013062号-1</div></el-col>
      <el-col :md="{span:4 ,offset:0}"><div class="ftfont"><img src="../assets/d2.png" style="margin-right: 5px;">国际只是产权局备案代理机构</div></el-col>
      <el-col :md="{span:4 ,offset:0}"><div class="ftfont"><img src="../assets/d3.png" style="margin-right: 5px;">备案号:苏ICP备18065457号-2</div></el-col>
      <el-col :md="{span:4 ,offset:0}"><div class="ftfont">版权所有：北京创标联合知识产权代理有限公司</div></el-col>
    </el-row>
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
</script>

<style scoped>
.foot{width: 100%;height: 638px;
  background-image:url(../assets/d5.png);
  color: white;padding-top: 2%;
}
.footform{
  width: 20%;height:65%;
  background-color: white;
  position: relative;
  bottom: 120%;
  left: 20%;
  border-top: 5px solid coral;
  color: gray;
}
.foot .el-link{color: white;font-size: 18px;line-height: 40px;}
.anq{color:limegreen;display: flex;align-items: center;min-width: 80%;}
.sd{margin-right: 5px;width: 15px;height: 15px;}
.subbut{width: 70%;background-color: #FF7F50;border-radius: 20px;color: white;letter-spacing: 5px;}
.ftfont{display: flex;align-items: center;justify-content: center;}
</style>
