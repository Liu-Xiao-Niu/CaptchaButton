<template>
	<div>
		<button :disabled="counting" @click="sendCode">
			{{btnText}}
		</button>
	</div>
</template>

<script>
	import axios from 'axios'
	
	var timer;
	
	export default {
		props: {
			defaultText: {
				type: String,
				default: '获取验证码'
			},
			timeSlot: { //倒计时时长
				type: Number,
				default: 60
			},
			account: { //发送验证码的账号
				type: String,
				default: ''
			},
			accountEmptyTips:{
				type: String,
				default: '请输入手机号'
			}
		},
		data() {
			return {
				counting: false,
				btnText: ''
			};
		},
		methods: {
			sendCode:function(){
				
				if(this.account == ""){
					
					alert(this.accountEmptyTips)
					
				}else if(!this.counting){
					
					let url = '',param = {}
					
					axios.post(url,param).then((res) => { //发送验证码

						this.countDown() //发送成功开始倒计时
						
					})
				}
			},
			countDown: function() {

				if (this.counting) {
					return;
				}

				let s = this.timeSlot,sAfterTxt = '秒后重发'

			
				this.btnText = s + sAfterTxt
				this.counting = true

				timer = setInterval(() => {

					if (this.counting) {
						if (s > 0) {
							this.btnText = (--s) + sAfterTxt
						} else {
							this.counting = false
							this.stopTimer('重新获取')
						}
					} else { //手动停止倒计时
						this.stopTimer(this.defaultText)
					}

				}, 1000);
			},
			stopTimer: function(txt) {
				this.btnText = txt
				clearInterval(timer)
				
			}
		},
		created() {
			this.btnText = this.defaultText
		},
		destroyed() {
			this.counting = false
		}
	}
</script>

<style>
</style>
