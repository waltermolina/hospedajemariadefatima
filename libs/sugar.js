var prev = 0;
$(document).ready(function () {
  if (window.matchMedia) {
    // Check if the dark-mode Media-Query matches
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  } else {
    setTheme("light")
  }

  if (window.matchMedia) {
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

  buildLocationMap();

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

  function buildLocationMap() {
    map = new GMaps({
      div: "#locationMap",
      zoom: 15,
      lat: -33.68517984474696,
      lng: -65.47050683897857,
      disableDefaultUI: true,
      gestureHandling: "greedy"
    });
    map.addMarker({
      lat: -33.6851847,
      lng: -65.4726403,
      title: "Estamos acá",
      infoWindow: {
        content:
          '<a href="https://goo.gl/maps/S5SzJFTKxu42" target="_blank" >Ver en Google Maps</a>'
      }
    });
    var styles = [
      {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#dd2c00"
          }
        ]
      },
      {
        featureType: "administrative.locality",
        elementType: "labels",
        stylers: [
          {
            visibility: "on",
            color: "#dd2c00"
          }
        ]
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "simplified"
          },
          {
            hue: "#ff0000"
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            color: "#f2f2f2"
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            color: "#ff6434"
          },
          {
            saturation: "0"
          },
          {
            lightness: "82"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi.business",
        elementType: "labels.text.fill",
        stylers: [
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            saturation: -100
          },
          {
            lightness: 45
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            color: "#dd2c00"
          },
          {
            visibility: "on"
          }
        ]
      }
    ];

    map.addStyle({
      styledMapName: "Red",
      styles: styles,
      mapTypeId: "map_style"
    });
    map.setStyle("map_style");
  }

});
