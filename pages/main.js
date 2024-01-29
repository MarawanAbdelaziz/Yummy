
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Nav @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




$('.side-nav').fadeOut(500)


function openNav(){
    $('.side-nav').fadeIn(1000)
    $('.btn-nav').html(`<button
    onclick="closeNav()"
    class="btn-nav fa-solid open-close-icon fa-2x fa-x"
  ></button>`);
    
}

function closeNav(){
    $('.side-nav').fadeOut(1000)
    $('.btn-nav').html(`<button
    onclick="openNav()"
    class="fa-solid open-close-icon fa-2x fa-align-justify"
  ></button>`);
    
}


function openSearch() {
  $('.home',).addClass('hidden');
  $('.area').addClass('hidden');
  $('.ingredients').addClass('hidden');
  $('.categories').addClass('hidden');
  $('.contact-us').addClass('hidden');
  $('.search').removeClass('hidden');
  closeNav();
}

function openCategorie() {
    $('.home').addClass('hidden');
    $('.area').addClass('hidden');
    $('.search').addClass('hidden');
    $('.ingredients').addClass('hidden');
    $('.contact-us').addClass('hidden');
    $('.categories').removeClass('hidden');
    closeNav();
}

function openAreas() {
    $('.home').addClass('hidden');
    $('.search').addClass('hidden');
    $('.categories').addClass('hidden');
    $('.ingredients').addClass('hidden');
    $('.contact-us').addClass('hidden');
    $('.area').removeClass('hidden');
    closeNav();
    
}

function openIngredient() {
    $('.home').addClass('hidden');
    $('.area').addClass('hidden');
    $('.search').addClass('hidden');
    $('.categories').addClass('hidden');
    $('.contact-us').addClass('hidden');

    $('.ingredients').removeClass('hidden');
closeNav();
}

function openContactUs() {
  $('.home').addClass('hidden');
  $('.area').addClass('hidden');
  $('.search').addClass('hidden');
  $('.categories').addClass('hidden');
  $('.ingredients').addClass('hidden');
  $('.contact-us').removeClass('hidden');
  
closeNav();
}




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Home @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

