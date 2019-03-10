<template>
  <div id="registerPage">
    <div class="create-account-box-wrapper">
      <el-card class="create-account-box">
        <div class="form-header-wrapper">
          <!-- TODO: add title -->
          <span class="Create-your-account">Create your account</span>
        </div>
        <div class="form-body-wrapper">
          <!-- TODO: add form and form items inside for all control -->
          <el-form :model="formData" ref="formData" @focusout.native="updateIsFormValiddated">
            <el-form-item>
              <el-col :span="11.5" :rules="rules.firstName" prop="firstName" class="col1">
                <el-input placeholder="First name" v-model="formData.firstName"></el-input>
              </el-col>
              <el-col :span="11.5" :rules="rules.lastName" prop="lastName" class="col2">
                <el-input placeholder="Last name" v-model="formData.lastName"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item :rules="rules.email" prop="email">
              <el-input placeholder="Email" v-model="formData.email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-col :span="11.5" :rules="rules.password" prop="password" class="col1">
                <el-input type="password" placeholder="Password" v-model="formData.password"></el-input>
              </el-col>
              <el-col
                :span="11.5"
                :rules="rules.passwordConfirm"
                prop="passwordConfirm"
                class="col2"
              >
                <el-input type="password" placeholder="Confirm" v-model="formData.passwordConfirm"></el-input>
              </el-col>
            </el-form-item>
            <div
              class="instruction-text-wrapper"
            >Use 8 or more characters with a mix of letters, numbers & symbols</div>
          </el-form>
        </div>
        <div class="form-footer-wrapper">
          <!-- TODO: add buttons and wire up event handler and routing method -->
          <div class="sign-in-instead-btn">
            <router-link to="/login">
              <a>Sign in instead</a>
            </router-link>
          </div>
          <div class="next-button-wrapper">
            <button
              v-bind="updateIsFormValidated"
              @click="register"
              class="text-button-wrapper"
            >Next</button>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script src="./register-page.component.js"></script>
<style src="./register-page.component.css"></style>