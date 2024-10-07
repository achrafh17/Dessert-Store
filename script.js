const cartbutton = document.querySelector(".add-to-cart");
const afterclick = document.querySelector(".after-add-to-cart");
const beforeclick = document.querySelector(".before-add-to-cart");
const waffle = document.querySelector(".waffle-image");
/*---------------------------------------------------------- */
const CartButtonTwo = document.querySelector("#add-to-cart-two");
const afterclicktwo = document.querySelector("#after-add-to-cart-two");
const beforeclicktwo = document.querySelector("#before-add-to-cart-two");
const cremeBrulee = document.querySelector(".creme-brile-image");
/*--------------------------------------------------- */
const CartButtonThree = document.querySelector("#add-to-cart-three");
const afterclickthree = document.querySelector("#after-add-to-cart-three");
const beforeclickthree = document.querySelector("#before-add-to-cart-three");
const macaron = document.querySelector(".macaron");
/*--------------------------------------------------------------- */
const CartButtonFour = document.querySelector("#add-to-cart-four");
const afterclickFour = document.querySelector("#after-add-to-cart-four");
const beforeclickFour = document.querySelector("#before-add-to-cart-four");
const tiramisu = document.querySelector(".tiramisu");
/*----------------------------------------------------------------------- */
const CartButtonfive = document.querySelector("#add-to-cart-five");
const afterclickfive = document.querySelector("#after-add-to-cart-five");
const beforeclickfive = document.querySelector("#before-add-to-cart-five");
const baklava = document.querySelector(".baklava");
/** --------------------------------------------------------------------*/
const CartButtonsix = document.querySelector("#add-to-cart-six");
const afterclicksix = document.querySelector("#after-add-to-cart-six");
const beforeclicksix = document.querySelector("#before-add-to-cart-six");
const pie = document.querySelector(".pie");
/**---------------------------------------------------------------------- */
const CartButtonseven = document.querySelector("#add-to-cart-seven");
const afterclickseven = document.querySelector("#after-add-to-cart-seven");
const beforeclickseven = document.querySelector("#before-add-to-cart-seven");
const cake = document.querySelector(".cake");
/**----------------------------------------------------------------------- */
const CartButtoneight = document.querySelector("#add-to-cart-eight");
const afterclickeight = document.querySelector("#after-add-to-cart-eight");
const beforeclickeight = document.querySelector("#before-add-to-cart-eight");
const brownie = document.querySelector(".brownie");
/**----------------------------------------------------------------------- */
const CartButtonnine = document.querySelector("#add-to-cart-nine");
const afterclicknine = document.querySelector("#after-add-to-cart-nine");
const beforeclicknine = document.querySelector("#before-add-to-cart-nine");
const panna = document.querySelector(".panna");
/**-------------------------------------------------------------------------- */

/**-------------------------------------------------------------------------------------------------------- */
function addToCart() {
  beforeclick.style.display = "none";
  afterclick.style.display = "flex";
  cartbutton.style.border = "none";
  cartbutton.style.scale = "1";
  waffle.style.border = "3px solid #af583b";
}
function addToCartTwo() {
  beforeclicktwo.style.display = "none";
  afterclicktwo.style.display = "flex";
  CartButtonTwo.style.border = "none";
  CartButtonTwo.style.scale = "1";
  cremeBrulee.style.border = "3px solid #af583b";
}
function addToCartThree() {
  beforeclickthree.style.display = "none";
  afterclickthree.style.display = "flex";
  CartButtonThree.style.border = "none";
  CartButtonThree.style.scale = "1";
  macaron.style.border = "3px solid #af583b";
}
function addToCartFour() {
  beforeclickFour.style.display = "none";
  afterclickFour.style.display = "flex";
  CartButtonThree.style.border = "none";
  CartButtonFour.style.scale = "1";
  tiramisu.style.border = "4px solid #af583b";
}
function addToCartfive() {
  beforeclickfive.style.display = "none";
  afterclickfive.style.display = "flex";
  CartButtonfive.style.border = "none";
  CartButtonfive.style.scale = "1";
  baklava.style.border = "3px solid #af583b";
}
function addToCartsix() {
  beforeclicksix.style.display = "none";
  afterclicksix.style.display = "flex";
  CartButtonsix.style.border = "none";
  CartButtonsix.style.scale = "1";
  pie.style.border = "3px solid #af583b";
}
function addToCartseven() {
  beforeclickseven.style.display = "none";
  afterclickseven.style.display = "flex";
  CartButtonseven.style.border = "none";
  CartButtonseven.style.scale = "1";
  cake.style.border = "4px solid #af583b";
}
function addToCartsight() {
  beforeclickeight.style.display = "none";
  afterclickeight.style.display = "flex";
  CartButtoneight.style.border = "none";
  CartButtoneight.style.scale = "1";
  brownie.style.border = "4px solid #af583b";
}
function addToCartnine() {
  beforeclicknine.style.display = "none";
  afterclicknine.style.display = "flex";
  CartButtonnine.style.border = "none";
  CartButtonnine.style.scale = "1";
  panna.style.border = "4px solid #af583b";
}

/**----------------------------------------------------------------------------------------------------------- */
cartbutton.addEventListener("click", addToCart);
CartButtonTwo.addEventListener("click", addToCartTwo);
CartButtonThree.addEventListener("click", addToCartThree);
CartButtonFour.addEventListener("click", addToCartFour);
CartButtonfive.addEventListener("click", addToCartfive);
CartButtonsix.addEventListener("click", addToCartsix);
CartButtonseven.addEventListener("click", addToCartseven);
CartButtoneight.addEventListener("click", addToCartsight);
CartButtonnine.addEventListener("click", addToCartnine);
/**--------------------------------------------------- */
/**BUTTON BUTTON BUTTON BUTTON BUTTON BUTTON BUTTON BUTTON BUTTON ---------------------------------------------------------- */

let NumberOfArticleone = 0;
let NumberOfArticletwo = 0;
let NumberOfArticlethree = 0;
let NumberOfArticlefour = 0;
let NumberOfArticlefive = 0;
let NumberOfArticlesix = 0;
let NumberOfArticleseven = 0;
let NumberOfArticleeight = 0;
let NumberOfArticlenine = 0;
const addButton = document.querySelector("#add-button");
const decrementButonn = document.querySelector("#decrement-button");
const span = document.querySelector("#number-of-articls");
/**---------------------------------------- */

const addButtontwo = document.querySelector(".add-button-two");
const decrementButonntwo = document.querySelector(".decrement-button-two");
const spantwo = document.querySelector(".span-two");
/**------------------------------------------------------------------------- */
const addButtonthree = document.querySelector(".add-button-three");
const decrementButonnthree = document.querySelector(".decrement-button-three");
const spanthree = document.querySelector(".span-three");
/**------------------------------------------------------------------------ */
const addButtonfour = document.querySelector(".add-button-four");
const decrementButonnfour = document.querySelector(".decrement-button-four");
const spanfour = document.querySelector(".span-four");
/**-------------------------------------------------------------------------- */
const addButtonfive = document.querySelector(".add-button-five");
const decrementButonnfive = document.querySelector(".decrement-button-five");
const spanfive = document.querySelector(".span-five");
/**-------------------------------------------------------------------------- */
const addButtonsix = document.querySelector(".add-button-six");
const decrementButonnsix = document.querySelector(".decrement-button-six");
const spansix = document.querySelector(".span-six");
/**------------------------------------------------------------------------------ */
const addButtonseven = document.querySelector(".add-button-seven");
const decrementButonnseven = document.querySelector(".decrement-button-seven");
const spanseven = document.querySelector(".span-seven");
/**------------------------------------------------------------------------------- */
const addButtoneight = document.querySelector(".add-button-eight");
const decrementButonneight = document.querySelector(".decrement-button-eight");
const spaneight = document.querySelector(".span-eight");
/**------------------------------------------------------------------------------- */
const addButtonnine = document.querySelector(".add-button-nine");
const decrementButonnnine = document.querySelector(".decrement-button-nine");
const spannine = document.querySelector(".span-nine");
/**ADD BUTTON */

