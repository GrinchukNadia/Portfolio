$( function() {
//_________________календарь_________________________________
    $( "#datepicker" ).datepicker({
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true,
    });
//__________________поисковая строка________________________
    var availableTags = [
        "Felt",
        "Fortified",
        "Sixthreezero",
        "Critical Cycles",
        "Santa Cruz",
        "Cervelo",
        "Trek",
        "Scott",
        "Kona",
        "Giordano",
        "Giant",
        "Specialized",
        "Cannondale",
        "Mongoose",
        "Schwinn",
        "Fuji",
        "Bianchi",
        "Salsa",
        "Diamondback",
        "Pure Cycles",
        "Marin",
        "Firmstrong",
        "Tommaso"
      ];
      $( "#search" ).autocomplete({
        source: availableTags
      });
//_______________________________слайдер________________________________________________
    var pause = 2500;

    var $slider = $('#carousel');
    var $sliderContainer = $slider.find('.carousel_slider');

    var slides = $('.slide')
    var left = $('.left');
    var right = $('.right');
    var sectionIndex = 0;

    var lastSlide = (-(slides.length-1) * 100) +'vw';

    function doteIndicator(){
      $('.control .selected').removeClass('selected');
      $('.control li:nth-child('+ (sectionIndex + 1) +')' ).addClass('selected');
    }

/* --- настройка точек отображения слайда, автопролистывание --- */
    function startSlider (){
      interval = setInterval(function(){
        $sliderContainer.css({'margin-left':'-=' + '100vw'});
          if (++sectionIndex === slides.length){
            $sliderContainer.css('margin-left', 0);
            sectionIndex = 0;
          }
          doteIndicator();
      }, pause);
     }

    function stopSlider(){
      clearInterval(interval);
    }

    $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
    startSlider();

/* --------------- переключение на слайд при нажатии на точку ------------ */
    $('.control li').each(function(ind){
      $(this).on('click', function(){
        sectionIndex = ind;
        $('.control .selected').removeClass('selected');
        $(this).addClass('selected');
        $sliderContainer.css('margin-left',+(sectionIndex) * -100 + 'vw');
        sectionIndex= 1+ sectionIndex;
      });
    });

/* -------------- пролистывание вправо --------------------- */
    right.click(function(){
        $sliderContainer.css('margin-left','-=' + '100vw');
        if (++sectionIndex === slides.length){
          $sliderContainer.css({'margin-left': 0});
          sectionIndex = 0;
      }
      doteIndicator();
    });

/* -------------- пролистывание влево ------------------------ */
    left.click(function(){
        $sliderContainer.css({'margin-left':'+=' + '100vw'});
        if (sectionIndex-- == 0){
          $sliderContainer.css('margin-left', lastSlide);
          sectionIndex = slides.length-1;
        }
        doteIndicator();
      });
// _________________________конец слайдера___________________________________________

//_________________________local storage_____________________________________________ 
 document.querySelector('.form_registration').addEventListener('submit', event => {
   const name = document.getElementById('userName').value;
   const email = document.getElementById('userEmail').value;
   const password = document.getElementById('userPassword').value;
   const repeatedPassword = document.getElementById('userSubmitPassword').value;
   localStorage.setItem('name', name);
   localStorage.setItem('email', email);
   localStorage.setItem('password 1', password);
   localStorage.setItem('password 2', repeatedPassword);
 }); 

//_____________________Open and close modal window____________________________________
document.getElementById('singInBtn').addEventListener('click', function(){
  document.querySelector('.bg_registration').style.display = 'flex';
});

document.querySelector('.reg_close').addEventListener('click', function(){
  document.querySelector('.bg_registration').style.display = 'none';
});

//________________________order validation_______________________________________

let inputs = document.querySelectorAll('input[data-rule]');

for (let input of inputs) {
  input.addEventListener('blur', function(){
    let rule = this.dataset.rule;
    let value = this.value;
    let check;
    let message = document.querySelector(".order-validation");

    this.classList.remove('order-active');
    this.classList.remove('order-inactive');
    message.remove();
    
    

    switch (rule){
      case 'name':
        check = /^[a-zA-Zа-яёА-ЯЁ]+$/u.test(value);
      break;
      
      case 'street':
        check = /^.{5,50}$/.test(value);
      break;

      case 'password':
        check = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value);
      break;

      case 'zip':
        check = /^\d{5}$/.test(value);
      break;

      case 'phone':
        check = /^\d{9}$/.test(value);
      break;

      case 'card':
        check = /\d{4}([- ]|)\d{4}([- ]|)\d{4}([- ]|)\d{4}/.test(value);
      break;

      case 'expiration':
        check = /^((0[1-9])|(1[0-2]))[\/\.\-]*((0[8-9])|(2[1-9]))$/.test(value);
      break;

      case 'cvv':
        check = /^\d{3}$/.test(value);
      break;
    }
    
    if(this.value.length <= 0){
    }
    else if(this.value.length > 0 && this.value.length <= 2 ){
      this.classList.add('order-inactive');
      this.insertAdjacentHTML('afterend', '<span class="order-validation">Required</span>');
    }
    else if(check){
      this.classList.add('order-active');
    }
    else{
      this.classList.add('order-inactive');
      this.insertAdjacentHTML('afterend', '<span class="order-validation">Invalid</span>');
    }

    if(document.querySelector(".order-pass").value !== document.querySelector(".order-pass-check").value){
      this.classList.add('order-inactive');
      document.querySelector(".order-pass-check").insertAdjacentHTML('afterend', '<span class="order-validation" >Passwords are not the same</span>');
    }
    else {
      message.remove();
      this.classList.add('order-active');
      document.querySelector(".order-pass").classList.add('order-active');
    }      
  });
}

/*------- функция которая заполняет те же данные в соседнюю форму-------------- */
  var addressCheck       = document.querySelector('input[type="checkbox"]')
      orderFirstName     = document.querySelector(".order_first-name"),
      firstName          = document.querySelector(".first-name"),
      orderLastName      = document.querySelector(".order_last-name"),
      lastName           = document.querySelector(".last-name"),
      orderStreetAddress = document.querySelector(".order_street-address"),
      streetAddress      = document.querySelector(".street-address"),
      orderRegion        = document.querySelector(".order_region"),
      region             = document.querySelector(".region"),
      orderZip           = document.querySelector(".order_zip"),
      zip                = document.querySelector(".zip"),
      orderPhone         = document.querySelector(".order_phone-nbr"),
      phoneNmbr          = document.querySelector(".phone-nbr"),
      year               = document.getElementById("year"),
      month              = document.getElementById("month"),
      day                = document.getElementById("day"),
      comment            = document.getElementById('order_comment'),
      bikeModel          = document.querySelector('.bike_model'),
      creditCardNbr      = document.getElementById('card-number'),
      expiration         = document.getElementById('expir'),
      cvv                = document.getElementById('cvv'),
      order              = document.getElementById('order');


  function toggleAddressInputs(){
    if(this.checked){
    orderFirstName.value= firstName .value;
    orderLastName.value= lastName.value;
    orderStreetAddress.value= streetAddress.value;
    orderRegion.value= region.value;
    orderZip.value= zip.value;
    orderPhone.value= phoneNmbr.value;
    } else {
      orderFirstName.value= "";
      orderLastName.value= "";
      orderStreetAddress.value= "";
      orderRegion.value= "";
      orderZip.value= "";
      orderPhone.value= "";
    }
  }
  addressCheck.onchange = toggleAddressInputs;

/*-----функция которая скрывает или показывает карту при нажатии на radio-------*/
  let cashRadio = document.querySelector(".cash");
  let creditRadio = document.querySelector(".creditCard");
  let creditCard = document.querySelector(".credit_card");

  cashRadio.onclick = function(){
    creditCard.hidden = true;
  }
  creditRadio.onclick = function(){
    creditCard.hidden = false;
  }

/* -----функция которая скрывает или показывает создать аккаунт при нажатии на checkbox-------- */
  year.addEventListener('change', function(){ 
    checkTotalDay();
  });
  month.addEventListener('change', function(){
    checkTotalDay();
  });

  function checkTotalDay() {
    var yearValue = year.value;
    var monthValue = month.value;

    var getDaysInMonth = function(m, y) {
      return new Date(y, m, 0).getDate();
    }
       
    let days = document.querySelectorAll('#day option');
    days.forEach(option => option.remove());

    for(var i = 1; i <= getDaysInMonth(monthValue, yearValue); i++) {
      let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        day.appendChild(option);
    }
  }

/* ------------------вывод заказа в новом html файле--------------------------- */
  const addData = () => {
    let order = {
      'Model of bike': bikeModel.value,
      'Comment': comment.value,
      'First name': orderFirstName.value,
      'Last name': orderLastName.value,
      'Street address': orderStreetAddress.value,
      'Region': orderRegion.value,
      'Zip code': orderZip.value,
      'Your phone': orderPhone.value,
      'First name:': firstName.value,
      'Last name:': lastName.value,
      'Street address:': streetAddress.value,
      'Region:': region.value,
      'Zip code:': zip.value,
      'Your phone:':phoneNmbr.value,
      'Year': year.value,
      'Month': month.value,
      'Day': day.value,
      'Credit card number': creditCardNbr.value,
      'Card expiration': expiration.value,
      'CVV': cvv.value
    }
    localStorage.setItem('Order', JSON.stringify(order));
  }

  order.addEventListener('submit', function(){
    addData();
  });
/* ---------------------------------------------------------------------- */

});