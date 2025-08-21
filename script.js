let contador = 0;

document.getElementById("Botao").onclick = () => {
            contador++;
            let toast = document.getElementById("toast");
            if (!toast) {
                toast = document.createElement("div");
                toast.id = "toast";
                toast.className = "toast";
                document.body.appendChild(toast);
            }

            toast.textContent = `Você clicou ${contador} vezes`;

            // Mostra o toast adicionando a classe "show"
            toast.classList.add("show");
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                toast.classList.remove("show");
            }, 3000);
        };