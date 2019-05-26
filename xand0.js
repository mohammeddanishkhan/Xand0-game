$(document).ready(function()
		{
	$("#playerTurn").val("X");
	$("#turnCount").val(0);
	$("#winnerBlockX").hide();
	$("#winnerBlock0").hide();
	$("#drawBlock").hide();
	$("#gameBlock").hide();
		});
		//var playerTurn='X';
		//var gameArray=new Array([]);
		
		function playerMode(obj)
		{
			if(obj=='1')
				{
				//alert('play with computer');
				$("#mode").val('1');
				document.getElementById("player1").val = "";
				$("#player1").val('');
				$("#player1").val('You get X and 1st turn');
				//document.getElementById("player1").val = "";
				$("#player2").hide();
				}
			if(obj=='2')
				{
				//alert('2 player');
				$("#mode").val('2');
				}
			
			$("#modeBlock").hide();
			$("#gameBlock").show();
			//alert($("#mode").val()+'mode');
			
		}
function NSE(rId,cId)
{
	var mode=$("#mode").val();
	var playerTurn=$("#playerTurn").val();
	//alert('mode'+mode);
	if(mode=='2')
		{
		var turnCount=$("#turnCount").val();
		//alert("turnCount"+turnCount);
		
		
		if(playerTurn=='X')
			{
			$("#"+rId+cId).val("X");
			$("#"+rId+cId).attr("disabled", "disabled");
			$("#"+rId+cId).css('color', 'red');
			$("#playerTurn").val("0");
			
			}
		else 
			{
			$("#"+rId+cId).val("0");
			$("#"+rId+cId).attr("disabled", "disabled");
			$("#"+rId+cId).css('color', 'orange');
			$("#playerTurn").val("X");
			}
		 //alert("currentturnCount"+turnCount);
		 turnCount++;
		 $("#turnCount").val(turnCount);
		// alert("alterdturnCount"+turnCount);
		 
		 var playerVal='';
		 if(playerTurn=='X')
			 {
			 playerVal=$("#playerXVal").val();	 
			 }
		 else if(playerTurn=='0')
			 {
			 playerVal=$("#player0Val").val();
			 }
		 
		 
		 /////////////////////////////
		 if(rId=='0')
			 {
			 if(cId=='0')
				 {
				 playerVal=playerVal+'1';
				 }
			 else if(cId=='1')
				 {
				 playerVal=playerVal+'2';
				 }
			 else if(cId=='2')
			 {
			 playerVal=playerVal+'3';
			 }
			 }
		 
		 if(rId=='1')
		 {
		 if(cId=='0')
			 {
			 playerVal=playerVal+'4';
			 }
		 else if(cId=='1')
			 {
			 playerVal=playerVal+'5';
			 }
		 else if(cId=='2')
		 {
		 playerVal=playerVal+'6';
		 }
		 }
		
		 
		 if(rId=='2')
		 {
		 if(cId=='0')
			 {
			 playerVal=playerVal+'7';
			 }
		 else if(cId=='1')
			 {
			 playerVal=playerVal+'8';
			 }
		 else if(cId=='2')
		 {
		 playerVal=playerVal+'9';
		 }
		 }
		 
		 
		 
		 
		 if(playerTurn=='X')
		 {
		 $("#playerXVal").val(playerVal);	 
		 }
	 else if(playerTurn=='0')
		 {
		 $("#player0Val").val(playerVal);
		 }
		////////////////////////////
		
		//alert($("#playerXVal").val()+'playerXVal');
		//alert($("#player0Val").val()+'player0Val');
		
		 //winner logic
		 if(turnCount>4)
			{
			 //alert('about to exuecute winner logic');
			 winner();
			}
		 if(turnCount>=9)
			 {
			 if($("#wonDraw").val()=='won')
				 {
				 
				 }
			 else
				 {
				 $("#drawBlock").show();
				 }
			 /* $(".gridClass").readonly=true;
			 document.getElementsByName("gridBox").disabled=true; */
			 $(".gridClass").attr("disabled", "disabled");
			 }
		}
	
	else if(mode=='1')
		{
		var turnCount=$("#turnCount").val();
	
		// start players turn
		//boolean centre=false;
		$("#"+rId+cId).val("X");
		//$(".gridClass").attr('readonly',true);
		$("#"+rId+cId).attr("disabled", "disabled");
		 var playerVal='';
		 var currntBlockOfX;
		 playerVal=$("#playerXVal").val();
		if(rId=='0')
		 {
		 if(cId=='0')
			 {
			 playerVal=playerVal+'1';
			 currntBlockOfX='1';
			 }
		 else if(cId=='1')
			 {
			 playerVal=playerVal+'2';
			 currntBlockOfX='2';
			 }
		 else if(cId=='2')
		 {
		 playerVal=playerVal+'3';
		 currntBlockOfX='3';
		 }
		 }
	 
	 if(rId=='1')
	 {
	 if(cId=='0')
		 {
		 playerVal=playerVal+'4';
		 currntBlockOfX='4';
		 }
	 else if(cId=='1')
		 {
		 if(turnCount=='0')
			 {
			 centre=true;
			 }
		 playerVal=playerVal+'5';
		 currntBlockOfX='5';
		 }
	 else if(cId=='2')
	 {
	 playerVal=playerVal+'6';
	 currntBlockOfX='6';
	 }
	 }
	
	 
	 if(rId=='2')
	 {
	 if(cId=='0')
		 {
		 playerVal=playerVal+'7';
		 currntBlockOfX='7';
		 }
	 else if(cId=='1')
		 {
		 playerVal=playerVal+'8';
		 currntBlockOfX='8';
		 }
	 else if(cId=='2')
	 {
	 playerVal=playerVal+'9';
	 currntBlockOfX='9';
	 }
	 }
	 $("#playerXVal").val(playerVal);
	 // end palyers turn
	 
	 
	 // start computer turn
	 playerVal='';
	 playerVal=$("#player0Val").val();
	 palyerXVal=$("#playerXVal").val();
	 
	 var compBlock;
	 if(turnCount=='0')
		 {
		 if(currntBlockOfX=='1'||currntBlockOfX=='3'||currntBlockOfX=='7'||currntBlockOfX=='9')
			 {
			 $("#11").val("0");
			 playerVal='5';
			$("#11").attr("disabled", "disabled");	 
			 }
		 else
			 {
			 //logic to place "0" in 1 or 3 or 5 or 7 or 9 bolck
			 var tempVO=generateRandom();
			 var tempArray=tempVO.split('-');
			 
			 
			 $("#"+tempArray[0]).val("0");
			 $("#"+tempArray[0]).attr("disabled", "disabled");	 
			 playerVal=''+tempArray[1];
			 }
		
			 //if(compBlock==)
		 }
	 else
		 {
		 if(palyerXVal=='19'||palyerXVal=='91'||palyerXVal=='37'||palyerXVal=='73')
			 {
			 $("#01").val("0");
			 $("#01").attr("disabled", "disabled");
			 playerVal=playerVal+2;
			 }
		 else
			 {
			 var playrStatus='';
			 playrStatus=chckIfPlayrCanWin(playerVal);
			 if($("."+playrStatus).val()=='X')
				 {
				 playrStatus='-1';
				 }
			 if(playrStatus=='-1')
				 {
				 playrStatus=chckIfPlayrCanWin(palyerXVal);
				 //$("."+playrStatus).val('0');
				 }
			 if(playrStatus=='-1')
				 {
					
				 for(var j=0;j<2;j++)
					 {
					 var ranNumb=Math.floor((Math.random()*10));
					 if(($("."+ranNumb).val()=='X'||$("."+ranNumb).val()=='0'||ranNumb=='0')&&turnCount!=8)
						 {
						 j=0;
						 }
					 else
						 {
						 playrStatus=ranNumb;
						 j=3;
						 }
					 }
				 
				 }
			$("."+playrStatus).val('0');
			 $("."+playrStatus).attr("disabled", "disabled");
			playerVal=playerVal+playrStatus;
			 console.log(playrStatus+'playrStatus');
			
			 }
		 
		 }
	 
	 
	 
	 
	 $("#player0Val").val(playerVal);
	 // end computer turm
	 
	 turnCount++;
	 turnCount++;
	 
	 $("#turnCount").val(turnCount);
	 
	//winner logic
	 if(turnCount>4)
		{
		 //alert('about to exuecute winner logic');
		 winner();
		}
	 if(turnCount>=9)
		 {
		 if($("#wonDraw").val()=='won')
			 {
			 
			 }
		 else
			 {
			 $("#drawBlock").show();
			 }
		 /* $(".gridClass").readonly=true;
		 document.getElementsByName("gridBox").disabled=true; */
		 $(".gridClass").attr("disabled", "disabled");
		 }
		}
	}
	
	
	function chckIfPlayrCanWin(playerVal)
	{
		//var playerXVal=$("#playerXVal").val();
		var count=0;
		var position=11;
		console.log(playerVal+'playerVal');
		var patternR1=[1,2,3];
		var patternR2=[4,5,6];
		var patternR3=[7,8,9];
		var patternC1=[1,4,7];
		var patternC2=[2,5,8];
		var patternC3=[3,6,9];
		var crossPattern1=[1,5,9];
		var crossPattern2=[3,5,7];
		
		for(var i=0;i<patternR1.length;i++)
			{
			if(playerVal.indexOf(patternR1[i])>=0)
				{
				count++;
				}else
					{
					position=patternR1[i];
					}
				
			}
		if(count>=2)
			{
			if($("."+position).val()=='0')
				{
				count=0;
				}
			else
				{
				return position;	
				}
			
			}
		
		count=0;
		for(var i=0;i<patternR2.length;i++)
		{
		if(playerVal.indexOf(patternR2[i])>=0)
			{
			count++;
			}else
				{
				position=patternR2[i];
				}
			
		}
	if(count>=2)
		{
		if($("."+position).val()=='0')
		{
		count=0;
		}
	else
		{
		return position;	
		}
		}
	
	count=0;
	for(var i=0;i<patternR3.length;i++)
	{
	if(playerVal.indexOf(patternR3[i])>=0)
		{
		count++;
		}else
			{
			position=patternR3[i];
			}
		
	}
if(count>=2)
	{
	if($("."+position).val()=='0')
	{
	count=0;
	}
else
	{
	return position;	
	}
	}
		
		
		
count=0;
for(var i=0;i<patternC1.length;i++)
{
if(playerVal.indexOf(patternC1[i])>=0)
	{
	count++;
	}else
		{
		position=patternC1[i];
		}
	
}
if(count>=2)
{
	if($("."+position).val()=='0')
	{
	count=0;
	}
else
	{
	return position;	
	}
}
	
	
count=0;
for(var i=0;i<patternC2.length;i++)
{
if(playerVal.indexOf(patternC2[i])>=0)
	{
	count++;
	}else
		{
		position=patternC2[i];
		}
	
}
if(count>=2)
{
	if($("."+position).val()=='0')
	{
	count=0;
	}
else
	{
	return position;	
	}
}



count=0;
for(var i=0;i<patternC3.length;i++)
{
if(playerVal.indexOf(patternC3[i])>=0)
	{
	count++;
	}else
		{
		position=patternC3[i];
		}
	
}
if(count>=2)
{
	if($("."+position).val()=='0')
	{
	count=0;
	}
else
	{
	return position;	
	}
}
	
	
count=0;
for(var i=0;i<crossPattern1.length;i++)
{
if(playerVal.indexOf(crossPattern1[i])>=0)
	{
	count++;
	}else
		{
		position=crossPattern1[i];
		}
	
}
if(count>=2)
{
	if($("."+position).val()=='0')
	{
	count=0;
	}
else
	{
	return position;	
	}
}



count=0;
for(var i=0;i<crossPattern2.length;i++)
{
if(playerVal.indexOf(crossPattern2[i])>=0)
	{
	count++;
	}else
		{
		position=crossPattern2[i];
		}
	
}
if(count>=2)
{
	if($("."+position).val()=='0')
	{
	count=0;
	}
else
	{
	return position;	
	}
}
return '-1';
	}
	function generateRandom()
	{
		var ranNumb=Math.floor((Math.random()*10));
		if(ranNumb==1||ranNumb==3||ranNumb==7||ranNumb==9)
			{
			//return ranNumb;
			}
		else if(ranNumb==4||ranNumb==5)
			{
			 ranNumb=7;
			}
		else
			{
			ranNumb=ranNumb+1;
			//return ranNumb;
			}
		
		if(ranNumb==1)
			{
			return '00-1';
			}
		else if(ranNumb==3)
			{
			return '02-3';
			}
		else if(ranNumb==7)
		{
		return '20-7';
		}
		else if(ranNumb==9)
		{
		return '22-9';
		}
	}
