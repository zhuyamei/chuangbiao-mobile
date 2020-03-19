<template>
  <el-header class="top" style="height:800px;">
    <el-row class="nav">
      <el-col :sm="{span:6,offset:3}" :lg="{span:6,offset:3}">
        <div class="toplog"><img src="../assets/logo.png"/></div>
      </el-col>
      <el-col :span="8">
        <div class="nav-link">
          <el-link :underline="false" href="/">首页</el-link>
          <el-link :underline="false" href="/gnsb">国内商标</el-link>
          <el-link :underline="false" href="/gjsb">国际商标</el-link>
          <el-link :underline="false" href="/zlfw">专利服务</el-link>
          <el-link :underline="false" href="/bqfw">版权服务</el-link>
          <el-link :underline="false" href="/gy">关于我们</el-link>
        </div>
      </el-col>
      <el-col :sm="{span:6,offset:3}" :lg="{span:6,offset:3}">
        <div class="toplog"><img src="../assets/热线电话.png"/><h3 style="line-height: 30px;text-align: left;margin-left: 10px;">全国统一热线<br>400-999-6915</h3></div>
      </el-col>
    </el-row>
    <el-row>
      <el-carousel indicator-position="none" style="color: white;">
          <el-carousel-item v-for="(item,index) in carText" :key="index">
           <h3>{{ item.title }}</h3>
           <div>{{item.context}}</div>
          </el-carousel-item>
      </el-carousel>
    </el-row>
    <el-row>
      <el-col :span="8" offset="8">
        <div class="bgk"></div>
        <div class="contk">
          <div><span >免费查询——</span><span class="smallfont">先查询后登记，有效成功率更高</span></div>
          <div >
            <el-input placeholder="请输入内容" v-model="input2" prefix-icon="el-icon-search">
              <template slot="append"><el-button style="background-color: orangered;color: white;border: #FF4500;">免费查询</el-button></template>
            </el-input>
          </div>
          <div class="smallfont"><span>累计查询2613383次</span><span>今日已有1379人获取查询结果</span></div>
        </div>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>

export default {

  data () {
    return{
      // navs:[
      //   {label:'首页',url:'#'},
      //   {label:'国内商标',url:'#'},
      //   {label:'国际商标',url:'#'},
      //   {label:'专利服务',url:'#'},
      //   {label:'版权服务',url:'#'},
      //   {label:'版权服务',url:'#'}
      // ],
      carText:[
        {title:'商标免费查询',context:'互联网+知识产权一站式服务平台'},
        {title:'bbbbbb',context:'111111111-1111111'},
        {title:'cccccc',context:'2222222222-222222'}
      ]

    }
  },
  methods:{
    // handleScoll(){
    //   let scollTop=window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop;
    //   let offsetTop=document.querySelector('.nav').offsetTop;
    //   this.sear
    // }
  },
  // mounted(){
  //   window.addEventListener('scroll',this.handleScoll)
  // }

}
</script>

<style scoped>
.top{width: 100%;background-image: url(../assets/banner.jpg);}
.smallfont{font-size: 16px;}
.toplog{display: flex;align-items: center;color: white;}
.nav{display: flex;align-items: center;height: 150px;}
.nav-link{display: flex;justify-content: space-around;}
.nav-link .el-link{width: 200px;color: white;font-size: 18px;text-align: center;}
.bgk{width: 600px;height:250px;background-color: dimgray;border-radius: 10px;opacity: 0.4;}
.contk{position: relative;top: -250px;width: 500px;text-align: left;margin: 8% auto;
color: white;letter-spacing: 2px;line-height: 50px;}
</style>
