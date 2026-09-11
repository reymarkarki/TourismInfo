const HERO_IMAGE = '';

const GALLERY_DATA = [
    { barangay: "Pulong Sampalok", spot: "Carribean Resort", src: "https://i.ytimg.com/vi/Yj9p-zYescc/maxresdefault.jpg" },
    { barangay: "Pulong Sampalok", spot: "Arko, DRT", src: "https://i.ytimg.com/vi/MZWZ-pQmzGw/maxresdefault.jpg" },
    { barangay: "Pulong Sampalok", spot: "Mama Piat", src: "https://i.ytimg.com/vi/yo_wubjH1UI/maxresdefault.jpg" },
    { barangay: "Pulong Sampalok", spot: "Kape Piat", src: "https://i.ytimg.com/vi/QZcJ9ymmqRY/maxresdefault.jpg" },
    { barangay: "Pulong Sampalok", spot: "Abo Spring", src: "https://i.ytimg.com/vi/dWgRt9s2DiY/maxresdefault.jpg" },
    { barangay: "Camachin", spot: "Candle Monument", src: "https://scontent.fmnl4-5.fna.fbcdn.net/v/t39.30808-6/763684857_1475524217955107_2975815000551628723_n.jpg?stp=dst-jpg_tt6&cstp=mx1640x924&ctp=s1640x924&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE9a5_9ocJ6tn8l4I8C-l3okk50l0e94eeSTnSXR73h53TmUX2VjrYDz-CT0akxCvRmNDPr_yGT2pirFZ8iW7dv&_nc_ohc=03O8TDG5I64Q7kNvwGR1amW&_nc_oc=AdqVzOFKFM6JCRT12FsGu4bPIMC5kDE_hqfTA4sQrcM2CK5QZsvOmn5nMIUO4X2nTQP-mnKNXKnzmSKo4nO_RzMs&_nc_zt=23&_nc_ht=scontent.fmnl4-5.fna&_nc_gid=X-gbHRA5Tm6B5x9haNrC2Q&_nc_ss=7b2a8&oh=00_AQLuBjBDvmuAWCwHNwUKw-fN04YiaVFaihqZDOYlIXkt9Q&oe=6AA95CFF" },
    { barangay: "Kalawakan", spot: "Sakbod Falls", src: "https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.6435-9/139340834_162174625681869_6721321720128755992_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x608&ctp=s1080x608&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEuMY8CVEaaJono6E4fHSQN4Eyh3_PXY2LgTKHf89djYseiL_MzLw6IE0lz1CHizPEKdgjm1LV0dDRpWc5yU5HA&_nc_ohc=ghVDeBfvu8EQ7kNvwHISRM9&_nc_oc=Adp5rIyoFnTynmdTKnf2L-bRuJFbSt3Z-IXo9m0n1hTHZaLDgKCGn0Idd_k2pbXIMzZc34ZnAjoQ6opfDmLp7oPU&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=Q7SqtDztMRox0D0GxcsUmg&_nc_ss=7b2a8&oh=00_AQKaSO5_t5F-O2O2vopOLR_u5H9-gAEjElYgloFskKjWXQ&oe=6ACAFFB0" },
    { barangay: "Bayabas", spot: "Puning Cave", src: "https://i.ytimg.com/vi/TkX95o4Qfo0/maxresdefault.jpg" },
    { barangay: "Kabayunan", spot: "Kabayunin View Deck", src: 'https://i.ytimg.com/vi/NeDtoFifhaY/maxresdefault.jpg' },
    { barangay: "Camachile", spot: "Mandala Water Park", src: "https://i.ytimg.com/vi/7fwYlNbrqek/maxresdefault.jpg" },
    { barangay: "Sapang Bulak", spot: "Dream Land", src: "https://i.ytimg.com/vi/XnyzKTuW6Bk/maxresdefault.jpg" },
    { barangay: "Camachin", spot: "13th Falls ", src: "https://i.ytimg.com/vi/DvBBS0hKl-w/maxresdefault.jpg" },
    { barangay: "Camachin", spot: "Iket River Resort", src: "https://blogger.googleusercontent.com/img/a/AVvXsEipC7uAwqUMnBB0UtZVN46kH1zrefSgLah3D0xa9ZYp8bFw2v-S0dPKnot44rP3jYB7EoZ150DLmtt0lBWFsXdlQcR9dF1NMGaUXBU3tw9BHnZSvctUf75RMq_IPB7_jIb9EjQVin_EcupumRd8oHxJCPHwDx42vR6oRNbDOGfe-JEgs82q9_6ICdLqhA=w640-h360" },
    { barangay: "Camachin", spot: "Mojako's Hills", src: "https://i.ytimg.com/vi/Dk43RWqMuSs/maxresdefault.jpg" },
    { barangay: "Talbak", spot: "143 Steps", src: "https://i.ytimg.com/vi/L9BXRR8A6Lo/maxresdefault.jpg" },
    { barangay: "Sapang Bulac", spot: "Mountain View", src: "https://i.ytimg.com/vi/6w1A-W-A5dQ/maxresdefault.jpg" },
    { barangay: "Camachile", spot: "Secret Falls", src: "https://i.ytimg.com/vi/GaPwvEbljnM/maxresdefault.jpg"},
    { barangay: "Sapang Bulac", spot: "Villa Andrea Resort", src: "https://i.ytimg.com/vi/9YDbJbdZzzQ/maxresdefault.jpg" },
    { barangay: "Talbak", spot: "Verdibia Falls", src: "https://i.ytimg.com/vi/4gpAh2J1nns/maxresdefault.jpg" },
];

