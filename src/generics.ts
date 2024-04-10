function getFirstElelment<T>(data: T[]): T | null {
    if (!data.length) {
        return null;
    }

    const [FirstElelment] = data;
    return FirstElelment;
}

const stringArray: string[] = ['lucas', 'Fernanda', ' Gabriel', ' Maria']
const numberArrey: number[] = [1, 2, 3, 4, 5, 6]

console.log (getFirstElelment<string>(stringArray))
console.log (getFirstElelment<number>(numberArrey))