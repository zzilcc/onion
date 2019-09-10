<template>
  <div class="onion-login">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default { 
  data () {
    return {
      form: {
          name: '',
          password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      debugger
      if (this.form.name === 'admin' && this.form.password === '123'){
        this.$store.commit('setLoginStatus', true)
        this.$router.push({path:'/home'})
      } 
    }
  }
}
</script>
<style lang='less'>
.onion-login {
  height: 200px;
  width: 400px;
}
</style>
