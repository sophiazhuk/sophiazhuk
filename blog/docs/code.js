      
      
      function showImage(n) {
        event.preventDefault();
        // Get all images and side menu links
        const images = document.getElementsByClassName("gallery-img");
        const links = document.getElementsByTagName("a");

        // Hide all images and remove active class 
        for (let i = 0; i < images.length; i++) {
          images[i].style.display = "none";
        }
        for (let i = 0; i < links.length; i++) {
          links[i].classList.remove("active");
        }

        // Show the selected image
        images[n-1].style.display = "block";
        links[n-1].classList.add("active");
      }
      showImage(1);

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}