/**ADD DECREMENT FIUCTIONS */

function addElement() {
  NumberOfArticleone++;
  span.textContent = `${NumberOfArticleone}`;
}
function DecrementElement() {
  if (NumberOfArticleone > 1) {
    NumberOfArticleone--;
    span.textContent = `${NumberOfArticleone}`;
  }
}
/**---------------------------------------------- */
function addElementtwo() {
  NumberOfArticletwo++;
  spantwo.textContent = `${NumberOfArticletwo}`;
}
function DecrementElementtwo() {
  if (NumberOfArticletwo > 1) {
    NumberOfArticletwo--;
    spantwo.textContent = `${NumberOfArticletwo}`;
  }
}
/**--------------------------------------------- */
function addElementthree() {
  NumberOfArticlethree++;
  spanthree.textContent = `${NumberOfArticlethree}`;
}
function DecrementElementthree() {
  if (NumberOfArticlethree > 1) {
    NumberOfArticlethree--;
    spanthree.textContent = `${NumberOfArticlethree}`;
  }
}
/**------------------------------------------------ */
function addElementfour() {
  NumberOfArticlefour++;
  spanfour.textContent = `${NumberOfArticlefour}`;
}
function DecrementElementfour() {
  if (NumberOfArticlefour > 1) {
    NumberOfArticlefour--;
    spanfour.textContent = `${NumberOfArticlefour}`;
  }
}
/**----------------------------------------------- */
function addElementfive() {
  NumberOfArticlefive++;
  spanfive.textContent = `${NumberOfArticlefive}`;
}
function DecrementElementfive() {
  if (NumberOfArticlefive > 1) {
    NumberOfArticlefive--;
    spanfive.textContent = `${NumberOfArticlefive}`;
  }
}
/**--------------------------------------------------- */
function addElementsix() {
  NumberOfArticlesix++;
  spansix.textContent = `${NumberOfArticlesix}`;
}
function DecrementElementsix() {
  if (NumberOfArticlesix > 1) {
    NumberOfArticlesix--;
    spansix.textContent = `${NumberOfArticlesix}`;
  }
}
/**------------------------------------------------------ */
function addElementseven() {
  NumberOfArticleseven++;
  spanseven.textContent = `${NumberOfArticleseven}`;
}
function DecrementElementseven() {
  if (NumberOfArticleseven > 1) {
    NumberOfArticleseven--;
    spanseven.textContent = `${NumberOfArticleseven}`;
  }
}
/**----------------------------------------------------- */
function addElementeight() {
  NumberOfArticleeight++;
  spaneight.textContent = `${NumberOfArticleeight}`;
}
function DecrementElementeight() {
  if (NumberOfArticleeight > 1) {
    NumberOfArticleeight--;
    spaneight.textContent = `${NumberOfArticleeight}`;
  }
}
/**--------------------------------------------------- */
function addElementnine() {
  NumberOfArticlenine++;
  spannine.textContent = `${NumberOfArticlenine}`;
}
function DecrementElementnine() {
  if (NumberOfArticlenine > 1) {
    NumberOfArticlenine--;
    spannine.textContent = `${NumberOfArticlenine}`;
  }
}
/**----------------------------------------------- */
addButton.addEventListener("click", addElement);
decrementButonn.addEventListener("click", DecrementElement);
/**--------------------------------------------------- */
addButtontwo.addEventListener("click", addElementtwo);
decrementButonntwo.addEventListener("click", DecrementElementtwo);
/**-------------------------------------------------------------- */
addButtonthree.addEventListener("click", addElementthree);
decrementButonnthree.addEventListener("click", DecrementElementthree);
/**----------------------------------------------------------------- */
addButtonfour.addEventListener("click", addElementfour);
decrementButonnfour.addEventListener("click", DecrementElementfour);
/**--------------------------------------------------------------------- */
addButtonfive.addEventListener("click", addElementfive);
decrementButonnfive.addEventListener("click", DecrementElementfive);
/**----------------------------------------------------------------------- */
addButtonsix.addEventListener("click", addElementsix);
decrementButonnsix.addEventListener("click", DecrementElementsix);
/**--------------------------------------------------------------------------- */
addButtonseven.addEventListener("click", addElementseven);
decrementButonnseven.addEventListener("click", DecrementElementseven);
/**----------------------------------------------------------------------------- */
addButtoneight.addEventListener("click", addElementeight);
decrementButonneight.addEventListener("click", DecrementElementeight);
/**---------------------------------------------------------------------------- */
addButtonnine.addEventListener("click", addElementnine);
decrementButonnnine.addEventListener("click", DecrementElementnine);
/**----------------------------------------CART ------------------------------------------------------------------------------------------------------------------------ */
const emptylistimage = document.querySelector("#empty-list-image");
const spanNumberTotalElements = document.querySelector("#product-quantity");
const thecartmessage = document.querySelector("#the-cart-message");

const waffleprice = 6.5;
const cremeprice = 7;
const macaronprice = 8;
const tiramisuprice = 5.5;
const baklavaprice = 4;
const pieprice = 5;
const cakeprice = 4.5;
const browniwprice = 5.5;
const pannaprice = 6.5;

let totalPrice =
  waffleprice * NumberOfArticleone +
  cremeprice * NumberOfArticletwo +
  macaronprice * NumberOfArticlethree +
  tiramisuprice * NumberOfArticlefour +
  baklavaprice * NumberOfArticlefive +
  pieprice * NumberOfArticlesix +
  cakeprice * NumberOfArticleseven +
  browniwprice * NumberOfArticleeight +
  pannaprice * NumberOfArticlenine;

function elminateEmptyImage() {
  emptylistimage.style.display = "none";
  thecartmessage.style.display = "none";
}
function calculateTotalQuantity() {
  let totalNumberElement =
    NumberOfArticleone +
    NumberOfArticletwo +
    NumberOfArticlethree +
    NumberOfArticlefour +
    NumberOfArticlefive +
    NumberOfArticlesix +
    NumberOfArticleseven +
    NumberOfArticleeight +
    NumberOfArticlenine;
  spanNumberTotalElements.textContent = `${totalNumberElement}`;
}
cartbutton.addEventListener("click", elminateEmptyImage);
CartButtonTwo.addEventListener("click", elminateEmptyImage);
CartButtonThree.addEventListener("click", elminateEmptyImage);
CartButtonFour.addEventListener("click", elminateEmptyImage);
CartButtonfive.addEventListener("click", elminateEmptyImage);
CartButtonsix.addEventListener("click", elminateEmptyImage);
CartButtonseven.addEventListener("click", elminateEmptyImage);
CartButtoneight.addEventListener("click", elminateEmptyImage);
CartButtonnine.addEventListener("click", elminateEmptyImage);
/**------------------------------------- */
cartbutton.addEventListener("click", calculateTotalQuantity);
CartButtonTwo.addEventListener("click", calculateTotalQuantity);
CartButtonThree.addEventListener("click", calculateTotalQuantity);
CartButtonFour.addEventListener("click", calculateTotalQuantity);
CartButtonfive.addEventListener("click", calculateTotalQuantity);
CartButtonsix.addEventListener("click", calculateTotalQuantity);
CartButtonseven.addEventListener("click", calculateTotalQuantity);
CartButtoneight.addEventListener("click", calculateTotalQuantity);
CartButtonnine.addEventListener("click", calculateTotalQuantity);
/**----------------------------------------------------------- */
/**    CART ELEMENTS ELEMENTS IMAGES QUANTITY PRICE */
const TheCart = document.querySelector(".the-cart");
/**MAIN------------------------------------------------------------- */
const nameOfProductSelected = document.createElement("p");

