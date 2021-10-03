window.addEventListener("scroll", () => {
  if(window.scrollY==0){
    //user is at the top of the page; no need to show the back to top button
    jQuery('body').removeClass('scrolled');
  } else {
    jQuery('body').addClass('scrolled');
  }
});
