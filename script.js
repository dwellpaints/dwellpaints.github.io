document.addEventListener('DOMContentLoaded', () => {
    // Sidebar navigation functionality
    const navLinks = document.querySelectorAll('.navigation ul li a');
    const sections = document.querySelectorAll('.dashboard-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active class from all links and add to the clicked one
            navLinks.forEach(nav => nav.parentElement.classList.remove('active'));
            link.parentElement.classList.add('active');

            // Hide all sections and show the target section
            sections.forEach(section => section.style.display = 'none');
            const targetId = link.getAttribute('href').substring(1); // Remove '#'
            document.getElementById(targetId).style.display = 'block';
        });
    });

    // Chart.js - Revenue vs. Expenses Chart
    const revenueExpenseCtx = document.getElementById('revenueExpenseChart').getContext('2d');
    new Chart(revenueExpenseCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Revenue',
                    data: [12000, 15000, 13000, 18000, 16000, 20000],
                    borderColor: '#4CAF50', // Primary color
                    backgroundColor: 'rgba(76, 175, 80, 0.2)',
                    fill: true,
                    tension: 0.1
                },
                {
                    label: 'Expenses',
                    data: [6000, 7000, 6500, 8000, 7500, 9000],
                    borderColor: '#FFC107', // Amber color
                    backgroundColor: 'rgba(255, 193, 7, 0.2)',
                    fill: true,
                    tension: 0.1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: false,
                    text: 'Revenue vs. Expenses'
                },
                legend: {
                    position: 'bottom',
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Chart.js - Account Balances Chart (Doughnut)
    const accountBalanceCtx = document.getElementById('accountBalanceChart').getContext('2d');
    new Chart(accountBalanceCtx, {
        type: 'doughnut',
        data: {
            labels: ['Cash', 'Bank Accounts', 'Accounts Receivable', 'Inventory'],
            datasets: [{
                data: [30000, 50000, 25000, 40000],
                backgroundColor: [
                    '#2196F3', // Blue
                    '#FFC107', // Amber
                    '#4CAF50', // Green
                    '#9C27B0'  // Purple
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: false,
                    text: 'Account Balances'
                },
                legend: {
                    position: 'bottom',
                }
            }
        }
    });
});
