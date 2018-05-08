// use with caution

// after window has loaded > go to this ID
window.onload = function() {
  if (location.hash) {
      document.getElementById('#schnell_und_sicher_handeln').scrollIntoView(true);
  }
}

// if firefox > if hash in url > after window load > grab id > scroll to it
if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
  window.onload = function() {
    if (location.hash) {
        var elementId = location.hash.replace('#','');
        var scrollToElement = document.getElementById(elementId);
        scrollToElement.scrollIntoView(true);
      }
  }
}

// a questionable jquery solution
$(document).ready(function () {
  if (window.location.href.indexOf("#unsere_veranstaltungen_auf") > -1) {
    $('html, body').animate({
      scrollTop: $('#unsere_veranstaltungen_auf').offset().top
    }, 'fast');
  }
});
