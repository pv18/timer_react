// Получить процент от минуты
export const getPercentMinutes = (time: number) => {
    let milliseconds = Math.floor(time / 1000 % 3600 % 60);
    return milliseconds * 100 / 60
}

// Вернуть время в ввиде строки для секундомера
export const getСonvertedTime = (value: number) => {
    let m = Math.floor(value / 1000 % 3600 / 60);
    let s = Math.floor(value / 1000 % 3600 % 60);
    let ms = Math.floor((value / 10) % 100);

    let minutes = m < 10 ? '0' + m : m
    let seconds = s < 10 ? '0' + s : s
    let milliseconds = ms < 10 ? '0' + ms : ms

    return `${minutes}:${seconds}.${milliseconds}`
}