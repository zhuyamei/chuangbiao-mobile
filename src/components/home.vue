<template>
  <div class="hello">
   <!-- 官网首页 -->
    <el-container>
      <el-header style="height: 200px;">Header</el-header>
      <el-main  style="height: 200px;">Main</el-main>
      <NFoot></NFoot>
    </el-container>
  </div>
</template>

<script>
  // import NFoot from "@/components/nav-top/nav-top.vue"
  import NFoot from"./nav-footer.vue";
  export default {
    name: 'HelloWorld',
    components: {
    	NFoot
    },
    data () {
      return {

      }
    }
  }
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
