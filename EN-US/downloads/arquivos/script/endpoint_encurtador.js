document.addEventListener("DOMContentLoaded", () => {
  console.log("🔄 Script started and DOM loaded.");

  const ONE_HOUR = 60 * 60 * 1000;
  const MINIMUM_TIME = 20 * 1000;

  const now = Date.now();
  const lastValidAccess = localStorage.getItem("lastValidAccess");
  const encStart = localStorage.getItem("encStart");

  if (lastValidAccess && now - lastValidAccess < ONE_HOUR) {
    const remainingTime = ONE_HOUR - (now - lastValidAccess);
    console.log("✅ Access already granted recently. Time remaining until expiration:", Math.ceil(remainingTime / 1000), "seconds");
    return;
  }

  function showBypassPopup() {
    console.log("🛑 Showing popup to force shortlink pass-through.");

    Swal.fire({
      title: "Restricted Access",
      html: `
        To access the content, you must go through the shortlink.<br><br>
        <button id="passBtn" class="swal2-confirm swal2-styled">Go through shortlink</button>
      `,
      icon: "warning",
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      backdrop: "rgba(0, 0, 0, 0.8)"
    });

    setTimeout(() => {
      const button = document.getElementById("passBtn");
      if (button) {
        button.addEventListener("click", () => {
          console.log("➡️ User clicked to pass through the shortlink.");
          localStorage.setItem("encStart", Date.now());
          window.location.href = "https://fir3.net/RoBooster-2-English";
        });
      } else {
        console.warn("⚠️ Pass button not found.");
      }
    }, 100);
  }

  if (encStart) {
    const timeElapsed = now - parseInt(encStart, 10);

    console.log("⏱ Time since shortlink click:", Math.ceil(timeElapsed / 1000), "seconds");

    if (timeElapsed < MINIMUM_TIME) {
      console.log("❌ Not enough time. User returned too quickly.");
      Swal.fire({
        title: "Access Denied",
        text: "You returned too quickly. Please try again.",
        icon: "error",
        allowOutsideClick: false,
        allowEscapeKey: false,
        confirmButtonText: "Try Again",
        backdrop: "rgba(0, 0, 0, 0.8)"
      }).then(() => {
        console.log("🔁 Restarting shortlink flow.");
        localStorage.removeItem("encStart");
        showBypassPopup();
      });

      return;
    } else {
      console.log("✅ Minimum time met. Access granted.");
      localStorage.setItem("lastValidAccess", now);
      localStorage.removeItem("encStart");
      return;
    }
  }

  showBypassPopup();
});
