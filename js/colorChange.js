window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 320 || document.documentElement.scrollTop >= 320) {
    document.getElementById("navbar").classList.add("scrolled");
  } else {
    document.getElementById("navbar").classList.remove("scrolled");
  }
};
