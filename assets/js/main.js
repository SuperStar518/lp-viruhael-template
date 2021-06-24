var slideIndex = 0;
var myVar;
var screenWidth = window.outerWidth;
$(document).ready(function() {
    $(".dropdown").click(function() {
        $(this).toggleClass("show");
    });
    $("#slideModalBtn01").click(function() {
        clearTimeout(myVar);
        $("#slideModal01").modal();
    });
    $("#slideModal01").on("hidden.bs.modal", function() {
        slideIndex -= 1;
        showSlides();
    });
    $("#slideModalBtn02").click(function() {

        clearTimeout(myVar);
        $("#slideModal02").modal();
    });
    $("#slideModal02").on("hidden.bs.modal", function() {
        slideIndex -= 1;
        showSlides();
    });
    $(".dot").click(function() {
        slideIndex = $(this).attr("data-id");
        clearTimeout(myVar);
        showSlides();
    });
    if (screenWidth > 784) {
        showSlides();
    }

    questionFn();


    $(document).on('click', '.pc-link-txt a, .pc-link-contact a, .dropdown-content a, .back_top_btn a, .scrollto', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                e.preventDefault();

                var scrollto = target.offset().top - 150;

                if ($(this).attr("href") == '#header') {
                    scrollto = 0;
                }

                $('html, body').animate({
                    scrollTop: scrollto
                }, 0, 'easeInOutExpo');


            }
        }
    });


});

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (screenWidth < 784) {
        return;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slideIndex >= slides.length) { slideIndex = 0 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slider-active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " slider-active";
    slideIndex++;
    clearTimeout();
    myVar = setTimeout(showSlides, 8000); // Change image every 8 seconds
}

function showBottom() {
    var screenWidth = window.outerWidth;

    var pc_tel = document.getElementById("PCでTEL Button のIDを入力してください");
    var sp_tel = document.getElementById("SPでTEL Button のIDを入力してください");

    if (screenWidth > 768) {
        pc_tel.style.display = "none";
        sp_tel.style.display = "block";
    } else {
        pc_tel.style.display = "block";
        sp_tel.style.display = "none";
    }

    setTimeout(showBottom, 1000); //Change every 1 seconds
}

function questionFn() {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}