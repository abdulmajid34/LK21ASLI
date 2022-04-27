export function formatDecimal(number) {
    if (number > 0) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      } else  {
        return (number == null ? "" : number.toString()).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
      }
}