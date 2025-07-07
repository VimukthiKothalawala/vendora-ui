function showToast(message, type = "success", duration = 3000) {
  const toast = document.createElement("div");
  toast.className = `toast show ${type}`;
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300); // match transition time
  }, duration);
}

// Make available globally
window.showToast = showToast;
