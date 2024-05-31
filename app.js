document.addEventListener('DOMContentLoaded', () => {

    const panels = document.querySelectorAll('.panels');
    const dailyButton = document.querySelector('.daily-button');
    const weeklyButton = document.querySelector('.weekly-button');
    const monthlyButton = document.querySelector('.monthly-button');


    async function fetchData() {

        try {
            const res = await fetch('data.json');
            const data = await res.json();

            return data;

        }
        catch (e) {
        console.log('Oops error at: ' e);
        }

    }



})

