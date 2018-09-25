// JavaScript Document
function blogheaders() {
	var post_market = document.getElementsByClassName("category-market-access");
	var post_cfda = document.getElementsByClassName("category-cfda-updates");
	var post_funding = document.getElementsByClassName("category-funding-resources");

	if (post_market == true) {}
		document.getElementById("Header_wrapper").classList.add("category-market-updates"); 
	} else if (post_cfda == true) {
		document.getElementById("Header_wrapper").classList.add("category-cfda-updates");
	} else if (post_funding == true) {}
		document.getElementById("Header_wrapper").classList.add("category-funding-resources");
	}
}