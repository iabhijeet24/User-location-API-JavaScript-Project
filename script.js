const fetchLocation = () => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
  
        let mapFrame = document.getElementById("map");
        mapFrame.src = `https://www.google.com/maps?q=${lat},${long}&output=embed`;
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
  