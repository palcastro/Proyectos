document.querySelector('.principal button').addEventListener('click', () => {
    document.querySelector('.principal').style.display = 'none';
    document.querySelector('.slides').style.cssText = 'opacity: 1; visibility: visible';
    document.querySelector('.slidemove').style.animation = 'slidemove 24s infinite';
})