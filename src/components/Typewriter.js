import { useEffect, useState } from "react"

const spans = [
    "My name is ",
    "Jeremy",
    " , and I am a ",
    "full&#8209;stack&#160;developer"
];

const Typewriter = () => {
    const [twPos, setTwPos] = useState({
        innerSpanI: 0,
        spanI: 0,
    });
    const getSpanText = (lineI) => {
        if (lineI < twPos.spanI)
            return spans[lineI];
        if (lineI > twPos.spanI)
            return "";
        return spans[lineI].substring(0, twPos.innerSpanI);
    }
    useEffect(() => {
        setTimeout(() => {
            let x = twPos.innerSpanI;
            let y = twPos.spanI;
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
        }, 50)
    }, [twPos]);

    return (
        <div className="display-4 px-3 pb-3 d-inline-block">
            <span>{getSpanText(0)}</span>
            <span className="text-primary">{getSpanText(1)}</span>
            <span>{getSpanText(2)}</span>
            <span className="text-secondary">{getSpanText(3)}</span>
        </div>
    );
}

export default Typewriter;