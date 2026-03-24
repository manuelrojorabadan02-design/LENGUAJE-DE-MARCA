document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registro-form');

    const inputs = {
        nombre: document.getElementById('nombre'),
        correo: document.getElementById('correo'),
        password: document.getElementById('password'),
        password_rep: document.getElementById('password_rep'),
        telefono: document.getElementById('telefono')
    };

    const errors = {
        nombre: document.getElementById('error-nombre'),
        correo: document.getElementById('error-correo'),
        password: document.getElementById('error-password'),
        password_rep: document.getElementById('error-password_rep'),
        telefono: document.getElementById('error-telefono')
    };

    const regex = {
        nombre: /^[a-zA-Z0-9_\-]{3,16}$/,
        correo: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/,
        password: /.{8,}/,
        telefono: /^[0-9]{9}$/
    };

    const messages = {
        nombre: 'El nombre debe tener entre 3 y 16 caracteres alfanuméricos.',
        correo: 'El correo electrónico no es válido.',
        password: 'La contraseña debe tener al menos 8 caracteres.',
        password_rep: 'Las contraseñas no coinciden.',
        telefono: 'El teléfono debe contener exactamente 9 dígitos numéricos.'
    };

    function validarCampo(campo, regexPattern, msj) {
        const input = inputs[campo];
        const error = errors[campo];
        let isValid = false;

        if (campo === 'password_rep') {
            isValid = input.value === inputs['password'].value && input.value !== '';
        } else {
            isValid = regexPattern.test(input.value);
        }

        if (isValid) {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
            error.textContent = '';
            error.classList.remove('active');
        } else {
            input.classList.remove('is-valid');
            input.classList.add('is-invalid');
            error.textContent = msj;
            error.classList.add('active');
        }

        return isValid;
    }

    // Escuchadores de eventos para cada input ("blur" y "keyup")
    Object.keys(inputs).forEach(campo => {
        const input = inputs[campo];
        input.addEventListener('blur', () => {
            validarCampo(campo, regex[campo], messages[campo]);
        });

        input.addEventListener('keyup', () => {
            // Validar en tiempo real si ya tenía la clase de error (para dar feedback rápido)
            if (input.classList.contains('is-invalid')) {
                validarCampo(campo, regex[campo], messages[campo]);
            }
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let validForm = true;
        Object.keys(inputs).forEach(campo => {
            const result = validarCampo(campo, regex[campo], messages[campo]);
            if (!result) validForm = false;
        });

        if (validForm) {
            alert('Formulario enviado con éxito!');
            form.reset();
            Object.keys(inputs).forEach(campo => {
                inputs[campo].classList.remove('is-valid', 'is-invalid');
            });
        }
    });
});
