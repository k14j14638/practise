const btn = document.getElementById('menu-btn')
// 宣告漢堡按鈕
const nav=document.getElementById('menu')
// 宣告手機版導覽列

function navToggle(){
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
}
// 監聽對象內切換選擇器'open'

btn.addEventListener('click',navToggle)
// 監聽漢堡按鈕觸發點擊執行函數