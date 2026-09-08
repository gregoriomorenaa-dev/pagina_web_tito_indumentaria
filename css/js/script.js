document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("menuMobile");
    const navbar = document.getElementById("navbar");

    if (!menuButton || !navbar) {
        console.error("No se encontró el menú móvil.");
        return;
    }

    const menuIcon = menuButton.querySelector("i");


    /* ===========================
       ABRIR / CERRAR MENÚ
    =========================== */

    menuButton.addEventListener("click", function () {

        const abierto = navbar.classList.toggle("active");

        menuButton.setAttribute(
            "aria-expanded",
            abierto ? "true" : "false"
        );

        document.body.classList.toggle(
            "menu-open",
            abierto
        );


        if (menuIcon) {

            if (abierto) {

                menuIcon.classList.remove("fa-bars");
                menuIcon.classList.add("fa-xmark");

            } else {

                menuIcon.classList.remove("fa-xmark");
                menuIcon.classList.add("fa-bars");

            }

        }

    });


    /* ===========================
       CERRAR AL ELEGIR OPCIÓN
    =========================== */

    navbar.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("active");

            document.body.classList.remove("menu-open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );


            if (menuIcon) {

                menuIcon.classList.remove("fa-xmark");
                menuIcon.classList.add("fa-bars");

            }

        });

    });


    /* ===========================
       CERRAR SI VOLVEMOS A PC
    =========================== */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 860) {

            navbar.classList.remove("active");

            document.body.classList.remove("menu-open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );


            if (menuIcon) {

                menuIcon.classList.remove("fa-xmark");
                menuIcon.classList.add("fa-bars");

            }

        }

    });

});