(function ($) {
  /* 登录验证 */
  const form = document.getElementById('login');
  replaceInvalidityUi(form);
  const $submit = $("#submit");
  $submit.on("click", function (event) {
    const inValidEl = form.querySelectorAll(":invalid");
    //如果没通过规则返回
    if (inValidEl) {
      return false;
    }
  })
  event($('#phone'), /^\d{11}$/, '手机号码');
  event($('#pwd'), /^\S{6,18}$/, '密码');


  /* 忘记密码验证 */
  const forgetForm = document.getElementById('forget');
  replaceInvalidityUi(forgetForm);
  const $btn = $("#btn");
  $btn.on("click", function (event) {
    const inValidEl = form.querySelectorAll(":invalid");
    //如果没通过规则返回
    if (inValidEl) {
      return false;
    }
  })
  event($('#tel'), /^\d{11}$/, '手机号码');
  event($('#code'), /^\d{4}$/, '验证码');
  event($('#onepwd'), /^\S{6,18}$/, '密码');
  event($('#twopwd'), /^\S{6,18}$/, '密码');

  /* 切换 */
  $('.forget-pwd-btn').on('click', function () {
    $('.login-box').eq(0).addClass('hidden');
    $('.login-box').eq(1).removeClass('hidden');
  })

  $('.back').on('click', function () {
    $('.login-box').eq(0).removeClass('hidden');
    $('.login-box').eq(1).addClass('hidden');
  })

  $('.getCode').on('click', function () {
    let str = Math.random() + '';
    let code = str.substring(2, 6);

    $('.code-box').text(code);
    $('.mask').show();

  });

  $('.mask').on('click', () => {
    $('.mask').hide();
  })





  function event($el, pattern, text) {
    $el.on('focus', function () {
      rule($el, pattern, text);
    }).on('blur', function () {
      rule($el, pattern, text);
    }).on('input', function () {
      rule($el, pattern, text);
    });
  }

  function rule($el, pattern, text) {
    const str = $el.val();
    if (str == '') {
      cssHtml($el, `${text}不能为空`);
    } else {
      if (!pattern.test(str)) {
        cssHtml($el, `请输出正确的${text}`);
      } else {
        cssHtml($el, '');
      }
    }
  }

  function cssHtml($el, text) {
    $el.parent().find('.error-message').html(text);
  }

  //阻止默认效果
  function replaceInvalidityUi(form) {
    //1.阻止默认的行为
    form.addEventListener("invalid", function (event) {
      event = event || window.event;
      event.preventDefault();
    }, true);
    //2.阻止提交事件,onsubmit事件
    form.addEventListener("submit", function (event) {
      if (!this.checkValidity()) //当验证不通过时
      {
        event = event || window.event;
        event.preventDefault();
      }
    }, true);
  }




})(jQuery)