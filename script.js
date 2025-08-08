const antiMalaria = document.querySelector(".antimalaria");
const homePage = document.querySelector(".home-page");
const ProductDetails = document.querySelector(".product-details");
const mainImg = document.querySelector(".main-img");
const disable = document.querySelector(".disable");
const decrease = document.querySelector(".decrease");
var ProductImg = document.getElementById("ProductImg");
var fPhotos = document.getElementById("fphotos");var fPhotosone = document.getElementById("fphotosone");var fPhotostwo = document.getElementById("fphotostwo");var fPhotosthree = document.getElementById("fphotosthree");var fPhotosfour = document.getElementById("fphotosfour");var fPhotosfive = document.getElementById("fphotosfive");var fPhotossix = document.getElementById("fphotossix");var fPhotosseven = document.getElementById("fphotosseven");var fPhotoseight = document.getElementById("fphotoseight");var fPhotosnine = document.getElementById("fphotosnine");var fPhotosten = document.getElementById("fphotosten");var fPhotoseleven = document.getElementById("fphotoseleven");var fPhotostwelve = document.getElementById("fphotostwelve");var fPhotosthirteen = document.getElementById("fphotosthirteen");var fPhotosfourteen = document.getElementById("fphotosfourteen");var fPhotosfifteen = document.getElementById("fphotosfifteen");var fPhotossixteen = document.getElementById("fphotossixteen");var fPhotosseventeen = document.getElementById("fphotosseventeen");var fPhotoseighteen = document.getElementById("fphotoseighteen");var fPhotosnineteen = document.getElementById("fphotosnineteen");var fPhotostwenty = document.getElementById("fphotostwenty");var fPhotostone = document.getElementById("fphotostone");var fPhotosttwo = document.getElementById("fphotosttwo");var fPhotostthree = document.getElementById("fphotostthree");var fPhotostfour = document.getElementById("fphotostfour");var fPhotostfive = document.getElementById("fphotostfive");var fPhotostsix = document.getElementById("fphotostsix");
let titlesOne = document.getElementById("titlesOne");let titlesTwo = document.getElementById("titlesTwo");let titlesThree = document.getElementById("titlesThree");let titlesFour = document.getElementById("titlesFour");let titlesFive = document.getElementById("titlesFive");let titlesSix = document.getElementById("titlesSix");let titlesSeven = document.getElementById("titlesSeven");let titlesEight = document.getElementById("titlesEight");let titlesNine = document.getElementById("titlesNine");let titlesTen = document.getElementById("titlesTen");let titlesEleven = document.getElementById("titlesEleven");let titlesTwelve = document.getElementById("titlesTwelve");let titlesThirteen = document.getElementById("titlesThirteen");let titlesFourteen = document.getElementById("titlesFourteen");let titlesFifteen = document.getElementById("titlesFifteen");let titlesSixteen = document.getElementById("titlesSixteen");let titlesSeventeen = document.getElementById("titlesSeventeen");let titlesEighteen = document.getElementById("titlesEighteen");let titlesNineteen = document.getElementById("titlesNineteen");let titlesTwenty = document.getElementById("titlesTwenty");let titlesTone = document.getElementById("titlesTone");let titlesTtwo = document.getElementById("titlesTtwo");let titlesTthree = document.getElementById("titlesTthree");let titlesTfour = document.getElementById("titlesTfour");let titlesTfive = document.getElementById("titlesTfive");let titlesTsix = document.getElementById("titlesTsix");let titlesTseven = document.getElementById("titlesTseven");
let detailsOne = document.getElementById("detailsOne");let detailsTwo = document.getElementById("detailsTwo");let detailsThree = document.getElementById("detailsThree");let detailsFour = document.getElementById("detailsFour");let detailsFive = document.getElementById("detailsFive");let detailsSix = document.getElementById("detailsSix");let detailsSeven = document.getElementById("detailsSeven");let detailsEight = document.getElementById("detailsEight");let detailsNine = document.getElementById("detailsNine");let detailsTen = document.getElementById("detailsTen");let detailsEleven = document.getElementById("detailsEleven");let detailsTwelve = document.getElementById("detailsTwelve");let detailsThirteen = document.getElementById("detailsThirteen");let detailsFourteen = document.getElementById("detailsFourteen");let detailsFifteen = document.getElementById("detailsFifteen");let detailsSixteen = document.getElementById("detailsSixteen");let detailsSeventeen = document.getElementById("detailsSeventeen");let detailsEighteen = document.getElementById("detailsEighteen");let detailsNineteen = document.getElementById("detailsNineteen");let detailsTwenty = document.getElementById("detailsTwenty");let detailsTone = document.getElementById("detailsTone");let detailsTtwo = document.getElementById("detailsTtwo");let detailsTthree = document.getElementById("detailsTthree");let detailsTfour = document.getElementById("detailsTfour");let detailsTfive = document.getElementById("detailsTfive");let detailsTsix = document.getElementById("detailsTsix");let detailsTseven = document.getElementById("detailsTseven");
let primalone = document.getElementById("primalone");let primaltwo = document.getElementById("primaltwo");let primalthree = document.getElementById("primalthree");let primalfour = document.getElementById("primalfour");let primalfive = document.getElementById("primalfive");let primalsix = document.getElementById("primalsix");let primalseven = document.getElementById("primalseven");let primaleight = document.getElementById("primaleight");let primalnine = document.getElementById("primalnine");let primalten = document.getElementById("primalten");let primaleleven = document.getElementById("primaleleven");let primaltwelve = document.getElementById("primaltwelve");let primalthirteen = document.getElementById("primalthirteen");let primalfourteen = document.getElementById("primalfourteen");let primalfifteen = document.getElementById("primalfifteen");let primalsixteen = document.getElementById("primalsixteen");let primalseventeen = document.getElementById("primalseventeen");let primaleighteen = document.getElementById("primaleighteen");let primalnineteen = document.getElementById("primalnineteen");let primaltwenty = document.getElementById("primaltwenty");let primaltone = document.getElementById("primaltone");let primalttwo = document.getElementById("primalttwo");let primaltthree = document.getElementById("primaltthree");let primaltfour = document.getElementById("primaltfour");let primaltfive = document.getElementById("primaltfive");let primaltsix = document.getElementById("primaltsix");let primaltseven = document.getElementById("primaltseven");
let hidTitles = document.getElementById("hidtitle");
let mrDetails = document.getElementById("mrDetails");
let priceTag = document.getElementById("pricetag");
let disabut = document.getElementById("disabut");
let disafo = document.getElementById("disafo");





