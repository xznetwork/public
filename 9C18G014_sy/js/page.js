(function($, win) {
    $.fn.wrpage = function(options) {
        if (options.pagesize <= 0) {
            return
        }
        var defaults = { //defaults 使我们设置的默认参数。
            pagesize: 10,
            wr_current: 1,
            baseUrl: './',
            cb: function() {}
        };
        var options = $.extend(defaults, options); //将传入参数和默认参数合并
        var size = Number(options.pagesize);
        var cur = Number(options.wr_current)
        var baseUrl = options.baseUrl
        var cb = options.cb
        var em = $(this);

        init(size, cur)

        function init(size, cur) {
            var _html = ""
            //头
            if (cur <= 1) {
                _html += ''
            } else {
                _html +=
                    '<a href="javascript:;" class="wr_pagefirst bg-highlight color-white">&lt;&lt;</a>'
            }
            //中间
            if (cur < 5) {
                var midpage = size < 6?size:6;
                for (var i = 1; i <= midpage; i++) {
                    if (i == cur) {
                        _html += '<a href="javascript:;" class="curwrpage bg-highlight opacity-50 color-white">' + cur + '</a>'
                    } else {
                        _html += '<a href="javascript:;" class="wrpage_number bg-highlight color-white">' + i + '</a>'
                    }
                }
            } else if (cur >= 5) {

                // _html += '<span class="wr_dotted">...</span>'

                if (size - cur - 1 >= 5) {
                    for (var i = cur - 1; i <= cur * 1 + 5; i++) {
                        if (i == cur) {
                            _html += '<a href="javascript:;" class="curwrpage bg-highlight opacity-50 color-white">' + cur + '</a>'
                        } else {
                            _html += '<a href="javascript:;" class="wrpage_number bg-highlight color-white">' + i + '</a>'
                        }
                    }
                    // _html += '<span class="wr_dotted">...</span>'
                } else {
                    if (size == 6) {

                        for (var i = 2; i <= size; i++) {
                            if (i == cur) {
                                _html += '<a href="javascript:;" class="curwrpage bg-highlight opacity-50 color-white">' + cur + '</a>'
                            } else {
                                _html += '<a href="javascript:;" class="wrpage_number bg-highlight color-white">' + i + '</a>'
                            }
                        }
                    } else {

                        for (var i = size - 6; i <= size; i++) {
                            if (i == cur) {
                                _html += '<a href="javascript:;" class="curwrpage bg-highlight opacity-50 color-white">' + cur + '</a>'
                            } else {
                                _html += '<a href="javascript:;" class="wrpage_number bg-highlight color-white">' + i + '</a>'
                            }
                        }
                    }
                }
                //
            }
            //尾
            if (cur >= size) {
                _html +=
                    ''
            } else {
                _html +=
                    '<a href="javascript:;" class="wr_pagenext bg-highlight color-white">&gt;&gt;</a><a href="javascript:;" class="wr_pageend bg-highlight color-white">尾</a>'
            }
            em.append(_html)
        }

        function jumpPage(page){
            window.location.href = baseUrl.replace(/currentPage/, page);
        }

        em.on("click", "a.wrpage_number", function() {
            jumpPage($(this).text());
            em.empty($(this).text())
            init(size, $(this).text());
            cb($(this).text())

        });
        em.on("click", "a.wr_pagefirst", function() {
            jumpPage(1);
            em.empty()
            init(size, 1);
            cb(1)
        });
        em.on("click", "a.wr_pageend", function() {
            jumpPage(size);
            em.empty()
            init(size, size);
            cb(size)
        });
        em.on("click", "a.wr_pagenext", function() {
            var cu = parseInt(em.children("a.curwrpage").text());
            jumpPage(cu+ 1);
            em.empty()
            init(size, cu + 1);
            cb(cu + 1)
        });
        em.on("click", "a.wr_pagepre", function() {
            var cu = parseInt(em.children("a.curwrpage").text());
            em.empty()
            jumpPage(cu+ 1);
            init(size, cu - 1);
            cb(cu - 1)
        });
    }
})(jQuery, window)
