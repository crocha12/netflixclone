let content = ''
for (let i = 1; i <= 10; i++) {
    content+=`
    <div class="item">
        <img class="box-filme" src="img/mini${i}.jpg" alt="">
    </div>
    `
}
$('.owl-carousel').html(content)

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})