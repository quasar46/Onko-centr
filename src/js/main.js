document.addEventListener('DOMContentLoaded', function () {

  const searchBtn = document.querySelector('.search__unactive');
  const nav = document.querySelector('.header-bottom__nav');
  const actionsHeader = document.querySelector('.header-bottom__actions');

  function openSearch() {
    searchBtn.addEventListener('click', function () {
      nav.classList.add('hidden');
      actionsHeader.classList.add('inlineStyle');
    })
  }
  if (window.innerWidth >= 768) {
    openSearch();
  }


  const swiper1 = new Swiper('.news-carousel', {
    slidesPerView: 3,
    spaceBetween: 16,
    breakpoints: {
      320: {
        slidesPerView: "auto",
      },
      769: {
        slidesPerView: 3,
      }
    }
  })

  const swiper2 = new Swiper('.reviews-block-carousel', {
    slidesPerView: 3,
    spaceBetween: 16,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: "auto",
      },
      1280: {
        slidesPerView: 2,
      },
      1920: {
        slidesPerView: 3,
      }
    },
    pagination: {
      el: '.swiper-pagination',
    },
  })

  const swiper3 = new Swiper('.banner', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  })

  const swiper4 = new Swiper('.specialist__slider', {
    spaceBetween: 16,
    breakpoints: {
      320: {
        slidesPerView: "auto",
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1280: {

        slidesPerView: 4,
        spaceBetween: 16,
      }
    },
    pagination: {
      el: '.swiper-pagination',
    },
  })

  if (window.innerWidth < 1279) {
    const swiper4 = new Swiper('.news-block', {
      slidesPerView: "auto",
      320: {
        slidesPerView: "auto"
      },
      pagination: {
        el: '.swiper-pagination',
      },

    })
  }




  const galleryBtnsShow = document.querySelectorAll('#galleryShow');
  const galleryInner = document.querySelector('.gallery__inner--overlay');

  const showGallery = function () {
    galleryBtnsShow.forEach(item => {
      item.addEventListener('click', function () {
        galleryInner.classList.toggle('active');
        if (galleryInner.classList.contains('active')) {
          this.innerText = 'СВЕРНУТЬ';
        } else {
          this.innerText = 'РАЗВЕРНУТЬ';
        }
      })
    })
  }
  if (galleryBtnsShow.length > 0) {
    showGallery();
  }
  const overlay = document.querySelector('.overlay');

  const overlayShow = function () {
    overlay.classList.add('active');
  }
  const overlayHidden = function () {
    overlay.classList.remove('active');
  }

  const showFilter = function () {
    const btnShowFilter = document.querySelector('#filterShow');
    const filterBlock = document.querySelector('.filter');

    btnShowFilter.addEventListener('click', function () {
      scrollLock.disablePageScroll();
      filterBlock.classList.add('active');
      overlayShow();
    })
  }
  if (document.querySelector('#filterShow')) {
    showFilter();
  }




  const showCategorii = function () {
    const btnsShow = document.querySelectorAll('.categoriiBtn');
    const block = document.querySelector('.categorii');
    btnsShow.forEach(item => {
      item.addEventListener('click', function () {
        scrollLock.disablePageScroll();
        block.classList.add('active');
        overlay.classList.add('active');
      })
    })
  }
  showCategorii();


  const showCity = function () {
    const btnShowCity = document.querySelector('#cityBtn');
    const block = document.querySelector('.city-block');
    btnShowCity.addEventListener('click', function () {
      scrollLock.disablePageScroll();
      block.classList.add('active');
      overlay.classList.add('active');
    })
  }
  showCity();

  const changeBtnsService = function () {
    const btns = document.querySelectorAll('.service-table__body .col .btn');
    const btns2 = document.querySelectorAll('.service-table__body .col .btn2');
    if (window.innerWidth < 1280) {
      btns.forEach(item => {
        item.innerHTML = '<img src="img/icons/icn_m_add.svg">';
      })
      btns2.forEach(item => {
        item.innerHTML = '<img src="img/icons/icn_m_delete_forever.svg">';
      })
    }
  }
  changeBtnsService();

  // const rollupItemHistory = function() {
  //   const btns = document.querySelectorAll('.rollup');

  //   btns.forEach(btn=> {
  //     btn.addEventListener('click', function() {
  //       btn.closest('.item').classList.add('hidden');
  //     })
  //   })
  // }
  // rollupItemHistory();

  const showVacancy = function () {
    if (document.querySelector('#showModalVacancy')) {
      const btnOpen = document.querySelector('#showModalVacancy');
      const modal = document.querySelector('#modalReview');

      btnOpen.addEventListener('click', function (evt) {
        evt.preventDefault();
        // scrollLock.disablePageScroll();
        modal.classList.add('active');
        overlayShow();
      })
    }
  }
  showVacancy();

  const closeModal = function () {
    const btnsCloseModal = document.querySelectorAll('.close-modal');
    btnsCloseModal.forEach((item) => {
      item.addEventListener('click', function (evt) {
        evt.preventDefault();
        item.closest('div').classList.remove('active');
        overlayHidden();
        scrollLock.enablePageScroll();
      })
    })
  }
  closeModal();


  const showReview = function () {
    if (document.querySelector('#showModalVacancy')) {
      const btnOpen = document.querySelector('#showModalVacancy');
      const modal = document.querySelector('#modalReview');

      btnOpen.addEventListener('click', function (evt) {
        evt.preventDefault();
        scrollLock.disablePageScroll();
        modal.classList.add('active');
        overlayShow();
      })
    }
  }
  showReview();

  const openFinishMessage = function () {
    const btn = document.querySelector('#btnSendReview');
    const modal = document.querySelector('#reviewModalSend');

    btn.addEventListener('click', function (event) {
      this.closest('.modal').classList.remove('active');
      overlayShow();
      event.preventDefault();
      modal.classList.add('active');
    });
  }
  openFinishMessage();


  const lkHeader = document.querySelector('#lk-header');
  const els = document.querySelectorAll('.lk-content__aside li');

  els.forEach(item => {
    item.addEventListener('click', function () {
      lkHeader.innerHTML = item.dataset.title;
    });
  });

  const showSearchMobile = function () {
    const btn = document.querySelector('#search');
    const block = document.querySelector('.search-mobile');
    const page = document.querySelector('.page');
    const footer = document.querySelector('.footer');

    btn.addEventListener('click', function () {
      block.classList.toggle('active');
      page.classList.toggle('hidden');
      footer.classList.toggle('hidden');
    });
  }
  if (window.innerWidth < 768) {
    showSearchMobile();
  }


  const showAccount = function () {
    const btn = document.querySelector('#accountBtn');
    const block = document.querySelector('.tabs__caption li:nth-child(2)');
    const links = document.querySelectorAll('.tabs__caption li');
    const blockWrap = document.querySelector('.tabs__content:nth-child(2)');
    const blocksWrap = document.querySelectorAll('.tabs__content');

    btn.addEventListener('click', function (evt) {
      evt.preventDefault();
      links.forEach(item => {
        item.classList.remove('active');
      });
      block.classList.add('active');
      blocksWrap.forEach(item => {
        item.classList.remove('active');
      })
      blockWrap.classList.add('active');
    });
  }
  if (document.querySelector('.page-lk-content')) {
    showAccount();
  }

  const menuShow = function () {
    const burger = document.querySelector('#burger');
    const menu = document.querySelector('#menu');
    const headerHeight = document.querySelector('header').clientHeight;
    const bottomHeight = document.querySelector('.header-bottom__actions').clientHeight;

    burger.addEventListener('click', function (evt) {
      evt.preventDefault();
      menu.classList.toggle('active');
      menu.style.height = `calc(100vh - ${headerHeight}px - ${bottomHeight}px)`;
      menu.style.top = `${headerHeight}px`
      if (menu.classList.contains('active')) {
        scrollLock.disablePageScroll();
      } else {
        scrollLock.enablePageScroll();
      }

    });
  }
  menuShow();


  const filterSearchShow = function () {
    const btnSow = document.querySelector('.filter__search');
    const searchBlock = document.querySelector('.filter-search');

    btnSow.addEventListener('click', function (evt) {
      evt.preventDefault();
      searchBlock.classList.add('active');
      overlayShow();
    })
  }
  if (document.querySelector('.filter__search')) {
    filterSearchShow();
  }


})