{

async function getFoodHome(){

    const api = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const response = await api.json();
    
    displayFoodHome(response.meals)
}

getFoodHome();

function displayFoodHome(food){
    let cartona = ``;
    
   for (let i = 0; i < food.length; i++) {
  
   cartona += `
     <a  onclick="openDetails(${food[i].idMeal})">
       <div class="group relative overflow-hidden rounded-md">
         <img
           class="rounded-md"
           src="${food[i].strMealThumb}"
           alt=""
         />
         <div
           class="rounded-md bg-white opacity-80 inset-0 absolute group-hover:translate-y-0
            translate-y-80 duration-500 flex flex-col justify-center"
         >
           <h3 class="ms-4 text-3xl font-semibold">${food[i].strMeal}</h3>
         </div>
       </div>
     </a>
  `

}

$('.food-home').html(cartona) ;

}

function openDetails(id){
    $('.food-hidden-home').addClass('hidden');
    $('.food-details-home').removeClass('hidden');

     getDetailsHome(id);

}
    
async function getDetailsHome(id){

    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const response = await api.json();
    displayDetailsHome(response.meals)
}

function displayDetailsHome(food){
     cartona2 =  `

    <div>
    <img
      class="rounded-md"
      src="${food[0].strMealThumb}"
      alt=""
    />
    <h2 class="text-white font-semibold text-3xl mt-2">${food[0].strMeal}</h2>
  </div>
  
  <div class="col-span-2 text-white">
    <div class="flex justify-between">
      <h2 class="font-semibold text-3xl">Instructions</h2>
      <button onclick="closeDetails()"
        class="text-black bg-red-600 p-1 rounded-xl fa-solid open-close-icon fa-2x fa-x"
      ></button>
    </div>
    <p class="mt-2 mb-4">
      ${food[0].strInstructions}
    </p>
    <h3 class="font-medium text-2xl mb-2">
      <span class="font-bold text-3xl">Area :</span> ${food[0].strArea}
    </h3>
    <h3 class="font-medium text-2xl mb-2">
      <span class="font-bold text-3xl">Category :</span> ${food[0].strCategory}
    </h3>
    <h3 class="font-semibold text-3xl">Recipes :</h3>
    <div class="w-[100%] ms-3 mt-4 break-after-right">
      <ul class="flex flex-wrap text-black">
        
     
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure1} ${food[0].strIngredient1}
</li>     
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure2} ${food[0].strIngredient2}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure3} ${food[0].strIngredient3}
</li> 
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure4} ${food[0].strIngredient4}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure5} ${food[0].strIngredient5}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure6} ${food[0].strIngredient6}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure7} ${food[0].strIngredient7}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure8} ${food[0].strIngredient8}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure9} ${food[0].strIngredient9}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure10} ${food[0].strIngredient10}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure11} ${food[0].strIngredient11}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure12} ${food[0].strIngredient12}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure13} ${food[0].strIngredient13}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure14} ${food[0].strIngredient14}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure15} ${food[0].strIngredient15}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure16} ${food[0].strIngredient16}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure17} ${food[0].strIngredient17}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure18} ${food[0].strIngredient18}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure19} ${food[0].strIngredient19}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure20} ${food[0].strIngredient20}
</li>

  
        </ul>
    </div>
  
    <h3 class="font-medium text-3xl mt-2">Tags :</h3>
    <ul class="text-black flex ms-3 mt-4">
      <li
        class="text-nowrap font-normal bg-[#F8D7DA] rounded-md me-4 mb-4 p-1"
      >
      ${food[0].strTags}
      </li>
    </ul>
  
    <ul class="text-white flex mt-4">
      <a href="${food[0].strSource}" target="_blank">
        <li
          class="text-nowrap font-normal bg-green-700 rounded-md me-2 mb-4 ps-3 pe-3 pt-2 pb-2"
        >
          Source
        </li>
      </a>
  
      <a href="${food[0].strYoutube}" target="_blank">
        <li
          class="text-nowrap font-normal bg-red-600 rounded-md mb-4 ps-3 pe-3 pt-2 pb-2"
        >
          Youtube
        </li>
      </a>
    </ul>
  </div>
   `
   $('.food-details-home').html(cartona2) ;

}

function closeDetails(){
$('.food-hidden-home').removeClass('hidden');
$('.food-details-home').addClass('hidden');
}


}


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Search @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
{

async function searchByName(s){

  const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${s}`)
  const response = await api.json();

  displayFoodSearch(response.meals)
  console.log(s);
  console.log('1 ', response.meals);
}

async function searchByFLetter(s){

  const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${s}`)
  const response = await api.json();
  displayFoodSearch(response.meals)
}


function displayFoodSearch(food){
  let cartona = ``;
 
  
 for (let i = 0; i < food.length; i++) {

 cartona += `
   <a  onclick="openDetailsSearch(${food[i].idMeal})">
     <div class="group relative overflow-hidden rounded-md">
       <img
         class="rounded-md"
         src="${food[i].strMealThumb}"
         alt=""
       />
       <div
         class="rounded-md bg-white opacity-80 inset-0 absolute group-hover:translate-y-0
          translate-y-80 duration-500 flex flex-col justify-center"
       >
         <h3 class="ms-4 text-3xl font-semibold">${food[i].strMeal}</h3>
       </div>
     </div>
   </a>
`

}

console.log('2');
$('.food-search').html(cartona) ;

}

function openDetailsSearch(id){
  $('.food-hidden-search').addClass('hidden');
  $('.food-details-search').removeClass('hidden');

   getDetailsSearch(id);

}

function closeDetailsSearch(){
  $('.food-hidden-search').removeClass('hidden');
  $('.food-details-search').addClass('hidden');
  }
  
  
async function getDetailsSearch(id){

  const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const response = await api.json();
  displayDetailsSearch(response.meals)
}

