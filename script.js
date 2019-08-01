function myFunctionone() {
    var x = document.getElementById("summary");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunctiontwo() {
    var x = document.getElementById("practical");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunctionthree() {
    var x = document.getElementById("contact");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  var slideIndex = 0;
showSlides1();

function showSlides1() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides1, 3000);
}

$('.vcheck').change(function() {
  var name = $('#Name').val();
  var email = $('#Email').val();
  var phone = $('#Phone').val();
  if ( name == '' || email == '' || phone == '') {
      $('#submit').attr('disabled', 'disabled');
  } else {
      $('#submit').removeAttr('disabled');
  }
});;
