







var q, u, b, g, n, z, y, o, e, f;
	function check(a){
		 if (!a) {
		 	a = 0
		} 
		over(Number(a))

	}
	// function one() 
	// 	{
	// 		tot.value=up.value*or.value;
	// 		qa.value=qa.value-or.value;
	// 		if (or.value=="") {
	// 			qa.value=23;
	// 		}
			
	// 		if (qa.value>=0) {
	// 			tot.value = "out of stock";
	// 			qa.value=0;


	// 		}
	function one() 
	{

			var r = qa.value - or.value;
			if (r <= 0 ) {
				qa.value = r;
				q = up.value * or.value;
			tot.value = q;
			// console.log(tot.value);
			// check(q);
		}
			 else {
			 	tot.value = "out of stock"
			 }	

		}

	function two() 
		{
			var t = qantit.value - ordered.value;
			if (t >= 0) 
			{
			qantit.value = t;
			u = list.value * ordered.value;
			total.value = u;
			// check(u);
		}
		else 
		{
			total.value = "out of stock"
		}

		}
	function three() 
		{
				var a = acc.value - ask.value;
				if (a >= 0) 
				{
				acc.value = a;
				b = deal.value * ask.value;
				show.value = b;
				//check(b);
		}
		else 
		{
			show.value = "out of stock"
		}

		}

	function four() 
		{
			var c = numb.value - want.value;
			if (c >= 0) 
			{
			numb.value = c;
			g = agree.value * want.value;
			disp.value = g;
			//check(g);
  		}
  		else
  		{
  			disp.value = "out of stock"
  		}
		}
	function five() 
		{
			var m = fi.value - fiv.value;
			if (m >= 0) 
			{
			fi.value = m;
			n = vev.value * fiv.value;
			give.value = n;
			//check(n);
		}
		else
		{
			give.value = "out of stock"
		}
		}	

	function six() 
		{
			var i = si.value - is.value;
			if (i >= 0) 
			{
			si.value = i;
			z = ix.value * is.value;
			ok.value = z;
			//check(z);
		}
		else 
		{
			ok.value = "out of stock"
		}
		}

	function seven() 
		{
			var u = se.value - en.value;
			if (u >= 0) 
			{
			se.value = u;
			y = ve.value * en.value;
			display.value = y;	
			//check(y);
		}
		else 
		{
			display.value = "out of stock"
		}
	
		}

	function eight() 
		{
			var k = ei.value - ht.value;
			if (k >= 0) 
			{
			ei.value = k;
			o = gh.value * ht.value;
			back.value = o;
			//check(o);
		}
			else
			{
				back.value = "out of stock"
			}

		}

	function nine() 
		{
			var d = amt.value - orde.value;
			if (d >= 0) 
			{
			amt.value = d;
			e = pri.value * orde.value;
			toht.value = e;
			//check(e);
		}
		else 
		{
			toht.value = "out of stock"
		}

		}
	
	function ten() 
		{
			var s = am.value - ord.value;
			if (s >= 0) 
			{
			am.value = s;
			f = pr.value * ord.value;
			toh.value = f;
			//check(f);
		}
		else 
		{
			toh.value = "out of stock"
		}

		}
		function over(b) 
		{
			
		var k = Number(ot.value)
			ot.value = k + b;

		}		
		function buy() 
		{
			// ot.value = Number(tot.value + total.value + show.value + disp.value + give.value + ok.value + display.value + back.value + toht.value);

	    	ot.value= Number(tot.value)+Number(total.value)+Number(show.value)+Number(disp.value)+Number(give.value)+

	    	Number(ok.value)+Number(display.value)+Number(back.value)+Number(toht.value)+Number(toh.value);

			console.log(Number(tot.value));
		}	