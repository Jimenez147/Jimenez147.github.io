
var form = document.getElementById("contact-form");
var statusMessage = document.getElementById("form-status");

function showTranslatedStatus(key, backgroundColor, color) {
    statusMessage.setAttribute("data-i18n", key);
    statusMessage.dispatchEvent(new Event("portfolio:translate", { bubbles: true }));
    statusMessage.style.backgroundColor = backgroundColor;
    statusMessage.style.color = color;
    statusMessage.style.display = "block";
}

async function handleSubmit(event) {
        // Evita que la página se recargue o redirija
        event.preventDefault();
        
        var data = new FormData(event.target);
        
        // Cambia el texto del botón mientras envía
        var btn = form.querySelector('input[type="submit"]');
        var originalBtnText = btn.value;
        btn.setAttribute("data-i18n-value", "sendingMessage");
        btn.dispatchEvent(new Event("portfolio:translate", { bubbles: true }));
        btn.disabled = true;

        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                // Mensaje de éxito
                showTranslatedStatus("messageSent", "#4ade80", "#064e3b");
                form.reset(); // Limpia el formulario
            } else {
                // Mensaje de error de Formspree
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        statusMessage.removeAttribute("data-i18n");
                        statusMessage.textContent = data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        showTranslatedStatus("messageSendError", "#f87171", "#450a0a");
                    }
                    statusMessage.style.display = "block";
                    statusMessage.style.backgroundColor = "#f87171";
                    statusMessage.style.color = "#450a0a";
                })
            }
        }).catch(error => {
            // Error de conexión
            showTranslatedStatus("messageSendError", "#f87171", "#450a0a");
        }).finally(() => {
            // Restaura el botón
            btn.removeAttribute("data-i18n-value");
            btn.value = originalBtnText;
            btn.disabled = false;
        });
}

form.addEventListener("submit", handleSubmit);