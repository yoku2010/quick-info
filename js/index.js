$(function(){
    $("#quick_info_yogesh").quickInfo();
    $("#quick_info_ankit").quickInfo({
        img: "img/ankit-bw.jpg",
        themeColor: "Green",
        name: "Ankit Prasad",
        title: "Software Developer",
        description: "I am a tech enthusiast who can't get enough of his Moto x play. You'll usually find me typing away furiously on my keyboard while eating a packet of chips (just one packet a day, no more). If, for some strange reason, i am not writing or reading up on technology, you’ll find me listening to music on my phone or laptop while trying to ensure my hair is all spiked up. I do hope you fine chaps enjoy my resume as much as I do.",
        socialLinks: [
            {
                icon: "fa-facebook",
                href: "https://www.facebook.com/ankitprasad29/"
            },
            {
                icon: "fa-github",
                href: "http://github.com/imankitpd/"
            },
            {
                icon: "fa-graduation-cap",
                href: "http://imankitpd.github.io/myresume/"
            }
        ]
    });
});
