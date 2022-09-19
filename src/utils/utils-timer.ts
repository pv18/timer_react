// Вернуть время в ввиде строки для таймера
export const getСonvertedTimeForTimer = (value: number) => {
    let h = Math.floor(value / 3600);
    let m = Math.floor(value % 3600 / 60);
    let s = Math.floor(value % 3600 % 60);

    let hDisplay = h < 10 ? '0' + h : h
    let mDisplay = m < 10 ? '0' + m : m
    let sDisplay = s < 10 ? '0' + s : s

    return `${hDisplay}:${mDisplay}:${sDisplay}`
}

//Вернуть процент от общего времени в текущем значении таймера
export const getTimerPercent = (total: number, current: number) => {
    return 100 * current / total
}