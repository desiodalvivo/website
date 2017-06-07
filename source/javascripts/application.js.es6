class IconImages {
  constructor(paths) {
    this.paths = paths
    var iconNames = window.markerImageFilenames;
    this.data = {};
    for (var i = 0; i < iconNames.length; ++i) {
      this.data[iconNames[i].name] = L.icon({ iconUrl: iconNames[i].path });
    }
  }
}

class LeafletMap {
  constructor(mapContainer, options = {}) {
    this.mapContainer = mapContainer
    this.icons = options.iconImages.data
    this.setup()
  }

  setup() {
    let center = [51.505, -0.09];
    let zoomLevel = 13;
    let mapOptions = {
      scrollWheelZoom: false
    };
    let attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
    let accessToken = "pk.eyJ1Ijoib2xpc3RpayIsImEiOiJjajM3c3l6OWIwMDQ5MndvN2g2YXd1cG02In0.L8jVKrFst-FWw_rI-5QVdg"
    let urlTemplate = "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
    let mapboxId = "mapbox.streets"
    this.map = L.map(this.mapContainer, mapOptions).setView(center, zoomLevel);

    L.tileLayer(urlTemplate, {
        attribution: attribution,
        maxZoom: 18,
        id: mapboxId,
        accessToken: accessToken
    }).addTo(this.map);

    let marker = L.marker([51.5, -0.09], {icon: this.icons.tittoni}).addTo(this.map);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
  }
}

class Tabs {
  constructor(container) {
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
}

document.addEventListener("DOMContentLoaded", function(event) {
  var tabContainer = document.querySelector("[data-tab-container]");
  if (tabContainer.length !== 0) {
    let tabs = new Tabs(tabContainer);
  }

  var configurationData = window.configurationData;

  // var mapContainer = document.querySelector("#map");
  // if (mapContainer.length !== 0) {
  //   let mapOptions = {
  //     iconImages: new IconImages(configurationData.markerImageFilenames)
  //   }
  //   let map = new LeafletMap(mapContainer, mapOptions)
  // }
});