const containerpriceAndPricemultipleQuantity = document.createElement("div");
containerpriceAndPricemultipleQuantity.className =
  "containerpriceAndPricemultipleQuantity";

const DeclineButton = document.createElement("button");
DeclineButton.id = "DeclineButton";
const declineLogo = document.createElement("img");
declineLogo.src = "Images/icon-remove-item.svg";
declineLogo.id = "declineLogo";
DeclineButton.appendChild(declineLogo);
/**---------------------------------------------------- */

const NumberWaffleSelected = document.createElement("p");
let WafflePriceTotal;
const priceWaffle = document.createElement("p");
const wafflePriceTotal = document.createElement("p");
const hrone = document.createElement("hr");
const hrComfirmedone = document.createElement("hr");

const waffleContainer = document.createElement("div");
waffleContainer.className = "waffleContainer";

const WffleImage = document.createElement("img");
WffleImage.src = "Images/image-waffle-thumbnail.jpg";
WffleImage.id = "WffleImage";

const waffleNamePrice = document.createElement("div");
waffleNamePrice.className = "waffleNamePrice";
const totalwafflepriceconfirmed = document.createElement("p");
totalwafflepriceconfirmed.id = "totalwafflepriceconfirmed";

const NumberWffle = document.createElement("p");
NumberWffle.id = "NumberWffle";
const wafflepriceConfirmedOrder = document.createElement("p");
wafflepriceConfirmedOrder.id = "wafflepriceConfirmedOrder";

function dispalyElemetsone() {
  WafflePriceTotal = waffleprice * NumberOfArticleone;
  wafflePriceTotal.style.color = "hsl(7, 20%, 60%)";
  wafflePriceTotal.style.fontWeight = "800";
  wafflePriceTotal.textContent = `$ ${WafflePriceTotal}`;
  NumberWaffleSelected.textContent = `${NumberOfArticleone}x`;
  NumberWaffleSelected.style.color = "#be624a";
  NumberWaffleSelected.style.fontWeight = "900";
  nameOfProductSelected.textContent = "Waffle";
  nameOfProductSelected.id = "nameOfProductSelected";
  priceWaffle.textContent = `$ ${waffleprice}`;
  priceWaffle.style.color = "hsl(14, 25%, 72%)";
  TheCart.appendChild(nameOfProductSelected);
  TheCart.appendChild(containerpriceAndPricemultipleQuantity);
  containerpriceAndPricemultipleQuantity.appendChild(NumberWaffleSelected);
  containerpriceAndPricemultipleQuantity.appendChild(priceWaffle);
  containerpriceAndPricemultipleQuantity.appendChild(wafflePriceTotal);
  containerpriceAndPricemultipleQuantity.appendChild(DeclineButton);

  OrderConfirmedCartContent.appendChild(waffleContainer);
  waffleContainer.appendChild(WffleImage);
  waffleContainer.appendChild(waffleNamePrice);

  NumberWffle.textContent = `${NumberOfArticleone}x`;

  waffleNamePrice.appendChild(nameOfProductSelected);
  waffleNamePrice.appendChild(NumberWffle);
  wafflepriceConfirmedOrder.textContent = `$ ${waffleprice}`;

  waffleNamePrice.appendChild(wafflepriceConfirmedOrder);

  totalwafflepriceconfirmed.textContent = `$ ${WafflePriceTotal}`;

  waffleContainer.appendChild(totalwafflepriceconfirmed);

  OrderConfirmedCartContent.appendChild(hrComfirmedone); //you should redclare the hr

  TheCart.appendChild(hrone);
}

function removeElementone() {
  containerpriceAndPricemultipleQuantity.remove();
  hrone.remove();
  nameOfProductSelected.remove();
  NumberOfArticleone = 0;
  span.textContent = `${NumberOfArticleone}`;
  let totalNumberElement =
    NumberOfArticleone +
    NumberOfArticletwo +
    NumberOfArticlethree +
    NumberOfArticlefour +
    NumberOfArticlefive +
    NumberOfArticlesix +
    NumberOfArticleseven +
    NumberOfArticleeight +
    NumberOfArticlenine;
  spanNumberTotalElements.textContent = `${totalNumberElement}`;
}

cartbutton.addEventListener("click", dispalyElemetsone);
DeclineButton.addEventListener("click", removeElementone);
/**------------------------------------------------------------------------------------- */

const containerpriceAndPricemultipleQuantitytwo = document.createElement("div");
containerpriceAndPricemultipleQuantitytwo.className =
  "containerpriceAndPricemultipleQuantitytwo";
const NumbercremeSelected = document.createElement("p");
let CremePriceTotal;
const pricecreme = document.createElement("p");
const cremePriceTotal = document.createElement("p");

const DeclineButtontwo = document.createElement("button");
DeclineButtontwo.id = "DeclineButtontwo";
const declineLogotwo = document.createElement("img");
declineLogotwo.src = "Images/icon-remove-item.svg";
declineLogotwo.id = "declineLogotwo";
DeclineButtontwo.appendChild(declineLogotwo);
const hrtwo = document.createElement("hr");
const nameOfProductSelectedtwo = document.createElement("p");

const hrComfirmedtwo = document.createElement("hr");
const cremeContainer = document.createElement("div");
cremeContainer.className = "cremeContainer";
const cremeImage = document.createElement("img");
cremeImage.src = "Images/image-creme-brulee-thumbnail.jpg";
cremeImage.id = "CremeImage";
const cremeNamePrice = document.createElement("div");
cremeNamePrice.className = "cremeNamePrice";
const totalcremepriceconfirmed = document.createElement("p");
totalcremepriceconfirmed.id = "totalcremepriceconfirmed";
const NumberCreme = document.createElement("p");
NumberCreme.id = "NumberCreme";
const cremepriceConfirmedOrder = document.createElement("p");
cremepriceConfirmedOrder.id = "cremepriceConfirmedOrder";

function dispalyElemetstwo() {
  CremePriceTotal = cremeprice * NumberOfArticletwo; // Calcul du prix total
  cremePriceTotal.style.color = "hsl(7, 20%, 60%)"; // Stylisation de l'élément DOM
  cremePriceTotal.style.fontWeight = "800";
  cremePriceTotal.textContent = `$ ${CremePriceTotal}`; // Affichage du prix total
  NumbercremeSelected.textContent = `${NumberOfArticletwo}x`;
  NumbercremeSelected.style.color = "#be624a";
  NumbercremeSelected.style.fontWeight = "900";
  nameOfProductSelectedtwo.textContent = "Creme Brulee";
  nameOfProductSelectedtwo.id = "nameOfProductSelectedtwo";
  pricecreme.textContent = `$ ${cremeprice}`;
  pricecreme.style.color = "hsl(14, 25%, 72%)";
  TheCart.appendChild(nameOfProductSelectedtwo);
  TheCart.appendChild(containerpriceAndPricemultipleQuantitytwo);
  containerpriceAndPricemultipleQuantitytwo.appendChild(NumbercremeSelected);
  containerpriceAndPricemultipleQuantitytwo.appendChild(pricecreme);
  containerpriceAndPricemultipleQuantitytwo.appendChild(cremePriceTotal); // Ajout correct de l'élément DOM
  containerpriceAndPricemultipleQuantitytwo.appendChild(DeclineButtontwo);

  // Créer un nouvel élément <hr>

  OrderConfirmedCartContent.appendChild(cremeContainer);
  cremeContainer.appendChild(cremeImage);
  cremeContainer.appendChild(cremeNamePrice);

  NumberCreme.textContent = `${NumberOfArticletwo}x`;

  cremeNamePrice.appendChild(nameOfProductSelectedtwo);
  cremeNamePrice.appendChild(NumberCreme);
  cremepriceConfirmedOrder.textContent = `$ ${cremeprice}`;

  cremeNamePrice.appendChild(cremepriceConfirmedOrder);

  totalcremepriceconfirmed.textContent = `$ ${CremePriceTotal}`;

  cremeContainer.appendChild(totalcremepriceconfirmed);

  OrderConfirmedCartContent.appendChild(hrComfirmedtwo);

  TheCart.appendChild(hrtwo); // Ajout au DOM
}

