document.addEventListener('DOMContentLoaded', (event) => {
    var order = JSON.parse(localStorage.getItem('Order'));
    document.querySelector('.r_model-bike').innerHTML = order["Model of bike"];
    document.querySelector('.r_comment-bike').innerHTML = order.Comment;
    document.querySelector('.r_first-name').innerHTML = order.orderFirstName;
    document.querySelector('.r_last-name').innerHTML = order.orderLastName;
    document.querySelector('.r_str-address').innerHTML = order.orderStreetAddress;
    document.querySelector('.r_region').innerHTML = order.orderRegion;
    document.querySelector('.r_zip').innerHTML = order.orderZip;
    document.querySelector('.r_phone').innerHTML = order.orderPhone;
    document.querySelector('.rd_first-name').innerHTML = order.firstName;
    document.querySelector('.rd_last-name').innerHTML = order.lastName;
    document.querySelector('.rd_str-address').innerHTML = order.streetAddress;
    document.querySelector('.rd_region').innerHTML = order.region;
    document.querySelector('.rd_zip').innerHTML = order.zip;
    document.querySelector('.rd_phone').innerHTML = order.phoneNmbr;
    document.querySelector('.r_year').innerHTML = order.year;
    document.querySelector('.r_month').innerHTML = order.month;
    document.querySelector('.r_day').innerHTML = order.day;
    document.querySelector('.r_card').innerHTML = order.creditCard;
    document.querySelector('.r_expiration').innerHTML = order.expiration;
    document.querySelector('.r_cvv').innerHTML = order.cvv;
});