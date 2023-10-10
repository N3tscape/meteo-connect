function addZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
}
function formateSunSetRi(sunsetri) {
    const date = new Date(sunsetri);
    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());
    return `${hours}h${minutes}`;
}

export default formateSunSetRi;