// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // 关闭移动端菜单
        const navContainer = document.querySelector('.nav-container');
        if (navContainer.classList.contains('active')) {
            navContainer.classList.remove('active');
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const backToTop = document.getElementById('back-to-top');
    
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
        backToTop.classList.add('visible');
    } else {
        nav.classList.remove('scrolled');
        backToTop.classList.remove('visible');
    }
});

// 移动端菜单切换
const menuToggle = document.getElementById('menu-toggle');
const navContainer = document.querySelector('.nav-container');

menuToggle.addEventListener('click', function() {
    navContainer.classList.toggle('active');
});

// 文章过滤功能
const filterBtns = document.querySelectorAll('.filter-btn');
const articleCards = document.querySelectorAll('.article-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // 移除所有按钮的active类
        filterBtns.forEach(b => b.classList.remove('active'));
        // 添加当前按钮的active类
        this.classList.add('active');
        
        const filter = this.textContent.trim();
        
        articleCards.forEach(card => {
            const category = card.querySelector('.article-category').textContent.trim();
            if (filter === '全部' || category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// 表单提交处理
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // 简单的表单验证
    if (!name || !email || !subject || !message) {
        alert('请填写所有必填字段');
        return;
    }
    
    // 模拟表单提交
    alert('消息已发送！我们会尽快与您联系。');
    this.reset();
});

// 订阅表单提交处理
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    if (!email) {
        alert('请输入您的邮箱地址');
        return;
    }
    
    alert('订阅成功！您将收到最新文章更新。');
    this.reset();
});

// 返回顶部按钮
const backToTop = document.getElementById('back-to-top');
backToTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 主题切换功能
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 检查本地存储中的主题设置
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// 项目卡片悬停效果
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// 文章卡片悬停效果
const articleCardHover = document.querySelectorAll('.article-card');
articleCardHover.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// 分类卡片悬停效果
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// 标签悬停效果
const tags = document.querySelectorAll('.tag');
tags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// 搜索功能
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const articleCards = document.querySelectorAll('.article-card');
const featuredArticles = document.querySelectorAll('.featured-articles .article-list li');

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        // 如果搜索词为空，显示所有文章
        articleCards.forEach(card => {
            card.style.display = 'block';
        });
        featuredArticles.forEach(article => {
            article.style.display = 'block';
        });
        return;
    }
    
    // 搜索文章卡片
    articleCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const content = card.querySelector('.article-content p').textContent.toLowerCase();
        const category = card.querySelector('.article-category').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || content.includes(searchTerm) || category.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
    // 搜索精选文章
    featuredArticles.forEach(article => {
        const title = article.querySelector('.article-title').textContent.toLowerCase();
        const date = article.querySelector('.article-date').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || date.includes(searchTerm)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}

// 点击搜索按钮执行搜索
searchBtn.addEventListener('click', performSearch);

// 按回车键执行搜索
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});