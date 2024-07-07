document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.gallery-tab li');
    const galleries = document.querySelectorAll('.gallery');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            galleries.forEach(gallery => gallery.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(this.dataset.target).classList.add('active');
        });
    });
});

 /**
   * Initiate gallery lightbox
   */
 const galleryLightbox = GLightbox({
    selector: ".gallery-lightbox",
  });