// *************** Filter/Menu (project 8) ******************
const portfolio = [
	{
		id: 1,
		title: "BOX BOSS",
		category: ["theme set-up","customisation"],
		img: "./Logo-JS.png",
		desc: "I worked with this brand to set up their e-commerce website using a Shopify theme which was installed and customising according to the client's requirements"
	},
	{
		id: 2,
		title: "Inspired Ink",
		category: ["theme set-up"],
		img: "./Cover-JS.jpg",
		desc: "In this project, I installed a theme the client had purchased to help set up their online presence"
	},
	{
		id: 3,
		title: "Cindy Official",
		category: ["custom development"],
		img: "./Logo-JS.png",
		desc: "I custom built this website for the client working with them from start (concept) to end (execution)"
	},
	{
		id: 4,
		title: "COVID-19 Web App",
		category: ["custom development"],
		img: "./Cover-JS.jpg",
		desc: "Master cleanse palo santo listicle ethical squid before they sold out whatever sriracha lyft normcore messenger bag DIY."
	},
	{
		id: 5,
		title: "Javascript Projects",
		category: ["customisation"],
		img: "./Logo-JS.png",
		desc: "Readymade synth crucifix pour-over, kogi tilde fixie raw denim green juice."
	},
	{
		id: 6,
		title: "Website 6",
		category: ["theme set-up","customisation"],
		img: "./Cover-JS.jpg",
		desc: "Single-origin coffee DIY microdosing, gluten-free art party biodiesel street art irony cold-pressed deep v pour-over"
	},
];

// get parent element
const portfolioGrid = document.querySelector(".portfolio-grid");
const btnContainer = document.querySelector(".btn-container");

// display all items when page loads

// REVIEW - img alt splits item title
window.addEventListener("DOMContentLoaded",function(){
	displayPortfolioItems();
	// displayPortfolioItems();
	// displayPortfolioItems(portfolio);
	getButtons(portfolio);
	// displayPortfolioButtons();
	loadEvent();
});

function displayPortfolioItems(){
	portfolio.map((item,i) => {

	// put in separate function and call in
	const article = document.createElement('article');
	const image = document.createElement('img');
	const div = document.createElement('div');
	const h4 = document.createElement('h4');
	const p = document.createElement('p');
	const button = document.createElement('button');

	article.classList.add('portfolio-item');
	image.classList.add('photo');
	div.classList.add('item-info');
	// h4.classList.add('cindy');
	p.classList.add('item-text');
	button.classList.add('btn','modal-link');
	button.innerText = item.title;
	p.innerText = item.desc;

	// button.setAttribute("type", "button");
	image.setAttribute("src", item.img);
	image.setAttribute("alt", item.title);
	button.setAttribute("data-id", i);

	// h4.appendChild(item.title);
	// p.appendChild(item.desc);

	div.appendChild(h4);
	div.appendChild(button);
	div.appendChild(p);
	article.appendChild(image);
	article.appendChild(div);


	// console.log(article);
	portfolioGrid.appendChild(article);

//  look to add innerHTML option instead [REVIEW]
	});

};

// function diplayMenuItems(menuItems) {
//   let displayMenu = menuItems.map(function (item) {
//     // console.log(item);

//     return `<article class="menu-item">
//           <img src=${item.img} alt=${item.title} class="photo" />
//           <div class="item-info">
//             <header>
//               <h4>${item.title}</h4>
//               <h4 class="price">$${item.price}</h4>
//             </header>
//             <p class="item-text">
//               ${item.desc}
//             </p>
//           </div>
//         </article>`;
//   });
//   displayMenu = displayMenu.join("");
//   // console.log(displayMenu);

//   sectionCenter.innerHTML = displayMenu;
// }

// find where modal data is aand insert objectData.desc

function loadEvent(){
	const modal = document.querySelector(".modal-overlay");
	const closeBtn = document.querySelector(".close-btn");
	        
  // console.log(document.querySelectorAll('.modal-link'));

  const modalLinks = document.querySelectorAll('.modal-link').forEach(link => {
			  link.addEventListener('click', e => {
			    //handle click
			    // link.addEventListener("click", function(){

			    const buttonId = e.target.dataset.id;
			    const objectData = portfolio[buttonId];

			    // console.log(buttonId);
			    console.log(objectData.desc);

			    // "target" represents events that just happened
        	modal.classList.add("open-modal"); 
			    modal.innerText = objectData.desc;
        	// console.log("Clicked!");
        });
        closeBtn.addEventListener("click", function () {
					modal.classList.remove("open-modal");
			  });
			});
}; 

const categories = ["all",];
function getButtons(portfolioItems){
	let displayPortfolio = portfolioItems.map(function(item){
    
    item.category.forEach(function(c) {
      if(!categories.includes(c)){
        categories.push(c)
        // console.log(c);
        // console.log(item.category);
      };
    })
  })
  	const categoryBtns = categories
		.map(function(category){
			// console.log(category);			


			return `<button type="button" class="filter-btn" data-id="${category}">
          ${category}
        </button>`;
		})
		.join("");

	btnContainer.innerHTML = categoryBtns;

	// console.log(categoryBtns);

	// filter items on button click
	const filterBtns = btnContainer.querySelectorAll(".filter-btn");

	filterBtns.forEach(function(btn){
		btn.addEventListener("click",function(e){

			// console.log(e.currentTarget.dataset.id);

			const category = e.currentTarget.dataset.id; 
			const portfolioCategory = portfolio.filter(function(portfolioItem){
				
				// console.log(portfolioItem.category);
				
				const cat = portfolioItem.category.values();

				for (const value of cat) {

				 //  console.log(value);
					// console.log(category);
					// console.log(cat);

				  if (value === category) {
						return portfolioItem;
					}
				}
			});
			if (category === "all") {
				displayPortfolioItems(portfolio);
			} else {
				displayPortfolioItems(portfolioCategory);
				
				// console.log(portfolioCategory);

			}
		});
	});
}


