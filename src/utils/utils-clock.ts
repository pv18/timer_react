// Получить месяц
export const getMonth = () => {
    const days = ['Февраля', 'Января', 'Марта', 'Апреля', 'Майя', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    const now = new Date();
    return days[now.getMonth()]
}

// Получить число месяца
export const getNumberOfMonth = () => {
    return new Date().getDate()
}

// Получить день недели
export const getDay = () => {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const now = new Date();
    return days[now.getDay()]
}

// Получить актуальное время и вернуть в ввиде строки
export const getСurrentTime = () => {
    const date = new Date()
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

    return `${hours}:${minutes}:${seconds}`
}

// Получить актуальное время в процентном отношении к суткам
export const getPercent = () => {
    const date = new Date()

    let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

    let totalSec = (+h * 3600) + (+m * 60) + (+s * 60)

    return 100 * totalSec / 86400
}

// Преобразовать проценты в секунды, а потом вывод времени в ввиде строки
export const getTime = (percent: number) => {
    let d = percent * 86400 / 100;
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);

    let hDisplay = h > 0 ? h + ':' : '00:';
    let mDisplay = m > 0 ? m + ':' : '00:';
    let sDisplay = s > 0 ? s : '00';
    return hDisplay + mDisplay + sDisplay;
}

