const wrapper = document.querySelector(".sliderwrapper");
const menuItem = document.querySelectorAll(".menuItem");

const product = [
    {
        id:1,
        title:"BLAZER MID 77' VINTAGE",
        price: 7995,
        colors: [
            {
                code:"white",
                img: "./img/Blazermid77.png",
            },
            {
                code:"black",
                img:"./img/BlazerBlack.png",
            },
        ],
    },
    {
        id:2,
        title:"MERCURIAL SUPERFLY 9",
        price: 8995,
        colors: [
            {
                code:"pink",
                img: "./img/Mercurialsuperfly.png",
            },
            {
                code:"black",
                img:"./img/Mercurialsuperfly2.png",
            },
        ],
    },
    {
        id:3,
        title:"MERCURIAL VAPOR 15",
        price: 21995,
        colors: [
        {
            code:"white",
            img: "./img/Mercurialvapor.png",
        },
        {
            code:"black",
            img:"./img/Mercurialvapor2.png",
        },
    ],
},
{
    id:4,
    title:"PHANTOM GX ACADEMY",
    price: "18,395",
    colors: [
    {
        code:"white",
        img: "./img/PhantomGX.png",
    },
    {
        code:"black",
        img:"./img/PhantomGX2.png",
    },
],
},
];
let choosenProduct = product[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItem.forEach((item, index) => {
    item.addEventListener("click",() => {
        //chnage current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        //change choosen product
        choosenProduct = product[index]

        //change texts of choosen product
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "₹" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img
        //assigning new colors
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});
currentProductColors.forEach((color,index) =>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});
currentProductSizes.forEach((size,index)=> {
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=> {
            size.style.backgroundColor="White";
            size.style.color="black";
        });
        size.style.backgroundColor="black"
        size.style.color="white"
    });
});
const productButton=document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex";
});
close.addEventListener("click",()=>{
    payment.style.display="none";
});

