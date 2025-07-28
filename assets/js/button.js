
const buttonTrigger = document.querySelectorAll('.acordeon .trigger')

buttonTrigger.forEach(button => {
    button.addEventListener('click', (e) => {
        const acordeon = button.parentElement;
        const isOpen = acordeon.classList.contains('open');

        if (isOpen) {
            acordeon.classList.remove('open');
        }else {
            acordeon.classList.add('open');
            acordeon.scrollIntoView({ behavior: 'smooth', block: 'end' });
            setTimeout(() => {
            }, 300);
        }
    })
})