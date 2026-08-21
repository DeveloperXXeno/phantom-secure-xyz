const nav = `<div class=mmenu style='display: none; position: absolute; width: 100vw; top: 10vw; z-index:100;'>
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
    <a href="javascript:;" style="font-size:6vw;">☰</a>
  </li>
</div>
<div class="left topicon mhidden">
<a href="/"><img src="/ps/top_1.png" border=0 class=topicon></a><a href="/encrypted-messaging"><img src="/ps/top_2.png" border=0 class="topicon mhidden"></a><a href="/encrypted-chat"><img src="/ps/top_3.png" border=0 class="topicon mhidden"></a><a href="/packages"><img src="/ps/top_4.png" border=0 class="topicon"></a>
</div>
<div class="right topicon mhidden">
<a href="/buy"><img src="/ps/top_5.png" border=0 class=topicon></a><a href="/opportunities"><img src="/ps/top_6.png" border=0 class="topicon mhidden"></a></div>
</div>`;

const footer = `<div class=footer1>

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
</div>
</div>`;

export const html = `${nav}

<div class="ps-section">
	<div class="ps-wrap">
		<div class="ps-hero">
			<img src="/ps/images/opp-hero.jpg" alt="Global distributor network for encrypted devices" width="1600" height="900" fetchpriority="high" decoding="async">
			<div class="ps-hero-body">
				<div class="ps-eyebrow">Opportunities</div>
				<h1 class="ps-h1">Become an Independent Business Owner</h1>
				<p class="ps-lead">Our Distributor Program is a global network of Independent Business Owners who deliver top-end support to clients in their own market. If you would like to represent us in your region, tell us about yourself below.</p>
			</div>
		</div>

		<div class="ps-grid">
			<div class="ps-card">
				<h3>Protected territory</h3>
				<p>IBOs operate their own region with direct access to our Business Development Team.</p>
			</div>
			<div class="ps-card">
				<h3>Full onboarding</h3>
				<p>Product training, provisioning tools and sales material are provided from day one.</p>
			</div>
			<div class="ps-card">
				<h3>Discreet by design</h3>
				<p>Every inquiry is reviewed privately and destroyed if no further consideration is made.</p>
			</div>
		</div>
	</div>
</div>

<div class="ps-section alt">
	<div class="ps-wrap">
		<h2 class="ps-h2">Contact information</h2>
		<div class="ps-grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); margin-top:1.25rem">
			<div class="ps-card">
				<h3>About you</h3>
				<p>
				<label class="ps-label" for="opp-first">First name</label>
				<input class="ps-field" id="opp-first" name="firstname" type="text" autocomplete="given-name">
				<label class="ps-label" for="opp-last">Last name</label>
				<input class="ps-field" id="opp-last" name="lastname" type="text" autocomplete="family-name">
				<label class="ps-label" for="opp-company">Company name</label>
				<input class="ps-field" id="opp-company" name="company" type="text" autocomplete="organization">
				</p>
			</div>
			<div class="ps-card">
				<h3>Reach you</h3>
				<p>
				<label class="ps-label" for="opp-email">Email</label>
				<input class="ps-field" id="opp-email" name="email" type="email" autocomplete="email">
				<label class="ps-label" for="opp-phone">Phone</label>
				<input class="ps-field" id="opp-phone" name="phone" type="tel" autocomplete="tel">
				<label class="ps-label" for="opp-country">What country are you from?</label>
				<select class="ps-field countries" id="countryId" name="country"></select>
				</p>
			</div>
			<div class="ps-card">
				<h3>Your market</h3>
				<p>
				<label class="ps-label" for="opp-target">Which country(s) would you like to cover?</label>
				<input class="ps-field" id="opp-target" name="target" type="text">
				<label class="ps-label" for="stateId">State / region</label>
				<select class="ps-field states" id="stateId" name="state"></select>
				<label class="ps-label" for="cityId">City</label>
				<input class="ps-field cities" id="cityId" name="city" type="text">
				</p>
			</div>
		</div>

		<div class="ps-card" style="margin-top:1.25rem">
			<h3>Business background</h3>
			<p>
			<label class="ps-label">Do you have experience selling private communications?</label>
			<span class="ps-lead" style="font-size:14px"><input type="radio" name="exp" value="yes" id="exp-yes"> <label for="exp-yes">Yes</label> &nbsp; <input type="radio" name="exp" value="no" id="exp-no"> <label for="exp-no">No</label></span>
			<label class="ps-label" for="opp-when">How soon could you offer our service to clients?</label>
			<input class="ps-field" id="opp-when" name="timeline" type="text">
			<label class="ps-label" for="opp-why">Why do you wish to become an IBO?</label>
			<textarea class="ps-field" id="opp-why" name="why" rows="3"></textarea>
			<label class="ps-label" for="opp-consider">Why should we consider you?</label>
			<textarea class="ps-field" id="opp-consider" name="consider" rows="3"></textarea>
			</p>
			<a class="ps-cta" href="/start-today">Submit inquiry</a>
		</div>

		<div class="ps-order-note" style="margin-top:1.5rem">All information received is private and is only seen by the Business Development Team reviewing your inquiry. If no further consideration is made it is destroyed.</div>
	</div>
</div>

<div class="ps-section">
	<div class="ps-wrap" style="text-align:center">
		<h2 class="ps-h2">The world's most trusted communication service<span style="color:#6dcff6">.</span></h2>
		<p class="ps-lead" style="margin:0 auto">Thank you for your interest &mdash; an associate from our Business Development Team will contact you directly.</p>
	</div>
</div>

${footer}`;
