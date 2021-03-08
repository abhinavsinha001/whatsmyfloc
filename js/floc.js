function getFlocId() {
  if(typeof document.interestCohort !== "undefined"){
    document.interestCohort().then(data => console.alert(data)); 
  }else{
    console.alert("FLoC feature not available/enabled on browser")
  }
}
getFlocId();
