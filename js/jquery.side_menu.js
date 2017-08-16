function SideMenu(options) {
  this.init(options);
  this.initEvent();
}

SideMenu.prototype = {

  // 구조 정의
  init: function (opt) {
    this.$sideMenu = $(opt.selector.menu);
    this.$showBtn = $(opt.selector.showBtn);
    this.$hideBtn = this.$sideMenu.find('.close_btn');
    this.$list = this.$sideMenu.find('.main_menu > li > a');
    this.$subMenu = this.$sideMenu.find('.sub_menu');
    this.$shadow = $(opt.selector.shadow);

    this.duration = opt.duration || 400;
  },

  // 처음부터 시작할 함수들 모음
  initEvent: function () {
    this.clickHandler();
  },

  // 사이드메뉴 나타남
  showMenu: function () {
    this.$sideMenu.stop().animate({
      left: 0
    }, this.duration);
    this.$shadow.stop().fadeIn(this.duration);
  },

  // 사이트메뉴 사라짐
  hideMenu: function () {
    this.$sideMenu.stop().animate({
      left: -500
    }, this.duration);
    this.$shadow.stop().fadeOut(this.duration);
  },

  // 메뉴 열리고 닫히는(토글) 기능
  toggleList: function ($this) {
    this.$subMenu.not($this.siblings('.sub_menu')).stop(false, true).slideUp(this.duration);
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
