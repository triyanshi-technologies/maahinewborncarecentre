/* MAAHI Newborn Care Centre - site interactions */
(function () {
  // Mobile navigation
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  // Doctor profile tabs (our-doctors.html)
  var tabs = Array.prototype.slice.call(
    document.querySelectorAll(".doctor-tab"),
  );
  function selectDoctor(id, scroll) {
    tabs.forEach(function (t) {
      var on = t.getAttribute("aria-controls") === id;
      t.setAttribute("aria-selected", on ? "true" : "false");
      var panel = document.getElementById(t.getAttribute("aria-controls"));
      if (panel) panel.hidden = !on;
    });
    var target = document.getElementById(id);
    if (scroll && target)
      target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (tabs.length) {
    tabs.forEach(function (t) {
      t.addEventListener("click", function () {
        var id = t.getAttribute("aria-controls");
        selectDoctor(id, true);
        if (history.replaceState) history.replaceState(null, "", "#" + id);
      });
    });
    var hash = location.hash.replace("#", "");
    if (hash && document.getElementById(hash)) selectDoctor(hash, false);
  }

  // Appointment form (contact.html)
  var form = document.getElementById("appointment-form");
  if (form) {
    var err = form.querySelector(".form-error");
    var success = document.querySelector(".form-success");
    var successText = document.querySelector(".form-success-text");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.elements.name,
        phone = form.elements.phone;
      var nameOk = name.value.trim().length > 1;
      var phoneOk = phone.value.replace(/[^0-9]/g, "").length >= 10;
      name.setAttribute("aria-invalid", nameOk ? "false" : "true");
      phone.setAttribute("aria-invalid", phoneOk ? "false" : "true");
      if (!nameOk || !phoneOk) {
        err.hidden = false;
        (nameOk ? phone : name).focus();
        return;
      }
      err.hidden = true;
      // In Webflow, the native form handler replaces this block.
      successText.textContent =
        "Thank you, " +
        name.value.trim() +
        ". Your request for " +
        form.elements.service.value +
        " has been received. Our team will call you on " +
        phone.value.trim() +
        " shortly.";
      form.hidden = true;
      success.hidden = false;
      success.querySelector("h3").focus &&
        success.setAttribute("tabindex", "-1");
      success.focus();
    });
    var reset = document.querySelector("[data-reset]");
    if (reset)
      reset.addEventListener("click", function () {
        form.reset();
        form.hidden = false;
        success.hidden = true;
        form.elements.name.focus();
      });
  }
})();
