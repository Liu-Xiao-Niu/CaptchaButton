import React from 'react';
import axios from 'axios';

var timer;

class CaptchaButton extends React.Component {
	static defaultProps = {
		defaultText: '获取验证码',
		timeSlot:60,
		address : '',
		accountEmptyTips:'请输入手机号'
	};
    constructor(props){
        super(props);
		this.state={
		  counting: false,
		  btnText: ''
		}
    }
    componentDidMount(){
	  this.setState({
		  btnText : this.props.defaultText
	  })
    }
    sendCode = () => {
				
		if(this.props.address == ""){
			
			alert(this.props.accountEmptyTips)
			
		}else if(!this.state.counting){
			
			let url = '',param = {}
			
			axios.post(url,param).then((res) => { //发送验证码
			
				this.countDown() //发送成功开始倒计时
				
			})
		}
	}
	countDown = () => {

		if (this.state.counting) {
			return;
		}

		let s = this.props.timeSlot,sAfterTxt = '秒后重发'

		this.setState({
			btnText : s + sAfterTxt,
			counting : true
		})

		timer = setInterval(() => {

			if (this.state.counting) {
				if (s > 0) {
					this.setState({
						btnText : (--s) + sAfterTxt
					})
				} else {
					this.setState({
						counting : false
					})
					this.stopTimer('重新获取')
				}
			} else { //手动停止倒计时
				this.stopTimer(this.props.defaultText)
			}

		}, 1000);
	}
	stopTimer = (txt) =>  {
		this.setState({
			btnText : txt
		})
		
		clearInterval(timer)
		
	}
  render() {
      return (
        <button disabled={this.state.counting} onClick = {this.sendCode}>
        	{this.state.btnText}
        </button>
      )  
  }
}
			
export default CaptchaButton;