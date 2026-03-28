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