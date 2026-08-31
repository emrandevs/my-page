const portfoliCards =[
    {name:"business website",srcImg:"./images/buisnes-project.webp",href:"./projects/busines-project/index.html"},
    {name:"cafe website",srcImg:"./images/cafe-project.webp",href:"./projects/cafe-site/main-page/main.html"},
    {name:"crosses & noughtes",srcImg:"./images/cross & noughty.webp",href:"./projects/Noughts & Crosses/index.html"},
    {name:"calculator",srcImg:"./images/calculator-project.webp",href:"./projects/calculator/index.html"},
    {name:"piano",srcImg:"./images/piano-project.webp",href:"./projects/piano/index.html"},
    {name:"CMS",srcImg:"./images/CMD-project.webp",href:"./projects/CMS/index.html"},
    {name:"dictionary",srcImg:"./images/dictionary-project.webp",href:"./projects/dictionary/index.html"},
    {name:"weather app",srcImg:"images/weather-app-project.webp",href:"./projects/weather-app/index.html"}
];

const portfolioBoxContainer =document.querySelector(".portfolio_box-container");
        
portfoliCards.forEach(function(item){
        
    const portfolioBox = document.createElement('div');
    portfolioBox.className = 'portfolio-box';
        
        
    const image = document.createElement('img');
    image.src =item.srcImg;
    image.alt = 'portfolio-image';
    image.className = 'portfolio-img';
        
        
    const boxCaption = document.createElement('div');
    boxCaption.className = 'box-caption';
        
        
    const viewButton = document.createElement('a');
    viewButton.href = item.href;
    viewButton.className = 'box_caption-btn';
    viewButton.textContent = 'View';
        
        
    const captionText = document.createElement('span');
    captionText.className = 'box_caption-text';
    captionText.textContent = item.name;
        
        
    boxCaption.append(viewButton);
    boxCaption.append(captionText);
    portfolioBox.append(image);
    portfolioBox.append(boxCaption);
        
    portfolioBoxContainer.append(portfolioBox);
})