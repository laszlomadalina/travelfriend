const addButton = document.querySelector("#addBtn");
const delButton=document.querySelector("#delBtn");
const theTable=document.querySelector("#tableId");
var nrItem=document.querySelector("#total-nr").innerHTML;



			function loadDoc(url, cFunction)
			{
				var xhttp;
				xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function()
				{
					if (this.readyState == 4 && this.status == 200)
					{
						cFunction(this);
					}
				};
				xhttp.open("GET", url, true);
				xhttp.send();
			}

			function successFunction(xhttp)
			{
				var data = JSON.parse(xhttp.responseText);
				for (i = 0; i < data.users.length; i ++)
				{
					addTableRow(data.users[i],[i+1]);
				}
				document.querySelector("#total-nr").innerHTML=data.users.length;
			}

			function addTableRow(user,i)
			{
				var table = document.getElementById("tableId");
				var tr = document.createElement("tr");
				table.appendChild(tr);
				var td = document.createElement("td");
						var check=document.createElement("input");
						check.type='checkbox';
						check.id = 'chk'+i;
						td.appendChild(check);
						tr.appendChild(td);
				for (x in user)
				{
					var td = document.createElement("td");
					var txt = document.createTextNode(user[x]);
					td.appendChild(txt);
					tr.appendChild(td);
				}

			}

function addData(){
        var routeName = document.querySelector("#routeNameId").value;
        var fromLoc = document.querySelector("#fromId").value;
        var toLoc = document.querySelector("#toId").value;
        var duration = document.querySelector("#durationId").value;
        var city = document.querySelector("#cityId").value;
        var rows = "";

        var nr = parseInt(document.querySelector("#total-nr").innerHTML);
        nr++;
        document.querySelector("#total-nr").innerHTML=nr;

				//new version of add
				var table = document.getElementById("tableId");
				var tr=document.createElement("tr");
				table.appendChild(tr);
				//add checkbox
				var td=document.createElement("td");
				var check=document.createElement("input");
        check.type='checkbox';
        check.id='chk'+nr;
        td.appendChild(check);
        tr.appendChild(td);
				//add firstName
				var td = document.createElement("td");
				var fn = document.createTextNode(routeName);
				fn.id="fn";
				td.appendChild(fn);
				tr.appendChild(td);
				//add lastName
				var td = document.createElement("td");
				var ln = document.createTextNode(fromLoc);
				ln.id="ln";
				td.appendChild(ln);
				tr.appendChild(td);
				//add phone nr
				var td = document.createElement("td");
				var pn = document.createTextNode(toLoc);
				pn.id="pn";
				td.appendChild(pn);
				tr.appendChild(td);
				//add email
				var td = document.createElement("td");
				var e = document.createTextNode(duration);
				e.id="email";
				td.appendChild(e);
				tr.appendChild(td);
				//add city
				var td = document.createElement("td");
				var c = document.createTextNode(city);
				c.id="ln";
				td.appendChild(c);
				tr.appendChild(td);



/*
        var checkinput="<td><input type='checkbox' id = 'chk" + nr +"'></td>";
        rows += "<tr>" +checkinput+ "<td>" + firstName + "</td><td>" + lastName + "</td><td>" + phoneNr + "</td><td>" + email + "</td><td>" + city + "</td></tr>";

        $(rows).appendTo("#tableId");
        var tableRows = document.getElementById("tableId").innerHTML;
        tableRows+=rows;
        console.log(document.getElementById("tableId").innerHTML);
				(resetId())
				*/
				
		
        (function ResetForm(){
            document.getElementById("formId").reset();
          }()
        )
}

function removeData(){
  var k=0;
    var n=parseInt(document.querySelector("#total-nr").innerHTML);
    for(let i=1;i<=n;i++){
      var checkItem=document.querySelector(("#chk"+i));
      if(checkItem.checked){
        theTable.deleteRow(i-k);
        k++;
      }
    }
    n-=k;
    document.querySelector("#total-nr").innerHTML=n;
		(resetId())
}

function resetId(){
	var counter=0;
	for(let i=1;i<=n+k;i++){
		if(document.querySelector(("#chk"+i))){
			var checkItem=document.querySelector(("#chk"+i));
			counter++;
			checkItem.id=("chk"+counter);
		}
	}
}


function displayData(){
    var textArea = document.getElementById('info-zone');
    var tableInfo = [];
    var n=parseInt(document.querySelector("#total-nr").innerHTML);
      for (var i = 0, row; row = theTable.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
            tableInfo.push(theTable.rows[i].cells[j].innerText);
        }
      }
      var myCellCollection =document.getElementById("tableId").rows[0].cells;
          console.log(myCellCollection);
}

function displayData1(){
        var table = document.getElementById('tableId');
        var moreDetails = ' ';
        for (var r = 0, n = table.rows.length; r < n; r++) {
            var checkItem=document.querySelector(("#chk"+r));
            if(checkItem && checkItem.checked){
              var cellWithoutCheckBox = ' ';
              for (var c = 1; c< table.rows[r].cells.length; c++) {
                cellWithoutCheckBox += table.rows[r].cells[c].innerHTML + " ";
              }
              moreDetails += '<br>';
              moreDetails += cellWithoutCheckBox;
            }
            //}
        }
        document.querySelector("#info-zone-text").innerHTML = moreDetails;
    }




addButton.addEventListener("click", addData, false);
delButton.addEventListener("click", removeData, false);
detailsBtn.addEventListener("click", displayData1, false);
