 const Counter = {
	counting: false,
	disabled: false,
	btnText: '获取验证码',
	timeSlot: 10,
	countDown: function(obj) {

		if (this.disabled) {
			return;
		}

		let timer, s = this.timeSlot

		this.disabled = true
		obj.innerHTML = s + '秒后重发'
		this.counting = true

		timer = setInterval(() => {

			if (this.counting) {
				if (s > 0) {
					obj.innerHTML = (--s) + '秒后重发';
				} else {

					clearInterval(timer)
					obj.innerHTML = '重新获取'
					this.counting = false
					this.disabled = false

				}
			} else {
				clearInterval(timer)
				obj.innerHTML = this.defaultText
				this.disabled = false
			}

		}, 1000);
	}
}
