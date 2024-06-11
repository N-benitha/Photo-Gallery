const imageGallery = document.getElementById('image-gallery');
const imagePath = `images`;

//Predefined set of captions
const captions = [
    {city: "Bali", country: "Indonesia", showMore: "Show more"},
    {city: "Fira", country: "Greece", showMore: "Show more"},
    {city: "Kalahari Desert", country: "South Africa", showMore: "Show more"},
    {city: "Tromso", country: "Norway", showMore: "Show more"},
    {city: "Zanzibar", country: "Tanzania", showMore: "Show more"}
];

captions.forEach((caption, index) => {
    const imgContainer = document.createElement('div');
    imgContainer.className = 'img-container';

    const img = document.createElement('img');
    img.src = `${imagePath}/image${index + 1}.jpg`;
    img.alt = `${caption.city}, ${caption.country}`;

    const captionContainer = document.createElement('div');
    captionContainer.className = 'caption';
    
    const city = document.createElement('span');
    city.textContent = caption.city;
    city.className = 'city';

    const country = document.createElement('span');
    country.textContent = `, ${caption.country}`;
    country.className = 'country';

    const showMore = document.createElement('div');
    showMore.textContent = `${caption.showMore}`;
    showMore.className = 'show-more';

    const arrow = document.createElement('i');
    arrow.className = 'fa-solid fa-arrow-right';

    captionContainer.appendChild(city);
    captionContainer.appendChild(country);
    captionContainer.appendChild(showMore);
    captionContainer.appendChild(arrow);

    imgContainer.appendChild(img);
    imgContainer.appendChild(captionContainer);
    imageGallery.appendChild(imgContainer);

    //Add click event to open a gallery image
    img.onclick = function() {
        const gallery = document.getElementById("myGallery");
        const gallerImg = document.getElementById("imageX");
        const captionText = document.getElementById("caption");
        gallery.style.display = "block";
        gallerImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

//get the span element that closes a gallery image
const span = document.getElementsByClassName("close")[0];

//when the user clicks on <span> (x), close the image opened
span.onclick = function() {
    const gallery = document.getElementById("myGallery");
    gallery.style.display = "none";
}
