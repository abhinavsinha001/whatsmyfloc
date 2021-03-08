function getFlocId() {
  if(typeof document.interestCohort !== "undefined"){
    document.interestCohort().then(data => window.alert(data)); 
  }else{
    window.alert("FLoC feature not available/enabled on browser")
  }
}
getFlocId();
