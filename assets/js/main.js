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

  // Count up key metrics once they enter the viewport.
  var stats = document.querySelector(".stats");
  var statValues = stats
    ? Array.prototype.slice.call(stats.querySelectorAll("[data-count]"))
    : [];
  var reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function animateStat(element) {
    var target = String(element.getAttribute("data-count"));
    var suffix = element.getAttribute("data-suffix") || "";
    var odometer = document.createElement("span");
    odometer.className = "stat-odometer";
    odometer.setAttribute("aria-hidden", "true");
    element.setAttribute("aria-label", target + suffix);
    element.textContent = "";

    target.split("").forEach(function (character, index) {
      var digit = Number(character);
      var slot = document.createElement("span");
      var rail = document.createElement("span");
      slot.className = "stat-digit";
      rail.className = "stat-digit__rail";
      rail.style.setProperty(
        "--digit-offset",
        String(-(20 + digit) * 1.12) + "em",
      );
      rail.style.transitionDelay = String(index * 90) + "ms";

      for (var cycle = 0; cycle < 3; cycle += 1) {
        for (var value = 0; value < 10; value += 1) {
          var digitValue = document.createElement("span");
          digitValue.className = "stat-digit__value";
          digitValue.textContent = String(value);
          rail.appendChild(digitValue);
        }
      }
      slot.appendChild(rail);
      odometer.appendChild(slot);
    });

    element.appendChild(odometer);
    if (suffix) {
      var suffixElement = document.createElement("span");
      suffixElement.setAttribute("aria-hidden", "true");
      suffixElement.textContent = suffix;
      element.appendChild(suffixElement);
    }
    window.requestAnimationFrame(function () {
      element.classList.add("is-rolling");
    });
  }

  if (statValues.length && !reduceMotion && "IntersectionObserver" in window) {
    var statsObserver = new IntersectionObserver(
      function (entries) {
        if (!entries[0].isIntersecting) return;
        statValues.forEach(animateStat);
        statsObserver.unobserve(stats);
      },
      { threshold: 0.35 },
    );
    statsObserver.observe(stats);
  }

  // Reveal major content sections with one lightweight observer.
  var revealItems = Array.prototype.slice.call(
    document.querySelectorAll("main > section"),
  );
  if (revealItems.length && !reduceMotion && "IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8%" },
    );
    revealItems.forEach(function (item) {
      item.classList.add("reveal");
      revealObserver.observe(item);
    });
  }

  // Smooth FAQ transitions while retaining native details semantics.
  Array.prototype.forEach.call(document.querySelectorAll(".faq"), function (faq) {
    var summary = faq.querySelector("summary");
    var answer = faq.querySelector("p");
    if (!summary || !answer) return;

    var content = document.createElement("div");
    content.className = "faq-content";
    answer.parentNode.insertBefore(content, answer);
    content.appendChild(answer);
    if (faq.open) content.style.height = "auto";

    summary.addEventListener("click", function (event) {
      event.preventDefault();
      if (faq.dataset.animating === "true") return;
      var reducedMotion =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reducedMotion) {
        faq.open = !faq.open;
        content.style.height = faq.open ? "auto" : "";
        return;
      }

      faq.dataset.animating = "true";
      if (!faq.open) {
        faq.open = true;
        content.style.height = "0px";
        content.offsetHeight;
        content.style.height = content.scrollHeight + "px";
      } else {
        content.style.height = content.scrollHeight + "px";
        content.offsetHeight;
        content.style.height = "0px";
      }

      content.addEventListener(
        "transitionend",
        function (transition) {
          if (transition.propertyName !== "height") return;
          if (content.style.height === "0px") faq.open = false;
          else content.style.height = "auto";
          delete faq.dataset.animating;
        },
        { once: true },
      );
    });
  });

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
