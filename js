// 返回顶部按钮功能
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '返回顶部';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '30px';
backToTopButton.style.right = '30px';
backToTopButton.style.display = 'none';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
