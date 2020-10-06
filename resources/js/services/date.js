const currentDate = new Date();
const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];
const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

export function now(){
    return {
        getDate: days[currentDate.getDay()] + ' '
               + currentDate.getDate() + ' '
               + months[currentDate.getMonth()] + ' '
               + currentDate.getFullYear(),
        getTime: currentDate.getHours() + ':' + currentDate.getMinutes() + ' '
    }
}
