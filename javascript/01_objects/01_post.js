const getPara = document.getElementById("obj")
const getVal = document.getElementById("obj2")

post={
    username:'kajal@123',
    post:"hi this my post",
    likes:150,
    shares:123,
    tags:['abc','bcds',]
}

getPara.innerHTML = Object.keys(post)
getPara.innerHTML = Object.values(post)