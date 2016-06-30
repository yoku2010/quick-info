"use strict";
/**
 * @description: To create a quick info box for your profile.
 * @dependency: jquery1.10.x, bootstrap
 * @verion: 0.1
 * @date: 30-Jun-2016
 */
(function ($) {
    $.fn.extend({
        quickInfo: function (settings) {
            settings = $.extend({
                img: "img/yogesh-bw.jpg",
                themeColor: "Red",  // Red, Blue-Grey, Pink, Purple, Deep-Purple, Indigo, Blue, Light-Blue, Cyan, Teal, Green, Light-Green, Lime, Yellow, Amber, Orange, Deep-Orange, Brown, Grey, Blue-Grey
                name: "Yogesh Kumar",
                title: " Lead Engineer",
                description: "I love programming, singing, making algorithms and cooking. I am good at Python and JavaScript development. Enjoy helping others and learn more. Enthusiast and Passionate about pushing front end development to the next level. Ability to work independently and seek answers.",
                socialLinks: [
                    {
                        icon: "fa-facebook",
                        href: "http://www.facebook.com/yoku2010/"
                    },
                    {
                        icon: "fa-twitter",
                        href: "https://twitter.com/yoku_2010/"
                    },
                    {
                        icon: "fa-linkedin",
                        href: "http://www.linkedin.com/in/yoku2010/"
                    },
                    {
                        icon: "fa-graduation-cap",
                        href: "https://yoku2010.github.io/resume/"
                    }
                ]
            }, settings);

            this.each(function () {
                new $.createBox(this, settings);    // creating object for all elements
            });
            return this;
        }
    });

    $.createBox = function (me, opt) {
        var obj = {
            $me: $(me),
            func: {
                init: function () {   // initialization function
                    obj.func.infoBox(obj.$me.empty());
                },
                infoBox: function ($container) {
                    var $article = $("<article></article>").addClass("quick-info");

                    // add theme color
                    $article.addClass(opt.themeColor);

                    // add info box heading
                    obj.func.infoHead().appendTo($article);

                    // add info box content
                    obj.func.infoContent().appendTo($article);

                    // add info box button action
                    obj.func.infoBtnAction().appendTo($article);

                    // add info footer
                    obj.func.infoFooter().appendTo($article);

                    obj.$article = $article;
                    $article.appendTo($container);
                },
                infoHead: function () {
                    var $h2 = $("<h2></h2>"), $strong = $("<strong></strong>");

                    // name
                    $("<span></span>").text(opt.name).appendTo($h2);

                    // title
                    $strong.text(opt.title);
                    $strong.prepend($("<i></i>").addClass("fa fa-fw fa-star"));
                    $strong.appendTo($h2);

                    return $h2;
                },
                infoContent: function () {
                    var $div = $("<div></div>").addClass("qi-content"),
                        $imgDiv = $("<div></div>").addClass("img-container");
                    $("<img/>").addClass("img-responsive").attr("src", opt.img).appendTo($imgDiv);
                    $imgDiv.appendTo($div);

                    $("<div></div>").addClass("qi-description").html(opt.description).appendTo($div);
                    return $div;
                },
                infoBtnAction: function () {
                    var $i = $("<i></i>").addClass("fa fa-bars"), $a = $("<a></a>").addClass("qi-btn-action").click(function(e) {
                        // add button click event
                        $i.addClass("fa-spin-fast");
                        if (obj.$article.hasClass("qi-active")) {
                            obj.$article.removeClass("qi-active");
                            window.setTimeout(function() {
                                $i.removeClass("fa-arrow-left").removeClass("fa-spin-fast").addClass("fa-bars");
                            }, 800);
                        }
                        else {
                            obj.$article.addClass("qi-active");
                            window.setTimeout(function() {
                                $i.removeClass("fa-bars").removeClass("fa-spin-fast").addClass("fa-arrow-left");
                            }, 800);
                        }
                    });
                    $i.appendTo($a);
                    return $a;
                },
                infoFooter: function () {
                    var $div = $("<div></div>").addClass("qi-footer"), i = 0, ln = opt.socialLinks.length;
                    $("<h4></h4>").text("Social").appendTo($div);
                    for (;i<ln;i++) {
                        $("<a></a>").addClass("fa fa-fw").addClass(opt.socialLinks[i].icon).attr({
                            target: "_blank",
                            href: opt.socialLinks[i].href
                        }).appendTo($div);
                    }
                    return $div;
                }
            }
        };

        // calling main function
        obj.func.init();
    }
})(jQuery);
