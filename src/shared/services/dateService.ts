const months = [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',
];

export const getDay = (date: Date): string => {
    return date.toLocaleDateString("en-GB", {
        day: "2-digit",
    })
}
export const getMonthInDigit = (date: Date): string => {
    return date.toLocaleDateString("en-GB", {
        month: "2-digit",
    })
}
export const getMonthInString = (date: Date): string => {
    return months[date.getMonth()]
}
export const getYear = (date: Date): string => {
    return date.toLocaleDateString("en-GB", {
        year: "numeric",
    })
}

export const getDateFormat = (date: Date): {
    day: string,
    monthInDigit: string,
    monthInString: string,
    year: string
} => {
    return {
        day: getDay(date),
        monthInDigit: getMonthInDigit(date),
        monthInString: getMonthInString(date),
        year: getYear(date)
    }
}