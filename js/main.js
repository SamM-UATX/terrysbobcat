(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // FAQ accordion
  document.querySelectorAll(".accordion-trigger").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".accordion-item");
      var isOpen = item.classList.contains("open");
      document.querySelectorAll(".accordion-item.open").forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove("open");
          openItem.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
        }
      });
      item.classList.toggle("open", !isOpen);
      btn.setAttribute("aria-expanded", (!isOpen).toString());
    });
  });

  // Before/after slider
  document.querySelectorAll("[data-ba-slider]").forEach(function (slider) {
    var handle = slider.querySelector(".ba-handle");
    var dragging = false;

    function setPosition(clientX) {
      var rect = slider.getBoundingClientRect();
      var pct = ((clientX - rect.left) / rect.width) * 100;
      pct = Math.max(0, Math.min(100, pct));
      slider.style.setProperty("--ba-pos", pct + "%");
      handle.setAttribute("aria-valuenow", Math.round(pct));
    }

    slider.addEventListener("pointerdown", function (e) {
      dragging = true;
      slider.setPointerCapture(e.pointerId);
      setPosition(e.clientX);
    });
    slider.addEventListener("pointermove", function (e) {
      if (dragging) setPosition(e.clientX);
    });
    slider.addEventListener("pointerup", function () { dragging = false; });
    slider.addEventListener("pointercancel", function () { dragging = false; });

    handle.addEventListener("keydown", function (e) {
      var current = parseFloat(handle.getAttribute("aria-valuenow")) || 50;
      if (e.key === "ArrowLeft") { current = Math.max(0, current - 5); }
      else if (e.key === "ArrowRight") { current = Math.min(100, current + 5); }
      else { return; }
      e.preventDefault();
      slider.style.setProperty("--ba-pos", current + "%");
      handle.setAttribute("aria-valuenow", current);
    });
  });

  // Contact form: highlight invalid fields (native validation still governs submission)
  var contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    var requiredFields = contactForm.querySelectorAll("[required]");
    requiredFields.forEach(function (field) {
      field.addEventListener("invalid", function () {
        var row = field.closest(".form-row");
        if (row) row.classList.add("invalid");
      });
      field.addEventListener("input", function () {
        var row = field.closest(".form-row");
        if (row && field.checkValidity()) row.classList.remove("invalid");
      });
    });
  }

  // Gallery lightbox
  var lightbox = document.getElementById("lightbox");
  if (lightbox) {
    var lightboxImg = lightbox.querySelector("img");
    var lightboxCaption = lightbox.querySelector(".lightbox-caption");
    document.querySelectorAll("[data-lightbox-trigger]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var img = btn.querySelector("img");
        lightboxImg.src = img.getAttribute("src");
        lightboxImg.alt = img.getAttribute("alt") || "";
        lightboxCaption.textContent = btn.getAttribute("data-caption") || "";
        lightbox.showModal();
      });
    });
    lightbox.querySelector(".lightbox-close").addEventListener("click", function () {
      lightbox.close();
    });
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) lightbox.close();
    });
  }

  // Scroll reveal
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  }
})();
