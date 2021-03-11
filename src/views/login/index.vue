<template>
  <div class='loginBox'>
    <el-form ref="loginForm" :model="loginForm" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="loginForm.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="loginForm.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="login('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
 
<script>
import { mapMutations } from 'vuex';
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      userToken:'',
      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        username: [
          {required: true, message: '账号不可为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不可为空', trigger: 'blur'}
        ]
      },
    }
  },
  methods: {
    ...mapMutations("user",['changeLogin']),
    login (formName) {
        let _this = this;
        // if(_this.loginForm.username === '' || _this.loginForm.password === ''){
        //     alert('账号和密码不能为空');
        // }else{
        //   _this.userToken = 'Bearer 123';
        //   // 将用户token保存到vuex中
        //   _this.changeLogin({ Authorization: _this.userToken });
        //   alert('登陆成功');
        //   _this.$router.push('/home');
          
        // }
        // 为表单绑定验证功能
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
            _this.userToken = 'Bearer '+_this.loginForm.username;
            // 将用户token保存到vuex中
            _this.changeLogin({ Authorization: _this.userToken,username: _this.loginForm.username});
            alert('登陆成功');
            _this.$router.push('/home');
          } else {
            return false;
          }
        });
    }
  }
};
</script>
<style scoped>
  .loginBox{
    width:100%;
    height:100%;
    background:url('./../../assets/images/loginBg.jpg') top left no-repeat ;
    background-position: 0 0;
    background-size: 100% 100%;
    position: fixed;
  }
  .login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
  }

  .login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;
  }
</style>