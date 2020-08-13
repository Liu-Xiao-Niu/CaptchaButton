<template>
  <div id="app">
	  <div class="box">
		<div>
		  <p>
			  <label>手机号：</label>
			  <input v-model="account" placeholder="请输入手机号" />
		  </p>
		  <p style="display: flex;">
			  <label>验证码：</label>
			  <input placeholder="请输入验证码" style="margin-right: 20px;"/>
			  
			  <CaptchaButton 
				ref="captcha"
				:account = "account"
				defaultText = "获取手机验证码"
				:timeSlot = "10"
			  />
			  
		  </p>
		  
		  <p style="text-align: center;">
			  <button>登录</button> <button @click="cancleCounter">停止倒计时</button>
		  </p>
		</div>
		  
	  </div>
	  
  </div>
</template>

<script>
import CaptchaButton from './components/CaptchaButton.vue'

export default {
  name: 'App',
  components: {
    CaptchaButton
  },
  data(){
	return{
		account:''
	}
  },
  methods:{
	  cancleCounter(){
		  this.$refs.captcha.counting = false
	  }
  }
}
</script>

<style>
	.box{
		display: flex;
		justify-content: center;	
	}
</style>
