<template>
  <div class="login-container">
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="loginForm"
      class="login-form"
      ref="loginForm"
      :rules="rules"
    >
      <el-form-item label prop="username">
        <el-input
          type="text"
          v-model="loginForm.username"
          placeholder="username"
          prefix-icon="el-icon-user-solid"
        ></el-input>
      </el-form-item>
      <el-form-item label prop="password">
        <el-input
          :type="passwordType"
          v-model="loginForm.password"
          placeholder="password"
          prefix-icon="el-icon-lock"
        >
          <template slot="suffix">
            <svg class="icon" aria-hidden="true" @click="showPwd()">
              <use :xlink:href="passwordType == 'password' ? '#icon-eye1' : '#icon-eye'"/>
            </svg>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin" :loading="loading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate"

export default {
  name: "Login",
  components: {},
  data() {
    const validateUsername = (rule, value, callback) => {
      console.log("rule", rule);
      console.log("value", value);
      if (!value) {
        callback(new Error("账号不能为空"));
      }
      if (!validUsername(value)) {
        callback(new Error("请输入正确的账号"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码长度不能少于6位"));
      } else {
        callback();
      }
    };

    return {
      labelPosition: "right",
      loginForm: {
        username: "",
        password: ""
      },
      passwordType: "password",
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }]
      },
      loading: false
    };
  },
  methods: {
    handleLogin() {
      // this.$refs.loginForm.validate(valid => {
      //   console.log("valid", valid);
      //   if(valid) {
      //     this.loading = true
      //   } 
      // });
      console.log(222)
      this.$store.dispatch('LoginByUserName', this.loginForm).then((parr) => {
        console.log('parr', parr )
        this.$router.push('/')
      })
    },

    showPwd () {this.passwordType = this.passwordType === "password" ? "text" : "password"
    }
  }
};
</script>

<style lang="less" scoped>
.login-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login-form {
  width: 520px;
  .el-input,
  .el-button {
    width: 85%;
  }
}
</style>