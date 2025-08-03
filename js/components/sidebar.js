document.addEventListener("DOMContentLoaded", () => {
  const collapseButtons = document.querySelectorAll(".collapse-btn");

  collapseButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const parentLi = btn.closest("li");
      const subItems = parentLi.querySelector(".sub-items");
      if (!subItems) return;

      const expanded = subItems.classList.toggle("expanded");
      btn.classList.toggle("rotated", expanded);
    });
  });

  const currentPath = window.location.pathname;
  document.querySelectorAll(".sub-items a").forEach((link) => {
    console.log(currentPath, link.getAttribute("href"));
    if (link.getAttribute("href").startsWith(currentPath)) {
      const subItems = link.closest(".sub-items");
      if (subItems) {
        subItems.classList.add("expanded");

        // Rotate the collapse button too
        const parentLi = subItems.closest("li");
        const collapseBtn = parentLi.querySelector(".collapse-btn");
        if (collapseBtn) {
          collapseBtn.classList.add("rotated");
        }
      }
    }
  });

  // Mobile sidebar toggle
  const sidebar = document.querySelector(".sidebar");
  const toggleBtn = document.querySelector(".sidebar-toggle-btn");
  const backdrop = document.querySelector(".sidebar-backdrop");

  if (toggleBtn && sidebar && backdrop) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      backdrop.classList.toggle("visible");
    });

    backdrop.addEventListener("click", () => {
      sidebar.classList.remove("open");
      backdrop.classList.remove("visible");
    });
  }
});