function winner()
{
	var playerXCred=$("#playerXVal").val();
	var player0Cred=$("#player0Val").val();
	//alert(playerXCred+'playerXCred');
	//alert(player0Cred+'player0Cred');
	
	var playerXCredVal=playerXCred.replace(/(.{1})/g,"$1,");
	playerXCredVal=playerXCredVal.substring(0,playerXCredVal.lastIndexOf(','));
	var player0CredVal=player0Cred.replace(/(.{1})/g,"$1,");
	player0CredVal=player0CredVal.substring(0,player0CredVal.lastIndexOf(','));
	//alert(playerXCredVal+'playerXCredVal');
	//alert(player0CredVal+'player0CredVal');
	
	
	//create aray and sort them
	var playerXCredArray=playerXCredVal.split(','); //playerXCredArray
	playerXCredArray.sort();
	var player0CredArray=player0CredVal.split(','); 
	player0CredArray.sort();
	//alert(playerXCredArray+'playerXCredArray');
	//alert(player0CredArray+'player0CredArray');
	//end 
	
	
	//compare with standard patterns
	var playerXAscString=playerXCredArray.toString();
	playerXAscString=playerXAscString.replace(/,/g,'');
	//alert(playerXAscString+'playerXAscString');
	var player0AscString=player0CredArray.toString();
	player0AscString=player0AscString.replace(/,/g,'');
	//alert(player0AscString+'player0AscString');
	var patternR1=[1,2,3];
	var patternR2=[4,5,6];
	var patternR3=[7,8,9];
	var patternC1=[1,4,7];
	var patternC2=[2,5,8];
	var patternC3=[3,6,9];
	var crossPattern1=[1,5,9];
	var crossPattern2=[3,5,7];
	
	
/* 	 if(playerXAscString.toString().indexOf(patternR1.toString())>=0||playerXAscString.toString().indexOf(patternR2.toString())>=0||playerXAscString.toString().indexOf(patternR3.toString())>=0||playerXAscString.toString().indexOf(patternC1.toString())>=0||playerXAscString.toString().indexOf(patternC2.toString())>=0||playerXAscString.toString().indexOf(patternC3.toString())>=0||playerXAscString.toString().indexOf(crossPattern1.toString())>=0||playerXAscString.toString().indexOf(crossPattern2.toString())>=0)
		{
		//alert('player X has won');
		$("#winnerBlockX").show();
		}
	if(player0AscString.toString().indexOf(patternR1.toString())>=0||player0AscString.toString().indexOf(patternR2.toString())>=0||player0AscString.toString().indexOf(patternR3.toString())>=0||player0AscString.toString().indexOf(patternC1.toString())>=0||player0AscString.toString().indexOf(patternC2.toString())>=0||player0AscString.toString().indexOf(patternC3.toString())>=0||player0AscString.toString().indexOf(crossPattern1.toString())>=0||player0AscString.toString().indexOf(crossPattern2.toString())>=0)
		{
		//alert('player 0 has won');
		$("#winnerBlock0").show();
		} 
	 */
 	if((test(playerXCredArray,patternR1))||(test(playerXCredArray,patternR2))||(test(playerXCredArray,patternR3))||(test(playerXCredArray,patternC1))||(test(playerXCredArray,patternC2))||(test(playerXCredArray,patternC3))||(test(playerXCredArray,crossPattern1))||(test(playerXCredArray,crossPattern2)))
		{
		$("#winnerBlockX").show();
		$("#wonDraw").val('won');
		//$(".gridClass").readonly=true;
		 $(".gridClass").attr("disabled", "disabled"); 
		//document.getElementsByName("gridBox").disabled=true;
		} 
		
	/*  	alert('(test(playerXCredArray,patternR1))'+(test(playerXCredArray,patternR1)));
		alert('(test(playerXCredArray,patternR2))'+(test(playerXCredArray,patternR2)));
		alert('(test(playerXCredArray,patternR3))'+(test(playerXCredArray,patternR3)));
		alert('(test(playerXCredArray,patternC1))'+(test(playerXCredArray,patternC1)));
		alert('(test(playerXCredArray,patternC2))'+(test(playerXCredArray,patternC2)));
		alert('(test(playerXCredArray,patternC3))'+(test(playerXCredArray,patternC3)));
		alert('(test(playerXCredArray,crossPattern1))'+(test(playerXCredArray,crossPattern1)));
		alert('(test(playerXCredArray,crossPattern2))'+(test(playerXCredArray,crossPattern2))); */ 
	
		else if((test(player0CredArray,patternR1))||(test(player0CredArray,patternR2))||(test(player0CredArray,patternR3))||(test(player0CredArray,patternC1))||(test(player0CredArray,patternC2))||(test(player0CredArray,patternC3))||(test(player0CredArray,crossPattern1))||(test(player0CredArray,crossPattern2)))
	{
	$("#winnerBlock0").show();
	$("#wonDraw").val('won');
/* 	$(".gridClass").readonly=true;
	document.getElementsByName("gridBox").disabled=true; */
	$(".gridClass").attr("disabled", "disabled");
	} 
		
/* 	
	alert('(test(player0CredArray,patternR1))'+(test(player0CredArray,patternR1)));
	alert('(test(player0CredArray,patternR2))'+(test(player0CredArray,patternR2)));
	alert('(test(player0CredArray,patternR3))'+(test(player0CredArray,patternR3)));
	alert('(test(player0CredArray,patternC1))'+(test(player0CredArray,patternC1)));
	alert('(test(player0CredArray,patternC2))'+(test(player0CredArray,patternC2)));
	alert('(test(player0CredArray,patternC3))'+(test(player0CredArray,patternC3)));
	alert('(test(player0CredArray,crossPattern1))'+(test(player0CredArray,crossPattern1)));
	alert('(test(player0CredArray,crossPattern2))'+(test(player0CredArray,crossPattern2))); */
	
	
	//end
	}
	
	
