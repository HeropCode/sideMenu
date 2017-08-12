function SideMenu(options) {
  this.init(options);
  this.initEvent();
}

SideMenu.prototype = {
  
  // 구조 정의
  init: function (opt) {
    this.$sideMenu = $(opt.selector = opt.selector ? opt.selector : '.side_menu');
    this.$showBtn = $(opt.showBtn = opt.showBtn ? opt.showBtn : '.side_menu_btn');
    this.$hideBtn = this.$sideMenu.find('.close_btn');
    this.$list = this.$sideMenu.find('.main_menu > li > a');
    this.$shadow = $(opt.shadow = opt.shadow ? opt.shadow : '.side_shadow');
    this.duration = 500;
  },

  // 처음부터 시작할 함수들 모음
  initEvent: function () {
    this.clickHandler();
  },

  // 사이드메뉴 나타남 기능
  showMenu: function () {
    this.$sideMenu.stop().animate({
      left: 0
    }, this.duration);
    this.$shadow.stop().fadeIn(this.duration);
  },

  // 사이트메뉴 사라짐 기능
  hideMenu: function () {
    this.$sideMenu.stop().animate({
      left: -500
    }, this.duration);
    this.$shadow.stop().fadeOut(this.duration);
  },

  // 메뉴 열리고 닫히는(토글) 기능
  toggleList: function ($this) {
    $('.sub_menu').not($this.siblings('.sub_menu')).stop(false, true).slideUp(this.duration);
    $this.siblings('.sub_menu').stop(false, true).slideToggle(this.duration);
  },

  // 전체 이벤트 핸들러
  clickHandler: function () {
    var _this = this;

    this.$showBtn.on('click', function () {
      _this.showMenu();
    });
    this.$hideBtn.on('click', function () {
      _this.hideMenu();
    });
    this.$list.on('click', function () {
      _this.toggleList($(this));
    });
  }

};


