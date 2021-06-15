export const formatNumber = (strNum = 0) => {
    if (Number.isNaN(strNum)) return strNum;
    return Number(strNum).toLocaleString();
};

export function getTheRating(rating) {
    return (rating * 5) / 100;
}