function test(playerCredArray,pattern)
{
	//alert('playerCredArray'+playerCredArray);
	//alert('pattern'+pattern);
	var count=0;
	for (var i=0;i<pattern.length;i++)
		{
		//alert('pattern[i]'+pattern[i]);
		//alert('playerCredArray'+playerCredArray);
		//alert($.inArray(pattern[i].toString(),playerCredArray)+'inArray');
		if($.inArray(pattern[i].toString(),playerCredArray)>=0)
			{
			count++;
			//alert(count+'count');		
			}
		}
	
	if(count==3)
		{
		for(var i=0;i<pattern.length;i++)
			{
				if(pattern[i]=='1')
					{
						$("#00").css('background-color','yellow');
					}
				if(pattern[i]=='2')
					{
						$("#01").css('background-color','yellow');
					}
				if(pattern[i]=='3')
					{
						$("#02").css('background-color','yellow');
					}
				if(pattern[i]=='4')
					{
						$("#10").css('background-color','yellow');
					}
				if(pattern[i]=='5')
					{
						$("#11").css('background-color','yellow');
					}
				if(pattern[i]=='6')
					{
						$("#12").css('background-color','yellow');
					}
				if(pattern[i]=='7')
					{
						$("#20").css('background-color','yellow');
					}
				if(pattern[i]=='8')
					{
						$("#21").css('background-color','yellow');
					}
				if(pattern[i]=='9')
					{
						$("#22").css('background-color','yellow');
					}			
				//$("#"+pattern[i].toString()).css('color','green');
			}
		return true;
		}
	else
		{
		return false;
		}
}

function refresh()
{
 $(".gridClass").each( function(){ $(this).attr("disabled", false);});
 $(".gridClass").each( function(){ $(this).attr("readonly", "readonly");});
$(".gridClass").each( function(){ $(this).val("");});
$(".gridClass").each(function(){ $(this).css('color','white');});
//$(".gridClass").each(function(){ $(this).removeCss()});
//$(".gridClass").each(function(){ $(this).css('background-color','white')});
$(".gridClass").each(function(){ 
	$(this).attr('css','background-color:white');
	});

}