const SPOTS = [
    /*Falls*/
    {
        id: 'secret-falls',
        name: 'Secret Falls',
        category: 'Falls',
        barangay: 'Camachile',
        img: 'https://i.ytimg.com/vi/GaPwvEbljnM/maxresdefault.jpg',
        images: ['https://i.ytimg.com/vi/GaPwvEbljnM/maxresdefault.jpg',
                 'https://i.ytimg.com/vi/UjChstzfV-g/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFEgZSg9MA8=&rs=AOn4CLBwvFyAjdfYEiN_YCAcX3OO6SPl9Q',
                'https://i.ytimg.com/vi/Gf8rypl9-BE/maxresdefault.jpg',
                'https://scontent.fmnl4-5.fna.fbcdn.net/v/t39.30808-6/557754727_122186826620353051_4210218743101126036_n.jpg?stp=dst-jpegr_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH4YrrEtuRYzyoLI2AfpZnguR1dejWQmli5HV16NZCaWMaMy84XRBOAoeZUQjilJ8sXuc87pc7CLxGGZmBNzHPL&_nc_ohc=J3vVtKgCroEQ7kNvwFTemY1&_nc_oc=AdqlJktMPKPp8m5WI8AsuojhoYt_xu3yq_DY-7aYkJmrin7JHwZ8_8rdfhImuZYEFdbWa84i5zqASzYZPLB7sqXO&_nc_zt=23&se=-1&_nc_ht=scontent.fmnl4-5.fna&_nc_gid=trerWizzbwfax_EmvpIDWw&_nc_ss=7b2a8&oh=00_AQLQODB_qIj7HAAgelIjZoQaKxJLRwaBQVknzFZgHyJm4A&oe=6AA970E9',
                 'https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/482221183_3497103970425790_4097319415870978428_n.jpg?stp=dst-jpg_tt6&cstp=mx720x960&ctp=s720x960&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGpzp5JjfXvhLr7fz7nSGgMe6Lkgg4gxV97ouSCDiDFXyn2T-qgtPUwnD61BAlzN-ieAEt5Gm1k8Ss5q-A5kDs9&_nc_ohc=NMim4Y-jYgEQ7kNvwE_VEVL&_nc_oc=AdozIWDB6VKzv0iWBMwpZXWMoa0smp0U5hoWiJLK3f6CRknBUaK0yYrZbWDVinvHXtesh99wVGeERyWH9-zLG8hw&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=u3v8PQT_X5JFi14cuRXeFg&_nc_ss=7b2a8&oh=00_AQIT42M4O96AUBtd7PLiGQKytmrnHv-a6fQ_wlyUt4yIsw&oe=6AA972BD',
                'https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/482199806_3493611780775009_967447565313552932_n.jpg?stp=dst-jpg_tt6&cstp=mx720x960&ctp=s720x960&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE9B6MotDeko4hB2x8Bva20dVSr1KRUQQR1VKvUpFRBBNpe2F1eiKVSzNZ7qGHbDU4D4nf-NqKmrGLohSnqoAPL&_nc_ohc=Gbm9MamIjK4Q7kNvwFO0jhY&_nc_oc=AdonppMo4p4pCYaY2ocAuOYC8rBh0yoFH2HtgtQ3xTZXJltSObsztBFDjqC_8Y46JG9TUR_I0CrxobW0ctwky6GF&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=PBLTFLKXiCA1r600O7d3Rg&_nc_ss=7b2a8&oh=00_AQKLKaevriXWebn_7S_Lfl28H3Hf53CTQMa6lDbKXefVrw&oe=6AA99719'],
        shortDesc: 'A hidden waterfall wrapped in dense greenery, reached by a short, shaded trek.',
        fullDesc: 'A hidden waterfall wrapped in dense greenery — one of Bulacan\'s best-kept secrets. The trek in is short and shaded, and the pool at the bottom is calm enough for a long swim.',
        location: 'Barangay Camachile, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱30 – ₱50 per person',
        parkingFee: 'None',
        hours: '7:00 AM – 4:00 PM daily',
        activities: ['Swimming', 'Photography', 'Trekking'],
        howToGetThere: 'Register at the Camachile barangay hall, then a short guided trek to the falls.',
        contact: 'Camachile Barangay Tourism Desk',
        facebook: 'https://www.facebook.com/people/Secret-FALLS/100063681378480/',
        distanceFromTownCenter: '~9 km from the Municipal Hall',
        mapQuery: 'Secret Falls, Camachile, Doña Remedios Trinidad, Bulacan'
  },
    /*Resorts */
    {
        id: 'caribbean-waves',
        name: 'Caribbean Waves Resort',
        category: 'Resorts',
        barangay: 'Pulong Sampalok',
        img: 'https://i.ytimg.com/vi/Yj9p-zYescc/maxresdefault.jpg',
        images:[
            'https://i.ytimg.com/vi/Yj9p-zYescc/maxresdefault.jpg',
            'https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/481463927_122205574124044831_5018563083160637205_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFbHZdwR_ZEvJCxaTtzaiN5sI0xJ4tbL3mwjTEni1svYIrcT50qlrxXQ44_C6HsriOe0nDBSua8MLfjvVwNZ3r&_nc_ohc=8Guceik82X8Q7kNvwHlYYNv&_nc_oc=Adp5yrpgPgzYzPHz8ggNUTArDARVi-vOY_BDfB0kPCRoQeTP3dq9-di94Nh22wgg67BrMFnJF98t1lLwPPAvzxJA&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=vEbKJnG6-AkPv5kqNSiRZg&_nc_ss=7b2a8&oh=00_AQKW1_j66MJDtbyfPXVPiR-IrRIkOahtznBbppbi054lxQ&oe=6AA970BE',
            'https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/481675388_122205574034044831_119213585937043747_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHUKRuy-QNldNzCyR2LlHknLmP8LeTzSpcuY_wt5PNKl8Y2VrDZQBGvAPQsVMpX2wRqR4A0eqIhuw_Wyn8hPSdG&_nc_ohc=0ZirZ-75kxwQ7kNvwHAMPXw&_nc_oc=AdpP-ffO6e2KOUSSumuLZAW21e9bvFYxHdTYDMDG1a0cj8bOwcgUTxPtmbOiuqXoyufLgZbHMq7fYkslJ4MSzhRN&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=7-SxqumL5AHsRzcBu5DWTA&_nc_ss=7b2a8&oh=00_AQIkRlIV3kpA6lg1TpT7JU2aKwLZy4lH8AwuEMNjRdLvPw&oe=6AA974AE',
            'https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/481970604_122205574400044831_3043293785949202865_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHQiAoSg-1AV2PET4BVU84vQENYoClz8Y9AQ1igKXPxj25e_itqmXVko6Zd3OBhDMOTPFgSFdHDt2TpaWFplUEv&_nc_ohc=klNATjQ_ZjsQ7kNvwGK58-b&_nc_oc=AdpZ-EwES_ux2YAJKmVKtJKCQClevZfWvyRQO7XcJ9bO3jpyBTP6yDetnOHSgJANxXQvDL2nyYuPEWhUEhb87cwH&_nc_zt=23&_nc_ht=scontent.fmnl4-7.fna&_nc_gid=Lzr5l2dxpk-jvS0wL3c6QA&_nc_ss=7b2a8&oh=00_AQKKFfflofIlK-OyZVfK4g5b4_fxQqjcHbOaUI362OzUNg&oe=6AA97282',
            'https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/483368194_122205574556044831_7205186925773257065_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFBFepdhkwXHThfjN3C8kvwqFXLyb8QB-ioVcvJvxAH6Et-bZcDV--7QqzrRfeLgD03X4KX4jJ8Pa0w9GcBxmlP&_nc_ohc=KczlMKD19nkQ7kNvwEDJWGa&_nc_oc=Ado5TbDK5bAYxMmFt6IkBIrW-j84twlS1kzJuQwXR1zRGiKKNRUrDjyt-xQJnIb7ZHKQIjK7wZx_eetxlswah657&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=cZ7b9racbzFVvrdMhTDBBA&_nc_ss=7b2a8&oh=00_AQKpuj5rxOAhJYYtIHKYvYxHinK-2I-YskPwOhttipuV9A&oe=6AA991A8',
            'https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/481711491_122205573986044831_4304413551238100635_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHP_Iwwtvl24sSlNCnqh_RSPeHTrjOTe_o94dOuM5N7-tel4vOUo6CBieoE1dFC26b3woM-vwwc5iUXAg3Xuf4M&_nc_ohc=AEgP0jqg2iAQ7kNvwHfEsQw&_nc_oc=AdpBT_E5fPKovThczG9FY7I-LjYHcwFRFVkKF4vAHhQnN_tcZTtD2dggofJzxPykP_5blYAdBmTEa8rWLTqL6OE0&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=cNFH-Ias4YRO0YGZjEpXPA&_nc_ss=7b2a8&oh=00_AQIWNBYWoEUKirxbyUffJ9kfNxkEB-bfKpJ0mJMDUTaibw&oe=6AA98D08',
            'https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/481505163_122205573944044831_5015344150084140360_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFJYSbjDxnj8SL9jC4yq7z6KAZxRXw3R7IoBnFFfDdHsv4NqHIfKSvhu2BFxUFZonuior165TsYEvQxzyYrRcbG&_nc_ohc=DGQ5Ja4vSaQQ7kNvwETsmWR&_nc_oc=AdouiOY2I1_mZa1UOFDImCo4Q2yGHaK64VTaq4QwPnpfW92t4wU3vQWOQY6I6FNcoCcJJeRbip4-PT8FmKLXRmii&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=vTXTH4pxxgeaP_AxYDYhqA&_nc_ss=7b2a8&oh=00_AQLmVyVADTwHANByz-7kipWCWa1IoHM1flKZwlDY93lxAg&oe=6AA977EC',
        ],
        shortDesc: 'A family-friendly swimming pool resort near the town center.',
        fullDesc: 'A relaxing swimming pool destination close to the Municipal Hall, offering a straightforward day out for families and groups who want to cool off without a trek.',
        location: 'Barangay Pulong Sampalok, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱200 – ₱250 per person',
        parkingFee: '₱30 per vehicle',
        hours: '6:00 AM – 6:00 PM daily',
        activities: ['Swimming', 'Family outing'],
        howToGetThere: 'Roughly 2 km from the town center; accessible by tricycle or private vehicle.',
        contact: 'Caribbean Waves Resort front desk',
        facebook: 'https://www.facebook.com/CaribbeanResortBulacan',
        distanceFromTownCenter: '~2 km from the Municipal Hall',
        mapQuery: 'Caribbean Waves Resort, Pulong Sampaloc, Doña Remedios Trinidad, Bulacan'
  },
   
    {
        id: 'verdivia-falls',
        name: 'Verdivia Falls',
        category: 'Falls',
        barangay: 'Talbak',
        img: 'https://i.ytimg.com/vi/jC5HC7d8RQE/maxresdefault.jpg',
        images:[
            'https://i.ytimg.com/vi/jC5HC7d8RQE/maxresdefault.jpg',
            'https://scontent.fmnl4-8.fna.fbcdn.net/v/t39.30808-6/480589420_1172963927958146_293067524908238993_n.jpg?stp=dst-jpg_tt6&cstp=mx925x613&ctp=s925x613&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHUX-BKHRM5dEjv18R2wlf5zYNkI2X7-9HNg2QjZfv70QooZ9xav1D0h-L0ejcsGJPK0Cqg4T2wStbG8gjgA05N&_nc_ohc=G1wW-PsH8MUQ7kNvwExaxZo&_nc_oc=AdqpKkEp2rijY7wKRJ3tqLOmvJcXLyUABdlmi1uUI5knhI2gTpZYawC8wd5VSsoXXlBYfQOkIx8Uoloixym8aDKe&_nc_zt=23&_nc_ht=scontent.fmnl4-8.fna&_nc_gid=dCuax_qUaf5WpJ-kpAEWkQ&_nc_ss=7b2a8&oh=00_AQLYp5xPF3sR_NG4KzCr8VrIIMLjimua9rDA7I07E2cJbw&oe=6AA990B5',
            'https://scontent.fmnl4-5.fna.fbcdn.net/v/t39.30808-6/301436967_557926922795186_6599966175807417983_n.jpg?stp=dst-jpg_tt6&cstp=mx841x841&ctp=s841x841&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEL3fa_W6A9dI3L7JedPAcs22QztS-r7CjbZDO1L6vsKNHelhFO41iOTwSUtRtuhP9Id9om8fzypq334pBruDTp&_nc_ohc=ug6a_oBC8egQ7kNvwE4h2MI&_nc_oc=AdpVWT-jq1PEDaH30vPNHS9MdD-7F7OpJEazYfH_2MeOSWQN8ep4nSHoX06KyTlZ_QSKZYQGeDiTZV3UxPPBQ4AK&_nc_zt=23&_nc_ht=scontent.fmnl4-5.fna&_nc_gid=pxz4xv4h1cjTFphCAzVJcg&_nc_ss=7b2a8&oh=00_AQJj3zsE2iqHa8gROTzc8ikBPWzwTBS2VACyh58I8iWWqg&oe=6AA99377',
            'https://bulacan.gov.ph/wp-content/uploads/2020/01/virdivia-falls-DRT-scaled.jpg',
            'https://i.ytimg.com/vi/GkAsc7ocOYA/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZSg7MA8=&rs=AOn4CLDDVyOwQpo9YGnIGtl4Lb-I6DoBVg',
        ],
        shortDesc: 'DRT\'s adventure waterfall — cliff jumps, a wide pool, and bamboo rafts.',
        fullDesc: 'Named for its green ("verde") waters, Verdivia is DRT\'s adventure waterfall — cliff jumps for the thrill-seekers, a wide swimming pool for everyone else, and bamboo rafts drifting the calmer stretch downstream.',
        location: 'Barangay Talbak, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱10 per person, plus ₱200 per group for a guide',
        parkingFee: '₱30 per vehicle',
        hours: '7:00 AM – 4:00 PM daily',
        activities: ['Cliff diving', 'Bamboo rafting', 'Swimming'],
        howToGetThere: 'Register in Talbak barangay hall, then a short walk to the falls.',
        contact: 'Talbak Barangay Tourism Desk',
        facebook:'https://www.facebook.com/VerdiviaFalls/',
        distanceFromTownCenter: '~14 km from the Municipal Hall',
        mapQuery: 'Verdivia Falls, Talbak, Doña Remedios Trinidad, Bulacan'
  },

    /*Cave*/
    




    /*Mountains*/
    {
        id: 'tila-pilon',
        name: 'Tila-Pilon Hills',
        category: 'Mountains',
        barangay: 'Kalawakan',
        img: 'https://i.pinimg.com/originals/01/5c/29/015c2971aec809532a1bca949ed07f46.jpg',
        images:[
            'https://i.pinimg.com/originals/01/5c/29/015c2971aec809532a1bca949ed07f46.jpg',
            'https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/75252898_105485417546770_8305894158308999168_n.jpg?stp=dst-jpg_tt6&cstp=mx1512x1504&ctp=s1512x1504&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHQeLDBYt6DIcg9145rfSiWIXB2iRS3EjwhcHaJFLcSPGfd-BsZojX8vc7dHaIFHQclye6YnsmmTaKpeaZ2grQ1&_nc_ohc=oP5kUWlYqsoQ7kNvwHXxsMa&_nc_oc=Adq6dxcER6DTb4WBl2-zFGXDvDczFAt3bL-bQ8J9uvCCdJomD8OtOcEgQpx1mOqrUtr5RdJkxCL7BtN9ZivwdDOh&_nc_zt=23&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=F2WRAvjNfsehkxemmtp_Pg&_nc_ss=7b2a8&oh=00_AQJqT-70NkWdUBAtESCOnF6H8WM6qexWLH0L0jVA1YVEqA&oe=6ACB2959',
            'https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.6435-9/128257833_395334135228562_4808156871401219568_n.jpg?stp=dst-jpg_tt6&cstp=mx540x298&ctp=s540x298&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeG9d7pqpY0a1BFoJdJda1ObeWHkUgNC4wR5YeRSA0LjBKiLc4MovhMEgvbey2f7MLyZdqkx6ahBa4rDzCLjSOa2&_nc_ohc=N-P4T6NTfLYQ7kNvwHE3ZRy&_nc_oc=AdrQbNXO8b5fSvGyhv273CSDBcTi_4ztG_CzT61i4soU4oSHcLlm7h4otKjOpFXkoB4WwAtkCrGheGy-9R_3Rg0Q&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=zVcch8fnW37_9KB499yzXA&_nc_ss=7b2a8&oh=00_AQIPpbtylIH5T4ne01W7sab8ZECW_zcHdoY0fZ3jD-rW1Q&oe=6ACB33F1',
            'https://www.lessandra.com.ph/assets/BlogImages/biking-trails-baliuag/tila-pilon-biking-trails-in-bulacan.jpg',
            'https://i.ytimg.com/vi/KNTOl1ncFkE/maxresdefault.jpg',
        ],
        shortDesc: 'A ridgeline viewpoint known as the "Baguio of Bulacan."',
        fullDesc: 'A cool-climate ridgeline with sweeping views over the lowlands and neighboring provinces, best reached with a barangay guide for the marked trail.',
        location: 'Barangay Kalawakan, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱50 per person',
        parkingFee: 'None',
        hours: '6:00 AM – 3:00 PM, weather permitting',
        activities: ['Hiking', 'Photography', 'Viewpoint'],
        howToGetThere: 'Register at Kalawakan barangay hall for a guided hike.',
        contact: 'Kalawakan Barangay Tourism Desk',
        facebook:'https://www.facebook.com/Tilapilonhill/',
        distanceFromTownCenter: '~18 km from the Municipal Hall',
        mapQuery: 'Tila-Pilon, Kalawakan, Doña Remedios Trinidad, Bulacan'
   },
    {
        id: 'mt.secret',
        name: 'Mount Secret',
        category: 'Mountains',
        barangay: 'Camachile, So. Arm Strong',
        img: 'https://i.ytimg.com/vi/cwxRpuvAMSI/maxresdefault.jpg',
        images:[
            'https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/487807847_696188772923571_949710593654035142_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFKe1Mc-GlbQsuVZbynZh0NYlrp4yuYj6tiWunjK5iPq7wEUCt7ii4-hqsjxTNB06p9HTKB-P0yajKP2lKEf7Kp&_nc_ohc=AJ5chBiRfwUQ7kNvwG9SVi2&_nc_oc=AdqRnw9ZkpVmh1IWz2QydHmtT0v2aVWJoTo0GtYfmoLHUksKpu4BfpufdqN3LvRQbmrGClOyletFPdBfVp9BY25w&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=-BnTTaQ_drAVNwKtu0W77g&_nc_ss=7b2a8&oh=00_AQKETX1IOi895mDT2VGDp7I2hRYe5r9diz2vmPwp8NXIrQ&oe=6AA97803',
            'https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/487544400_696188996256882_4189760780541825060_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx960x960&ctp=s960x960&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeH55N9Jq8FkgGNVKNCrMB3vIsPrtlK_U8Iiw-u2Ur9TwklUJdZ5LaeJHZb7SQ251_xvhAvD2clL5KNAVVjbxrmg&_nc_ohc=pjy59JnBEXgQ7kNvwEfPHGv&_nc_oc=Ado8LKbzmLuTpwocJRVOdQ61ji6owqzCJ1kJlQUWp-eDUbwEb3P92N3mDAteVBVB5rSfm0pQvEZ4qma7iEMV4aAD&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=yKcbX6d3C6LzW5mRvq8_Jg&_nc_ss=7b2a8&oh=00_AQI_P9lApvYqTCO-QZWZx-Wc3Z_oRWqOZvuGsnkb2uonHw&oe=6AA97DB1',
            'https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/487481004_696188812923567_6671352915984691657_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEYNU0Fvf2HUz1Q5MARQ6IOyj6YFW7o6KjKPpgVbujoqBzKkMKcVIhTlyhyfcpt81JdMDDyk-LLsuu1qaFzw3cF&_nc_ohc=g2myWjYk8DMQ7kNvwGA0YhT&_nc_oc=Adq8YpU3JKbL79yYrGiqhaw6Q12MXNyzuC0RWd9Zap46I16RdrUYfkiT2XnqJAYpByMaNhDsJEHZ-4rFTjpgMZGe&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=6isFITJ4uj53CidD_25H1A&_nc_ss=7b2a8&oh=00_AQIGV_z0d1CijbRvO0UlbH26ubqEdkahlDzJnTxfOgkkQA&oe=6AA99D5B',
            'https://hiketomountains.com/wp-content/uploads/2021/12/Mt-Secret-18.jpg',
            'https://hiketomountains.com/wp-content/uploads/2022/02/Mt-Secret-26.jpg',
        ],
        shortDesc: 'Mt. Secret — Bulacan’s breezy peak with Sierra Madre views."',
        fullDesc: 'A breezy ridgeline rising 612 meters above sea level, Mt. Corona rewards hikers with sweeping views of the Sierra Madre and Bulacan lowlands. Best explored with a local barangay guide, its marked trail offers both easy climbs for beginners and a tougher traverse toward the Sumacbao River for adventurers.',
        location: 'So. Arms Strong, Barangay Camachile, Doña Remedios Trinidad, Bulacan',
        entranceFee: 'no official fee',
        parkingFee: 'None',
        tourguide: '₱300 per guide',
        hours: '6:00 AM – 3:00 PM, weather permitting',
        activities: ['Hiking', 'Photography', 'Viewpoint'],
        howToGetThere: 'Near in Malangan Cave',
        contact: 'Camachile Barangay Tourism Desk',
        
        distanceFromTownCenter: '~4.9 km from the Municipal Hall',
        mapQuery: 'MT. Corona, Kalawakan, Doña Remedios Trinidad, Bulacan'
   },
    {
        id: 'kabayunan',
        name: 'Kabayuan View Deck',
        category: 'Mountains',
        barangay: 'Kabayunan',
        img: 'https://i.ytimg.com/vi/owHO-F3E-kk/maxresdefault.jpg',
        images:[
            '',
            '',
            '',
            '',
        ],
        shortDesc: 'Kabayunan — Bulacan’s breezy peak with Sierra Madre views."',
        fullDesc: 'A breezy ridgeline rising 612 meters above sea level, Mt. Corona rewards hikers with sweeping views of the Sierra Madre and Bulacan lowlands. Best explored with a local barangay guide, its marked trail offers both easy climbs for beginners and a tougher traverse toward the Sumacbao River for adventurers.',
        location: 'Barangay Kabayunan, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱50 per person',
        parkingFee: 'None',
        tourguide: 'none',
        hours: '6:00 AM – 3:00 PM, weather permitting',
        activities: [ 'Photography', 'Viewpoint'],
        howToGetThere: 'Register at Kalawakan barangay hall for a guided hike.',
        contact: ['Kalawakan Barangay Tourism Desk', '09-123456789'],
        facebook:'https://www.facebook.com/kabayunanview/',
        distanceFromTownCenter: '~50.1 km from the Municipal Hall',
        mapQuery: 'Kabayunan View Deck, Kabayunan, Doña Remedios Trinidad, Bulacan'
   },
    {
        id: 'mt.lawad',
        name: 'MT. Lawad',
        category: 'Mountains',
        barangay: 'Kalawakan',
        images:[
            '',
            '',
            '',
            '',
        ],
        img: 'https://i.ytimg.com/vi/q7C5VhAAjj8/maxresdefault.jpg',
        shortDesc: 'Mt. Lawad — Sierra Madre’s hidden trail.',
        fullDesc: 'Mt. Lawad in DRT, Bulacan is a cool-climate forest peak with sweeping Sierra Madre views and frontier-style trails. Best explored with a barangay guide, it’s perfect for hikers seeking a raw, less-crowded adventure.',
        location: 'Barangay Kalawakan, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱50 per person',
        parkingFee: 'None',
        tourguide: '₱300-₱500 per guide',
        hours: '6:00 AM – 3:00 PM, weather permitting',
        activities: ['Hiking', 'Photography', 'Viewpoint'],
        howToGetThere: 'Register at Kalawakan barangay hall for a guided hike.',
        contact: 'Kalawakan Barangay Tourism Desk',
        facebook: 'https://www.facebook.com/mtlawadofficial/',
        distanceFromTownCenter: '~28.6 km from the Municipal Hall',
        mapQuery: 'MT. Lawad, Kalawakan, Doña Remedios Trinidad, Bulacan'
   },
    {
        id: 'mt. brigino',
        name: 'MT. Brigino',
        category: 'Mountains',
        barangay: 'Sapang Bulac',
        img: 'https://i.ytimg.com/vi/XOW3nSD4ERc/maxresdefault.jpg',
        images:[
            '',
            '',
            '',
            '',
        ],
        shortDesc: 'Mt. Brigino — Bulacan’s serene summit.',
        fullDesc: 'Mt. Brigino is a cool-climate peak in Doña Remedios Trinidad, offering forested trails and panoramic views of the Sierra Madre ridges. Best explored with a local barangay guide, it’s a serene alternative for hikers seeking a quieter, less-crowded climb.',
        location: 'Barangay Kalawakan, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱50 per person',
        parkingFee: 'None',
        tourguide: 'none',
        hours: '6:00 AM – 3:00 PM, weather permitting',
        activities: ['Hiking', 'Photography', 'Viewpoint'],
        howToGetThere: 'Register at Kalawakan barangay hall for a guided hike.',
        contact: 'Kalawakan Barangay Tourism Desk',
        facebook: 'https://www.facebook.com/MountBrigino/',
        distanceFromTownCenter: '~9.8 km from the Municipal Hall',
        mapQuery: 'MT. Brigino, Sapang Bulac, Doña Remedios Trinidad, Bulacan'
   },
    {
        id: 'kalinaw',
        name: 'Kalinaw Campsite',
        category: 'Camps',
        images:[
            '',
            '',
            '',
            '',
        ],
        barangay: 'Kalawakan',
        img: 'https://tse2.mm.bing.net/th/id/OIP.gtQv2aQJza16sWtXBwYkFAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        shortDesc: 'Kalinaw Campsite — Find peace in the Sierra Madre.',
        fullDesc: 'Kalinaw Campsite is a peaceful mountain retreat in Doña Remedios Trinidad, surrounded by pine trees and cool Sierra Madre breezes. It’s a nature‑lover’s haven for camping, stargazing, and unwinding in a rustic, frontier setting.',
        location: 'Barangay Kalawakan, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱50 per person',
        parkingFee: 'None',
        tourguide: 'None',
        hours: '6:00 AM – 3:00 PM, weather permitting',
        activities: ['Campsite', 'Viewpoint'],
        howToGetThere: 'Register at Kalawakan barangay hall for a guided hike.',
        contact: 'Kalawakan Barangay Tourism Desk',
        facebook: 'https://www.facebook.com/KalinawsaKalawakanCampsiteDRTBulacan/',
        distanceFromTownCenter: '~26.8 km from the Municipal Hall',
        mapQuery: 'Space Camp, Kalawakan, Doña Remedios Trinidad, Bulacan'
   },
    {
      id: 'puning-cave',
      name: 'Puning Cave',
      category: 'Caves',
      barangay: 'Bayabas',
      img:'https://i.ytimg.com/vi/TkX95o4Qfo0/maxresdefault.jpg',
      images:[
            '',
            '',
            '',
            '',
        ],
      shortDesc: 'One of the most-visited caves in Central Luzon, known for its bat colonies and mineral formations.',
      fullDesc: 'A limestone cave at Sitio Tumana featuring dripstone and flowstone formations, home to an estimated population of thousands of fruit and insect bats. The site is ecologically sensitive and typically only open for guided visits during the dry season.',
      location: 'Barangay Bayabas, Doña Remedios Trinidad, Bulacan',
      entranceFee: '₱30 – ₱50 per person (VERIFY — general DRT cave/falls range)',
      parkingFee: 'VERIFY with barangay tourism desk',
      hours: 'Dry season only, daytime guided visits — VERIFY exact schedule',
      activities: ['Spelunking', 'Guided Tour', 'Photography'],
      howToGetThere: 'Register at the Bayabas barangay hall for a guide before entering the cave.',
      contact: 'Bayabas Barangay Tourism Desk',
      facebook: 'https://www.facebook.com/profile.php/?id=100090761324798',
      distanceFromTownCenter: '~5.1 km from the Municipal Hall',
      mapQuery: 'Puning Cave, Bayabas, Doña Remedios Trinidad, Bulacan'
    },


    
     {
        id: 'talon-pari',
        name: 'Talon Pari Falls',
        category: 'Falls',
        barangay: 'Kalawakan',
        img: 'https://i.ytimg.com/vi/DwEuY8g95FI/maxresdefault.jpg',
         images:[
            '',
            '',
            '',
            '',
        ],
        shortDesc: 'A quieter waterfall with clear pools and a scenic mountain backdrop.',
        fullDesc: 'A hidden natural gem — a waterfall surrounded by lush forest, reached by a short hike or motorbike. Known for its clear pools, relaxing atmosphere, and mountain backdrop.',
        location: 'Barangay Kalawakan, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱30 – ₱50 per person',
        parkingFee: 'None',
        hours: '7:00 AM – 4:00 PM daily',
        activities: ['Swimming', 'Photography'],
        howToGetThere: 'Ask your barangay guide to include it alongside a nearby falls trip.',
        contact: 'Kalawakan Barangay Tourism Desk',
        facebook: 'https://www.facebook.com/people/TALON-PARI-FALLS/61564140403589/',
        distanceFromTownCenter: '~16 km from the Municipal Hall',
        mapQuery: 'Talon Pari Falls, Kalawakan, Doña Remedios Trinidad, Bulacan'
  },



    {
        id: 'Mountainview',
        name: 'Mountainview Resort',
        category: 'Resorts',
        barangay: 'Sapang Bulac',
        img: 'https://i.ytimg.com/vi/6w1A-W-A5dQ/maxresdefault.jpg',
        images:[
            '',
            '',
            '',
            '',
        ],
        shortDesc: 'A family-friendly swimming pool.',
        fullDesc: 'A relaxing swimming pool destination close to the Mt. Brigino, offering a straightforward day out for families and groups who want to cool off without a trek.',
        location: 'Barangay Sapang Bulac, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱200 – ₱250 per person',
        parkingFee: '₱30 per vehicle',
        hours: '6:00 AM – 6:00 PM daily',
        activities: ['Swimming', 'Family outing'],
        howToGetThere: 'Roughly 7 km from the town center; accessible by tricycle or private vehicle.',
        contact: 'Mountain View Resort front desk',
        facebook: 'https://www.facebook.com/Mountainfarm/',
        distanceFromTownCenter: '~6.5km from the Municipal Hall',
        mapQuery: 'MOUNTAINVIEW RESORT, Sapang Bulac, Dona Remedios Trinidad, Bulacan'
  }
];

