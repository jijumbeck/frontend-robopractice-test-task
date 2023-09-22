const MAX_DAYS_IN_MONTH = 31;


export const handleClientObject = (client, month = 5) => {
    let minutesOfDays = Array(MAX_DAYS_IN_MONTH).fill(0);
    let totalMinutes = 0;
    client.Days.forEach(day => {
        const startDate = mapTimeStringToDate(day.Date, day.Start);
        const endDate = mapTimeStringToDate(day.Date, day.End);

        if (startDate.getMonth() + 1 === month) {
            const [hours, minutes] = getTimeHoursMinDifference(startDate, endDate);
            totalMinutes += minutes + hours * 60;
            minutesOfDays[startDate.getDate() - 1] = hours * 60 + minutes;
        }
    });

    return {
        ...client,
        minutesOfDays,
        totalMinutes,
    }
}

export const getTimeHoursMinDifference = (start, end) => {
    const diff = new Date(end-start);
    return [diff.getHours() + Math.floor(diff.getTimezoneOffset() / 60), diff.getMinutes()];
}

export const mapTimeStringToDate = (dateString, timeString) => {
    const date = new Date(Date.parse(dateString));

    let [hours, minutes] = timeString.split('-');
    date.setUTCHours(hours);
    date.setUTCMinutes(minutes);
    
    return date;
}

export const mapTimeHoursMinToString = (minutes = 0, hours = 0) => {
    if (minutes >= 60) {
        hours += Math.floor(minutes / 60);
        minutes %= 60;
    }

    if (minutes === 0) {
        return hours;
    } else if (minutes > 0 && minutes < 10) {
        return `${hours}:0${minutes}`;
    }

    return `${hours}:${minutes}`;
}
