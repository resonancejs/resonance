export function makeTwoDigits(num: any) {
    num = String(num);

    return num.length === 1
        ? '0' + num
        : num.length > 2
        ? num.substring(0, 2)
        : num;
}

export function currencyTransform(amount: string | number) {
    const split = String(amount).split('.');

    const dollars = split[0] || '0';
    const cents = split[1]
        ? split[1].length === 1
            ? `0${split[1]}`
            : split[1]
        : '00';

    return dollars + '.' + cents;
}
