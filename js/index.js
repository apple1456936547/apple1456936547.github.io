// 菜品瀏覽一開始畫面
// 當使用者點擊左方按鈕便不會再顯示一開始的畫面除非重新整理後
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

// 菜品瀏覽卡片
var shop_food = [
    {
        name: '素薑母鴨火鍋',
        img: "img/0411.jpg",
        tag1: 'hot_pot'
    },
    {
        name: '綜合湯底火鍋',
        img: "img/0412.jpg",
        tag1: 'hot_pot'
    },
    {
        name: '素當歸鴨火鍋',
        img: "img/0413.jpg",
        tag1: 'hot_pot'
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
// 從shop_food矩陣裡面篩選出有hot_pot的東西(此為filter精簡寫法)
let hot_pot = shop_food.filter(hot_pot_text => hot_pot_text.tag1 == 'hot_pot')

// 異國
let exotic = shop_food.filter(exotic_text => exotic_text.tag1 == 'exotic')

// 中式
let chinese = shop_food.filter(chinese_text => chinese_text.tag1 == 'chinese')

// 甜點
let sweet = shop_food.filter(sweet_text => sweet_text.tag1 == 'sweet')

// 按鈕
var btns = document.querySelectorAll(".btn");

// 分類後的食物的矩陣
var food_filter = [hot_pot, exotic, chinese, sweet];

// 菜品瀏覽一開始畫面
start_img.forEach(element => {
    // 在area裡面塞東西
    area.innerHTML +=
    `<div class="shopcard">
    <div class="img">
        <img src="${element.img}" alt="">
    </div>
</div> `
})

// 生出菜品瀏覽的卡片function
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

// 按鈕區
btns.forEach((btn,index) => {
    btn.addEventListener('click', function(){
        area.innerHTML = "";
        food_type(food_filter[index]);
    })
});
