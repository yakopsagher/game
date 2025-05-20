  document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function() {
                // إزالة النشاط من جميع العناصر
                document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
                
                // إضافة النشاط للعنصر المحدد
                this.classList.add('active');
                
                // إخفاء جميع الأقسام
                document.querySelectorAll('.content > div').forEach(div => div.style.display = 'none');
                
                // عرض القسم المحدد
                if (this.textContent === 'statistics') {
                    document.querySelector('.stats-section').style.display = 'block';
                } else if (this.textContent === ' team ') {
                    document.querySelector('.team-section').style.display = 'block';
                } else {
                    document.querySelector('.search-section').style.display = 'block';
                }
            });
        });