function displayDetailsSearch(food){
   cartona2 =  `

  <div>
  <img
    class="rounded-md "
    src="${food[0].strMealThumb}"
    alt=""
  />
  <h2 class="text-white col-span-2 font-semibold text-3xl mt-2">${food[0].strMeal}</h2>
</div>

<div class="col-span-2 text-white">
  <div class="flex justify-between">
    <h2 class="font-semibold text-3xl">Instructions</h2>
    <button onclick="closeDetailsSearch()"
      class="text-black bg-red-600 p-1 rounded-xl fa-solid open-close-icon fa-2x fa-x"
    ></button>
  </div>
  <p class="mt-2 mb-4">
    ${food[0].strInstructions}
  </p>
  <h3 class="font-medium text-2xl mb-2">
    <span class="font-bold text-3xl">Area :</span> ${food[0].strArea}
  </h3>
  <h3 class="font-medium text-2xl mb-2">
    <span class="font-bold text-3xl">Category :</span> ${food[0].strCategory}
  </h3>
  <h3 class="font-semibold text-3xl">Recipes :</h3>
  <div class="w-[100%] ms-3 mt-4 break-after-right">
    <ul class="flex flex-wrap text-black">
      
   
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure1} ${food[0].strIngredient1}
</li>     
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure2} ${food[0].strIngredient2}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure3} ${food[0].strIngredient3}
</li> 
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure4} ${food[0].strIngredient4}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure5} ${food[0].strIngredient5}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure6} ${food[0].strIngredient6}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure7} ${food[0].strIngredient7}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure8} ${food[0].strIngredient8}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure9} ${food[0].strIngredient9}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure10} ${food[0].strIngredient10}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure11} ${food[0].strIngredient11}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure12} ${food[0].strIngredient12}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure13} ${food[0].strIngredient13}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure14} ${food[0].strIngredient14}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure15} ${food[0].strIngredient15}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure16} ${food[0].strIngredient16}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure17} ${food[0].strIngredient17}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure18} ${food[0].strIngredient18}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure19} ${food[0].strIngredient19}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure20} ${food[0].strIngredient20}
</li>


      </ul>
  </div>

  <h3 class="font-medium text-3xl mt-2">Tags :</h3>
  <ul class="text-black flex ms-3 mt-4">
    <li
      class="text-nowrap font-normal bg-[#F8D7DA] rounded-md me-4 mb-4 p-1"
    >
    ${food[0].strTags}
    </li>
  </ul>

  <ul class="text-white flex mt-4">
    <a href="${food[0].strSource}" target="_blank">
      <li
        class="text-nowrap font-normal bg-green-700 rounded-md me-2 mb-4 ps-3 pe-3 pt-2 pb-2"
      >
        Source
      </li>
    </a>

    <a href="${food[0].strYoutube}" target="_blank">
      <li
        class="text-nowrap font-normal bg-red-600 rounded-md mb-4 ps-3 pe-3 pt-2 pb-2"
      >
        Youtube
      </li>
    </a>
  </ul>
</div>
 `
 $('.food-details-search').html(cartona2) ;

}

}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ categories @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

