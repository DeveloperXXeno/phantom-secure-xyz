export const html = `<div class=mmenu style='display: none; position: absolute; width: 100vw; top: 10vw; z-index:100;'>
	<div>
		<ul style='  list-style-type: none; margin: 0; padding: 0; overflow: hidden;'>

<li class=mmh><b>PRODUCT</b><br>
<li><a href="/">HOME</a><br>
<li><a href="/encrypted-messaging">ENCRYPTED MESSAGING</a><br>
<li><a href="/encrypted-chat">ENCRYPTED CHAT</a><br>
<li><a href="/packages">PACKAGES</a>
<li class=mmh><b>CORPORATE</b><br>
<li><a href="/about">ABOUT</a><br>
<li><a href="/our-service">OUR SERVICE</a><br>
<li><a href="/privacy-matters">PRIVACY MATTERS</a><br>
<li><a href="/start-today">START TODAY</a><br>
<li><a href="/opportunities">OPPORTUNITIES</a>
<li class=mmh><b>POLICIES & TERMS</b><br>
<li><a href="/legal">LEGAL COMPLIANCE</a><br>
<li><a href="/faq">FAQ</a>
<li class=mmh><b>CONNECT</b><br>
<li><a href="/privacy-articles">PRIVACY ARTICLES</a><br>

		</ul>
	</div>
</div>
<div class=topbar>
<div class=mobile>
  <li class="icon">
    <a href="javascript:;" style="font-size:6vw;" onClick='$(".mmenu").toggle();'>☰</a>
  </li>
</div>
<div class="left topicon mhidden">
<a href="/"><img src="/ps/top_1.png" border=0 class=topicon></a><a href="/encrypted-messaging"><img src="/ps/top_2.png" border=0 class="topicon mhidden"></a><a href="/encrypted-chat"><img src="/ps/top_3.png" border=0 class="topicon mhidden"></a><a href="/packages"><img src="/ps/top_4.png" border=0 class="topicon"></a>
</div>
<div class="right topicon mhidden">
<a href="/buy"><img src="/ps/top_5.png" border=0 class=topicon></a><a href="/opportunities"><img src="/ps/top_6.png" border=0 class="topicon mhidden"></a></div>
</div>





<div data-nomargin=1 >

        <div class="titlelb" align=center><span style='color:#cbb559'>Contact Sales</span></div>
        <center>
        <div class="textlb" style='width:80%; align:center; text-align: center;'>
        Please fill out the form below and your order will be directed to our sales team or local distributor.<br>
All information is confidential and will be destroyed when no longer needed. <br>
Payments are also not linked to devices. A Sales Representative will contact you.
<p>
        </div>
</div>



<form method=POST>
	<table class=orderform width=85% bgcolor="#333333" align=center border=0 cellpadding=25>
	<tr><td valign=bottom width=70%>

		<table class=cartform align=center width=100%>
			<tr>
				<td valign=bottom style='color:#bd9f03'><font color="#998675"  width=35%>ORDER INFORMATION</font><p>

Model<br>
<select style='width:80%' name=model id=model onChange='$("#modelimg").attr("src","img_pd_"+$(this).val()+".png");'>
	<option value=1>PS Classic</option>
	<option value=2>PS Android</option>
</select><br>
Quantity<br>
<select style='width:30%' name=unit id=unit>
<option value=1>1 unit</option>
<option value=2>2 units</option>
<option value=3>3 units</option>
<option value=4>4 units</option>
<option value=5>5 units</option>
<option value=6>6 units</option>
<option value=7>7 units</option>
<option value=8>8 units</option>
<option value=9>9 units</option>
<option value=10>10 units</option>
</select> &nbsp;&nbsp;<img align=absmiddle src="/ps/add_to_order.png" width=40% onClick='$("#od"+$("#model").val()).html($("#unit").val());$("#quantity"+$("#model").val()).val($("#unit").val());'><br>
Shipping Address<br>
<input type=text style='width:80%'  name=shipping><br>
Country<br>
<select type=text class="countries" id="countryId" style='width:80%' name=country></select><br>
State<br>
<select type=text class="states" id="stateId" style='width:80%' name=state></select><br>
City<br>
<input type=text class="cities" id="cityId" style='width:80%' name=state><br>
ZIP<br>
<input type=text style='width:80%'  name=postal><br>
				</td>
				
				<td align=center width=30% valign=middle>
				<img src="/ps/img_order1.png" style='width:100%'><br><br>
				<img src="/ps/img_pd_1.png" style='width:100%' id=modelimg>
<br>
<table width=100% cellspacing=0 cellpadding=0 style='color:#3f3301'>
<tr><td style='color:#3f3301' bgcolor='#bd9f03'>Order Details</td><td style='color:#3f3301'  bgcolor="#bd9f03" align=center>Qty</td></tr>
<tr><td style='color:#3f3301'  bgcolor=white>PS Classic</td><td style='color:#3f3301'  bgcolor=white id=od1 align=center>0</td></tr>
<tr><td style='color:#3f3301'  bgcolor='#ebebeb'>PS Android</td><td style='color:#3f3301'  bgcolor='#ebebeb' id=od2 align=center>0</td></tr>
</table>


				</td>
			
				<td  style='color:#bd9f03' align=right width=35% valign=top>
					<font color="#998675">CONTACT INFORMATION</font><p>

	
First Name<br>
<input type=text style='width:80%' name=firstname><br>
Last Name<br>
<input type=text style='width:80%' name=lastname><br>
Email<br>
<input type=text style='width:80%'  name=email><br>
Phone<br>
<input type=text style='width:80%'  name=telephone><br>
Notes<br>
<textarea style='width:80%; height: 10vw;' name=notes ></textarea>

	</td></tr>

	</table>
	</td></tr></table>
	
	<table class=cartform align=center width=85% bgcolor="#333333" border=0 cellpadding=0 cellspacing=0>	
	<tr><td style='color: white;  padding-left:1.5%; padding-right: 1.5%' colspan=3>
		<table width=100% cellpadding=0 cellspacing=15>
		<tr>
		<td class=smalltext1>
		All devices are locked down for Maximum Security. Device to device encrypted communication where No information exists or is stored. Comes with 6 Months Subscription Included. <font color='#6dcff6'>All transactions are safe and secure. All information provided will only be used to complete the order, NO record will be stored once order is completed.</font>
		</td>
		<td valign=middle>
				<input type=image id=ordbtn style='height: 3vw; padding:0px' align=right src="/ps/order.png">
		</td>
		</tr>
		</table>
		<input type=hidden name=quantity1 id=quantity1>
		<input type=hidden name=quantity2 id=quantity2>
		</td>
	</tr>
	<tr><td colspan=3 style='color: black; background-color: #00bff3; padding-left:3%; padding-right: 3%; line-height: 1.8vw; padding-top: 1vw; padding-bottom: 1vw'>
All information received is considered private and will not be shared with anyone outside our Sales Team reviewing your inquiry.<br>
If no further consideration is made it will be destroyed.
	</td></tr>
</table>
</form>
</center>
</div>
<br><br>
<!--
<form method=post action="buy.php"><input type=hidden name=type value=email>
<div data-nomargin=1 >

	<div class="titlelb" align=center>Contact Sales</div>
<center>
	<div class="textlb" style='width:80%; align:center; text-align: center;'>
	If you are looking to make a direct purchase please use the above online service.<Br>
If you want to be directed to a local distributor please use the form below for Sales Representative.
<p>
	</div>
	
	<table class=inputform width=65% align=center border=0>
	
	<tr>
		<td>First Name</td><td><input type=text length=80 name=firstname style='width:100%; font-size: 1.5vw'></td>
		<td>Last Name</td><td><input type=text length=80 name=lastname style='width:100%; font-size: 1.5vw'></td>
	</tr>

	<tr>
		<td>Email</td><td><input type=text length=80 name=email style='width:100%; font-size: 1.5vw'></td>
		<td>Phone</td><td><input type=text length=80 name=phone style='width:100%; font-size: 1.5vw'></td>
	</tr>
	
	<tr>
		<td>Message</td><td colspan=3><textarea style='width:100%' rows=3 name=message></textarea></td>
	</tr>
	
	</table>
	<br>
	<div class="textlb" style='width:60%; align:center; text-align: left; font-size: 1.5vw;%'>
	<input type=image src="/ps/send.png" align=right width=20%>
	<span style='color: #6dcff6;'>
	All information received is considered private and will not be shared with anyone outside our Business Development Team reviewing your inquiry. If no further consideration is made it will be destroyed.
	</span>
	<br><br><br><Br>
	</div>	
	
</div>
</form>
-->






<div class=footer1>

<table width=100% cellpadding=10 cellspacing=10 style='padding-left: 5%; padding-right: 5%' class=mhidden>
<tr>
<td width=25% valign=top>
<b>PRODUCT</b><br>
<a href="/">HOME<br>
<a href="/encrypted-messaging">ENCRYPTED MESSAGING</a><br>
<a href="/encrypted-chat">ENCRYPTED CHAT</a><br>
<a href="/packages">PACKAGES</a>
</td>
<td width=25% valign=top>
<b>CORPORATE</b><br>
<a href="/about">ABOUT</a><br>
<a href="/our-service">OUR SERVICE</a><br>
<a href="/privacy-matters">PRIVACY MATTERS</a><br>
<a href="/start-today">START TODAY</a><br>
<a href="/opportunities">OPPORTUNITIES</a>
</td>

<td width=25% valign=top>
<b>POLICIES & TERMS</b><br>
<a href="/legal">LEGAL COMPLIANCE</a><br>
<a href="/faq">FAQ</a>
</td>

<td width=25% valign=top>
<b>CONNECT</b><br>
<a href="/privacy-articles">PRIVACY ARTICLES</a><br>
</td>
</tr>
</table>
</div>
<div class="tile footer2">
<div class=left>
<img src="/ps/bottom_1.png">
</div>
<div class=right>
<!--<img src="/ps/bottom_2.png">-->
</div>
</div>`;
