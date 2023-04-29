const form = document.querySelector('.contactForm');
const notification = document.querySelector('.sentNotification');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open('POST', form.action);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    xhr.onload = () => {
        if (xhr.status === 200) {
            form.reset();
            showNotification(true);
        } else {
            showNotification(false);
        }
    };

    xhr.onerror = () => {
        showNotification(false);
    };

    xhr.send(formData);
});

function showNotification(success) {
    notification.innerHTML = '';

    const icon = document.createElement('img');
    icon.src = success ? 'assets/icons/Correct.svg' : 'assets/icons/Error.svg';
    icon.classList.add('icon');
    notification.appendChild(icon);

    const message = document.createElement('span');
    message.textContent = success ? 'Mensagem enviada com sucesso!' : 'Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde';
    notification.appendChild(message);

    notification.classList.add(success ? 'success' : 'error');

    setTimeout(() => {
        notification.classList.add('hide');
        setTimeout(() => {
            notification.innerHTML = '';
            notification.classList.remove('success', 'error', 'hide');
            if (!success) {
                form.reset();
            }
        }, 1000);
    }, 3000);
}