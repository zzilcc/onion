<template>
  <div>
    <el-card class="box-card">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-form-inline">
        <el-form-item label="商品名称" prop="name">
          <el-input v-model="ruleForm.goodsName" placeholder="商品名称"></el-input>
        </el-form-item>
        <el-form-item label="父级">
          <el-input v-model="ruleForm.parentId" placeholder="父级"></el-input>
        </el-form-item>
        <el-form-item label="关键字">
          <el-input v-model="ruleForm.keyword" placeholder="关键字"></el-input>
        </el-form-item>
        <el-form-item label="商品描述">
          <el-input v-model="ruleForm.goodsDescription" placeholder="商品描述"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default { 
  data () {
    return {
      ruleForm: {
        "id": 3,
        "goodsName": "祛痘", // 名称
        "parentId": 1, // 父
        "sort": 3, // 排序方式
        "isshow": 0, // 是否显示
        "icon": "祛痘", // icon
        "keyword": null, // 关键字
        "goodsDescription": "祛痘描述", // 描述
        "createUid": 1, // id
        "createTime": "2019-09-09T06:26:29.000+0000", // 创建时间
        "updateTime": "2019-09-09T06:26:29.000+0000", // 更新时间
        "status": 0 // 状态
      },
      rules: {
          goodsName: [
            { required: true, message: '请输入商品名称', trigger: 'blur' },
          ],
        }
    }
  },
  methods: {
    /**
     *  提交添加商品的表单
     */
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
       /**
       *  重置添加商品的表单
       */
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }
}
</script>
<style lang='less'></style>