document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');
    const images = [
        'Adidas Breaknet Erkek Beyaz Spor Ayakkabı.png',
        'Avva Erkek Casual Ayakkabı.png',
        'Bambi Erkek Casual Ayakkabı.png',
        'Jordan Stay Loyal 3 Erkek Beyaz Spor Ayakkabı.png',
        'Jump Erkek Spor Ayakkabı.png',
        'Nike Full Force Low Erkek Beyaz Spor Ayakkabı.png',
        'White Stone Alessandria Erkek Casual Ayakkabı.png'
    ];

    images.forEach(image => {
        const colElement = document.createElement('div');
        colElement.className = 'col-lg-4 col-md-6 mb-4';

        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';

        const imgElement = document.createElement('img');
        imgElement.src = `urunler/${image}`;
        imgElement.alt = image;

        imgElement.addEventListener('click', function() {
            window.location.href = 'satildi.html';
        });
        
        const overlayElement = document.createElement('div');
        overlayElement.className = 'overlay';

        const titleElement = document.createElement('h2');
        titleElement.textContent = 'Erkek Ayakkabısı';

        const descElement = document.createElement('h3');
        descElement.textContent = '1,000 TRY';

        overlayElement.appendChild(titleElement);
        overlayElement.appendChild(descElement);

        galleryItem.appendChild(imgElement);
        galleryItem.appendChild(overlayElement);

        colElement.appendChild(galleryItem);
        gallery.appendChild(colElement);
    });
});
