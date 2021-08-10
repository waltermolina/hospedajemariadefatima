var prev = 0;
$(document).ready(function () {
  if (window.matchMedia) {
    // Check if the dark-mode Media-Query matches
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme("dark")
    } else {
      setTheme("light")
    }
  } else {
    setTheme("light")
  }

  if(window.matchMedia){
    var colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeQuery.addEventListener('change', console.log("COLOR CHANGED"));
  }

  $(window).on('scroll', function () {
    
    var scrollTop = $(window).scrollTop();
    $("nav").children().toggleClass('hidden', scrollTop > prev);
    prev = scrollTop;
  });

  $("aside > #close").on("click", function () {
    $("aside").addClass("closed");
  });

  $("nav > #openMenu").on("click", function () {
    $("aside").removeClass("closed");
  });

  $("#lightsOn").on("click", function () {
    setTheme("light");
  });

  $("#lightsOff").on("click", function () {
    setTheme("dark");
  });

  function setTheme(theme) {
    if (theme === "dark") {
      $("body").removeClass("light");
      $("body").addClass("dark");
      $(".themeselector > #lightsOn").removeClass("filled");
      $(".themeselector > #lightsOff").addClass("filled");
    } else {
      $("body").removeClass("dark");
      $("body").addClass("light");
      $(".themeselector > #lightsOff").removeClass("filled");
      $(".themeselector > #lightsOn").addClass("filled");
    }
  }
});
