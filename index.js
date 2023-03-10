// topBtn
const topBtn = document.querySelector(".top_btn");
topBtn.addEventListener("click", () => {
  scrollTo({
    top:0,
    behavior:"smooth"
  });
  });

//  register
const user = document.querySelector(".register_inner>ul>li:last-child");
user.addEventListener("click",()=>alert("현재 사용불가한 메뉴입니다."))
//   menuList
const menu = document.querySelectorAll(".sub_menu>li");
menu.forEach((item)=>{
    item.addEventListener("click",()=> alert('현재 사용불가한 메뉴입니다.'))
    })

//banner
const banner = document.querySelector(".text>a");
banner.addEventListener("click",()=>alert('현재 사용불가한 메뉴입니다.'));

// productList
const product = document.querySelectorAll(".product_list>li");
product.forEach((item)=>item.addEventListener("click",()=>alert("현재 사용불가한 메뉴입니다.")))

// scroll 이벤트
const section = document.querySelectorAll("section");
window.addEventListener('scroll',()=>{
    section.forEach(item => {
        if(window.scrollY>=item.offsetTop-500){
            item.classList.add('active');
        }
    });
})