{



async function getFoodCategories(){

    const api = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const response = await api.json();
    
    displayFoodCategories(response.categories)
}

getFoodCategories();

function displayFoodCategories(food){
    let cartona = ``;
    
   for (let i = 0; i < food.length; i++) {
  
   cartona +=`
   <a onclick="openCategories(${food[i].idCategory})">
   <div class="group relative overflow-hidden rounded-md">
     <img
       class="rounded-md"
       src="${food[i].strCategoryThumb}"
       alt=""
     />
     <div
       class="rounded-md bg-white opacity-80 inset-0 absolute group-hover:translate-y-0 translate-y-80 duration-500 text-center"
     >
       <h3 class="ms-4 text-3xl font-normal mt-2">${food[i].strCategory}</h3>
       <p class="mx-3 line-clamp-3">
       ${food[i].strCategoryDescription}
       </p>
     </div>
   </div>
 </a>
  `

}

$('.food-categories').html(cartona) ;

}

function openCategories(id){
    
let name ;
    switch( id )
{
	case 1:
        name='Beef';
			break;
	case 2:
        name='Chicken';
        break;
	case 3:
        name='Dessert';
        break;
	case 4:
        name='Lamb';
        break;
	case 5:
        name='Miscellaneous';
        break;
	case 6:
        name='Pasta';
        break;
	case 7:
        name='Pork';
        break;
	case 8:
        name='Seafood';
        break;
	case 9:
        name='Side';
        break;
	case 10:
        name='Starter';
        break;
	case 11:
        name='Vegan';
        break;
	case 12:
        name='Vegetarian';
        break;
	case 13:
        name='Breakfast';
        break;
	case 14:
        name='Goat';
        break;
}
    
    $('.food-hidden-categories').addClass('hidden');
    $('.food-hidden-categories-food').removeClass('hidden');
     getDetailsCategories(name);
    
    
}

function closeCategories(){
    $('.food-hidden-categories').removeClass('hidden');
    $('.food-hidden-categories-food').addClass('hidden');
}
    
async function getDetailsCategories(name){
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
    const response = await api.json();
    displayCategories(response.meals)
}

function displayCategories(food){
    let cartona = ``;
    
   for (let i = 0; i < food.length; i++) {
  
   cartona += `
     <a onclick="openDetailsCategories(${food[i].idMeal})">
       <div class="group relative overflow-hidden rounded-md">
         <img
           class="rounded-md"
           src="${food[i].strMealThumb}"
           alt=""
         />
         <div
           class="rounded-md bg-white opacity-80 inset-0 absolute group-hover:translate-y-0 translate-y-80 duration-500 flex flex-col justify-center"
         >
           <h3 class="ms-4 text-3xl font-semibold">${food[i].strMeal}</h3>
         </div>
       </div>
     </a>
  `

}

$('.food-categories-food').html(cartona) ;

}

function openDetailsCategories(id){
    $('.food-hidden-categories-food').addClass('hidden');
    $('.food-details-categories').removeClass('hidden');
     getDetailsCategorie(id);

}

function closeDetailsCategories(){
    $('.food-hidden-categories-food').removeClass('hidden');
    $('.food-details-categories').addClass('hidden');
}
    
async function getDetailsCategorie(id){
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const response = await api.json();
    displayDetailsCategories(response.meals)
}

function displayDetailsCategories(food){
     cartona2 =  `

    <div>
    <img
      class="rounded-md"
      src="${food[0].strMealThumb}"
      alt=""
    />
    <h2 class="text-white font-semibold text-3xl mt-2">${food[0].strMeal}</h2>
  </div>
  
  <div class="col-span-2 text-white">
    <div class="flex justify-between">
      <h2 class="font-semibold text-3xl">Instructions</h2>
      <button onclick="closeDetailsCategories()"
        class="text-black bg-red-600 p-1 rounded-xl fa-solid open-close-icon fa-2x fa-x"
      ></button>
    </div>
    <p class="mt-2 mb-4">
      ${food[0].strInstructions}
    </p>
    <h3 class="font-medium text-2xl mb-2">
      <span class="font-bold text-3xl">Area :</span> ${food[0].strArea}
    </h3>
    <h3 class="font-medium text-2xl mb-2">
      <span class="font-bold text-3xl">Category :</span> ${food[0].strCategory}
    </h3>
    <h3 class="font-semibold text-3xl">Recipes :</h3>
    <div class="w-[100%] ms-3 mt-4 break-after-right">
      <ul class="flex flex-wrap text-black">
        
     
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure1} ${food[0].strIngredient1}
</li>     
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure2} ${food[0].strIngredient2}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure3} ${food[0].strIngredient3}
</li> 
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure4} ${food[0].strIngredient4}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure5} ${food[0].strIngredient5}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure6} ${food[0].strIngredient6}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure7} ${food[0].strIngredient7}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure8} ${food[0].strIngredient8}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure9} ${food[0].strIngredient9}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure10} ${food[0].strIngredient10}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure11} ${food[0].strIngredient11}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure12} ${food[0].strIngredient12}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure13} ${food[0].strIngredient13}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure14} ${food[0].strIngredient14}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure15} ${food[0].strIngredient15}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure16} ${food[0].strIngredient16}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure17} ${food[0].strIngredient17}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure18} ${food[0].strIngredient18}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure19} ${food[0].strIngredient19}
</li>
<li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
${ food[0].strMeasure20} ${food[0].strIngredient20}
</li>

  
        </ul>
    </div>
  
    <h3 class="font-medium text-3xl mt-2">Tags :</h3>
    <ul class="text-black flex ms-3 mt-4">
      <li
        class="text-nowrap font-normal bg-[#F8D7DA] rounded-md me-4 mb-4 p-1"
      >
      ${food[0].strTags}
      </li>
    </ul>
  
    <ul class="text-white flex mt-4">
      <a href="${food[0].strSource}" target="_blank">
        <li
          class="text-nowrap font-normal bg-green-700 rounded-md me-2 mb-4 ps-3 pe-3 pt-2 pb-2"
        >
          Source
        </li>
      </a>
  
      <a href="${food[0].strYoutube}" target="_blank">
        <li
          class="text-nowrap font-normal bg-red-600 rounded-md mb-4 ps-3 pe-3 pt-2 pb-2"
        >
          Youtube
        </li>
      </a>
    </ul>
  </div>
   `
   $('.food-details-categories').html(cartona2) ;

}

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Area @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


{



    async function getFoodArea(){
    
        const api = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        const response = await api.json();
        
        displayFoodArea(response.meals)
    }
    
    getFoodArea();
    
    function displayFoodArea(food){
        let cartona = ``;
        
       for (let i = 0; i < food.length; i++) {
      
       cartona +=`
       <a onclick="openArea('${food[i].strArea}')">
       <div class="group relative overflow-hidden rounded-md text-center mb-2">
       <i class="text-white  fa-solid fa-house-laptop fa-4x"></i>
       <h3 class="text-white font-semibold text-3xl">${food[i].strArea}</h3>
       </div>
     </a>
      `
    
    }
    
    $('.food-area').html(cartona) ;
    
    }
    
    


    function openArea(name){
        
        $('.food-hidden-area').addClass('hidden');
        $('.food-hidden-area-food').removeClass('hidden');

         getDetailsArea(name);
        
        
    }
    
    function closeArea(){
        $('.food-hidden-area').removeClass('hidden');
        $('.food-hidden-area-food').addClass('hidden');
    }
        
    async function getDetailsArea(name){
     

        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`);
        const response = await api.json();
        displayArea(response.meals)
    }
    
    function displayArea(food){
        let cartona = ``;
        
       for (let i = 0; i < food.length; i++) {
      
       cartona += `
         <a onclick="openDetailsArea(${food[i].idMeal})">
           <div class="group relative overflow-hidden rounded-md">
             <img
               class="rounded-md"
               src="${food[i].strMealThumb}"
               alt=""
             />
             <div
               class="rounded-md bg-white opacity-80 inset-0 absolute group-hover:translate-y-0 translate-y-80 duration-500 flex flex-col justify-center"
             >
               <h3 class="ms-4 text-3xl font-semibold">${food[i].strMeal}</h3>
             </div>
           </div>
         </a>
      `
    
    }
    
    $('.food-area-food').html(cartona) ;
    
    }
    
    function openDetailsArea(id){
        $('.food-hidden-area-food').addClass('hidden');
        $('.food-details-area').removeClass('hidden');
         getDetailArea(id);
    
    }
    
    function closeDetailsArea(){
        $('.food-hidden-area-food').removeClass('hidden');
        $('.food-details-area').addClass('hidden');
    }
        
    async function getDetailArea(id){
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const response = await api.json();
        displayDetailsArea(response.meals)
    }
    
    function displayDetailsArea(food){
         cartona2 =  `
    
        <div>
        <img
          class="rounded-md"
          src="${food[0].strMealThumb}"
          alt=""
        />
        <h2 class="text-white font-semibold text-3xl mt-2">${food[0].strMeal}</h2>
      </div>
      
      <div class="col-span-2 text-white">
        <div class="flex justify-between">
          <h2 class="font-semibold text-3xl">Instructions</h2>
          <button onclick="closeDetailsArea()"
            class="text-black bg-red-600 p-1 rounded-xl fa-solid open-close-icon fa-2x fa-x"
          ></button>
        </div>
        <p class="mt-2 mb-4">
          ${food[0].strInstructions}
        </p>
        <h3 class="font-medium text-2xl mb-2">
          <span class="font-bold text-3xl">Area :</span> ${food[0].strArea}
        </h3>
        <h3 class="font-medium text-2xl mb-2">
          <span class="font-bold text-3xl">Category :</span> ${food[0].strCategory}
        </h3>
        <h3 class="font-semibold text-3xl">Recipes :</h3>
        <div class="w-[100%] ms-3 mt-4 break-after-right">
          <ul class="flex flex-wrap text-black">
            
         
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure1} ${food[0].strIngredient1}
    </li>     
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure2} ${food[0].strIngredient2}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure3} ${food[0].strIngredient3}
    </li> 
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure4} ${food[0].strIngredient4}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure5} ${food[0].strIngredient5}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure6} ${food[0].strIngredient6}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure7} ${food[0].strIngredient7}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure8} ${food[0].strIngredient8}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure9} ${food[0].strIngredient9}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure10} ${food[0].strIngredient10}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure11} ${food[0].strIngredient11}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure12} ${food[0].strIngredient12}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure13} ${food[0].strIngredient13}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure14} ${food[0].strIngredient14}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure15} ${food[0].strIngredient15}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure16} ${food[0].strIngredient16}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure17} ${food[0].strIngredient17}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure18} ${food[0].strIngredient18}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure19} ${food[0].strIngredient19}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure20} ${food[0].strIngredient20}
    </li>
    
      
            </ul>
        </div>
      
        <h3 class="font-medium text-3xl mt-2">Tags :</h3>
        <ul class="text-black flex ms-3 mt-4">
          <li
            class="text-nowrap font-normal bg-[#F8D7DA] rounded-md me-4 mb-4 p-1"
          >
          ${food[0].strTags}
          </li>
        </ul>
      
        <ul class="text-white flex mt-4">
          <a href="${food[0].strSource}" target="_blank">
            <li
              class="text-nowrap font-normal bg-green-700 rounded-md me-2 mb-4 ps-3 pe-3 pt-2 pb-2"
            >
              Source
            </li>
          </a>
      
          <a href="${food[0].strYoutube}" target="_blank">
            <li
              class="text-nowrap font-normal bg-red-600 rounded-md mb-4 ps-3 pe-3 pt-2 pb-2"
            >
              Youtube
            </li>
          </a>
        </ul>
      </div>
       `
       $('.food-details-area').html(cartona2) ;
    
    }
    
    }
    

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Ingredients @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


{



    async function getFoodIngredients(){
    
        const api = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
        const response = await api.json();
        
        displayFoodIngredients(response.meals)
    }
    
    getFoodIngredients();
    
    function displayFoodIngredients(food){
        let cartona = ``;
        
       for (let i = 0; i < food.length; i++) {
      
       cartona +=`
       <a onclick="openIngredients('${food[i].strIngredient}')">
       <div class="group relative overflow-hidden rounded-md text-center mb-2">
       <i class="text-white fa-solid fa-drumstick-bite fa-4x"></i>
       <h3 class="text-white font-semibold text-3xl">${food[i].strIngredient}</h3>
       <p class="mx-3 mt-2 text-white line-clamp-3">
       ${food[i].strDescription}
       </p>
       </div>
     </a>
      `
    
    }
    
    $('.food-ingredients').html(cartona) ;
    
    }
    
    


    function openIngredients(name){
        
        $('.food-hidden-ingredients').addClass('hidden');
        $('.food-hidden-ingredients-food').removeClass('hidden');
        getDetailsIngredients(name);
        
        
    }
    
    function closeIngredients(){
        $('.food-hidden-ingredients').removeClass('hidden');
        $('.food-hidden-ingredients-food').addClass('hidden');
    }
        
    async function getDetailsIngredients(name){
     

        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`);
        const response = await api.json();
        displayIngredients(response.meals)
    }
    
    function displayIngredients(food){
        let cartona = ``;
        
       for (let i = 0; i < food.length; i++) {
      
       cartona += `
         <a onclick="openDetailsIngredients(${food[i].idMeal})">
           <div class="group relative overflow-hidden rounded-md">
             <img
               class="rounded-md"
               src="${food[i].strMealThumb}"
               alt=""
             />
             <div
               class="rounded-md bg-white opacity-80 inset-0 absolute group-hover:translate-y-0 translate-y-80 duration-500 flex flex-col justify-center"
             >
               <h3 class="ms-4 text-3xl font-semibold">${food[i].strMeal}</h3>
             </div>
           </div>
         </a>
      `
    
    }
    
    $('.food-ingredients-food').html(cartona) ;
    
    }
    
    function openDetailsIngredients(id){
        $('.food-hidden-ingredients-food').addClass('hidden');
        $('.food-details-ingredients').removeClass('hidden');
         getDetailIngredients(id);
    
    }
    
    function closeDetailsIngredients(){
        $('.food-hidden-ingredients-food').removeClass('hidden');
        $('.food-details-ingredients').addClass('hidden');
    }
        
    async function getDetailIngredients(id){
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const response = await api.json();
        displayDetailsIngredients(response.meals)
    }
    
    function displayDetailsIngredients(food){
         cartona2 =  `
    
        <div>
        <img
          class="rounded-md"
          src="${food[0].strMealThumb}"
          alt=""
        />
        <h2 class="text-white font-semibold text-3xl mt-2">${food[0].strMeal}</h2>
      </div>
      
      <div class="col-span-2 text-white">
        <div class="flex justify-between">
          <h2 class="font-semibold text-3xl">Instructions</h2>
          <button onclick="closeDetailsIngredients()"
            class="text-black bg-red-600 p-1 rounded-xl fa-solid open-close-icon fa-2x fa-x"
          ></button>
        </div>
        <p class="mt-2 mb-4">
          ${food[0].strInstructions}
        </p>
        <h3 class="font-medium text-2xl mb-2">
          <span class="font-bold text-3xl">Area :</span> ${food[0].strArea}
        </h3>
        <h3 class="font-medium text-2xl mb-2">
          <span class="font-bold text-3xl">Category :</span> ${food[0].strCategory}
        </h3>
        <h3 class="font-semibold text-3xl">Recipes :</h3>
        <div class="w-[100%] ms-3 mt-4 break-after-right">
          <ul class="flex flex-wrap text-black">
            
         
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure1} ${food[0].strIngredient1}
    </li>     
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure2} ${food[0].strIngredient2}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure3} ${food[0].strIngredient3}
    </li> 
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure4} ${food[0].strIngredient4}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure5} ${food[0].strIngredient5}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure6} ${food[0].strIngredient6}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure7} ${food[0].strIngredient7}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure8} ${food[0].strIngredient8}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure9} ${food[0].strIngredient9}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure10} ${food[0].strIngredient10}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure11} ${food[0].strIngredient11}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure12} ${food[0].strIngredient12}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure13} ${food[0].strIngredient13}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure14} ${food[0].strIngredient14}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure15} ${food[0].strIngredient15}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure16} ${food[0].strIngredient16}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure17} ${food[0].strIngredient17}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure18} ${food[0].strIngredient18}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure19} ${food[0].strIngredient19}
    </li>
    <li class="text-nowrap bg-[#CFF4FC] rounded-md me-4 mb-4 p-1">
    ${ food[0].strMeasure20} ${food[0].strIngredient20}
    </li>
    
      
            </ul>
        </div>
      
        <h3 class="font-medium text-3xl mt-2">Tags :</h3>
        <ul class="text-black flex ms-3 mt-4">
          <li
            class="text-nowrap font-normal bg-[#F8D7DA] rounded-md me-4 mb-4 p-1"
          >
          ${food[0].strTags}
          </li>
        </ul>
      
        <ul class="text-white flex mt-4">
          <a href="${food[0].strSource}" target="_blank">
            <li
              class="text-nowrap font-normal bg-green-700 rounded-md me-2 mb-4 ps-3 pe-3 pt-2 pb-2"
            >
              Source
            </li>
          </a>
      
          <a href="${food[0].strYoutube}" target="_blank">
            <li
              class="text-nowrap font-normal bg-red-600 rounded-md mb-4 ps-3 pe-3 pt-2 pb-2"
            >
              Youtube
            </li>
          </a>
        </ul>
      </div>
       `
       $('.food-details-ingredients').html(cartona2) ;
    
    }
    
    }
    


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Contact Us @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


