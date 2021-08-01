export function Nbspify(text, count = 1) {
    const setCharAt = (str, index, chr) => {
        if (index > str.length - 1) return str;
        return str.substring(0, index) + chr + str.substring(index + 1);
    }

    let switchCount = 0;
    for (let i = text.length - 1; i >= 0; i--) {
        if (text[i] === " ") {
            text = setCharAt(text, i, '\u00A0');
            if (++switchCount === count)
                return text;
        }
    }
    return text;
}
const Nbsp = () => {
    return ('\u00A0');
}

export default Nbsp;