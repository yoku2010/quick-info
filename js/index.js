$(function(){
    $("#quick_info_yogesh").quickInfo();
    $("#quick_info_ankit").quickInfo({
        img: "img/ankit-bw.jpg",
        themeColor: "Green",
        name: "Ankit Prasad",
        title: " Software Developer",
        description: "I am a tech enthusiast who can't get enough of his Moto x play. You'll usually find me typing away furiously on my keyboard while eating a packet of chips (just one packet a day, no more).",
        socialLinks: [
            {
                icon: "fa-facebook",
                href: "https://www.facebook.com/ankitprasad29/"
            },
            {
                icon: "fa-linkedin",
                href: "https://www.linkedin.com/in/ankit-prasad-4052172b"
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
    $("#quick_info_harish").quickInfo({
        img: "img/harish-bw.jpg",
        themeColor: "Blue",
        name: "Harish Sharma",
        title: " Network Engineer",
        description: "\"patience, persistence and perspiration make an unbeatable combination for success.\"",
        socialLinks: [
            {
                icon: "fa-facebook",
                href: "https://www.facebook.com/profile.php?id=100003743379637"
            },
            {
              icon: "fa-linkedin",
              href: "https://www.linkedin.com/in/harish-kumar-49b4b9b2"
            },
            {
                icon: "fa-github",
                href: "https://github.com/harishsha/"
            },
            {
                icon: "fa-graduation-cap",
                href: "http://harishsha.github.io/"
            }
        ]
    });
});
