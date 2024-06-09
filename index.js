const imageGallery = document.getElementById('image-gallery');
const imagePath = `images`;

//Predefined st of captions
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
    captionConatiner.className = 'caption';
    
    const city = document.createElement('span');
    city.textContent = caption.city;
    city.className = 'city';

    const country = document.createElement('span');
    country.textContent = `, ${caption.country}`;
    country.className = 'country';

    const showMore = document.createElement('span');
    city.textContent = ` - ${caption.showMore}`;
    city.className = 'show-more';

    captionContainer.appendChild(city);
    captionContainer.appendChild(country);
    captionContainer.appendChild(showMore);

    imgContainer.appendChild(img);
    imgContainer.appendChild(captionContainer);
    imageGallery.appendChild(imgContainer);
});
