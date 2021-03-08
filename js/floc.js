export function getFlocId() {
  if(typeof typeof document.interestCohort !== "undefined"){
    document.interestCohort().then(data => console.alert(data)); 
  }
}
