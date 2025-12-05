const pantalla  = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (pantalla.textContent === "Math ERROR") {
            pantalla.textContent = "0";
        }

        if (boton.id === "C") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1) {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {

            const expr = pantalla.textContent;

            if (/[+\-*/.]$/.test(expr)) {
                pantalla.textContent = "Math ERROR";
                return;
            }

            try {
                const res = eval(expr);

                if (!isFinite(res)) {
                    pantalla.textContent = "Math ERROR";
                } else {
                    pantalla.textContent = res;
                }

            } catch {
                pantalla.textContent = "Math ERROR";
            }
            return;
        }

        const ultimo = pantalla.textContent.slice(-1);
        if (/[\+\-*/.]/.test(ultimo) && /[\+\-*/.]/.test(botonApretado)) {
            return;
        }

        if (pantalla.textContent === "0" && /[*/+.]/.test(botonApretado)) {
            return;
        }

        if (pantalla.textContent === "0") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    });
});
