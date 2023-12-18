// Показати або приховати кнопку вгору при прокручуванні сторінки
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollButton = document.getElementById("scrollBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

// Плавний скролл вгору при кліці на кнопку
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



// Дані для графіка
var data = {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    datasets: [{
      label: 'Кількість людей, що отримали допомогу',
      data: [4000, 7500, 10500, 12000, 16000],
      borderColor: '#36a2eb',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderWidth: 2,
      pointRadius: 5,
      pointHoverRadius: 8,
    }]
  };

  // Опції графіка
  var options = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Зростання Кількості Людей, Що Отримали Допомогу (у шт)',
      fontSize: 16,
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Кількість Людей',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Рік',
        },
      },
    },
  };

  // Отримання контексту для малювання на Canvas
  var ctx = document.getElementById('helpGrowthChart').getContext('2d');

  // Створення графіка
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options,
  });


  
