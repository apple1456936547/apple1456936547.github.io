// 資料
var start_img = [
    {
        name: '一開始圖片1',
        img: "img/041.jpg",
        tag1: 'start',
    },
    {
        name: '一開始圖片2',
        img: "img/042.jpg",
        tag1: 'start',
    },
    {
        name: '一開始圖片3',
        img: "img/043.jpg",
        tag1: 'start',
    }
]

var shop_food = [
    {
        name: '素薑母鴨火鍋',
        img: "img/0411.jpg",
        tag1: 'hot-pot'
    },
    {
        name: '綜合湯底火鍋',
        img: "img/0412.jpg",
        tag1: 'hot-pot'
    },
    {
        name: '素當歸鴨火鍋',
        img: "img/0413.jpg",
        tag1: 'hot-pot'
    },
    {
        name: '番茄義大利麵',
        img: "img/0421.jpg",
        tag1: 'exotic'
    },
    {
        name: '菇菇牛奶義大利麵',
        img: "img/0422.jpg",
        tag1: 'exotic'
    },
    {
        name: '瑪格麗特披薩',
        img: "img/0423.jpg",
        tag1: 'exotic'
    },
    {
        name: '麻婆豆腐',
        img: "img/0431.jpg",
        tag1: 'chinese'
    },
    {
        name: '青蔬煎餃',
        img: "img/0432.jpg",
        tag1: 'chinese'
    },
    {
        name: '素番茄魚子雞',
        img: "img/0433.jpg",
        tag1: 'chinese'
    },
    {
        name: '紅豆麻糬',
        img: "img/0441.jpg",
        tag1: 'sweet'
    },
    {
        name: '炸春捲',
        img: "img/0442.jpg",
        tag1: 'sweet'
    },
    {
        name: '土鳳梨酥',
        img: "img/0443.jpg",
        tag1: 'sweet'
    },
]

var area = document.querySelector(".shopcard-group")

// 火鍋
var btn_hot_pot = document.querySelector(".hot-pot")
let hot_pot = shop_food.filter(hot_pot_text => hot_pot_text.tag1 == 'hot-pot')

// 異國
var btn_exotic = document.querySelector(".exotic")
let exotic = shop_food.filter(exotic_text => exotic_text.tag1 == 'exotic')

// 中式
var btn_chinese = document.querySelector(".chinese")
let chinese = shop_food.filter(chinese_text => chinese_text.tag1 == 'chinese')

// 甜點
var btn_sweet = document.querySelector(".sweet")
let sweet = shop_food.filter(sweet_text => sweet_text.tag1 == 'sweet')

// START
start_img.forEach(element => {
    area.innerHTML +=
    `<div class="shopcard">
    <div class="img">
        <img src="${element.img}" alt="">
    </div>
</div> `
})

function food_type(type) {
    type.forEach(element => {
        area.innerHTML +=
        `<div class="shopcard">
            <div class="img">
                <img src="${element.img}" alt="">
            </div>
            <div class="shopcard-text">
                <span>${element.name}</span>
            </div>
    </div> `
    })
}

//鍋物系列卡片
btn_hot_pot.onclick = function () {
    area.innerHTML = ""
    food_type(hot_pot);
}
// 異國風味卡片
btn_exotic.onclick = function () {
    area.innerHTML = ""
    food_type(exotic);
}

// 中式風味卡片
btn_chinese.onclick = function () {
    area.innerHTML = ""
    food_type(chinese);
}

// 甜點卡片
btn_sweet.onclick = function () {
    area.innerHTML = ""
    food_type(sweet);
}