function removeElementtwo() {
  containerpriceAndPricemultipleQuantitytwo.remove();
  nameOfProductSelectedtwo.remove();
  hrtwo.remove();
  NumberOfArticletwo = 0;
  spantwo.textContent = `${NumberOfArticletwo}`;
  let totalNumberElement =
    NumberOfArticleone +
    NumberOfArticletwo +
    NumberOfArticlethree +
    NumberOfArticlefour +
    NumberOfArticlefive +
    NumberOfArticlesix +
    NumberOfArticleseven +
    NumberOfArticleeight +
    NumberOfArticlenine;
  spanNumberTotalElements.textContent = `${totalNumberElement}`;
}
/*-----------------------------------------------------------------------------*/

const containerpriceAndPricemultipleQuantitythree =
  document.createElement("div");
containerpriceAndPricemultipleQuantitythree.className =
  "containerpriceAndPricemultipleQuantitythree";
const NumberMacaronSelected = document.createElement("p");
const pricemacaron = document.createElement("p");
const MacaronPriceTotal = document.createElement("p");
let mcaronPriceTotal;
const DeclineButtonthree = document.createElement("button");
DeclineButtonthree.id = "DeclineButtonthree";
const declineLogothree = document.createElement("img");
declineLogothree.src = "Images/icon-remove-item.svg";
declineLogothree.id = "declineLogothree";
DeclineButtonthree.appendChild(declineLogothree);
const hrthree = document.createElement("hr");
const nameOfProductSelectedthree = document.createElement("p");

const hrComfirmedthree = document.createElement("hr");
const macaronContainer = document.createElement("div");
macaronContainer.className = "macaronContainer";
const macaronImage = document.createElement("img");
macaronImage.src = "Images/image-macaron-thumbnail.jpg";
macaronImage.id = "macaronImage";
const macaronNamePrice = document.createElement("div");
macaronNamePrice.className = "macaronNamePrice";
const totalmacaronpriceconfirmed = document.createElement("p");
totalmacaronpriceconfirmed.id = "totalmacaronpriceconfirmed";
const NumberMacaron = document.createElement("p");
NumberMacaron.id = "NumberMacaron";
const macaronpriceConfirmedOrder = document.createElement("p");
macaronpriceConfirmedOrder.id = "macaronpriceConfirmedOrder";

function dispalyElemetsthree() {
  mcaronPriceTotal = macaronprice * NumberOfArticlethree; // Calcul du prix total
  MacaronPriceTotal.style.color = "hsl(7, 20%, 60%)"; // Stylisation de l'élément DOM
  MacaronPriceTotal.style.fontWeight = "800";
  MacaronPriceTotal.textContent = `$ ${mcaronPriceTotal}`; // Affichage du prix total
  NumberMacaronSelected.textContent = `${NumberOfArticlethree}x`;
  NumberMacaronSelected.style.color = "#be624a";
  NumberMacaronSelected.style.fontWeight = "900";
  nameOfProductSelectedthree.textContent = "Macaron";
  nameOfProductSelectedthree.id = "nameOfProductSelectedthree";
  pricemacaron.textContent = `$ ${macaronprice}`;
  pricemacaron.style.color = "hsl(14, 25%, 72%)";
  TheCart.appendChild(nameOfProductSelectedthree);
  TheCart.appendChild(containerpriceAndPricemultipleQuantitythree);
  containerpriceAndPricemultipleQuantitythree.appendChild(
    NumberMacaronSelected
  );
  containerpriceAndPricemultipleQuantitythree.appendChild(pricemacaron);
  containerpriceAndPricemultipleQuantitythree.appendChild(MacaronPriceTotal); // Ajout correct de l'élément DOM
  containerpriceAndPricemultipleQuantitythree.appendChild(DeclineButtonthree);

  OrderConfirmedCartContent.appendChild(macaronContainer);
  macaronContainer.appendChild(macaronImage);
  macaronContainer.appendChild(macaronNamePrice);

  NumberMacaron.textContent = `${NumberOfArticlethree}x`;

  macaronNamePrice.appendChild(nameOfProductSelectedthree);
  macaronNamePrice.appendChild(NumberMacaron);
  macaronpriceConfirmedOrder.textContent = `$ ${macaronprice}`;

  macaronNamePrice.appendChild(macaronpriceConfirmedOrder);

  totalmacaronpriceconfirmed.textContent = `$ ${mcaronPriceTotal}`;

  macaronContainer.appendChild(totalmacaronpriceconfirmed);

  OrderConfirmedCartContent.appendChild(hrComfirmedthree);

  TheCart.appendChild(hrthree); // Ajout au DOM
}

function removeElementthree() {
  containerpriceAndPricemultipleQuantitythree.remove();
  nameOfProductSelectedthree.remove();
  hrthree.remove();
  NumberOfArticlethree = 0;
  spanthree.textContent = `${NumberOfArticlethree}`;
  let totalNumberElement =
    NumberOfArticleone +
    NumberOfArticletwo +
    NumberOfArticlethree +
    NumberOfArticlefour +
    NumberOfArticlefive +
    NumberOfArticlesix +
    NumberOfArticleseven +
    NumberOfArticleeight +
    NumberOfArticlenine;
  spanNumberTotalElements.textContent = `${totalNumberElement}`;
}
/**---------------------------------------------------------------- */
const containerpriceAndPricemultipleQuantityfour =
  document.createElement("div");
containerpriceAndPricemultipleQuantityfour.className =
  "containerpriceAndPricemultipleQuantityfour";
const NumberTiramisuSelected = document.createElement("p");
const priceTiramisu = document.createElement("p");
const TiramisuPriceTotal = document.createElement("p");
let tiramisuPriceTotal;
const DeclineButtonfour = document.createElement("button");
DeclineButtonfour.id = "DeclineButtonfour";
const declineLogofour = document.createElement("img");
declineLogofour.src = "Images/icon-remove-item.svg";
declineLogofour.id = "declineLogofour";
DeclineButtonfour.appendChild(declineLogofour);
const hrfour = document.createElement("hr");
const nameOfProductSelectedfour = document.createElement("p");

const hrComfirmedfour = document.createElement("hr");
const tiramisuContainer = document.createElement("div");
tiramisuContainer.className = "tiramisuContainer";
const tiramisuImage = document.createElement("img");
tiramisuImage.src = "Images/image-tiramisu-thumbnail.jpg";
tiramisuImage.id = "tiramisuImage";
const tiramisuNamePrice = document.createElement("div");
tiramisuNamePrice.className = "tiramisuNamePrice";
const totaltiramisupriceconfirmed = document.createElement("p");
totaltiramisupriceconfirmed.id = "totaltiramisupriceconfirmed";
const NumberTiramisu = document.createElement("p");
NumberTiramisu.id = "NumberTiramisu";
const tiramisupriceConfirmedOrder = document.createElement("p");
tiramisupriceConfirmedOrder.id = "tiramisupriceConfirmedOrder";

