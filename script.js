document.getElementById("header").textContent = "Text Changed!";


const paragraphs = document.querySelectorAll(".text");
paragraphs.forEach(paragraph => {
    paragraph.style.color = "blue";
});

const listItems = document.querySelectorAll(".list-item");
listItems.forEach((item, index) => {
    console.log(`Item ${index + 1}: ${item.textContent}`);
});


listItems[0].style.backgroundColor = "yellow";


listItems.forEach(item => {
    item.style.color = "green";
});
