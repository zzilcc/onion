<template>
  <div>
    <!-- <el-card class="box-card"> -->
    <section class="onion-goods-add">
      <el-button type="primary" @click="addGoods">添加商品</el-button>
    </section>
    <!-- </el-card> -->
    <section class="onion-table">
      <el-table
      :data="tableData"
      border
      stripe
      style="width: 100%">
      <el-table-column
        prop="goodsName"
        label="商品名称"
        width="180"
        sortable>
      </el-table-column>
      <el-table-column
        prop="keyword"
        label="商品关键字"
        width="180">
      </el-table-column>
      <el-table-column
        prop="goodsDescription"
        label="商品描述">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="商品创建时间"
        sortable>
      </el-table-column>
      <el-table-column
        prop="updateTime"
        label="商品更新时间"
        sortable>
      </el-table-column>
      <el-table-column
        prop="status"
        label="商品状态"
        sortable>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small">
            移除
          </el-button>
          <el-button
            @click.native.prevent="updateRow(scope.$index, tableData)"
            type="text"
            size="small">
            修改
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="50">
    </el-pagination>
    </section>
  </div>
</template>
<script>
export default { 
  data () {
    return {
      tableData: [
        {
          "id": 3,
          "goodsName": "祛痘", // 商品名称
          "parentId": 1, // 父商品
          "sort": 3, // 排序方式
          "isshow": 0, // 是否显示
          "icon": "祛痘", // 商品icon
          "keyword": null, // 关键字
          "goodsDescription": "祛痘描述", // 商品描述
          "createUid": 1, // 商品id
          "createTime": "2019-09-09T06:26:29.000+0000", // 创建时间
          "updateTime": "2019-09-09T06:26:29.000+0000", // 更新时间
          "status": 0 // 商品状态
        },
        {
          "id": 3,
          "goodsName": "祛痘", // 商品名称
          "parentId": 1, // 父商品
          "sort": 3, // 排序方式
          "isshow": 0, // 是否显示
          "icon": "祛痘", // 商品icon
          "keyword": null, // 关键字
          "goodsDescription": "祛痘描述", // 商品描述
          "createUid": 1, // 商品id
          "createTime": "2019-09-09T06:26:29.000+0000", // 创建时间
          "updateTime": "2019-09-09T06:26:29.000+0000", // 更新时间
          "status": 0 // 商品状态
        },
        {
          "id": 3,
          "goodsName": "祛痘", // 商品名称
          "parentId": 1, // 父商品
          "sort": 3, // 排序方式
          "isshow": 0, // 是否显示
          "icon": "祛痘", // 商品icon
          "keyword": null, // 关键字
          "goodsDescription": "祛痘描述", // 商品描述
          "createUid": 1, // 商品id
          "createTime": "2019-09-09T06:26:29.000+0000", // 创建时间
          "updateTime": "2019-09-09T06:26:29.000+0000", // 更新时间
          "status": 0 // 商品状态
        },
        {
          "id": 3,
          "goodsName": "祛痘", // 商品名称
          "parentId": 1, // 父商品
          "sort": 3, // 排序方式
          "isshow": 0, // 是否显示
          "icon": "祛痘", // 商品icon
          "keyword": null, // 关键字
          "goodsDescription": "祛痘描述", // 商品描述
          "createUid": 1, // 商品id
          "createTime": "2019-09-09T06:26:29.000+0000", // 创建时间
          "updateTime": "2019-09-09T06:26:29.000+0000", // 更新时间
          "status": 0 // 商品状态
        },
        {
          "id": 3,
          "goodsName": "祛痘", // 商品名称
          "parentId": 1, // 父商品
          "sort": 3, // 排序方式
          "isshow": 0, // 是否显示
          "icon": "祛痘", // 商品icon
          "keyword": null, // 关键字
          "goodsDescription": "祛痘描述", // 商品描述
          "createUid": 1, // 商品id
          "createTime": "2019-09-09T06:26:29.000+0000", // 创建时间
          "updateTime": "2019-09-09T06:26:29.000+0000", // 更新时间
          "status": 0 // 商品状态
        },
      ]
    }
  },
  methods: {
    /**
     * 添加分类
     */
    addGoods () {
      this.$router.push({path: '/addGoods'})
    }
  }
}
</script>
<style lang='less'>
 @import '../../style/table.less';
 .onion-goods-add {
   padding-bottom: 10px;
   text-align: right;
 }
</style>