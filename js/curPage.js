function addClass(name,cursel,n)
{
	//var oNav = document.getElementById(name+i);

	for(i=1; i<=n; i++)
	{
		var oNav = document.getElementById(name+i);
			
		oNav.className = i ==cursel? "curPage noBorder":"";	
					
	}
	
}