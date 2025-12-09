document.addEventListener("DOMContentLoaded", () => {
    initNavToggle();
    initSmoothScrollButtons();
    setFooterYear();
    initFaqToggle();
    initFormContacto();
    initFormSoporte();
  });
  
  function initNavToggle() {
    const navToggle = document.getElementById("navToggle");
    const mainNav = document.getElementById("mainNav");
    if (!navToggle || !mainNav) return;
  
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  
    mainNav.addEventListener("click", (event) => {
      if (
        event.target instanceof HTMLAnchorElement &&
        mainNav.classList.contains("is-open")
      ) {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
  
  function initSmoothScrollButtons() {
    const scrollButtons = document.querySelectorAll("[data-scroll]");
    scrollButtons.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const targetAttr = btn.getAttribute("data-scroll");
        if (!targetAttr || !targetAttr.startsWith("#")) return;
        const target = document.querySelector(targetAttr);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }
  
  function setFooterYear() {
    const footerYear = document.getElementById("footerYear");
    if (!footerYear) return;
    const year = new Date().getFullYear();
    footerYear.textContent = `© ${year} DISER. Todos los derechos reservados.`;
  }
  
  function initFaqToggle() {
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item) => {
      const btn = item.querySelector(".faq-question");
      if (!btn) return;
      btn.addEventListener("click", () => {
        item.classList.toggle("is-open");
      });
    });
  }
  
  function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 3000);
  }
  
  function initFormContacto() {
    const form = document.getElementById("formContacto");
    if (!form) return;
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const nombre = document.getElementById("nombreContacto");
      const correo = document.getElementById("correoContacto");
      const telefono = document.getElementById("telefonoContacto");
      const motivo = document.getElementById("motivoContacto");
      const mensaje = document.getElementById("mensajeContacto");
  
      const errorNombre = document.getElementById("errorNombreContacto");
      const errorCorreo = document.getElementById("errorCorreoContacto");
      const errorTelefono = document.getElementById("errorTelefonoContacto");
      const errorMotivo = document.getElementById("errorMotivoContacto");
      const errorMensaje = document.getElementById("errorMensajeContacto");
  
      const errores = [
        errorNombre,
        errorCorreo,
        errorTelefono,
        errorMotivo,
        errorMensaje,
      ];
      errores.forEach((e) => {
        if (e) e.textContent = "";
      });
  
      let isValid = true;
  
      if (!nombre.value.trim() || nombre.value.trim().length < 3) {
        if (errorNombre) errorNombre.textContent = "Ingresa tu nombre completo.";
        isValid = false;
      }
  
      const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!correoRegex.test(correo.value.trim())) {
        if (errorCorreo)
          errorCorreo.textContent = "Ingresa un correo electrónico válido.";
        isValid = false;
      }
  
      const telRegex = /^[0-9\s\-+]{7,15}$/;
      if (!telRegex.test(telefono.value.trim())) {
        if (errorTelefono)
          errorTelefono.textContent = "Ingresa un número de teléfono válido.";
        isValid = false;
      }
  
      if (!motivo.value.trim()) {
        if (errorMotivo)
          errorMotivo.textContent = "Selecciona el motivo de contacto.";
        isValid = false;
      }
  
      if (!mensaje.value.trim() || mensaje.value.trim().length < 10) {
        if (errorMensaje)
          errorMensaje.textContent =
            "Describe tu consulta con al menos 10 caracteres.";
        isValid = false;
      }
  
      if (isValid) {
        showToast("Gracias por contactarnos. Hemos recibido tu mensaje.");
        form.reset();
      }
    });
  }
  
  function initFormSoporte() {
    const form = document.getElementById("formSoporte");
    if (!form) return;
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const nombre = document.getElementById("nombreSoporte");
      const correo = document.getElementById("correoSoporte");
      const telefono = document.getElementById("telefonoSoporte");
      const ciudad = document.getElementById("ciudadSoporte");
      const tipoServicio = document.getElementById("tipoServicio");
      const descripcion = document.getElementById("descripcionProblema");
  
      const errorNombre = document.getElementById("errorNombreSoporte");
      const errorCorreo = document.getElementById("errorCorreoSoporte");
      const errorTelefono = document.getElementById("errorTelefonoSoporte");
      const errorCiudad = document.getElementById("errorCiudadSoporte");
      const errorTipoServicio = document.getElementById("errorTipoServicio");
      const errorDescripcion = document.getElementById(
        "errorDescripcionProblema"
      );
  
      const errores = [
        errorNombre,
        errorCorreo,
        errorTelefono,
        errorCiudad,
        errorTipoServicio,
        errorDescripcion,
      ];
      errores.forEach((e) => {
        if (e) e.textContent = "";
      });
  
      let isValid = true;
  
      if (!nombre.value.trim() || nombre.value.trim().length < 3) {
        if (errorNombre) errorNombre.textContent = "Ingresa tu nombre completo.";
        isValid = false;
      }
  
      const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!correoRegex.test(correo.value.trim())) {
        if (errorCorreo)
          errorCorreo.textContent = "Ingresa un correo electrónico válido.";
        isValid = false;
      }
  
      const telRegex = /^[0-9\s\-+]{7,15}$/;
      if (!telRegex.test(telefono.value.trim())) {
        if (errorTelefono)
          errorTelefono.textContent = "Ingresa un número de teléfono válido.";
        isValid = false;
      }
  
      if (!ciudad.value.trim()) {
        if (errorCiudad) errorCiudad.textContent = "Selecciona la ciudad.";
        isValid = false;
      }
  
      if (!tipoServicio.value.trim()) {
        if (errorTipoServicio)
          errorTipoServicio.textContent = "Selecciona el tipo de servicio.";
        isValid = false;
      }
  
      if (!descripcion.value.trim() || descripcion.value.trim().length < 10) {
        if (errorDescripcion)
          errorDescripcion.textContent =
            "Describe el problema con al menos 10 caracteres.";
        isValid = false;
      }
  
      if (isValid) {
        showToast("Tu solicitud de soporte ha sido enviada.");
        form.reset();
      }
    });
  }
  