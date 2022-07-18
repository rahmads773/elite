// slider show
let right =  document.querySelector(".landing .right")
let landing =  document.querySelector(".landing")
let mainTitle =  document.querySelector(".landing h1")
let imgArray = ["url(../img/banner.jpg)","url(../img/vision.jpg)","url(../img/program.jpg)"]
let textArray = [
` We're an Independant <br />
Design & <span class="p-1">Developement</span> <br />
Agency`,

` Explore our <br />
<span class="p-1">Vision</span>
`,
` We have the best <br />
<span class="p-1">Developers</span> and <br /> <span> designers</span> 
`
]
let bullets = document.querySelectorAll(".bullets span")
let i = 0;
right.addEventListener("click",(eo) => {
    if(i === imgArray.length - 1){
        i = 0;
        landing.style.backgroundImage = imgArray[i]
        mainTitle.innerHTML = textArray[i]
        }else{
            i++;
            landing.style.backgroundImage = imgArray[i]
            mainTitle.innerHTML = textArray[i]
        }
        handleActive(bullets)
        bullets.forEach((ele,index) => {
            if(i === index){
    ele.classList.add("active")
            }
        })
})

bullets.forEach((ele,index) => {
   ele.addEventListener("click",(eo) => {
    landing.style.backgroundImage = imgArray[index]
    mainTitle.innerHTML = textArray[index]
  handleActive(bullets)
  ele.classList.add("active")
   })
})


// filter features
let lis = document.querySelectorAll(".features ul li")

lis.forEach(li => {
    li.addEventListener("click",(eo) => {
        document.querySelectorAll(".all").forEach((ele) => {
            ele.classList.add("width")
        })
       lis.forEach((ele) => {
        ele.classList.remove("active")
       })
       li.classList.add("active")
    //    console.log(li.dataset.filter)
       document.querySelectorAll(li.dataset.filter).forEach((ele) => {
        ele.classList.remove("width")
       })
    })
});

// toggle menu
let list = document.querySelector(".ul-container")
let menu = document.querySelector("header .menu")

menu.addEventListener("click",(eo) => {
    list.classList.toggle("active")
})


// handle active

function handleActive(Elements){
Elements.forEach((ele) => {
    ele.classList.remove("active")
})
}





// animation onscroll

let skills = document.querySelector(".skills")
let post =  document.querySelector(".post")
let boxes = document.querySelectorAll(".skills .box")
let posts =  document.querySelectorAll(".post .box")
let chooseUs =  document.querySelector(".choose-us")
let chooseImg =  document.querySelector(".choose-us .image")
let choose =  document.querySelector(".choose-us .choose")
// encounter

let nums = document.querySelectorAll(".stats span")
let stats = document.querySelector(".stats")
let started = false;

const encounter = (ele) => {
    let goal = ele.dataset.goal
   let counter =  setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
        clearInterval(counter)
    }
  }, 10 / goal);
}





// fade function

const fade = (ele) => {
    ele.style.transform = "translate(0)"
    ele.style.opacity = "1"
}

let tranS = 0;
let tranP =0;

window.onscroll = () => {
    if(window.scrollY >= skills.offsetTop - 450){
boxes.forEach(ele => {
    fade(ele)
    ele.style.transitionDelay = `${tranS += 0.3}s`
});
    }
    if(window.scrollY >= post.offsetTop - 400){
posts.forEach((ele) => {
    fade(ele)
    ele.style.transitionDelay = `${tranP += 0.3}s`
})
    }
    if(window.scrollY >= stats.offsetTop - 500){
        if (!started) {
            nums.forEach(num => encounter(num));            
        }
     started = true;
    }
    if(window.scrollY >= chooseUs.offsetTop - 400){
        chooseImg.style.transform = "translate(0)"
        choose.style.transform = "translate(0)"
    }
}


