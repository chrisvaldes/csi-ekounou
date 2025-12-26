window.initLegacyScripts = async function () {

  function loadScript(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');

      // Corriger chemins relatifs
      // Corrige SANS casser les chemins relatifs
      if (!url.includes("assets")) {
        url = "../assets/" + url.replace(/^\/+/, '');
      }

      script.src = url;
      script.onload = resolve;
      script.onerror = (err) => {
        console.error("Erreur de chargement :", url, err);
        reject(err);
      };
      document.body.appendChild(script);
    });
  }

  try {

    // Chargement des scripts legacy
    await loadScript("assets/js/main.js");
    await loadScript("assets/libs/@popperjs/core/umd/popper.min.js");
    await loadScript("assets/libs/bootstrap/js/bootstrap.bundle.min.js");
    await loadScript("assets/js/defaultmenu.min.js");
    await loadScript("assets/libs/node-waves/waves.min.js");
    await loadScript("assets/js/sticky.js");
    await loadScript("assets/libs/simplebar/simplebar.min.js");
    await loadScript("assets/js/simplebar.js");
    await loadScript("assets/libs/apexcharts/apexcharts.min.js");
    await loadScript("assets/libs/@simonwep/pickr/pickr.es5.min.js");
    await loadScript("assets/js/custom-switcher.min.js");
    await loadScript("assets/js/custom.js");
    await loadScript("assets/libs/swiper/swiper-bundle.min.js");
    await loadScript("assets/js/landing.js");
    await loadScript("assets/libs/choices.js/public/assets/scripts/choices.min.js");


    console.log("✔ Scripts Legacy chargés !");

  } catch (err) {
    console.error("❌ Erreur lors du chargement d’un script :", err);
  }
};