function rowone() {
    antiMalaria.classList.add('open');
    homePage.classList.add('close');
}
function clomalaria() {
    antiMalaria.classList.remove('open');
    homePage.classList.remove('close');
}
// AntiMalaria
function preMalOne() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesOne.innerHTML;mrDetails.innerHTML = detailsOne.innerHTML;ProductImg.src = fPhotos.src;priceTag.innerHTML = primalone.innerHTML;}
function preMalTwo() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesTwo.innerHTML;mrDetails.innerHTML = detailsTwo.innerHTML;ProductImg.src = fPhotosone.src;priceTag.innerHTML = primaltwo.innerHTML}
function preMalThree() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesThree.innerHTML;mrDetails.innerHTML = detailsThree.innerHTML;ProductImg.src = fPhotostwo.src;priceTag.innerHTML = primalthree.innerHTML}
function preMalFour() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesFour.innerHTML;mrDetails.innerHTML = detailsFour.innerHTML;ProductImg.src = fPhotosthree.src;priceTag.innerHTML = primalfour.innerHTML}
function preMalFive() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesFive.innerHTML;mrDetails.innerHTML = detailsFive.innerHTML;ProductImg.src = fPhotosfour.src;priceTag.innerHTML = primalfive.innerHTML}
function preMalSix() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesSix.innerHTML;mrDetails.innerHTML = detailsSix.innerHTML;ProductImg.src = fPhotosfive.src;priceTag.innerHTML = primalsix.innerHTML}
function preMalSeven() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesSeven.innerHTML;mrDetails.innerHTML = detailsSeven.innerHTML;ProductImg.src = fPhotossix.src;priceTag.innerHTML = primalseven.innerHTML}
function preMalEight() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesEight.innerHTML;mrDetails.innerHTML = detailsEight.innerHTML;ProductImg.src = fPhotosseven.src;priceTag.innerHTML = primaleight.innerHTML}
function preMalNine() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesNine.innerHTML;mrDetails.innerHTML = detailsNine.innerHTML;ProductImg.src = fPhotoseight.src;priceTag.innerHTML = primalnine.innerHTML}
function preMalTen() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesTen.innerHTML;mrDetails.innerHTML = detailsTen.innerHTML;ProductImg.src = fPhotosnine.src;priceTag.innerHTML = primalten.innerHTML}
function preMalEleven() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesEleven.innerHTML;mrDetails.innerHTML = detailsEleven.innerHTML;ProductImg.src = fPhotosten.src;priceTag.innerHTML = primaleleven.innerHTML}
function preMalTwelve() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesTwelve.innerHTML;mrDetails.innerHTML = detailsTwelve.innerHTML;ProductImg.src = fPhotoseleven.src;priceTag.innerHTML = primaltwelve.innerHTML}
function preMalThirteen() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesThirteen.innerHTML;mrDetails.innerHTML = detailsThirteen.innerHTML;ProductImg.src = fPhotostwelve.src;priceTag.innerHTML = primalthirteen.innerHTML}
function preMalFourteen() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesFourteen.innerHTML;mrDetails.innerHTML = detailsFourteen.innerHTML;ProductImg.src = fPhotosthirteen.src;priceTag.innerHTML = primalfourteen.innerHTML}
function preMalFifteen() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesFifteen.innerHTML;mrDetails.innerHTML = detailsFifteen.innerHTML;ProductImg.src = fPhotosfourteen.src;priceTag.innerHTML = primalfifteen.innerHTML}
function preMalSixteen() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesSixteen.innerHTML;mrDetails.innerHTML = detailsSixteen.innerHTML;ProductImg.src = fPhotosfifteen.src;priceTag.innerHTML = primalsixteen.innerHTML}
function preMalSeventeen() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesSeventeen.innerHTML;mrDetails.innerHTML = detailsSeventeen.innerHTML;ProductImg.src = fPhotossixteen.src;priceTag.innerHTML = primalseventeen.innerHTML}
function preMalEighteen() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesEighteen.innerHTML;mrDetails.innerHTML = detailsEighteen.innerHTML;ProductImg.src = fPhotosseventeen.src;priceTag.innerHTML = primaleighteen.innerHTML}
function preMalNineteen() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesNineteen.innerHTML;mrDetails.innerHTML = detailsNineteen.innerHTML;ProductImg.src = fPhotoseighteen.src;priceTag.innerHTML = primalnineteen.innerHTML}
function preMalTwenty() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesTwenty.innerHTML;mrDetails.innerHTML = detailsTwenty.innerHTML;ProductImg.src = fPhotosnineteen.src;priceTag.innerHTML = primaltwenty.innerHTML}
function preMalTone() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesTone.innerHTML;mrDetails.innerHTML = detailsTone.innerHTML;ProductImg.src = fPhotostwenty.src;priceTag.innerHTML = primaltone.innerHTML}
function preMalTtwo() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesTtwo.innerHTML;mrDetails.innerHTML = detailsTtwo.innerHTML;ProductImg.src = fPhotostone.src;priceTag.innerHTML = primalttwo.innerHTML}
function preMalTthree() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesTthree.innerHTML;mrDetails.innerHTML = detailsTthree.innerHTML;ProductImg.src = fPhotosttwo.src;priceTag.innerHTML = primaltthree.innerHTML}
function preMalTfour() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesTfour.innerHTML;mrDetails.innerHTML = detailsTfour.innerHTML;ProductImg.src = fPhotostthree.src;priceTag.innerHTML = primaltfour.innerHTML}
function preMalTfive() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesTfive.innerHTML;mrDetails.innerHTML = detailsTfive.innerHTML;ProductImg.src = fPhotostfour.src;priceTag.innerHTML = primaltfive.innerHTML}
function preMalTsix() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesTsix.innerHTML;mrDetails.innerHTML = detailsTsix.innerHTML;ProductImg.src = fPhotostfive.src;priceTag.innerHTML = primaltsix.innerHTML}
function preMalTseven() {ProductDetails.classList.add('open');antiMalaria.classList.remove('open');hidTitles.innerHTML = titlesTseven.innerHTML;mrDetails.innerHTML = detailsTseven.innerHTML;ProductImg.src = fPhotostsix.src;priceTag.innerHTML = primaltseven.innerHTML}

function closepre() {ProductDetails.classList.remove('open');antiMalaria.classList.add('open')}



        let data = 1;

        document.getElementById("counting").innerText = data;

        function increament(){
         data= data + 1;
         document.getElementById("counting").innerText = data;

        }
        function decreament(){ 
         data = data - 1;
        

        document.getElementById("counting").innerText = data;
    }
    setInterval(() => {
         if (data > 1) {
            decrease.classList.add('open');
            disable.classList.add('close');
         } else {
            decrease.classList.remove('open');
            disable.classList.remove('close');
         }
    }, 10);
