document.addEventListener('DOMContentLoaded', () => {
    const dailyButton = document.querySelector('.daily-button');
    const weeklyButton = document.querySelector('.weekly-button');
    const monthlyButton = document.querySelector('.monthly-button');
    let currentHours = document.querySelectorAll('.current-hours');
    let lastWeekHours = document.querySelectorAll('.last-week-hours');

    let data;

    const fetchData = async () => {
        try {
            const res = await fetch('data.json');
            data = await res.json(); 
            console.log(data);

          
            dailyButton.addEventListener('click', (e) => {
                e.preventDefault();
                updateUI('daily');
            });

            weeklyButton.addEventListener('click', (e) => {
                e.preventDefault();
                updateUI('weekly');
            });

            monthlyButton.addEventListener('click', (e) => {
                e.preventDefault();
                updateUI('monthly');
            });

        } catch (e) {
            console.log('Oops, error at:', e);
        }
    };

    const updateUI = (period) => {
        if (data) {
            data.forEach((activity, index) => {
                currentHours[index].innerHTML = `${activity.timeframes[period].current}hrs`;
                lastWeekHours[index].innerHTML = `${activity.timeframes[period].previous}hrs`;
            });
        } else {
            console.log(`Data for ${period} period is not available.`);
        }
    };
    

    fetchData(); 
});
