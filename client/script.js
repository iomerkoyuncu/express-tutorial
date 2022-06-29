"use strict";
(function () {
	window.addEventListener("load", init);

	function id(idName) {
		return document.getElementById(idName);
	}

	function qs(query) {
		return document.querySelector(query);
	}

	function qsa(query) {
		return document.querySelectorAll(query);
	}

	function init() {
		id("input-form").addEventListener("submit", function (e) {
			e.preventDefault();
			submitRequest();
		});
	}

	function submitRequest() {
		let nm = id("name-input").value;
		let email = id("email-input").value;
		let message = id("message-input").value;
		let params = { name: nm, email: email, message: message };
		fetch("http://localhost:3001/contact", {
			method: "POST",
			body: JSON.stringify(params),
			headers: { "Content-Type": "application/json" },
		}).then((res) => {
			console.log(params);
			console.log("success");
		});
	}
})();
