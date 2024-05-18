document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');
    const images = [
        'Adidas Galaxy  Kadın Spor Ayakkabı.png',
        'Ladies Kadın Spor Ayakkabı.png',
        'Ndr Hakiki Deri Kadın Günlük Ayakkabı.png',
        'New Balance Kadın Spor Ayakkabı.png',
        'Pierre Cardin Kadın Günlük Ayakkabı.png',
        'Polaris Kadın Günlük Ayakkabı.png',
        'Pull Bear Kadın Spor Ayakkabı.png'
        
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

        const titleElement = document.createElement('h3');
        titleElement.textContent = 'Kadın Ayakkabısı';
        

        const descElement = document.createElement('h1');
        descElement.textContent = '1,000 TRY';

        overlayElement.appendChild(titleElement);
        overlayElement.appendChild(descElement);

        galleryItem.appendChild(imgElement);
        galleryItem.appendChild(overlayElement);

        colElement.appendChild(galleryItem);
        gallery.appendChild(colElement);
    });
});
