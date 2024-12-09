function showPage(page) {
    // إخفاء جميع الصفحات
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(function (p) {
        p.classList.remove('active');
    });

    // إظهار الصفحة المطلوبة
    const activePage = document.getElementById(page);
    activePage.classList.add('active');
//===============================================================
    function loadDashboardData() {
        // تحديد الجدول
        const tableBody = document.querySelector('#dashboard-table tbody');
    
        // تنظيف الجدول قبل إضافة البيانات الجديدة
        tableBody.innerHTML = '';
    
        // البيانات الديناميكية (كمثال)
        const data = [
            { name: 'أحمد', age: 25, job: 'سائق' },
            { name: 'محمد', age: 30, job: 'سائق' }
        ];
    
        // إضافة الصفوف إلى الجدول
        data.forEach((item) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>${item.job}</td>
            `;
            tableBody.appendChild(row);
        });
    }
    //================================================================
    // استدعاء الدالة عند تحميل الصفحة
    window.onload = loadDashboardData;
    

    var ctx = document.getElementById('revenueChart').getContext('2d');
var revenueChart = new Chart(ctx, {
    type: 'line', // نوع الرسم البياني
    data: {
        labels: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
        datasets: [{
            label: 'الإيرادات اليومية',
            data: [1200, 1500, 1000, 1800, 1300, 1600, 2000],
            borderColor: '#1577EA',
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
Swal.fire({
    title: 'تم!',
    text: 'تمت إضافة السائق بنجاح',
    icon: 'success',
    confirmButtonText: 'موافق'
});

}

// اختيار كل عناصر القائمة
const menuItems = document.querySelectorAll('.menu ul li a');

// إضافة حدث النقر على كل عنصر
menuItems.forEach(item => {
    item.addEventListener('click', function () {
        // إزالة الكلاس 'active' من كل العناصر
        menuItems.forEach(el => el.classList.remove('active'));
        
        // إضافة الكلاس 'active' للعنصر الذي تم النقر عليه
        this.classList.add('active');
    });
});