const fetch = require('node-fetch');


/****************
 * Mandatory fields
 * 1) bearerToken
 * 2) workingsDays
 * 3) period_id
 */
// 1) bearerToken: Set your bearer token (cookie)
const bearerToken = 'xxxxxxx';

// 2) workingsDays: Set your workingsDays
const workingsDays = [3,5,6,7,8];

// 3) period_id: Set your period id
const period_id = 'XXXXXX';

const api = 'https://api.factorialhr.com/attendance/shifts';
const firstPeriod = {
    clock_in: '09:00',
    clock_out: '15:00'
};

const secondPeriod = {
    clock_in: '16:00',
    clock_out: '18:00'
};

const setDaySchedule = async ({ day, clock_in, clock_out, period_id }) => {
    setTimeout(async () => {

        const response = await fetch(api, {
            method: 'POST',
            body: JSON.stringify({
                day,
                period_id,
                clock_out,
                clock_in
            }),
            headers: {
                'Content-Type': 'application/json',
                cookie: bearerToken
            }
        });
        const data = await response.json();

        console.log('Fichando.... ', day, clock_in);
        console.log(data);
    }, 1000);

}


workingsDays.forEach(async day => {
    await setDaySchedule({day, period_id , ...firstPeriod})
    await setDaySchedule({day, period_id , ...secondPeriod})
});


