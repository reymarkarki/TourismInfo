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
            'https://i.ytimg.com/vi/owHO-F3E-kk/maxresdefault.jpg',
           'https://i.ytimg.com/vi/NeDtoFifhaY/maxresdefault.jpg',
            'https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/518366876_778540017833258_3786254480707450494_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=j0yvNK54n6oQ7kNvwFhRciX&_nc_oc=AdpHDelyxqzRQoYLtTa0irZ-DTZUsxtlzS-aVKeYoBm1EKsSLyvdAlfMYJPyaa9TJzRK8bG2FYtLSV28CD4M3YGz&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=77KqUXKOKXNTqv-5wBTqAQ&_nc_ss=7b289&oh=00_AQJmsPeJs6iSOaKr4bbxZUHL2aJaT8SdO5jyMDjLALImxw&oe=6AA9C03D',
            'https://scontent.fmnl4-5.fna.fbcdn.net/v/t39.30808-6/515496148_778539997833260_220368399201677441_n.jpg?stp=dst-jpg_tt6&cstp=mx1170x877&ctp=s1170x877&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wfU-585CGggQ7kNvwG0NC0C&_nc_oc=AdrS8vGrMKArezdZGuOa_3N2yYvq0Mdysikos8-vKMkNmYLVSu_yuScQPnhpsBMSY0mOwBTxEySQHQ_HQCU-mFLv&_nc_zt=23&_nc_ht=scontent.fmnl4-5.fna&_nc_gid=fZBiG4gAaqnPPgYRNZerZg&_nc_ss=7b289&oh=00_AQKb2YCONkQRRPxYR9xJkmHjiZlj1mKQAlBAz2AzDVvHVg&oe=6AA9B967',
            'https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/515439815_778540061166587_4322459787078759488_n.jpg?stp=dst-jpg_tt6&cstp=mx1204x912&ctp=s1204x912&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=e-TNL6uaHV4Q7kNvwELmxR7&_nc_oc=AdpyK5roj79uvGzLA2QfOzUBUiDEy2949SIWuCfVi0LryLtC6DbuqqyDvNB-AqRTXXeldSMzb6x6oWdV_caBMp5o&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=yiCWzph-0USCkgf8iLls5A&_nc_ss=7b289&oh=00_AQJD3vtvuzvi5XLWpzACLqpkd5vSHXvAKnEPwTcZqe1RWg&oe=6AA9B8CC',
        ],
        shortDesc: 'Kabayunan — Bulacan’s breezy peak with Sierra Madre views."',
        fullDesc: 'A breezy ridgeline rising 612 meters above sea level, Mt. Corona rewards hikers with sweeping views of the Sierra Madre and Bulacan lowlands. Best explored with a local barangay guide, its marked trail offers both easy climbs for beginners and a tougher traverse toward the Sumacbao River for adventurers.',
        location: 'Barangay Kabayunan, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱50 Day Tour, ₱100 Over Night ',
        parkingFee: '₱10- ₱30',
        tourguide: 'none',
        hours: '6:00 AM –  5:00 PM, 5:00PM - 8:00 AM',
        activities: [ 'Photography', 'Viewpoint', 'Overnight Camping', ],
        howToGetThere: 'Register at Kalawakan barangay hall for a guided hike.',
        contact: "0964 192 1793",
        facebook:'https://www.facebook.com/kabayunanview/',
        distanceFromTownCenter: '~15.5 km from the Municipal Hall',
        mapQuery: 'Kabayunan View Deck, Kabayunan, Doña Remedios Trinidad, Bulacan'
   },
    {
        id: 'mt.lawad',
        name: 'MT. Lawad',
        category: 'Mountains',
        barangay: 'Kalawakan',
        images:[
            'https://i.ytimg.com/vi/q7C5VhAAjj8/maxresdefault.jpg',
            'https://i.ytimg.com/vi/mGd5x_92xxg/hqdefault.jpg',
            'https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/500253838_1171884934952746_3185567052570586007_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qccgij-MPJUQ7kNvwF2Nxc0&_nc_oc=AdrH5LYKlLef9wFw0s_i9Ymk1ZqiGAPocMx2N3-HNYz8_ze8GHTrAOaM6-eKXC2SfQoKUJ3UJK2DUQ-9HTnnslMm&_nc_zt=23&_nc_ht=scontent.fmnl4-7.fna&_nc_gid=6k3zMyE_PB9bnUNwRQku_g&_nc_ss=7b289&oh=00_AQJqdmlDrT_maOeuEPJmOXhBb3UFi2sRojAQCyZnP8dR4A&oe=6AA99CD2',
            'https://scontent.fmnl4-5.fna.fbcdn.net/v/t39.30808-6/491358144_1143117341162839_3553709682337458406_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=l6n0JCREgwAQ7kNvwG9gHf0&_nc_oc=Adp0rVP4tn47ptVhLEj3fbDi9QCvYKumsHp0MaYuC-xHUe7hHC7oJ0vSy6o1WY27Byz_Z4yp0gzJTev_XJOws4_i&_nc_zt=23&_nc_ht=scontent.fmnl4-5.fna&_nc_gid=NHz8fKIM1Q3FAopMFR332Q&_nc_ss=7b289&oh=00_AQLc10dlQtjbXUJpEHIva4BIonPbzdQkZCy9dicP02vstw&oe=6AA9B17A',
            'https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/489773629_1138732031601370_6708318731686623532_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1152&ctp=s2048x1152&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sKTUSD2A8YQQ7kNvwHDr5E1&_nc_oc=AdqZfcJLRW1iUPFn9dwGNnQlEUEQcHv95cCPjUstfYFajRUmym4ocAb4f2VMa0uRXnmXQMVawD242lz37ejiObTb&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=CqM00qyJlOp2VyrSKN0lbw&_nc_ss=7b289&oh=00_AQKQ5UbjG9MGOs2SkY0esAmoiGVdNE2HrVfP3mp70hSdLQ&oe=6AA9C441',
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
        contact: '0956 799 1913',
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
            'https://i.ytimg.com/vi/XOW3nSD4ERc/maxresdefault.jpg',
            'https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/481459768_607953438888251_4493735731291069880_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1364&ctp=s2048x1364&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGvMspHQVXatJI_Y8sk4d0HsZWSIkQegG-xlZIiRB6Ab9_9610ikxR0VTlhFpNDyOSxiz7dSncFsU4CeC8E1EDa&_nc_ohc=JGhebljA2iAQ7kNvwFG1NDM&_nc_oc=AdoVOBeP1-_TLE_ElKV0l1TaxJQ0_z6OxfjPB7yCZ5qh88edPip0_ohgGd1D-ZOY-XmoP1DvPdc7Do2uibW3a6M6&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=e3lsyc6kmoDZHP9MhAlWBw&_nc_ss=7b2a8&oh=00_AQLldWrZiaxJB4YefZGlxpGWUcCovh24KygBszhENDKvcw&oe=6AA9AA32',
            'https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/510243655_10161441103791139_6565084584685623652_n.jpg?stp=dst-jpg_tt6&cstp=mx1079x904&ctp=s1079x904&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeF6KBqzJx76mK29l70rIfXAQX1ULtXFzzlBfVQu1cXPOe9G5tEHkCwUVRDem-9-9oLSy4zE-DdyrB8f8O81CDJE&_nc_ohc=r2p5GBh4wWwQ7kNvwH32Pg6&_nc_oc=AdqVMyoYGQQ6TrrRhWFx9K97Q1nQargXLdxYBwC_JBd8GVNtYgArrW7-afC4faH13kIiVeSOz02Ai4lUKToJUHNG&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=GeLN9NKKAMgpIfQHAkKsLw&_nc_ss=7b2a8&oh=00_AQIbppn3_9oiMm3tyflyordafYS4XLfFWZhFJ1DReqVH-Q&oe=6AA9A013',
            'https://scontent.fmnl4-8.fna.fbcdn.net/v/t39.30808-6/482054515_612799601736968_1517254359673024334_n.jpg?stp=dst-jpg_tt6&cstp=mx960x640&ctp=s960x640&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEyaJsXXS10Tw_6Q40wmlY5vcHHJSrKtBq9wcclKsq0Gq1E02voG2Pr-_ec16HTos9FAG6RspRJ3ys9qMXRdIl-&_nc_ohc=f7rLHAmFFbIQ7kNvwFBtOlz&_nc_oc=AdrPDI8tUeo2InzX0_3c4fk4zd-bI5oZCE50VUsmkd3gX6qfnj7_hzhkZ0xg4_EbLrLu4c90oUdbM0eopJw28_3c&_nc_zt=23&_nc_ht=scontent.fmnl4-8.fna&_nc_gid=YJSpHfW-auuvc7eo3gv78A&_nc_ss=7b2a8&oh=00_AQIShVoXuri3tRtSJnFTYPsBrdmgrCGxNH9VrloPItacLw&oe=6AA9C14C',
            'https://scontent.fmnl4-8.fna.fbcdn.net/v/t39.30808-6/480793986_607957615554500_5595136946518644746_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1152&ctp=s2048x1152&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFMss8WA5q04R0qN6Xv_ZWCy0lmOr03ZQjLSWY6vTdlCIR1T8cnMJvx6sM67X738bV7Y2YdHU4QUT0fV_fdV20H&_nc_ohc=U8F5sZkAw7IQ7kNvwFD1ayo&_nc_oc=AdpDyTz27OKLHDqSOkOktT1Ws1lHukP47skwNia-GxlvPZaJa7_z2p1a4hNx1LwrnF5LzytowrBxUFsruSGGEpO6&_nc_zt=23&_nc_ht=scontent.fmnl4-8.fna&_nc_gid=QB3POWSVeTfW3VFf2W2kkg&_nc_ss=7b2a8&oh=00_AQK5ulcYD4l0TWrd3jAJCTv-8WOzDel918okEi-IVrcQlA&oe=6AA9AFE5',
        ],
        shortDesc: 'Mt. Brigino — Bulacan’s serene summit.',
        fullDesc: 'Mt. Brigino is a cool-climate peak in Doña Remedios Trinidad, offering forested trails and panoramic views of the Sierra Madre ridges. Best explored with a local barangay guide, it’s a serene alternative for hikers seeking a quieter, less-crowded climb.',
        location: 'Barangay Sapang Bulak, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱50 per person',
        parkingFee: 'None',
        tourguide: 'none',
        hours: '5:00 PM – 12:00 PM, Best time to visit',
        activities: ['Photography', 'Viewpoint', '360° Mountain Peak View', 'Burn Fire'],
        howToGetThere: 'Register at Kalawakan barangay hall for a guided hike.',
        contact: '0964 998 4381',
        facebook: 'https://www.facebook.com/MountBrigino/',
        distanceFromTownCenter: '~9.8 km from the Municipal Hall',
        mapQuery: 'MT. Brigino, Sapang Bulac, Doña Remedios Trinidad, Bulacan'
   },
    {
        id: 'kalinaw',
        name: 'Kalinaw Campsite',
        category: 'Camps',
        images:[
            'https://tse2.mm.bing.net/th/id/OIP.gtQv2aQJza16sWtXBwYkFAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
            'https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.99422-6/724068275_1543052697189206_3464477688605164247_n.png?stp=dst-jpg_tt6&cstp=mx2048x1152&ctp=s2048x1152&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHcZ1rW3kF6M46dZXooisgWpG3GUUhQRp2kbcZRSFBGnV18LuuHUnIWYHpxShcaNN8ul_NcPRhunHnnVVprTphi&_nc_ohc=kibTxiPp_5EQ7kNvwGqGOcR&_nc_oc=Adq8yXoCvtqfgcxT8pc-t_7qmytqMWmN5TwR9lzVLl_SxvV3A8X0CFNxJTDcIgwi1XcZQlWCTm_L9TjngtBp_iCH&_nc_zt=14&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=NaULtYMo9NaiMGuUaO9koQ&_nc_ss=7b2a8&oh=00_AQJDJj6Dk4-NE74pJnmKtIOX387el2zVxvFPGDYNjqijoQ&oe=6AA9BB2C',
            'https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/577688354_1221292850053594_5945220749437703802_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFMrqL9IKABSRB6z95VVnZoEA3oN499vV8QDeg3j329Xw6O2Er8BOBjV47fn420RfCZiY3_GyU9_hNpxjrJGPry&_nc_ohc=pSoRcWQwKjcQ7kNvwHCd7vD&_nc_oc=Ado7DT4t-uMe91k8yY-0DlVS0u9mdH_SYIRsXI6flls2AsflPdOUzYGeVw9vpN1BwHj_2g8jxe58jATpy_QLsHyk&_nc_zt=23&_nc_ht=scontent.fmnl4-7.fna&_nc_gid=APTewAiBisRkoDshSg-SuA&_nc_ss=7b2a8&oh=00_AQIM-yZhcPxeU57W2dbgDyBk-i4NAadWYr0ob7Eh3T4hoA&oe=6AA9A416',
            'https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/572018331_1212249400957939_7556270316281785372_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEVNjBW0qr0UZ9WPkYTX6UwV5Tbg08hdmVXlNuDTyF2ZSbncqqRZE8YhOKIVqboUN5AXoe58GCXAGcSOWg-em1Z&_nc_ohc=1Xxsv-1j1vwQ7kNvwG9YwTP&_nc_oc=Ado9hDf1-qBIbOMRErLk965hTccDEhAmg27xa0p7XAIL_MwxOv3naIMH507MJe77d6Y62Y1PRTaIQvg6T-7aV_Gk&_nc_zt=23&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=FE0owMy60wwq89eV1srbSw&_nc_ss=7b2a8&oh=00_AQKlC3lICZ5jm8yS_2MAnUE-RJ6UW3tq52lWmpD8Ee8mYw&oe=6AA9B1B1',
            'https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/548270548_1177386771110869_1185059047372260484_n.jpg?stp=dst-jpg_tt6&cstp=mx1920x1080&ctp=s1920x1080&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFk2VeMuK24jvEonyy06v2K1gUYpB3qYZTWBRikHephlPDzGgKcN8tx9eCn03180NEijfCoZecuB9GI0-4n1lua&_nc_ohc=v2dfuhU9IpEQ7kNvwFrAH2a&_nc_oc=AdpjCtJtVf5_fklpAKdZhCDJaIF46f1sr8_OvA3MoYa5HNXIL_2dwezzzPvvA3MFr5OWocxhdvPIaPtFeofpbAtU&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=jOpoiGPriXZX_6rmUcBbVw&_nc_ss=7b2a8&oh=00_AQKM2Ojdpcrw-QjEcmceehBgYdqBD6jcQKybsAg4Z1cO3Q&oe=6AA9BB54',
             'https://scontent.fmnl4-5.fna.fbcdn.net/v/t39.30808-6/662096826_1336300151886196_5898508476544793216_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1520&ctp=s2048x1520&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHi94HdeJuqAPlxhQSM-58rFKDJP6vG2lAUoMk_q8baUKxv0AdOQCQ5vGZTM-PCiB7WH-Fmc7C5Iw63NlzVSAkq&_nc_ohc=XZBfBSmz_T4Q7kNvwH3VIPI&_nc_oc=AdpJXv8duLP_a_dUlTrm7llE3EXQKNMUMXh714NdvPM6C8VFoS_O6OiTikLxMClP3lqYAqZGESAYSb7hsjwn28if&_nc_zt=23&_nc_ht=scontent.fmnl4-5.fna&_nc_gid=o6u5xcHf9DfI49eYD_RSLA&_nc_ss=7b2a8&oh=00_AQLoE6wwxpV_z76EY1ZoOwwkRLLRpru9vXq6bwy0ghMfmw&oe=6AA9A08D',
        ],
        barangay: 'Kalawakan',
        img: 'https://tse2.mm.bing.net/th/id/OIP.gtQv2aQJza16sWtXBwYkFAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        shortDesc: 'Kalinaw Campsite — Find peace in the Sierra Madre.',
        fullDesc: 'Kalinaw Campsite is a peaceful mountain retreat in Doña Remedios Trinidad, surrounded by pine trees and cool Sierra Madre breezes. It’s a nature‑lover’s haven for camping, stargazing, and unwinding in a rustic, frontier setting.',
        location: 'Barangay Kalawakan, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱50 per person',
        parkingFee: 'None',
        tourguide: 'None',
        hours: '6:00 PM – 3:00 AM, Night',
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
            'https://i.ytimg.com/vi/TkX95o4Qfo0/maxresdefault.jpg',
            'https://scontent.fmnl4-5.fna.fbcdn.net/v/t39.30808-6/484523545_604734659228573_306889065067473747_n.jpg?stp=dst-jpg_tt6&cstp=mx750x1000&ctp=s750x1000&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEldvuoT93c39jtq1TNL9Ri1Y-v9kgyYujVj6_2SDJi6IveQCaBKFAyS_1bQA-OFP36Pq-iwi9sfUczEs9m7iIu&_nc_ohc=-VmVgNMdoBwQ7kNvwHFbCF3&_nc_oc=AdpBde3EtB1CoS3I8-cxEEzwKte_QASIQnIMWoDAct0D54W2Z1827DfO-1oae48TvgeNoekxmOGv2TwO7UwIZYqH&_nc_zt=23&_nc_ht=scontent.fmnl4-5.fna&_nc_gid=GE5EYZnV3k0K2HcQYBG8vQ&_nc_ss=7b2a8&oh=00_AQJ03Ys7B1bJN00R1MKZokveyYRczJleR5AIM99VTfCIIA&oe=6AA9C3BE',
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzKD79862QwhlEZfR1YqqzoKTgLZhttHGG6CaLIDWlV7pcJ2R3zYAV3MoMqPEAmbdWEZKAzN8NL4QIxyzzSqVyTp1-kbW-gmSBKoX-dVZIhsqvb2ahv0pL_THM1W2PDIxqPJXS4UdXflM/s1600/punig-cave-dona-trinidad21.jpg',
            'https://tse2.mm.bing.net/th/id/OIP.oFVQ6hXy6jeHnQRJuERMsgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
            'https://i.ytimg.com/vi/gyqURxW-xWc/maxresdefault.jpg',
        ],
      shortDesc: 'One of the most-visited caves in Central Luzon, known for its bat colonies and mineral formations.',
      fullDesc: 'A limestone cave at Sitio Tumana featuring dripstone and flowstone formations, home to an estimated population of thousands of fruit and insect bats. The site is ecologically sensitive and typically only open for guided visits during the dry season.',
      location: 'Barangay Bayabas, Doña Remedios Trinidad, Bulacan',
      entranceFee: '₱30 – ₱50 per person',
      parkingFee: 'VERIFY with barangay bayabas tourism desk',
      hours: '4:00 AM - 7:00 PM, daytime guided tour',
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
             'https://i.ytimg.com/vi/DwEuY8g95FI/maxresdefault.jpg',
            'https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/756227277_122182954976471346_1856716662872000739_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHFKnqVMgTcF3Zv9qMBb_acUiYPA5EetfpSJg8DkR61-snvl8XjITmOhcUZ8Eb3aZmRVxSJcfDxTdrXfQ07XNbr&_nc_ohc=sGTSejBBzj8Q7kNvwEXPkoP&_nc_oc=AdpI_jq1TWRWCExvNnUbq7WeZHfF3QHtx6GSDkzBgBKM1hwpRusqvNhs27DKWlOkGKdqbmdQGBPcMBVcxJ6L2qXh&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=0dvIbU5vwlRHzLoev6xJEg&_nc_ss=7b2a8&oh=00_AQL4-GAVSNC5hSAtbPSwgTl2E2t8QvLEJRu9ZPFhTeN9Cg&oe=6AA9C50C',
            'https://scontent.fmnl4-8.fna.fbcdn.net/v/t39.30808-6/469893598_122124734738471346_4079260036584134603_n.jpg?stp=dst-jpg_tt6&cstp=mx716x720&ctp=s716x720&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFTzBVkpOSmy0LrJuPJgVvkmpWUqKkihv2alZSoqSKG_dD251vkcOTYg99W9Qp5KgXFtTbI14PuGh8iFTQgmwxm&_nc_ohc=M-_y-SOVoGsQ7kNvwEN1pto&_nc_oc=AdrNPQ7YuQB0xVvs4CihmCKK6oKMgC1KfjEj9Q18WFIEZis7T6P78TBJymE7fVTImTI5cVqxFJltxZLBUYg90tr0&_nc_zt=23&_nc_ht=scontent.fmnl4-8.fna&_nc_gid=5FLWPiDgCfRoNuGahTzcOQ&_nc_ss=7b2a8&oh=00_AQKilKZnJ2VYEh9M8tRojffmml7TAxS2X4FYykK6FHKDuw&oe=6AA9C927',
            'https://scontent.fmnl4-5.fna.fbcdn.net/v/t39.30808-6/506000442_122147587772471346_1123034308359440796_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFsTabccfOB87hkmHfv-byinBGZGMlT3IOcEZkYyVPcg5Huu-8d1rOxe4ud3Yru_ZOyEVNK3BAM9CUSCOy3Jvn5&_nc_ohc=1JApKEt_rXMQ7kNvwElR79s&_nc_oc=Adp-Svjy1u45wMCtjVRKbCaTjNaQlxnISQr2nbBICkMGkQ5Kqxp3QWgJM1Gej2fJMGDt5iGXpu6v2j32WupjLoiR&_nc_zt=23&_nc_ht=scontent.fmnl4-5.fna&_nc_gid=Q7edDUFQdUSgYsHq3SvQMw&_nc_ss=7b2a8&oh=00_AQL-5NLgEqoRDSpmsSd2sCrvr-1BZT3ygEL26cvl6iZ78A&oe=6AA9AD74',
            'https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/472399485_122128039436471346_422818644429656332_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x720&ctp=s1080x720&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFQ1DZ4TbTRriCXgzhKno2Ebpjek05oQW1umN6TTmhBbeqAJ4G8clUDy_aMTrRnqkfYV3oZhbpbZMwtiLBl1FF_&_nc_ohc=dC6u8L3BdlgQ7kNvwHmpb0M&_nc_oc=AdosYzlXRSrBs1Eh_zK-nwFaVFD4SRqoCK-5_nZ6KzaqtWJWud39wW1dLPuUawYOuAlJvztlT6uojxJbFfu5Clqf&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=_nHlpkSCGwzsjpXeIsSOeg&_nc_ss=7b2a8&oh=00_AQJ532FbAAhnC7E_OhJm_oVMD6qbaZo9GyXuYcXSDKtKWw&oe=6AA9B649',
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
            'https://i.ytimg.com/vi/6w1A-W-A5dQ/maxresdefault.jpg',
            'https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/481985981_1049658440533612_2513133339292043863_n.jpg?stp=dst-jpg_tt6&cstp=mx1200x628&ctp=s1200x628&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGe4Dm1uT3HX9ujdZFIbPN7cIXHGCTmQONwhccYJOZA4zuVUBXT-al6jdHWJYKwrhK--MQfFZX1PKFIY9S3G-7E&_nc_ohc=WBt2oVnsCTkQ7kNvwHVrLca&_nc_oc=Adrku_5qBBV0Y6zNk5NOwnZkKRqhDwHsvtA4u8F9xbpePo_FsS6CMe3wWyLa9wwXYkAY_EbZ4kgmTSGXKTM3G5zP&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=8Thjb4Xhh4pY_LQPhj80fw&_nc_ss=7b2a8&oh=00_AQIZR9LXPZraHJMIztAyPta5YoGCbpUnqwbShPxMcYT_ew&oe=6AA9C183',
            'https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/484297790_1055012679998188_4320102792988922910_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGK1VBwrPAmczLg5-nVt9v6ywIQ6SCRgijLAhDpIJGCKCVv2qI3rApCqOaIaptGJ7ELb2jSPvIXsG7Qg2kQ4U1h&_nc_ohc=dulKYeMVJZQQ7kNvwGqYZup&_nc_oc=Adq7GSdSc4VEsgremvJP60RwFcdsAee4WJGTsOdIt9twD3R73a3-73fD-CSmBc5by6pcOiGbLJQS5tiLGayRd_pN&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=M4ZGMQPxdCKwsSAgeuMZwA&_nc_ss=7b2a8&oh=00_AQJNCcThfVMjTDZiBP_MJvW8zhIXpeWNyZ3P_aN9W1NESA&oe=6AA9C859',
            'https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/484310118_1055011439998312_153191472106870272_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHXedkdSs6hHJJjFqHUu2QHo6DcU7DUVy2joNxTsNRXLRsWin5kA3He3fnVJiGnr4qPqpfosPC9y75SF_G2JQ6f&_nc_ohc=SqPtCwd9CpUQ7kNvwFle0gl&_nc_oc=AdoNY0-8l5dBxepSA4-tQxvi91dzGkBxQ9QWqeQ_f9DThXDUXFFzRdCwqth3gPOZKV_Uc7pE-nstTqK2A4Sg-bSf&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=DgyVwGy78luxnQSxxaxXLA&_nc_ss=7b2a8&oh=00_AQKpyegUgkZDee7b5_AxUDoFn1hE19bkcN1a7ISLd7MjIQ&oe=6AA9BA93',
            'https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/481264242_1044756334357156_8453606777523546334_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE6Kw5Ubrqnozgk3qI8k4TslRw5VX-86HKVHDlVf7zocmxww3SM8UZj3TqOXLWRv0pidPUdRAePi_YiNWazXTaD&_nc_ohc=JxsOfNkfE5sQ7kNvwGCEdY_&_nc_oc=Ado1ImNLsbuEESgWXxlYbbGeeeXta-fneTrPUOPDA8f77ha6v2rjln9FTWtlLpKyTxvSeg52cXl1eJqvDCUYWQCW&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=LrgrQcjOLjoYJnIZt90iKA&_nc_ss=7b2a8&oh=00_AQJzJKPkd87gUrA73MJRhpnzaP5Q97GDXKicR4OhLjDQ2w&oe=6AA99D0C',
        ],
        shortDesc: 'A family-friendly swimming pool.',
        fullDesc: 'A relaxing swimming pool destination close to the Mt. Brigino, offering a straightforward day out for families and groups who want to cool off without a trek.',
        location: 'Barangay Sapang Bulac, Doña Remedios Trinidad, Bulacan',
        entranceFee: '₱100 per person',
        parkingFee: '₱30 per vehicle',
        hours: '6:00 AM – 6:00 PM daily',
        activities: ['Swimming', 'Family outing'],
        howToGetThere: 'Roughly 7 km from the town center; accessible by tricycle or private vehicle.',
        contact: '0995 661 8403',
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
