function openModal() {
    document.getElementById("orderModal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("orderModal").style.display = "none";
  }
  
  function switchTab(tab) {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tabElement) => tabElement.classList.remove("active"));
  
    if (tab === "pickup") {
      tabs[0].classList.add("active");
      document.getElementById("deliveryInput").style.display = "none";
      document.getElementById("pickup").style.display = "block";
    } else if (tab === "delivery") {
      tabs[1].classList.add("active");
      document.getElementById("deliveryInput").style.display = "block";
      document.getElementById("pickup").style.display = "none";
    }

  }
    