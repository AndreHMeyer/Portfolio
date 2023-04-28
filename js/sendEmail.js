const form = document.querySelector('.contactForm');
const notification = document.querySelector('.sentNotification');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open('POST', form.action);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            form.reset();
            notification.innerHTML = 'Mensagem enviada com sucesso!';
            notification.classList.add('success');
        } else {
            notification.innerHTML = 'Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.';
            notification.classList.add('error');
        }
        setTimeout(() => {
            notification.innerHTML = '';
            notification.classList.remove('success', 'error');
        }, 3000);
    };
    xhr.send(new URLSearchParams(new FormData(form)));
});
