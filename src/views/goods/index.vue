<template>
  <div>
    <w-search @add="$router.push('/goods/edit/0')" @search="getList(1)">
      <div class="w-search-item">
        <p>套餐名称</p>
        <el-input v-model="name" placeholder="请输入套餐名称"></el-input>
      </div>
    </w-search>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="套餐名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="套餐名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="邮箱">
      </el-table-column>
      <el-table-column
        prop="address"
        label="人数"
        width="100">
      </el-table-column>
      <el-table-column
        prop="address"
        label="是否显示"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
        <template slot-scope="scope">
          <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <w-pagination :params="pagination" />
  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        name: '',
        date: '',
        tableData: [1,2,3,4,5,6,7,7,8,8,8,2],
        pagination: {
          total: 0,
          page: 0,
          pageSize: 10
        }
      }
    },
    methods: {
      getList () {

      }
    }
  }
</script>

<style scoped>

</style>