function dispalyElemetsfour() {
  tiramisuPriceTotal = tiramisuprice * NumberOfArticlefour; // Calcul du prix total
  TiramisuPriceTotal.style.color = "hsl(7, 20%, 60%)"; // Stylisation de l'élément DOM
  TiramisuPriceTotal.style.fontWeight = "800";
  TiramisuPriceTotal.textContent = `$ ${tiramisuPriceTotal}`; // Affichage du prix total
  NumberTiramisuSelected.textContent = `${NumberOfArticlefour}x`;
  NumberTiramisuSelected.style.color = "#be624a";
  NumberTiramisuSelected.style.fontWeight = "900";
  nameOfProductSelectedfour.textContent = "Tiramisu";
  nameOfProductSelectedfour.id = "nameOfProductSelectedfour";
  priceTiramisu.textContent = `$ ${tiramisuprice}`;
  priceTiramisu.style.color = "hsl(14, 25%, 72%)";
  TheCart.appendChild(nameOfProductSelectedfour);
  TheCart.appendChild(containerpriceAndPricemultipleQuantityfour);
  containerpriceAndPricemultipleQuantityfour.appendChild(
    NumberTiramisuSelected
  );
  containerpriceAndPricemultipleQuantityfour.appendChild(priceTiramisu);
  containerpriceAndPricemultipleQuantityfour.appendChild(TiramisuPriceTotal); // Ajout correct de l'élément DOM
  containerpriceAndPricemultipleQuantityfour.appendChild(DeclineButtonfour);

  OrderConfirmedCartContent.appendChild(tiramisuContainer);
  tiramisuContainer.appendChild(tiramisuImage);
  tiramisuContainer.appendChild(tiramisuNamePrice);

  NumberTiramisu.textContent = `${NumberOfArticlefour}x`;

  tiramisuNamePrice.appendChild(nameOfProductSelectedfour);
  tiramisuNamePrice.appendChild(NumberTiramisu);
  tiramisupriceConfirmedOrder.textContent = `$ ${tiramisuprice}`;

  tiramisuNamePrice.appendChild(tiramisupriceConfirmedOrder);

  totaltiramisupriceconfirmed.textContent = `$ ${tiramisuPriceTotal}`;

  tiramisuContainer.appendChild(totaltiramisupriceconfirmed);

  OrderConfirmedCartContent.appendChild(hrComfirmedfour);

  TheCart.appendChild(hrfour); // Ajout au DOM
}

function removeElementfour() {
  containerpriceAndPricemultipleQuantityfour.remove();
  nameOfProductSelectedfour.remove();
  hrfour.remove();
  NumberOfArticlefour = 0;
  spanfour.textContent = `${NumberOfArticlefour}`;
  let totalNumberElement =
    NumberOfArticleone +
    NumberOfArticletwo +
    NumberOfArticlethree +
    NumberOfArticlefour +
    NumberOfArticlefive +
    NumberOfArticlesix +
    NumberOfArticleseven +
    NumberOfArticleeight +
    NumberOfArticlenine;
  spanNumberTotalElements.textContent = `${totalNumberElement}`;
}
/**----------------------------------------------------------------- */
const containerpriceAndPricemultipleQuantityfive =
  document.createElement("div");
containerpriceAndPricemultipleQuantityfive.className =
  "containerpriceAndPricemultipleQuantityfive";
const NumberBaklavaSelected = document.createElement("p");
const priceBaklava = document.createElement("p");
const BaklavaPriceTotal = document.createElement("p");
let baklavaPriceTotal;
const DeclineButtonfive = document.createElement("button");
DeclineButtonfive.id = "DeclineButtonfive";
const declineLogofive = document.createElement("img");
declineLogofive.src = "Images/icon-remove-item.svg";
declineLogofive.id = "declineLogofive";
DeclineButtonfive.appendChild(declineLogofive);
const hrfive = document.createElement("hr");
const nameOfProductSelectedfive = document.createElement("p");

const hrComfirmedfive = document.createElement("hr");
const baklavaContainer = document.createElement("div");
baklavaContainer.className = "baklavaContainer";
const baklavaImage = document.createElement("img");
baklavaImage.src = "Images/image-baklava-thumbnail.jpg";
baklavaImage.id = "baklavaImage";
const baklavaNamePrice = document.createElement("div");
baklavaNamePrice.className = "baklavaNamePrice";
const totalbaklavapriceconfirmed = document.createElement("p");
totalbaklavapriceconfirmed.id = "totalbaklavapriceconfirmed";
const NumberBaklava = document.createElement("p");
NumberBaklava.id = "NumberBaklava";
const baklavapriceConfirmedOrder = document.createElement("p");
baklavapriceConfirmedOrder.id = "baklavapriceConfirmedOrder";

function dispalyElemetsfive() {
  baklavaPriceTotal = baklavaprice * NumberOfArticlefive; // Calcul du prix total
  BaklavaPriceTotal.style.color = "hsl(7, 20%, 60%)"; // Stylisation de l'élément DOM
  BaklavaPriceTotal.style.fontWeight = "800";
  BaklavaPriceTotal.textContent = `$ ${baklavaPriceTotal}`; // Affichage du prix total
  NumberBaklavaSelected.textContent = `${NumberOfArticlefive}x`;
  NumberBaklavaSelected.style.color = "#be624a";
  NumberBaklavaSelected.style.fontWeight = "900";
  nameOfProductSelectedfive.textContent = "Baklava";
  nameOfProductSelectedfive.id = "nameOfProductSelectedfive";
  priceBaklava.textContent = `$ ${baklavaprice}`;
  priceBaklava.style.color = "hsl(14, 25%, 72%)";
  TheCart.appendChild(nameOfProductSelectedfive);
  TheCart.appendChild(containerpriceAndPricemultipleQuantityfive);
  containerpriceAndPricemultipleQuantityfive.appendChild(NumberBaklavaSelected);
  containerpriceAndPricemultipleQuantityfive.appendChild(priceBaklava);
  containerpriceAndPricemultipleQuantityfive.appendChild(BaklavaPriceTotal);
  containerpriceAndPricemultipleQuantityfive.appendChild(DeclineButtonfive);

  OrderConfirmedCartContent.appendChild(baklavaContainer);
  baklavaContainer.appendChild(baklavaImage);
  baklavaContainer.appendChild(baklavaNamePrice);

  NumberBaklava.textContent = `${NumberOfArticlefive}x`;

  baklavaNamePrice.appendChild(nameOfProductSelectedfive);
  baklavaNamePrice.appendChild(NumberBaklava);
  baklavapriceConfirmedOrder.textContent = `$ ${baklavaprice}`;

  baklavaNamePrice.appendChild(baklavapriceConfirmedOrder);

  totalbaklavapriceconfirmed.textContent = `$ ${baklavaPriceTotal}`;

  baklavaContainer.appendChild(totalbaklavapriceconfirmed);

  OrderConfirmedCartContent.appendChild(hrComfirmedfive);

  TheCart.appendChild(hrfive);
}

function removeElementfive() {
  containerpriceAndPricemultipleQuantityfive.remove();
  nameOfProductSelectedfive.remove();
  hrfive.remove();
  NumberOfArticlefive = 0;
  spanfive.textContent = `${NumberOfArticlefive}`;
  let totalNumberElement =
    NumberOfArticleone +
    NumberOfArticletwo +
    NumberOfArticlethree +
    NumberOfArticlefour +
    NumberOfArticlefive +
    NumberOfArticlesix +
    NumberOfArticleseven +
    NumberOfArticleeight +
    NumberOfArticlenine;
  spanNumberTotalElements.textContent = `${totalNumberElement}`;
}

/**----------------------------------------------------------------- */
const containerpriceAndPricemultipleQuantitysix = document.createElement("div");
containerpriceAndPricemultipleQuantitysix.className =
  "containerpriceAndPricemultipleQuantitysix";
const NumberPieSelected = document.createElement("p");
const pricePie = document.createElement("p");
const PiePriceTotal = document.createElement("p");
let piePriceTotal;
const DeclineButtonsix = document.createElement("button");
DeclineButtonsix.id = "DeclineButtonsix";
const declineLogosix = document.createElement("img");
declineLogosix.src = "Images/icon-remove-item.svg";
declineLogosix.id = "declineLogosix";
DeclineButtonsix.appendChild(declineLogosix);
const hrsix = document.createElement("hr");
const nameOfProductSelectedsix = document.createElement("p");

