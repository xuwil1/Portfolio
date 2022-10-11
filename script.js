let fullName = document.getElementById("name");
let email = document.getElementById("email");
let msg = document.getElementById("message");
let submit = document.getElementById("submit");
submit.addEventListener('click',sendmail);
//toggle menu/navbar script
$('.menu-btn').click(function(){
    $('.nav-list').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
    console.log(document.querySelector('.skill-logo').classList.contains('notransition'));
    if(document.querySelector('.skill-logo').classList.contains('notransition')){
            $('.skill-logo').removeClass('notransition');
    }else{
        $('.skill-logo').addClass('notransition');
    }
});




function sendmail(){
    emailjs.init('cCSwhgfsr-XFEMrQb');
    emailjs.send("service_ac6k7qm","template_yk2m4hb",{
        to_name: "Willie",
        from_name: fullName.value,
        from_email: email.value,
        message: msg.value,
        });
        alert("Success, email sent!");
}