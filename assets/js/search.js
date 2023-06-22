 
	
	//const search = document.getElementById("search");
	//const search2 = document.getElementById("search2");
	
	const matchList = document.getElementById("result");
	const matchList_mob = document.getElementById("result_mob");
	
	//var search = document.getElementsByClassName("menu_search");
	//var matchList = document.getElementsByClassName("search_result");

	//Search states.json and filter it
	const searchStates = async searchText => {
	  const res = await fetch("assets/database/movies_nested.json");
	 // console.log(res);
	  const states = await res.json();
	  
	  //console.log(states.movies);
	  Movies = states.movies;
	  Webseries = states.webseries;  
	  const children = Movies.concat(Webseries);
	  //console.log(children)
	  // Sort By Name/Date
	  children.sort(function (a, b) {
		if (a.release_date > b.release_date) { return -1; }
		if (a.release_date < b.release_date) { return 1;  }
		return 0;
	  }); 
	  //console.log(children);

	  //Get Matches to current text input
	  let matches = children.filter(moviename => {
		const regex = new RegExp(`^${searchText}`, "gi");
		return moviename.title.match(regex) || moviename.year.match(regex) || moviename.seourl.match(regex) || moviename.image.match(regex);
	  });
	  if (searchText.length === 0) {
		matches = [];
		matchList.innerHTML = "";
		matchList_mob.innerHTML = "";
	  }
	  outputHtml(matches);
	};

	//Show Results in HTML
	const outputHtml = matches => {
	  if (matches.length > 0) {
		const html = matches
		  .map(
				match => `<li class="link-class"><a href="details?view=${match.seourl}"><img src="${match.image}" class="img-fluid" /> <p> ${match.title} <span class="text-muted">${match.year} </span></p></a></li>`
			)
			.join("");
		matchList.innerHTML = html;
		matchList_mob.innerHTML = html;
	  }
	};

	//search.addEventListener("input", () => searchStates(search.value));
	//search2.addEventListener("input", () => searchStates(search2.value));
	
	function search_new(sdata)
	{
		searchStates(sdata)
		//alert(sdata);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
 