const hrComfirmedsix = document.createElement("hr");
const pieContainer = document.createElement("div");
pieContainer.className = "pieContainer";
const pieImage = document.createElement("img");
pieImage.src = "Images/image-meringue-thumbnail.jpg";
pieImage.id = "pieImage";
const pieNamePrice = document.createElement("div");
pieNamePrice.className = "pieNamePrice";
const totalpiepriceconfirmed = document.createElement("p");
totalpiepriceconfirmed.id = "totalpiepriceconfirmed";
const NumberPie = document.createElement("p");
NumberPie.id = "NumberPie";
const piepriceConfirmedOrder = document.createElement("p");
piepriceConfirmedOrder.id = "piepriceConfirmedOrder";

function dispalyElemetssix() {
  piePriceTotal = pieprice * NumberOfArticlesix; // Calcul du prix total
  PiePriceTotal.style.color = "hsl(7, 20%, 60%)"; // Stylisation de l'élément DOM
  PiePriceTotal.style.fontWeight = "800";
  PiePriceTotal.textContent = `$ ${piePriceTotal}`; // Affichage du prix total
  NumberPieSelected.textContent = `${NumberOfArticlesix}x`;
  NumberPieSelected.style.color = "#be624a";
  NumberPieSelected.style.fontWeight = "900";
  nameOfProductSelectedsix.id = "nameOfProductSelectedsix";
  nameOfProductSelectedsix.textContent = "Pie";
  pricePie.textContent = `$ ${pieprice}`;
  pricePie.style.color = "hsl(14, 25%, 72%)";
  TheCart.appendChild(nameOfProductSelectedsix);
  TheCart.appendChild(containerpriceAndPricemultipleQuantitysix);
  containerpriceAndPricemultipleQuantitysix.appendChild(NumberPieSelected);
  containerpriceAndPricemultipleQuantitysix.appendChild(pricePie);
  containerpriceAndPricemultipleQuantitysix.appendChild(PiePriceTotal);
  containerpriceAndPricemultipleQuantitysix.appendChild(DeclineButtonsix);

  OrderConfirmedCartContent.appendChild(pieContainer);
  pieContainer.appendChild(pieImage);
  pieContainer.appendChild(pieNamePrice);

  NumberPie.textContent = `${NumberOfArticlesix}x`;

  pieNamePrice.appendChild(nameOfProductSelectedsix);
  pieNamePrice.appendChild(NumberPie);
  piepriceConfirmedOrder.textContent = `$ ${pieprice}`;

  pieNamePrice.appendChild(piepriceConfirmedOrder);

  totalpiepriceconfirmed.textContent = `$ ${piePriceTotal}`;

  pieContainer.appendChild(totalpiepriceconfirmed);

  OrderConfirmedCartContent.appendChild(hrComfirmedsix);

  TheCart.appendChild(hrsix);
}

function removeElementsix() {
  containerpriceAndPricemultipleQuantitysix.remove();
  nameOfProductSelectedsix.remove();
  hrsix.remove();
  NumberOfArticlesix = 0;
  spansix.textContent = `${NumberOfArticlesix}`;
  let totalNumberElement =
    NumberOfArticleone +
    NumberOfArticletwo +
    NumberOfArticlethree +
    NumberOfArticlefour +
    NumberOfArticlefive +
    NumberOfArticlesix +
    NumberOfArticleseven +
    NumberOfArticleeight +
    NumberOfArticlenine;
  spanNumberTotalElements.textContent = `${totalNumberElement}`;
}
/**------------------------------------------------------------------- */
const containerpriceAndPricemultipleQuantityseven =
  document.createElement("div");
containerpriceAndPricemultipleQuantityseven.className =
  "containerpriceAndPricemultipleQuantityseven";
const NumberCakeSelected = document.createElement("p");
const priceCake = document.createElement("p");
const CakePriceTotal = document.createElement("p");
let cakePriceTotal;
const DeclineButtonseven = document.createElement("button");
DeclineButtonseven.id = "DeclineButtonseven";
const declineLogoseven = document.createElement("img");
declineLogoseven.src = "Images/icon-remove-item.svg";
declineLogoseven.id = "declineLogoseven";
DeclineButtonseven.appendChild(declineLogoseven);
const hrseven = document.createElement("hr");
const nameOfProductSelectedseven = document.createElement("p");

const hrComfirmedseven = document.createElement("hr");
const cakeContainer = document.createElement("div");
cakeContainer.className = "cakeContainer";
const cakeImage = document.createElement("img");
cakeImage.src = "Images/image-cake-thumbnail.jpg";
cakeImage.id = "cakeImage";
const cakeNamePrice = document.createElement("div");
cakeNamePrice.className = "cakeNamePrice";
const totalcakepriceconfirmed = document.createElement("p");
totalcakepriceconfirmed.id = "totalcakepriceconfirmed";
const NumberCake = document.createElement("p");
NumberCake.id = "NumberCake";
const cakepriceConfirmedOrder = document.createElement("p");
cakepriceConfirmedOrder.id = "cakepriceConfirmedOrder";

function dispalyElemetsseven() {
  cakePriceTotal = cakeprice * NumberOfArticleseven; // Calcul du prix total
  CakePriceTotal.style.color = "hsl(7, 20%, 60%)"; // Stylisation de l'élément DOM
  CakePriceTotal.style.fontWeight = "800";
  CakePriceTotal.textContent = `$ ${cakePriceTotal}`; // Affichage du prix total
  NumberCakeSelected.textContent = `${NumberOfArticleseven}x`;
  NumberCakeSelected.style.color = "#be624a";
  NumberCakeSelected.style.fontWeight = "900";
  nameOfProductSelectedseven.id = "nameOfProductSelectedseven";
  nameOfProductSelectedseven.textContent = "Cake";
  priceCake.textContent = `$ ${cakeprice}`;
  priceCake.style.color = "hsl(14, 25%, 72%)";
  TheCart.appendChild(nameOfProductSelectedseven);
  TheCart.appendChild(containerpriceAndPricemultipleQuantityseven);
  containerpriceAndPricemultipleQuantityseven.appendChild(NumberCakeSelected);
  containerpriceAndPricemultipleQuantityseven.appendChild(priceCake);
  containerpriceAndPricemultipleQuantityseven.appendChild(CakePriceTotal);
  containerpriceAndPricemultipleQuantityseven.appendChild(DeclineButtonseven);

  OrderConfirmedCartContent.appendChild(cakeContainer);
  cakeContainer.appendChild(cakeImage);
  cakeContainer.appendChild(cakeNamePrice);

  NumberCake.textContent = `${NumberOfArticleseven}x`;

  cakeNamePrice.appendChild(nameOfProductSelectedseven);
  cakeNamePrice.appendChild(NumberCake);
  cakepriceConfirmedOrder.textContent = `$ ${cakeprice}`;

  cakeNamePrice.appendChild(cakepriceConfirmedOrder);

  totalcakepriceconfirmed.textContent = `$ ${cakePriceTotal}`;

  cakeContainer.appendChild(totalcakepriceconfirmed);

  OrderConfirmedCartContent.appendChild(hrComfirmedseven);
  TheCart.appendChild(hrseven);
}

function removeElementseven() {
  containerpriceAndPricemultipleQuantityseven.remove();
  nameOfProductSelectedseven.remove();
  hrseven.remove();
  NumberOfArticleseven = 0;
  spanseven.textContent = `${NumberOfArticleseven}`;
  let totalNumberElement =
    NumberOfArticleone +
    NumberOfArticletwo +
    NumberOfArticlethree +
    NumberOfArticlefour +
    NumberOfArticlefive +
    NumberOfArticlesix +
    NumberOfArticleseven +
    NumberOfArticleeight +
    NumberOfArticlenine;
  spanNumberTotalElements.textContent = `${totalNumberElement}`;
}
/**------------------------------------------------------------------- */
const containerpriceAndPricemultipleQuantityeight =
  document.createElement("div");
