import Glide from '@glidejs/glide';

export default function sliderInit() {
  const glideSettings = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 5000,
    gap: 10,
    breakpoints: {
      768: {
        perView: 2,
      },
      568: {
        perView: 1,
      },
    },
  };

  new Glide('.glide', glideSettings).mount();
}
