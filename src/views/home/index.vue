<template>
  <div>
    <div class="header">
      <div class="collapse-btn">
        <i class="el-icon-s-unfold"></i>
      </div>
      <div class="logo">后台管理系统</div>
      <div class="header-right">
        <div class="header-user-con">
          <div class="user-avator">
            <img src="@/assets/images/user-avator.jpg" alt="">
          </div>

          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link user-name">
              {{ $store.state.username }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        
      </div>
    </div>
  </div>
</template>
 
<script>
//第二种 获取state数据   <span>{{username}}</span>
// import { mapState } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      
    };
  },
  //
  // computed:{
  //     ...mapState({
  //         username:state => state.username   //使用ES6的箭头函数来给count赋值
  //     })
  // }
  created () {
    // 在页面加载时读取sessionStorage
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }
    // 在页面刷新时将store保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  },
  methods: {
    handleCommand(command) {
      this.$message('click on item ' + command);
      if(command == 'a'){
        localStorage.setItem('Authorization','');
         this.$router.push('/');
      }
    }
  }
};
</script>