containerpriceAndPricemultipleQuantityeight.className =
  "containerpriceAndPricemultipleQuantityeight";
const NumberBrownieSelected = document.createElement("p");
const priceBrownie = document.createElement("p");
const BrowniePriceTotal = document.createElement("p");
let browniePriceTotal;
const DeclineButtoneight = document.createElement("button");
DeclineButtoneight.id = "DeclineButtoneight";
const declineLogoeight = document.createElement("img");
declineLogoeight.src = "Images/icon-remove-item.svg";
declineLogoeight.id = "declineLogoeight";
DeclineButtoneight.appendChild(declineLogoeight);
const hreight = document.createElement("hr");
const nameOfProductSelectedeight = document.createElement("p");

const hrComfirmedeight = document.createElement("hr");
const brownieContainer = document.createElement("div");
brownieContainer.className = "brownieContainer";
const brownieImage = document.createElement("img");
brownieImage.src = "Images/image-brownie-thumbnail.jpg";
brownieImage.id = "brownieImage";
const brownieNamePrice = document.createElement("div");
brownieNamePrice.className = "brownieNamePrice";
const totalbrowniepriceconfirmed = document.createElement("p");
totalbrowniepriceconfirmed.id = "totalbrowniepriceconfirmed";
const NumberBrownie = document.createElement("p");
NumberBrownie.id = "NumberBrownie";
const browniepriceConfirmedOrder = document.createElement("p");
browniepriceConfirmedOrder.id = "browniepriceConfirmedOrder";

function dispalyElemetsseight() {
  browniePriceTotal = browniwprice * NumberOfArticleeight; // Calcul du prix total
  BrowniePriceTotal.style.color = "hsl(7, 20%, 60%)"; // Stylisation de l'élément DOM
  BrowniePriceTotal.style.fontWeight = "800";
  BrowniePriceTotal.textContent = `$ ${browniePriceTotal}`; // Affichage du prix total
  NumberBrownieSelected.textContent = `${NumberOfArticleeight}x`;
  NumberBrownieSelected.style.color = "#be624a";
  NumberBrownieSelected.style.fontWeight = "900";
  nameOfProductSelectedeight.id = "nameOfProductSelectedeight";
  nameOfProductSelectedeight.textContent = "Brownie";
  priceBrownie.textContent = `$ ${browniwprice}`;
  priceBrownie.style.color = "hsl(14, 25%, 72%)";
  TheCart.appendChild(nameOfProductSelectedeight);
  TheCart.appendChild(containerpriceAndPricemultipleQuantityeight);
  containerpriceAndPricemultipleQuantityeight.appendChild(
    NumberBrownieSelected
  );
  containerpriceAndPricemultipleQuantityeight.appendChild(priceBrownie);
  containerpriceAndPricemultipleQuantityeight.appendChild(BrowniePriceTotal);
  containerpriceAndPricemultipleQuantityeight.appendChild(DeclineButtoneight);

  OrderConfirmedCartContent.appendChild(brownieContainer);
  brownieContainer.appendChild(brownieImage);
  brownieContainer.appendChild(brownieNamePrice);

  NumberBrownie.textContent = `${NumberOfArticleeight}x`;

  brownieNamePrice.appendChild(nameOfProductSelectedeight);
  brownieNamePrice.appendChild(NumberBrownie);
  browniepriceConfirmedOrder.textContent = `$ ${browniwprice}`;

  brownieNamePrice.appendChild(browniepriceConfirmedOrder);

  totalbrowniepriceconfirmed.textContent = `$ ${browniePriceTotal}`;

  brownieContainer.appendChild(totalbrowniepriceconfirmed);

  OrderConfirmedCartContent.appendChild(hrComfirmedeight);

  TheCart.appendChild(hreight);
}

function removeElementeight() {
  containerpriceAndPricemultipleQuantityeight.remove();
  nameOfProductSelectedeight.remove();
  hreight.remove();
  NumberOfArticleeight = 0;
  spaneight.textContent = `${NumberOfArticleeight}`;
  let totalNumberElement =
    NumberOfArticleone +
    NumberOfArticletwo +
    NumberOfArticlethree +
    NumberOfArticlefour +
    NumberOfArticlefive +
    NumberOfArticlesix +
    NumberOfArticleseven +
    NumberOfArticleeight +
    NumberOfArticlenine;
  spanNumberTotalElements.textContent = `${totalNumberElement}`;
}
/**------------------------------------------------------------------- */
const containerpriceAndPricemultipleQuantitynine =
  document.createElement("div");
containerpriceAndPricemultipleQuantitynine.className =
  "containerpriceAndPricemultipleQuantitynine";
const NumberPannaSelected = document.createElement("p");
const pricePanna = document.createElement("p");
const PannaPriceTotal = document.createElement("p");
let pannaPriceTotal;
const DeclineButtonnine = document.createElement("button");
DeclineButtonnine.id = "DeclineButtonnine";
const declineLogonine = document.createElement("img");
declineLogonine.src = "Images/icon-remove-item.svg";
declineLogonine.id = "declineLogonine";
DeclineButtonnine.appendChild(declineLogonine);
const hrnine = document.createElement("hr");
const nameOfProductSelectednine = document.createElement("p");

const hrComfirmednine = document.createElement("hr");
const pannaContainer = document.createElement("div");
pannaContainer.className = "pannaContainer";
const pannaImage = document.createElement("img");
pannaImage.src = "Images/image-panna-cotta-thumbnail.jpg";
pannaImage.id = "pannaImage";
const pannaNamePrice = document.createElement("div");
pannaNamePrice.className = "pannaNamePrice";
const totalpannapriceconfirmed = document.createElement("p");
totalpannapriceconfirmed.id = "totalpannapriceconfirmed";
const NumberPanna = document.createElement("p");
NumberPanna.id = "NumberPanna";
const pannapriceConfirmedOrder = document.createElement("p");
pannapriceConfirmedOrder.id = "pannapriceConfirmedOrder";

function dispalyElemetsnine() {
  pannaPriceTotal = pannaprice * NumberOfArticlenine; // Calcul du prix total
  PannaPriceTotal.style.color = "hsl(7, 20%, 60%)"; // Stylisation de l'élément DOM
  PannaPriceTotal.style.fontWeight = "800";
  PannaPriceTotal.textContent = `$ ${pannaPriceTotal}`; // Affichage du prix total
  NumberPannaSelected.textContent = `${NumberOfArticlenine}x`;
  NumberPannaSelected.style.color = "#be624a";
  NumberPannaSelected.style.fontWeight = "900";
  nameOfProductSelectednine.id = "nameOfProductSelectednine";
  nameOfProductSelectednine.textContent = "Panna";
  pricePanna.textContent = `$ ${pannaprice}`;
  pricePanna.style.color = "hsl(14, 25%, 72%)";
  TheCart.appendChild(nameOfProductSelectednine);
  TheCart.appendChild(containerpriceAndPricemultipleQuantitynine);
  containerpriceAndPricemultipleQuantitynine.appendChild(NumberPannaSelected);
  containerpriceAndPricemultipleQuantitynine.appendChild(pricePanna);
  containerpriceAndPricemultipleQuantitynine.appendChild(PannaPriceTotal);
  containerpriceAndPricemultipleQuantitynine.appendChild(DeclineButtonnine);

  OrderConfirmedCartContent.appendChild(pannaContainer);
  pannaContainer.appendChild(pannaImage);
  pannaContainer.appendChild(pannaNamePrice);

  NumberPanna.textContent = `${NumberOfArticlenine}x`;

  pannaNamePrice.appendChild(nameOfProductSelectednine);
  pannaNamePrice.appendChild(NumberPanna);
  pannapriceConfirmedOrder.textContent = `$ ${pannaprice}`;

  pannaNamePrice.appendChild(pannapriceConfirmedOrder);

  totalpannapriceconfirmed.textContent = `$ ${pannaPriceTotal}`;

  pannaContainer.appendChild(totalpannapriceconfirmed);

  OrderConfirmedCartContent.appendChild(hrComfirmednine);

  TheCart.appendChild(hrnine);
}

