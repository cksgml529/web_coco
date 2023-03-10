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
banner.addEventListener("click",(e)=>{
  e.preventDefault();
  alert('현재 사용불가한 메뉴입니다.')
});

// wedo
const wedo = document.querySelectorAll(".wedo_txt>a");
wedo.forEach((item)=>{
  item.addEventListener("click",(e)=>{
    e.preventDefault();
    alert('현재 사용불가한 메뉴입니다.');
  });
})

// adv
const adv = document.querySelector(".adv_txt>a");
adv.addEventListener("click",(e)=>{
  e.preventDefault();
  alert('현재 사용불가한 메뉴입니다.');
});

// productList
const product = document.querySelectorAll(".product_list>li");
product.forEach((item)=>item.addEventListener("click",()=>alert("현재 사용불가한 메뉴입니다.")))

// cs
const cs =document.querySelector(".info_btn>a");
const sns = document.querySelectorAll(".sns_img");
cs.addEventListener("click",(e)=>{
  e.preventDefault();
  alert("현재 사용불가한 메뉴입니다.")
});
sns.forEach((item)=>{
  item.addEventListener("click",(e)=>{
    e.preventDefault();
    alert("현재 사용불가한 메뉴입니다.");
  });

})

// etc
const notice = document.querySelectorAll(".notice>ul>li");
const cscenter = document.querySelectorAll(".etc_btn>div");

notice.forEach((item)=>{
  item.addEventListener("click",(e)=>{
    e.preventDefault();
    alert("현재 사용불가한 메뉴입니다.");
  })
})
cscenter.forEach((item)=>{
  item.addEventListener("click",(e)=>{
    e.preventDefault();
    alert("현재 사용불가한 메뉴입니다.");
  })
})

// footer_sns
const footer_sns = document.querySelectorAll(".footer_sns>li");
footer_sns.forEach((item)=>{
  item.addEventListener("click",(e)=>{
    e.preventDefault();
    alert("현재 사용불가한 메뉴입니다.");
  })
})

// footer
const footer_btn = document.querySelectorAll(".footer_btn>a");
footer_btn.forEach((item)=>{
  item.addEventListener("click",(e)=>{
    e.preventDefault();
    alert("현재 사용불가한 메뉴입니다.");
  })
})

// scroll 이벤트
const section = document.querySelectorAll("section");
window.addEventListener('scroll',()=>{
    section.forEach(item => {
        if(window.scrollY>=item.offsetTop-500){
            item.classList.add('active');
        }
    });
})



