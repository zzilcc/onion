<template>
  <div id="js-manage">
     <section class="onion-index">
      <!-- 头部信息 -->
      <section class="onion-index-header">
        <div class="onion-index-header-wrap">
          <div class="onion-header-left">
            <span>洋葱美美哒</span>
          </div>
          <div class="onion-header-right">
            <span v-text="'欢迎你,'+user.userName + '!' "></span>
            <i class="el-icon-user-solid onion-user-icon" title="个人信息" @click="userInfoClick"></i>
          </div>
        </div>
      </section>
      <!-- 中间内容 -->
      <section  class="onion-index-mian">
        <!-- 左侧导航 -->
        <section  class="onion-index-mian-left">
          <el-row class="tac">
            <el-col :span="4">   
              <el-menu
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                >
                <router-link to="/home">
                  <el-menu-item index="3">
                    <i class="el-icon-document"></i>
                    <span slot="title">首页</span>
                  </el-menu-item>
                </router-link>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-s-tools"></i>
                    <span>商品</span>
                  </template>
                  <el-menu-item-group>
                    <router-link to="goodsList">
                      <el-menu-item index="1-1">商品列表</el-menu-item>
                    </router-link>
                    <router-link to="addGoods">
                      <el-menu-item index="1-2">添加商品</el-menu-item>
                    </router-link>
                    <router-link to="goodsCategories">
                      <el-menu-item index="1-3">商品分类</el-menu-item>
                    </router-link>
                    <router-link to="addGoodsCategories">
                      <el-menu-item index="1-4">添加商品分类</el-menu-item>
                    </router-link>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-user-solid"></i>
                    <span>订单</span>
                  </template>
                </el-submenu>      
              </el-menu>
            </el-col>
          </el-row>
        </section>
        <section  class="onion-index-mian-content">
          <!-- <button @click="toggleClick" v-text="isCollapse? '展开': '收缩'"></button> -->
          <el-breadcrumb class="breadcrumb-container onion-breadcrumb" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="item in levelList" :key="item.path" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
            </el-breadcrumb>
          <router-view></router-view>
        </section>
      </section>
    </section>
  </div>
</template>
<script>
export default { 
  data () {
    return {
      leftNav: [
        {
          name: '首页',
          index: '1',
          children: []
        },
        {
          name: '商品',
          index: '2',
          children: [
            {
              name: '商品列表',
              index: '1-1',
              link: '/goods/goodsList',
              children: []
            },
            {
              name: '添加商品',
              index: '1-2',
              link: '/goods/addGoods',
              children: []
            },
            {
              name: '商品分类',
              index: '1-3',
              children: []
            }
          ]
        },
        {
          name: '订单',
          index: '3',
          children: []
        }
      ],
      isCollapse: false,
      user: {
        userName: '黄紫茜'
      },
      levelList: []
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created(){
    this.getBreadcrumb()
  },
  methods: {
    /**
     * 获取导航路由
     */
    getBreadcrumb() {
      this.levelList = this.$route.matched.filter(item => item.name)
    },
    handleOpen () {
      this.isCollapse = false
    },
    handleClose () {
      this.isCollapse = true
    },
    toggleClick () {
      this.isCollapse = !this.isCollapse
    },
    /**
     * 个人信息页面点击
     */
    userInfoClick () {
      this.$router.push({ path:'/about'})
    }
  }
}
</script>
<style lang="less">
#js-manage {
  height: 100%;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  position: relative;
}
.onion-index {
  height: 100%;
  width: 100%;
  position: relative;
  padding-top: 60px;
  .onion-index-header {
    position: absolute;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    background-color:#ff935c;
    .onion-index-header-wrap {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      line-height: 60px;
      .onion-header-left {
        width: 30%;
        height: 100%;
        text-align: left;
      }
      .onion-header-left span {
        font-size: 20px;
      }
      .onion-header-right {
        width: 60%;
        height: 100%;
        text-align: right;
      }
      .onion-user-icon {
        cursor: pointer;
      }
    }
  }
  .onion-index-mian {
    height: 100%;
    width: 100%;
    position: relative;
    .onion-index-mian-left {
      height: 100%;
      width: 180px;
      position: absolute;
      top: 0;
      left: 0;
      text-align: left;
    }
    .onion-index-mian-content {
      height: 100%;
      width: 100%;
      padding: 20px 20px 20px 200px;
      overflow: auto;
    }

  }
}
.onion-login-section {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.onion-breadcrumb {
  padding-bottom: 20px;
}
</style>
