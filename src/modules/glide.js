import Glide from '@glidejs/glide';

export default class Slider {
  _glideSettings = {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    autoplay: false,
    gap: 10,
    carousel: 'glide--carousel',
    breakpoints: {
      768: {
        perView: 2,
      },
      568: {
        perView: 1,
      },
    },
  };

  getSelector() {
    return this._glideSettings.carousel;
  }

  _slider = new Glide('.glide', this._glideSettings);

  init() {
    this._slider.mount();
  }
}
