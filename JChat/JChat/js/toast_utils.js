ToastUtils = {
	showToast: function(message, type) {
		plus.nativeUI.toast(message, 
			{icon: "images/" + type + ".png", verticalAlign: "center"})
	}
}