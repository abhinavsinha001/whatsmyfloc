function getFlocId() {
  if(typeof document.interestCohort !== "undefined"){
    document.interestCohort().then(data => storeFlocId(data));
    displayFlocIds();
  }else{
    window.alert("FLoC feature not available/enabled on browser")
  }
}

function storeFlocId(data){
  var olddata=localStorage.getItem('flocId')
  var oldIds = JSON.parse(olddata) || [];
  if (oldIds.includes(data) && oldIds[oldIds.length-1]== data){
    console.log("FLoC ID not updated:"+data);
  }else{
    oldIds.push(data)
    localStorage.setItem("flocId",JSON.stringify(oldIds))
  }
}

function displayFlocIds(){
  var data=localStorage.getItem('flocId')
  var flocIds = JSON.parse(data) || [];
  var html = "<table border='1|1'>";
  for (var i = flocIds.length-1; i >= 0; i--) {
      
      html+="<tr>";
      html+="<td>"+flocIds[i]+"</td>";
      if (i==(flocIds.length-1)){
        html+="<td>Current</td>";
      }else{
        html+="<td></td>";
      }
      html+="</tr>";
  }
  html+="</table>";
  document.getElementById("box").innerHTML = html;
}

getFlocId();