function removeElementnine() {
  containerpriceAndPricemultipleQuantitynine.remove();
  nameOfProductSelectednine.remove();
  hrnine.remove();
  NumberOfArticlenine = 0;
  spannine.textContent = `${NumberOfArticlenine}`;
  let totalNumberElement =
    NumberOfArticleone +
    NumberOfArticletwo +
    NumberOfArticlethree +
    NumberOfArticlefour +
    NumberOfArticlefive +
    NumberOfArticlesix +
    NumberOfArticleseven +
    NumberOfArticleeight +
    NumberOfArticlenine;
  spanNumberTotalElements.textContent = `${totalNumberElement}`;
}
/**-------------------------------------------------------------------- */
const PrixTotalAndYourOrder = document.createElement("div");
PrixTotalAndYourOrder.className = "PrixTotalAndYourOrder";

const yourorder = document.createElement("p");
yourorder.id = "yourorder";
yourorder.textContent = "Order Total";

const YourOrder = document.createElement("p");
YourOrder.id = "YourOrder";

PrixTotalAndYourOrder.appendChild(yourorder);
PrixTotalAndYourOrder.appendChild(YourOrder);

function dispalyTotal() {
  let totalPrice =
    waffleprice * NumberOfArticleone +
    cremeprice * NumberOfArticletwo +
    macaronprice * NumberOfArticlethree +
    tiramisuprice * NumberOfArticlefour +
    baklavaprice * NumberOfArticlefive +
    pieprice * NumberOfArticlesix +
    cakeprice * NumberOfArticleseven +
    browniwprice * NumberOfArticleeight +
    pannaprice * NumberOfArticlenine;
  YourOrder.textContent = `$ ${totalPrice}`;
  TheCart.appendChild(PrixTotalAndYourOrder);
  PriceTotalFinal.textContent = `$ ${totalPrice}`;
  OrderConfirmedCartContent.appendChild(OrderTotalPriceContainer);
  OrderTotalPriceContainer.appendChild(PriceTotalFinal);
}

const ConfirmButton = document.createElement("button");
ConfirmButton.id = "ConfirmButton";
const ConfirmButtonText = document.createElement("p");
ConfirmButtonText.textContent = "Confirm Order";
ConfirmButton.appendChild(ConfirmButtonText);

function displayConfirmButton() {
  TheCart.appendChild(ConfirmButton);
}
/*--------------------------------------------------------------------*/
const OrderConfirmedCart = document.createElement("div");
OrderConfirmedCart.className = "OrderConfirmedCart";
const OrderConfirmedLogo = document.createElement("img");
OrderConfirmedLogo.id = "OrderConfirmedLogo";
OrderConfirmedLogo.src = "Images/icon-order-confirmed.svg";
document.body.appendChild(OrderConfirmedCart);
OrderConfirmedCart.appendChild(OrderConfirmedLogo);
const OrderConfirmedText = document.createElement("p");
OrderConfirmedText.id = "OrderConfirmedText";
OrderConfirmedText.textContent = "Order Confirmed";
OrderConfirmedCart.appendChild(OrderConfirmedText);
const wehopeenjoy = document.createElement("p");
wehopeenjoy.id = "wehopeenjoy";
wehopeenjoy.textContent = "We hope You enjoy your food!";
OrderConfirmedCart.appendChild(wehopeenjoy);
const OrderConfirmedCartContent = document.createElement("div");
OrderConfirmedCartContent.className = "OrderConfirmedCartContent";
OrderConfirmedCart.appendChild(OrderConfirmedCartContent);
/**------------------------------------------------------------- */
const OrderTotalPriceContainer = document.createElement("div");
OrderTotalPriceContainer.className = "OrderTotalPriceContainer";

const YourOrderFinal = document.createElement("p");
YourOrderFinal.id = "YourOrderFinal";
YourOrderFinal.textContent = "Your Order";

const PriceTotalFinal = document.createElement("p");
PriceTotalFinal.id = "PriceTotalFinal";

OrderTotalPriceContainer.appendChild(YourOrderFinal);
OrderTotalPriceContainer.appendChild(PriceTotalFinal);

/**--------------------------------------------------------- */
const startNewOrder = document.createElement("button");
const startNewOrderText = document.createElement("p");

startNewOrder.id = "startNewOrder";
startNewOrderText.id = "startNewOrderText";
startNewOrderText.textContent = "Start New Order";
OrderConfirmedCart.appendChild(startNewOrder);
startNewOrder.appendChild(startNewOrderText);

/**------------------------------------------------------------------- */

cartbutton.addEventListener("click", dispalyElemetsone);
DeclineButton.addEventListener("click", removeElementone);
CartButtonTwo.addEventListener("click", dispalyElemetstwo);
DeclineButtontwo.addEventListener("click", removeElementtwo);
CartButtonThree.addEventListener("click", dispalyElemetsthree);
DeclineButtonthree.addEventListener("click", removeElementthree);
CartButtonFour.addEventListener("click", dispalyElemetsfour);
DeclineButtonfour.addEventListener("click", removeElementfour);
CartButtonfive.addEventListener("click", dispalyElemetsfive);
DeclineButtonfive.addEventListener("click", removeElementfive);
CartButtonsix.addEventListener("click", dispalyElemetssix);
DeclineButtonsix.addEventListener("click", removeElementsix);
CartButtonseven.addEventListener("click", dispalyElemetsseven);
DeclineButtonseven.addEventListener("click", removeElementseven);
CartButtoneight.addEventListener("click", dispalyElemetsseight);
DeclineButtoneight.addEventListener("click", removeElementeight);
CartButtonnine.addEventListener("click", dispalyElemetsnine);
DeclineButtonnine.addEventListener("click", removeElementnine);
/**-------------------------------------------------------------- */
cartbutton.addEventListener("click", dispalyTotal);
CartButtonThree.addEventListener("click", dispalyTotal);
CartButtonFour.addEventListener("click", dispalyTotal);
CartButtonfive.addEventListener("click", dispalyTotal);
CartButtonsix.addEventListener("click", dispalyTotal);
CartButtonseven.addEventListener("click", dispalyTotal);
CartButtoneight.addEventListener("click", dispalyTotal);
CartButtonnine.addEventListener("click", dispalyTotal);
CartButtonTwo.addEventListener("click", dispalyTotal);
/**=----------------------------------------------------- */
cartbutton.addEventListener("click", displayConfirmButton);
CartButtonTwo.addEventListener("click", displayConfirmButton);
CartButtonThree.addEventListener("click", displayConfirmButton);
CartButtonFour.addEventListener("click", displayConfirmButton);
CartButtonfive.addEventListener("click", displayConfirmButton);
CartButtonsix.addEventListener("click", displayConfirmButton);
CartButtonseven.addEventListener("click", displayConfirmButton);
CartButtoneight.addEventListener("click", displayConfirmButton);
CartButtonnine.addEventListener("click", displayConfirmButton);

const Menu = document.querySelector(".menu");
function dislayconfirmedcart() {
  OrderConfirmedCart.style.display = "block";
  OrderConfirmedCart.style.opacity = "1";
  OrderConfirmedCart.style.transition = "opacity 1s ease";

  TheCart.style.opacity = "0.3";
  TheCart.style.transition = "opacity 1s ease";

  Menu.style.opacity = "0.3";
  Menu.style.transition = "opacity 1s ease";
}

ConfirmButton.addEventListener("click", dislayconfirmedcart);

function RedisplayMENU() {
  OrderConfirmedCart.style.display = "none";
  TheCart.style.opacity = "1";
  Menu.style.opacity = "1";
}
startNewOrder.addEventListener("click", RedisplayMENU);
