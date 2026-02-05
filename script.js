function splitText(element) {
    const text = element.textContent;
    element.innerHTML = '';

    const spans = [];

    for (let char of text) {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00a0' : char;
        element.appendChild(span);
        spans.push(span);
    }

    return spans;
}

// (text) Fade in from left
(function animateTextFadeLeft() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const spans = splitText(entry.target);

                spans.forEach((span, index) => {
                    setTimeout(() => {
                        span.style.opacity = '1';
                        span.style.transform = 'translateX(0)';
                    }, index * 40);
                });
                observer.unobserve(entry.target);
                entry.target.style.opacity = '1';
            }
        });
    });
    document.querySelectorAll('.animation__text--fade-in-left').forEach(element => observer.observe(element));
})();

// fade in
(function animateTextFadeIn() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    });
    document.querySelectorAll('.animation--fade-in').forEach(element => observer.observe(element));
})();