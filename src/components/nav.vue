<template>
  <el-row style="width: 100%;">
    <div class="mynav">
       <div class="logo"><img src="../assets/logo2.png"/></div>
       <div class="Nsnag" style="margin: 0 5%;">
         <el-link :underline="false" href="/">首页</el-link>
         <el-link :underline="false" href="/gnsb">国内商标</el-link>
         <el-link :underline="false" href="/gjsb">国际商标</el-link>
         <el-link :underline="false" href="/zlfw">专利服务</el-link>
         <el-link :underline="false" href="/bqfw">版权服务</el-link>
         <el-link :underline="false" href="/gy">关于我们&nbsp;</el-link>
       </div>
       <div class="hotTel"><img src="../assets/dh.jpg"/><h3>全国统一热线<br>400-999-6915</h3></div>
    </div>
  </el-row>
</template>

<script>

</script>

<style scoped="">
  .mynav{display: flex;justify-content: center;align-items: center;}
.Nsnag .el-link{width: 100px;font-size: 18px;}
.Nsnag .el-link:hover{color:coral}
.hotTel{display: flex;align-items: center;}
.hotTel h3{line-height: 28px;text-align: left;margin-left: 10px;}
</style>
