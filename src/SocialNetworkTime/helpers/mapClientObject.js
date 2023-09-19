const MAX_DAYS_IN_MONTH = 31;

export const getClientTimeForMonth = (client, month = 5) => {
    let days = Array(MAX_DAYS_IN_MONTH).fill(0);
    let sumHours = 0;
    let sumMinutes = 0;
    client.Days.forEach(day => {
        const startDate = mapTimeStringToDate(day.Date, day.Start);
        const endDate = mapTimeStringToDate(day.Date, day.End);

        if (startDate.getMonth() + 1 === month) {
            const [hours, minutes] = getTimeHoursMinDifference(startDate, endDate);
            sumHours += hours;
            sumMinutes += minutes;
            days[startDate.getDate() - 1] = mapTimeHoursMinToString(hours, minutes);
        }
    });

    sumHours += Math.floor(sumMinutes / 60);
    sumMinutes = sumMinutes % 60;

    return {
        ...client,
        days,
        averagePerMonth: mapTimeHoursMinToString(sumHours, sumMinutes),
    }
}

export const getTimeHoursMinDifference = (start, end) => {
    const diff = new Date(end-start);
    return [diff.getHours(), diff.getMinutes()];
}

export const mapTimeStringToDate = (dateString, timeString) => {
    const date = new Date(Date.parse(dateString));

    let [hours, minutes] = timeString.split('-');
    date.setHours(hours);
    date.setMinutes(minutes);
    
    return date;
}

export const mapTimeHoursMinToString = (hours, minutes) => {
    if (minutes === 0) {
        return hours;
    } else if (minutes > 0 && minutes < 10) {
        return `${hours}:0${minutes}`;
    }

    return `${hours}:${minutes}`;
}