{


let nameInput = false;
let emailInput = false;
let phoneInput = false;
let ageInput = false;
let passwordInput = false;
let repasswordInput = false;


$(".name-input").on("focus", () => {
    nameInput = true
})
$(".email-input").on("focus", () => {
    emailInput = true
})
$(".phone-input").on("focus", () => {
    phoneInput = true

})
$(".age-input").on("focus", () => {
    ageInput = true
})
$(".password-input").on("focus", () => {
    passwordInput = true
})
$(".repassword-input").on("focus", () => {
    repasswordInput = true
})


function inputsValidation() {
  if (nameInput) {      
        if (nameValidation()) {
            $("#nameAlert").removeClass("block").addClass("hidden");

        } else {
            $("#nameAlert").removeClass("hidden").addClass("block");

        }
    }
    if (emailInput) {

        if (emailValidation()) {
            $("#emailAlert").removeClass("block").addClass("hidden");
        } else {
            $("#emailAlert").removeClass("hidden").addClass("block");

        }
    }

    if (phoneInput) {
        if (phoneValidation()) {
            $("#phoneAlert").removeClass("block").addClass("hidden");
        } else {
            $("#phoneAlert").removeClass("hidden").addClass("block");

        }
    }

    if (ageInput) {
        if (ageValidation()) {
            $("#ageAlert").removeClass("block").addClass("hidden");
        } else {
            $("#ageAlert").removeClass("hidden").addClass("block");

        }
    }

    if (passwordInput) {
        if (passwordValidation()) {
            $("#passwordAlert").removeClass("block").addClass("hidden");
        } else {
            $("#passwordAlert").removeClass("hidden").addClass("block");

        }
    }

    if (repasswordInput) {
        if (repasswordValidation()) {
            $("#repasswordAlert").removeClass("block").addClass("hidden");
        } else {
            $("#repasswordAlert").removeClass("hidden").addClass("block");

        }
    }


    if (nameValidation() &&
        emailValidation() &&
        phoneValidation() &&
        ageValidation() &&
        passwordValidation() &&
        repasswordValidation()) {
        $(".submit-btn").removeAttr("disabled")
    } else {
        $(".submit-btn").attr("disabled", true)
    }
} 

function nameValidation() {
    return (/^[a-zA-Z ]+$/.test($(".name-input").val()))
}

function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($(".email-input").val()))
}

function phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test($(".phone-input").val()))
}

function ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test($(".age-input").val()))
}

function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test($(".password-input").val()))
}

function repasswordValidation() {
    return $(".repassword-input").val() == $(".password-input").val()
}

}