function toggleBulb() {
  const bulb = document.getElementById('bulb');
  const loginBox = document.getElementById('loginBox');
  const switchBtn = document.getElementById('switchBtn');
  
  bulb.classList.toggle('on');
  
  if (bulb.classList.contains('on')) {
    loginBox.classList.remove('hidden');
    switchBtn.textContent = "Torch On";
  } else {
    loginBox.classList.add('hidden');
    switchBtn.textContent = "Torch Off";
  }
}

function checkLogin() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const message = document.getElementById('message');

  if (user === "ratul" && pass === "1234") {
    // ✅ সঠিক হলে index.html এ যাবে
    window.location.href = "index.html";
  } else {
    message.style.color = "red";
    message.textContent = "❌ Wrong ID or Password!";
  }
}
