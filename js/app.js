$(function() {

    var header = $("#header"), 
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


        // Header Fixed
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });



    function checkScroll(scrollOffset) {
        

        if(scrollOffset >= introH) {
                header.addClass("fixed");
        }   else {
                header.removeClass("fixed");
        }
    }

    // Smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;


        $("#nav a").removeClass("active"),
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 1000);

    });


    // nav toggle
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

    });



    // Collapse
    var accordion = (function (element) {
  var _getItem = function (elements, className) { // функция для получения элемента с указанным классом
    var element = undefined;
    elements.forEach(function (item) {
      if (item.classList.contains(className)) {
        element = item;
      }
    });
    return element;
  };
  return function () {
    var _mainElement = {}, // .accordion
      _item = {}, // .accordion-item
      _content = {}; // .accordion-item-content
    var _actionClick = function (e) {
      if (!e.target.classList.contains('accordion_heaader')) { // прекращаем выполнение функции если кликнули не по заголовку
        return;
      }
      e.preventDefault(); // отменям стандартное действие
      // получаем необходимые данные
      var header = e.target,
        item = header.parentElement,
        itemActive = _getItem(_item, 'active');
      if (itemActive === undefined) { // добавляем класс show к элементу (в зависимости от выбранного заголовка)
        item.classList.add('active');
      } else {
        // удаляем класс show у ткущего элемента
        itemActive.classList.remove('active');
        // если следующая вкладка не равна активной
        if (itemActive !== item) {
          // добавляем класс show к элементу (в зависимости от выбранного заголовка)
          item.classList.add('active');
        }
      }
    },
    _setupListeners = function () {
      // добавим к элементу аккордиона обработчик события click
      _mainElement.addEventListener('click', _actionClick);
    };

    return {
      init: function (element) {
        _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
        _item = _mainElement.querySelectorAll('.accordion_item');
        _setupListeners();
      }
    }
  }
})();



    // Slider
    $("[data-slider]").slick( {
        infinity: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });



});
