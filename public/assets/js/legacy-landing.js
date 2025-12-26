window.initLegacyLandingScripts = async function () {

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
        await loadScript("assets/libs/bootstrap/js/bootstrap.bundle.min.js");
        await loadScript("assets/libs/simplebar/simplebar.min.js");
        await loadScript("assets/libs/swiper/swiper-bundle.min.js");
        await loadScript("assets/js/landing.js");
        await loadScript("assets/libs/choices.js/public/assets/scripts/choices.min.js");


        console.log("✔ Scripts Legacy chargés !");

    } catch (err) {
        console.error("❌ Erreur lors du chargement d’un script :", err);
    }
};