/*
   HOW TO GET THERE
*/
const ROUTE_STEPS = [
    {
        t: 'From Manila',
        d: 'Roughly 2–3 hours by car via NLEX, exiting toward San Miguel, then continuing on to DRT along the Eastern Bulacan Road.'
    },
    {
        t: 'By public transport',
        d: 'Take a bus bound for San Miguel, Bulacan, then transfer to a jeepney or tricycle heading into DRT proper or your target barangay.'
    },
    {
        t: 'By private vehicle',
        d: 'NLEX straight through to the Eastern Bulacan Road, with paved sections into Sapang Bulak and Camachile.'
    },
    {
        t: 'Once in DRT',
        d: 'Register at the barangay hall nearest your destination — this is also where you arrange a local guide.'
    }
];

/*
   FEES & INFORMATION
*/
const INFO_CARDS = [
    {
        t: 'Entrance fees',
        d: 'Typically ₱30–₱250 per attraction, paid at the barangay hall or resort entrance — bring small bills.',
        ic: 'ticket'
    },
    {
        t: 'Parking fees',
        d: 'Where available, parking runs ₱20–₱30 per vehicle at the jump-off point. Some spots have no vehicle access at all.',
        ic: 'car'
    },
    {
        t: 'Guide fees',
        d: 'Falls and caves generally require a local guide, ₱200–₱900 shared per group depending on the trail.',
        ic: 'guide'
    },
    {
        t: 'Opening hours',
        d: 'Most spots welcome visitors from early morning until mid-afternoon — plan to register by 7–8 AM.',
        ic: 'clock'
    },
    {
        t: 'Best time to visit',
        d: 'November to February, when cooler, drier weather makes trails and river crossings easier.',
        ic: 'sun'
    },
    {
        t: 'What to bring',
        d: 'Swimwear, a dry bag, hiking shoes with grip, sun protection, and cash for guides and entrance fees.',
        ic: 'bag'
    }
];
const RULES = [
  'Register with the barangay tourism desk before any trek or cave visit.',
  'Always go with a licensed local guide — several trails and cave systems are guided-only.',
  'Pack out everything you bring in; there are no waste bins at most falls and trails.',
  'Avoid trekking or river crossings during heavy rain — trails and rivers can rise quickly.',
  'Bring cash; most barangays and guides do not accept cards.',
  'Respect barangay curfews and closing times listed for each spot.'
];
/* ============================================================
   CONTACT
============================================================ */
const CONTACT_CARDS = [
    {
        label: 'Municipal Tourism Office',
        value: 'Municipal Hall, Pulong Sampalok, Doña Remedios Trinidad, Bulacan'
    },
    {
        label: 'Office hours',
        value: 'Monday – Friday, 8:00 AM – 5:00 PM'
    },
    {
        label: 'Trek registration',
        value: 'Available at each barangay tourism desk, including weekends'
    },
    {
        label: 'Email',
        value: 'tourism.drt@fanmade.com'
    }
];
