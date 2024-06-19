export const fetcher = (...args) => fetch(...args).then((res) => res.json());


 export const formater = Intl.NumberFormat("en", {
   notation: "compact",
   compactDisplay: "short",
 });