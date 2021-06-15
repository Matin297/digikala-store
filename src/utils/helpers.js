export const formatNumber = (strNum = 0) => {
    if (Number.isNaN(strNum)) return strNum;
    return Number(strNum).toLocaleString();
};

export function getTheRating(rating = 0) {
    return (rating * 5) / 100;
}