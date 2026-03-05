VSS.ready(function () {
  const generateBtn = document.getElementById("generateBtn");
  const statusEl = document.getElementById("status");

  if (!generateBtn || !statusEl) {
    console.error("Missing DOM elements. Check IDs in hub.html.");
    return;
  }

  function setStatus(msg) {
    statusEl.textContent = msg || "";
  }

  generateBtn.addEventListener("click", async () => {
    setStatus("Clicked generate...");
  });
});
