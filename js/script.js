/*

Style   : MobApp Script JS
Version : 1.0
Author  : Surjith S M
URI     : https://surjithctly.in/

Copyright © All rights Reserved 

*/

$(function() {
    "use strict";

    /*-----------------------------------
     * FIXED  MENU - HEADER
     *-----------------------------------*/
    function menuscroll() {
        var $navmenu = $('.nav-menu');
        if ($(window).scrollTop() > 50) {
            $navmenu.addClass('is-scrolling');
        } else {
            $navmenu.removeClass("is-scrolling");
        }
    }
    menuscroll();
    $(window).on('scroll', function() {
        menuscroll();
    });
    /*-----------------------------------
     * NAVBAR CLOSE ON CLICK
     *-----------------------------------*/

    $('.navbar-nav > li:not(.dropdown) > a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
    /* 
     * NAVBAR TOGGLE BG
     *-----------------*/
    var siteNav = $('#navbar');
    siteNav.on('show.bs.collapse', function(e) {
        $(this).parents('.nav-menu').addClass('menu-is-open');
    })
    siteNav.on('hide.bs.collapse', function(e) {
        $(this).parents('.nav-menu').removeClass('menu-is-open');
    })

    /*-----------------------------------
     * ONE PAGE SCROLLING
     *-----------------------------------*/
    // Select all links with hashes
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="tab"]').on('click', function(event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
    

}); /* End Fn */

// Fungsi untuk menambahkan atau menghapus kelas saat scroll
window.addEventListener('scroll', function() {
    var navMenu = document.querySelector('.nav-menu');
    if (window.scrollY > 50) { // Ubah angka sesuai dengan kebutuhan
        navMenu.classList.add('scrolled');
    } else {
        navMenu.classList.remove('scrolled');
    }
});

// Fungsi untuk menambahkan efek saat menu dibuka
var menuToggle = document.querySelector('.navbar-toggler');
menuToggle.addEventListener('click', function() {
    var navMenu = document.querySelector('.nav-menu');
    if (navMenu.classList.contains('menu-is-open')) {
        navMenu.classList.remove('menu-is-open');
    } else {
        navMenu.classList.add('menu-is-open');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const newsItems = document.querySelectorAll(".hok_news_list li");

    function showOnScroll() {
        newsItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) { // 100px sebelum elemen terlihat sepenuhnya
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", showOnScroll);
    showOnScroll(); // Jalankan fungsi sekali untuk memunculkan elemen yang terlihat di awal
});

function backToTop() {
window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function() {
const backToTopBtn = document.getElementById("backToTopBtn");
if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopBtn.style.display = "block";
} else {
    backToTopBtn.style.display = "none";
}
};
document.addEventListener("DOMContentLoaded", function() {
const newsItems = document.querySelectorAll(".hok_news_list li");

function showOnScroll() {
newsItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) { // 100px sebelum elemen terlihat sepenuhnya
        item.classList.add("show");
    }
});
}

window.addEventListener("scroll", showOnScroll);
showOnScroll(); // Jalankan fungsi sekali untuk memunculkan elemen yang terlihat di awal
});
function toggleFeatureInfo(tile) {
var info = tile.querySelector('.more-info');
if (info.style.display === 'none') {
    info.style.display = 'block';
} else {
    info.style.display = 'none';
}
}
document.querySelector('.features-container').addEventListener('scroll', function() {
this.style.animation = 'none'; // Hentikan animasi saat pengguna menggulir
});

// Mengembalikan animasi setelah beberapa detik jika pengguna berhenti scroll
let timer;
document.querySelector('.features-container').addEventListener('scroll', function() {
clearTimeout(timer);
timer = setTimeout(() => {
    this.style.animation = 'autoScroll 20s linear infinite'; // Kembalikan animasi setelah 3 detik
}, 3000);
});

$(document).ready(function(){
$('#mapCarousel').carousel({
    interval: 5000, // Auto-slide every 5 seconds
    pause: "hover"  // Pauses the carousel on hover, allowing manual control
});

// Restart auto-play when manual navigation is used
$('#mapCarousel').on('slid.bs.carousel', function () {
    $(this).carousel('cycle');
});
});

window.addEventListener("load", function() {
document.getElementById("preloader").style.display = "none";
});


document.querySelectorAll('.hero-grid-vertical').forEach(grid => {
const items = Array.from(grid.children);
items.forEach(item => grid.appendChild(item.cloneNode(true))); // Menggandakan setiap hero-card
grid.classList.add('scrolling'); // Menambahkan animasi scrolling
});

function restartAnimation(grid) {
grid.style.animation = 'none';
grid.offsetHeight; // Menyegarkan ulang
grid.style.animation = '';
}

// Terapkan loop ke setiap hero-grid
document.querySelectorAll('.hero-grid-vertical').forEach(grid => {
grid.addEventListener('animationiteration', () => restartAnimation(grid));
});

function resetAnimation(grid) {
grid.style.animation = 'none';
grid.offsetHeight; // Menyegarkan ulang untuk memicu animasi ulang
grid.style.animation = '';
}

// Menerapkan ulang setiap animasi selesai
document.querySelectorAll('.hero-grid-vertical').forEach(grid => {
grid.addEventListener('animationiteration', () => resetAnimation(grid));
});


document.querySelectorAll('.hero-grid-vertical').forEach(grid => {
grid.addEventListener('mouseenter', () => {
grid.style.animationPlayState = 'paused';
});
grid.addEventListener('mouseleave', () => {
grid.style.animationPlayState = 'running';
});
});


document.addEventListener("DOMContentLoaded", function() {
const storyCards = document.querySelectorAll(".story-card");

function showCardsOnScroll() {
storyCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) { // 100px sebelum elemen sepenuhnya terlihat
        card.classList.add("show"); // Tambahkan kelas 'show' untuk mengaktifkan animasi
    }
});
}

window.addEventListener("scroll", showCardsOnScroll);
showCardsOnScroll(); // Jalankan fungsi sekali saat load awal untuk kartu yang sudah terlihat
});

