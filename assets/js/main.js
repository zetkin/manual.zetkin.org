window.onload = function() {
    var i;
    var selectedItem = $('.toc-menu .selected');

    if (selectedItem) {
        var headers = $('.content h2, .content h3, .content h4');
        var toc = $(document.createElement('ul'));
        toc.addClass('toc');

        headers.each(function() {
            var h = $(this);
            var level = parseInt(h.prop('tagName').substr(1, 1)) - 1;

            var a = $(document.createElement('a'));
            a.attr('href', '#' + h.attr('id'));
            a.append(h.contents().clone());

            var item = $(document.createElement('li'));
            item.addClass('toc-level' + level);
            item.append(a);

            toc.append(item);
        });

        if (headers.length > 1) {
            selectedItem.find('a').first().after(toc);
        }
    }

    $('a[href^="#"]').each(function() {
        var a = $(this);
        var id = a.attr('href');
        var h = $(id);

        a.on('click', function() {
            var target = h.offset().top;
            var current = $('body').prop('scrollTop');
            var dur = Math.abs(target - current) * 0.3;
            $('html, body').animate({ scrollTop: target }, dur);

            return false;
        });
    });
};
