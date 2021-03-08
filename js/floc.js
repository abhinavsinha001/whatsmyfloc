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
  if (oldIds.includes(data)){   
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
  for (var i = 0; i < flocIds.length; i++) {
      html+="<tr>";
      html+="<td>"+flocIds+"</td>";
      html+="</tr>";
  }
  html+="</table>";
  document.getElementById("box").innerHTML = html;
}

getFlocId();
