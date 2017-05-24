function initTabs(container) {
  var tabContents = document.querySelector("[data-tab-contents]");
  container.addEventListener("click", function(event) {
    event.preventDefault();
    var tabId = event.target.dataset.tabId;
    var tab = tabContents.querySelector("[data-tab-id=" + tabId + "]");
    var tabs = tabContents.querySelectorAll("[data-tab-id]");
    for (var index = 0; index < tabs.length; ++index) {
      var element = tabs[index];
      element.classList.remove("active");
    }
    tab.classList.add("active");
    return false;
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  var tabContainer = document.querySelector("[data-tab-container]");
  if (tabContainer.length !== 0) {
    initTabs(tabContainer);
  }
});
