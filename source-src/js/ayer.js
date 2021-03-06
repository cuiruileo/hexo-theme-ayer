(function ($) {
  // Search
  let $searchWrap = $('.search-form-wrap'),
    isSearchAnim = false,
    searchAnimDuration = 200;

  const startSearchAnim = () => {
    isSearchAnim = true;
  };

  const stopSearchAnim = (callback) => {
    setTimeout(function () {
      isSearchAnim = false;
      callback && callback();
    }, searchAnimDuration);
  };

  $('.nav-item-search').click(() => {
    if (isSearchAnim) return;
    startSearchAnim();
    $searchWrap.addClass('on');
    stopSearchAnim(function () {
      $('.local-search-input').focus();
    });
  });

  $(document).mouseup((e) => {
    const _con = $('.local-search');
    if (!_con.is(e.target) && _con.has(e.target).length === 0) {
      $searchWrap.removeClass('on');
    }
  });

  // 建议在移动端不初始化，其实 /search.xml 文件还挺大的，
  if ($('.local-search').size()) {
    $.getScript('/js/search.js', function () {
      searchFunc("/search.xml", 'local-search-input', 'local-search-result');
    });
  }

  // Mobile Detect
  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  // Lazyload
  $("img.lazy").lazyload({
    effect: "fadeIn"
  });

  // JustifiedGallery
  $('#gallery').justifiedGallery({
    rowHeight: 200,
    margins: 5
  });

  // To Top
  (() => {
    // When to show the scroll link
    // higher number = scroll link appears further down the page
    const upperLimit = 1000;

    // Our scroll link element
    const scrollElem = $('#totop');

    // Scroll to top speed
    const scrollSpeed = 1600;

    // Show and hide the scroll to top link based on scroll position
    scrollElem.hide();
    $('.content').scroll(function () {
      const scrollTop = $('.content').scrollTop();
      if (scrollTop > upperLimit) {
        $(scrollElem).stop().fadeTo(200, .6); // fade back in
      } else {
        $(scrollElem).stop().fadeTo(200, 0); // fade out
      }
    });

    // Scroll to top animation on click
    $(scrollElem).click(function () {
      $('.content').animate({ scrollTop: 0 }, scrollSpeed); return false;
    });
  })();

  // Mobile Nav
  const $content = $('.content'),
    $sidebar = $('.sidebar');

  $('.navbar-toggle').on('click', function () {
    $('.content,.sidebar').addClass('anim')
    $content.toggleClass('on');
    $sidebar.toggleClass('on');
  });

  // showThemeInConsole
  const ayerInfo = '主题不错？⭐star 支持一下 ->';
  const ayerURL = 'https://github.com/Shen-Yu/hexo-theme-ayer';
  const ayerNameStr =
    '\n\n     _ __   _______ _____    \n    / \\ \\ \\ / / ____|  _  \\  \n   / _ \\ \\ V /|  _| | |_) |  \n  / ___ \\ \| | | |___|  _ <   \n /_/   \\_\\ _| |_____|_| \\__\\ \n';
  const ayerInfoStyle =
    'background-color: #49b1f5; color: #fff; padding: 8px; font-size: 14px;';
  const ayerURLStyle =
    'background-color: #ffbca2; padding: 8px; font-size: 14px;';
  const ayerNameStyle = 'background-color: #eaf8ff;';

  console.log(
    '%c%s%c%s%c%s',
    ayerInfoStyle,
    ayerInfo,
    ayerURLStyle,
    ayerURL,
    ayerNameStyle,
    ayerNameStr
  );
  document.write('<script type="text/javascript"  src="https://js.users.51.la/20544303.js"></script>');
})(jQuery);


