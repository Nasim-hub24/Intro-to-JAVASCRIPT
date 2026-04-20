
function finalScore(omr) {
    if (
        typeof omr !== "object" ||
        omr === null ||
        !("right" in omr) ||
        !("wrong" in omr) ||
        !("skip" in omr)
    ) 
    {
        return "Invalid";
    }
    const { right, wrong, skip } = omr;
    if (
        typeof right !== "number" ||
        typeof wrong !== "number" ||
        typeof skip !== "number"
    ) 
    {
        return "Invalid";
    }
    if (right + wrong + skip !== 100) 
        {
        return "Invalid";
        }
    let score = right * 1 + wrong * (-0.5) + skip * 0;
    return Math.round(score);
}