export const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "usd",
    style: "currency",
    minimumFractionDigits: 0 //this will help keep the amount as a whole number
    
})