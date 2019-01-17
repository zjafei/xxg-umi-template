const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;

/**
 * 判断给定的字符串是否是个url地址
 * @param path 地址
 * @returns {boolean} 如果是 返回 true，否则 false
 */
export function isUrl(path: string) {
    return reg.test(path);
}