// function displayPortfolioButtons(){

// 	const categories = portfolio.reduce(
// 		function(values,item){
// 			console.log(values); 
// 			// console.log(item); 
			

// 			if (!values.includes(item.category)) {
// 				values.push(item.category);
// 				console.log(item.category);

// 				for (var i = 0; i < values.length; i++) {
// 				Array.from(item.category).forEach(function(c)
// 					// item.category.forEach(function(c)
// 					{
// 						console.log(c); 

// 				// 		values.push(c);
// 				// console.log(c);

// 					}); 
						
				
// 				} 
// 			} 
// 			return values;
		
// 		},
// 		["all"]
// 	); 
// 			console.log(categories); 

// // for (var i = 0; i < portfolio.length; i++) {
// // 		   Array.from(portfolio[i].category).forEach(function(item) {
// // 					console.log(item);			

// // 				})
			
// // 			}
// 			// this should be a subset of a lager expression? e.g. if category is array, return this else return that; or make all categories arrays
			
// 	const categoryBtns = categories
// 		.map(function(category){
// 			console.log(category);			


// 			return `<button type="button" class="filter-btn" data-id="${category}">
//           ${category}
//         </button>`;
// 		})
// 		.join("");

// 	btnContainer.innerHTML = categoryBtns;

// 	console.log(categoryBtns);

// 	// filter items on button click
// 	const filterBtns = btnContainer.querySelectorAll(".filter-btn");

// 	filterBtns.forEach(function(btn){
// 		btn.addEventListener("click",function(e){

// 			console.log(e.currentTarget.dataset.id);

// 			const category = e.currentTarget.dataset.id; 
// 			const portfolioCategory = portfolio.filter(function(portfolioItem){
				
// 				// console.log(portfolioItem.category);
				
// 				const cat = portfolioItem.category.values();

// 				for (const value of cat) {

// 				 //  console.log(value);
// 					// console.log(category);
// 					// console.log(cat);

// 				  if (value === category) {
// 						return portfolioItem;
// 					}
// 				}
// 			});
// 			if (category === "all") {
// 				displayPortfolioItems(portfolio);
// 			} else {
// 				displayPortfolioItems(portfolioCategory);
				
// 				console.log(portfolioCategory);

// 			}
// 		});
// 	});
// }

// *************** Navbar w/toggle (project 4) ******************

// footer copyright date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// open & close links
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".nav-links");

navToggle.addEventListener("click", function(){

	const containerHeight = linksContainer.getBoundingClientRect().height;
	const linksHeight = links.getBoundingClientRect().height;
	if (containerHeight === 0) {
		linksContainer.style.height = `${linksHeight}px`;
	} else {
		linksContainer.style.height = 0;
	}
});

// *************** Scroll w/fixed nav, back to top (project 10) ******************

// fixed nav
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll",function(){
	const scrollHeight = window.pageYOffset;
	const navHeight = navbar.getBoundingClientRect().height;
	if (scrollHeight > navHeight) {
		navbar.classList.add("fixed-nav");
	} else {
		navbar.classList.remove("fixed-nav");
	}

	// back to top setup

	if (scrollHeight > 500) {
		topLink.classList.add("show-link");
	} else {
		topLink.classList.remove("show-link");
	}
	
});


// Smooth scroll 
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
	link.addEventListener("click",(e) => {
		e.preventDefault();
		// navigate to specific spot
		const id = e.currentTarget.getAttribute("href").slice(1);
		const element = document.getElementById(id);

		const navHeight = navbar.getBoundingClientRect().height;
		const containerHeight = linksContainer.getBoundingClientRect().height;
		const fixedNav = navbar.classList.contains("fixed-nav");
		const navToggleDisplayStyle = window.getComputedStyle(navToggle, null).display;
		let position = element.offsetTop - navHeight;
		// console.log("initial position: "+position);

		if (!fixedNav) {
			position = position - navHeight;
			// console.log("subtracted navHeight from position");
		}
		if (navToggleDisplayStyle !== "none") {
			position = position + containerHeight; 
			// console.log("added containerHeight to position");
		}	
		// Original code was based on if navheight was > 82 which was not accurate for my setup. I found out the magic number here was 107 but keen to get a dynamic solution given navHeight was subject to change. The final solution (see navToggleDisplayStyle) was based on navToggle given this was drivingthe difference in navHeights. Helpful documentation - was for https://stackoverflow.com/questions/4866229/check-element-css-display-with-javascript/4866277

		// if (navHeight > 110) {
		// 	position = position + containerHeight; 
		// 	console.log("added containerHeight to position");
		// }


		// console.log("navHeight: "+navHeight);
		// console.log("position: "+position);
		// console.log("containerHeight: "+containerHeight);

		window.scrollTo({
			left:0,
			top:position,
		});
		// close
		linksContainer.style.height = 0;
	});
});


// qs:
// 1. why reduce doesn't work for filter?
// 2. why non-fixed height navbar blocks title [done]
// 3. why modal not working - event listener




