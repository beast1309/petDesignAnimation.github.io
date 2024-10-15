$(function () {
    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    wow.init();

    $('#bgOneBtn').on('click', function () {
        $('#bgOneBtn').toggleClass('--active')
        $('#bgOneBtn').attr('disabled', 'disabled')
        $('#bgTwoBtn').removeClass('--active')
        $('#bgTwoBtn').removeAttr('disabled')
        $('#bgThreeBtn').removeClass('--active')
        $('#bgThreeBtn').removeAttr('disabled')

        $('#bgOne').removeClass('--hidden')
        $('#bgTwo').toggleClass('--hidden')
    })

    $('#bgTwoBtn').on('click', function () {
        $('#bgTwoBtn').toggleClass('--active')
        $('#bgTwoBtn').attr('disabled', 'disabled')
        $('#bgOneBtn').removeClass('--active')
        $('#bgOneBtn').removeAttr('disabled')
        $('#bgThreeBtn').removeClass('--active')
        $('#bgThreeBtn').removeAttr('disabled')

        $('#bgOne').toggleClass('--hidden')
        $('#bgTwo').removeClass('--hidden')
    })

    $('#bgThreeBtn').on('click', function () {
        $('#bgThreeBtn').toggleClass('--active')
        $('#bgThreeBtn').attr('disabled', 'disabled')
        $('#bgOneBtn').removeClass('--active')
        $('#bgOneBtn').removeAttr('disabled')
        $('#bgTwoBtn').removeClass('--active')
        $('#bgTwoBtn').removeAttr('disabled')

        $('#bgOne').removeClass('--hidden')
        $('#bgTwo').removeClass('--hidden')
    })
});