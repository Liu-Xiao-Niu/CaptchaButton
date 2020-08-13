import React, { useState, useRef } from 'react';
import './App.css';
import CaptchaButton from './CaptchaButton'

function App() {
    const [address, setAddress] = useState("");
	const Captcha = useRef(null);
	
	const stopCounter = () => {
		Captcha.current.setState({
		  counting: false
		})
	}
	
	return (
		<div className="App">
		
			<div>
			  <p>
				  <label>手机号：</label>
				  <input value = {address} onChange = {event => setAddress(event.target.value)} placeholder="请输入手机号" />
			  </p>
			  <p className="App-box">
				  <label>验证码：</label>
				  <input placeholder="请输入验证码"/>
				  
				  <CaptchaButton
					ref = {Captcha}
					address = {address}
				  />
				  
			  </p>
			  
			  <p className = "App-centerbox">
				  <button>登录</button> <button onClick = {stopCounter}>停止倒计时</button>
			  </p>
			</div>
				  
		</div>
	);
}

export default App;
