import { useLayoutEffect, useState } from "react"

const useTypewriter = (spans, delay, initDelay) => {
    const [twPos, setTwPos] = useState({
        innerSpanI: 0,
        spanI: 0,
    });
    const getTwText = (lineI) => {
        if (lineI < twPos.spanI)
            return spans[lineI];
        if (lineI > twPos.spanI)
            return "";
        return spans[lineI].substring(0, twPos.innerSpanI);
    }
    useLayoutEffect(() => {
        let x = twPos.innerSpanI;
        let y = twPos.spanI;
        let d = delay;
        if (x === 0 && y === 0)
            d = initDelay;
        setTimeout(() => {
            if (y === spans.length)
                return;
            x++;
            if (x === spans[y].length) {
                x = 0;
                y++;
            }
            if (y <= spans.length)
                setTwPos({
                    innerSpanI: x,
                    spanI: y
                });
        }, d + Math.round(Math.random() * 10 - 5))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [twPos]);

    return [getTwText];
}

export default useTypewriter;