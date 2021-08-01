const bearerToken = 'xxxxxx'; // Set your bearer token (cookie)
const workingsDays = [1,2,3,4,5]; // Set your workingsDays
const period_id = 'dddd'; // Set your period id

const api = 'https://api.factorialhr.com/attendance/shifts';
const firstPeriod = {
    clock_in: '09:00',
    clock_out: '15:00'
};

const secondPeriod = {
    clock_in: '16:00',
    clock_out: '18:00'
};

const setDaySchedule = async ({ day, clock_in, clock_out }) => {
    await fetch(api, {
        method: 'POST',
        body: {
            day,
            period_id,
            clock_out,
            clock_in
        },
        headers: {
            cookie: bearerToken
        }
    })
}


workingsDays.forEach(day => {
    setDaySchedule({day , ...firstPeriod})
    setDaySchedule({day , ...secondPeriod})
});


