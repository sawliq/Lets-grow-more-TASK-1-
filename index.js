function videoUrl(video) {
  document.getElementById("slider").src = video;
}

function photoUrl(photo) {
  document.getElementById('life-slider').src = photo;
}


var ele = document.querySelectorAll(".contact-img");

for (var i = 0; i < ele.length; i++) {
  ele[i].addEventListener("mouseover",function() {
       document.getElementById(this.lastElementChild.id).classList.add("contact-social-hover");
  });
}

for (var i = 0; i < ele.length; i++) {
  ele[i].addEventListener("mouseout",function() {
       document.getElementById(this.lastElementChild.id).classList.remove("contact-social-hover");
  });
}