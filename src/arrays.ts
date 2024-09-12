/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let bookEnd: number[] = [];
    if (numbers.length >= 2) {
        bookEnd.push(numbers[0]);
        bookEnd.push(numbers[numbers.length - 1]);
    } else if (numbers.length === 1) {
        bookEnd.push(numbers[0]);
        bookEnd.push(numbers[0]);
    }
    return bookEnd;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((numbers: number): number => numbers * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const stringToInt = numbers.map((numbers: string): number =>
        parseInt(numbers) ? parseInt(numbers) : 0,
    );
    return stringToInt;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removedDollar = amounts.map((numbers: string): string =>
        numbers.startsWith("$") ? numbers.slice(1) : numbers,
    );
    const parsedInts = removedDollar.map((numbers: string): number =>
        parseInt(numbers) ? parseInt(numbers) : 0,
    );
    return parsedInts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const filterQuestion = messages.filter(
        (message: string): boolean => !message.endsWith("?"),
    );
    const shoutExcl = filterQuestion.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message,
    );
    return shoutExcl;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter(
        (words: string): boolean => words.length < 4,
    );
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let isRGB: boolean = true;
    const checkRGB = colors.map((colors: string): string => {
        if (
            colors.toLowerCase() === "red" ||
            colors.toLowerCase() === "blue" ||
            colors.toLowerCase() === "green"
        ) {
            isRGB = isRGB;
        } else {
            isRGB = false;
        }
    });
    return isRGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    let sum: number = 0;
    const calcSum = addends.map((numbers: number): number => {
        sum += numbers;
    });
    let sumString: string = sum + "=";
    const makeSumString = addends.map((numbers: number): number => {
        sumString += numbers + "+";
    });
    sumString = sumString.slice(0, -1);
    return sumString;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let taking: bool = true;
    let sum: number = 0;
    let index: number = 0;
    const injectPos = values.map((numbers: number): number => {
        if (numbers > 0 && taking) {
            sum += numbers;
            index++;
        } else {
            taking = false;
        }
    });
    const injectedPos = [...values];
    injectedPos.splice(index + 1, 0, sum);
    return injectedPos;
}
