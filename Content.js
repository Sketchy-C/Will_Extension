let willSmithImgs = [
    "https://i.pinimg.com/236x/cf/59/12/cf59123d6980a5d64db47bfbec349648.jpg",
    "https://i.pinimg.com/236x/e4/3e/1c/e43e1c980668407f41995af8b2fb6005.jpg",
    "https://i.pinimg.com/236x/a7/4c/05/a74c059c44c848767a04807e4b51a07e.jpg",
    "https://i.pinimg.com/236x/89/4c/5f/894c5f619129c3fc270cfe7677756ed2.jpg",
    "https://i.pinimg.com/236x/10/a4/c5/10a4c55b014a93941f458b8283510e49.jpg",
    "https://i.pinimg.com/236x/27/d3/c1/27d3c11dcf0e922dc541a1e3803a306f.jpg",
    "https://i.pinimg.com/236x/3f/49/c6/3f49c680643619be59dc4039aa2d1329.jpg",
    "https://i.pinimg.com/236x/c4/20/21/c42021c8fc219cbebb67bd8fc6af237b.jpg",
    "https://i.pinimg.com/236x/58/00/11/580011366aab52406a40bd946a104946.jpg"
];

const imgs = document.getElementsByTagName("img");

for (let i = 0; i< imgs.length; i++){
    const randImg = Math.floor(Math.random() * willSmithImgs.length)
    imgs[i].src = willSmithImgs[randImg]
}


const headers = document.getElementsByTagName("h3");

for (let i = 0; i< headers.length; i++){
    headers[i].innerText = 'WillSmith is Awsome';
}