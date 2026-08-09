const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

let abrirParentesis = true;

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        const botonApretado = boton.textContent;

        // AC
        if (boton.id === "ac") {
            pantalla.textContent = "0";
            return;
        }

        // Borrar
        if (boton.id === "borrar") {

            if (
                pantalla.textContent.length === 1 ||
                pantalla.textContent === "Error!"
            ) {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent =
                    pantalla.textContent.slice(0, -1);
            }

            return;
        }

        // Paréntesis
        if (boton.id === "parentesis") {

            const simbolo = abrirParentesis ? "(" : ")";

            if (
                pantalla.textContent === "0" ||
                pantalla.textContent === "Error!"
            ) {
                pantalla.textContent = simbolo;
            } else {
                pantalla.textContent += simbolo;
            }

            abrirParentesis = !abrirParentesis;

            return;
        }

        // Igual
        if (boton.id === "igual") {

            try {

                const expresion = pantalla.textContent
                    .replace(/×/g, "*")
                    .replace(/÷/g, "/")
                    .replace(/%/g, "/100");

                pantalla.textContent = eval(expresion);

            } catch {

                pantalla.textContent = "Error!";

            }

            return;

        }

        // Escribir en pantalla
        if (
            pantalla.textContent === "0" ||
            pantalla.textContent === "Error!"
        ) {

            pantalla.textContent = botonApretado;

        } else {

            pantalla.textContent += botonApretado;

        }

    });

});