const blogPage = document.getElementById('blog_page');
if (blogPage) {
    blogPage.addEventListener('click', function () {
        window.location.href = 'blog.html';
    });
}

const btnBack = document.getElementById('btn_back');
if (btnBack) {
    btnBack.addEventListener('click', function () {
        window.location.href = 'index.html';
    });
}