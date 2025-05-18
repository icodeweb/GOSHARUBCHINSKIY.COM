let carousel = document.querySelector(".carousel");
let carouselImgs = carousel.querySelectorAll("img")
console.log(carouselImgs.length);


let curruntImage = 0;
let carouselInterval = setInterval((() => {
    if (curruntImage < carouselImgs.length) {
        carouselImgs[curruntImage].classList.toggle("fade-out")
        curruntImage++
        carouselImgs[curruntImage].classList.toggle("fade-in")
    }
}), 1000)


let products = [
    {
        title: "REGULAR FIT T-SHIRT",
        description: "REGULAR FIT T-SHIRT WITH GOSHA RUBCHINSKIY LOGO",
        colors: ["BLACK", "WHITE", "GREY MELANGE", "BLUE", "PINK"],
        sizes: ["XS", "S", "M", "L", "XL"],
        price: 70,
        compound: "100% COTTON FRENCH TERRY GARMENT WASHED",
        details: ["REGULAR FIT", "SCREEN PRINTED LOGO"],
        images: 2
    },
    {
        title: "OVERSIZED T-SHIRT",
        description: "OVERSIZED T-SHIRT WITH GOSHA RUBCHINSKIY LOGO ON THE SIDE",
        colors: ["BLACK", "WHITE", "BLUE", "PINK"],
        sizes: ["XS", "S", "M", "L", "XL"],
        price: 80,
        compound: "100% COTTON JERSEY GARMENT WASHED",
        details: ["OVERSIZED FIT", "SCREEN PRINTED LOGO"],
        images: 3
    },
    {
        title: "OVERSIZED LONGSLEEVE",
        description: "OVERSIZED FIT, CUFFED LONGSLEEVE FEATURING GOSHA RUBCHINSKIY LOGO ON THE SLEEVE. DESIGNED WITH VERSATILE SLEEVE CUFFS, IT CAN BE WORN AS A LIGHTWEIGHT SWEATSHIRT",
        colors: ["BLACK", "WHITE", "GREY MELANGE", "PINK"],
        sizes: ["XS", "S", "M", "L", "XL"],
        price: 90,
        compound: "100% COTTON JERSEY GARMENT WASHED",
        details: ["OVERSIZED FIT", "SCREEN PRINTED LOGO", "SLEEVE CUFFS"],
        images: 3
    },
    {
        title: "SWEATSHIRT",
        description: "SWEATSHIRT WITH GOSHA RUBCHINSKIY LOGO",
        colors: ["BLACK", "WHITE", "GREY MELANGE", "PINK", "NAVY"],
        sizes: ["XS", "S", "M", "L", "XL"],
        price: 120,
        compound: "100% COTTON FRENCH TERRY GARMENT WASHED",
        details: ["OVERSIZED FIT", "SCREEN PRINTED LOGO", "SLEEVE CUFFS"],
        images: 2
    },
    {
        title: "ZIPPED HOODIE",
        description: "FULL-ZIP HOODIE WITH GOSHA RUBCHINSKIY JACQUARD LABEL ON A FRONT POCKET",
        colors: ["BLACK", "GREY MELANGE"],
        sizes: ["XS", "S", "M", "L", "XL"],
        price: 160,
        compound: "100% COTTON FRENCH TERRY GARMENT WASHED",
        details: ["REGULAR FIT", "FULL ZIP WITH HOOD", "FRONT POCKETS", "RIBBED CUFFS",],
        images: 3
    },
    {
        title: "SWEATPANTS",
        description: "STRAIGHT FIT SWEATPANTS WITH GOSHA RUBCHINSKIY LOGO",
        colors: ["BLACK", "WHITE", "GREY MELANGE", "YELLOW"],
        sizes: ["XS", "S", "M", "L", "XL"],
        price: 140,
        compound: "100% COTTON FRENCH TERRY GARMENT WASHED",
        details: ["STRAIGHT FIT", "SIDE POCKETS", "SCREEN PRINTED LOGO", "ADJUSTABLE ELASTIC WAISTBAND WITH INNER CORD"],
        images: 3
    },
    {
        title: "BOMBER JACKET",
        description: ["BOMBER JACKET IS CHARACTERISED BY ITS OVERSIZED SHOULDERS AND SLEEVES. THIS JACKET OFFERS A RELAXED FIT", "THE GENTLY CROPPED LENGTH AND BACK VENT PROVIDE A BOLD SHAPE AND FREE MOVEMENT"],
        colors: ["BLACK"],
        sizes: ["XS", "S", "M", "L", "XL"],
        price: 250,
        compound: "100% COTTON FRENCH TERRY GARMENT WASHED",
        details: ["STRAIGHT FIT", "SIDE POCKETS", "SCREEN PRINTED LOGO", "ADJUSTABLE ELASTIC WAISTBAND WITH INNER CORD"],
        images: 4
    },
    {
        title: "BEANIE",
        description: ["LIGHTWEIGHT BEANIE HAT FEATURES BLENDED WOOL WITH GOSHA RUBCHINSKIY LOGO"],
        colors: ["BLACK", "IVORY", "PINK", "YELLOW"],
        sizes: ["ONE SIZE"],
        price: 40,
        compound: "50% WOOL 50% ACRYLIC",
        details: ["SKULLY HAT", "BLENDED WOOL", "INDOOR AND OUTDOOR WEAR"],
        images: 3
    },
    {
        title: "SOCKS",
        description: ["CREW SOCKS WITH GOSHA RUBCHINSKIY LOGO"],
        colors: ["BLACK", "GREY MELANGE", "IVORY", "WHITE"],
        sizes: ["XS-S", "S-M", "M-L"],
        price: 20,
        compound: ["78% COTTON", "20% POLYESTER", "2% ELASTANE"],
        details: ["MID-CALF LENGTH", "COTTON BLEND", "RIBBED KNIT", "JAQUARD LOGO"],
        images: 3
    }, {
        title: "HOODIE",
        description: "HOODIE WITH GOSHA RUBCHINSKIY LOGO. IT FEATURES A RIBBED COLLAR BELOW THE HOOD AND A FRONT POCKET",
        colors: ["WHITE", "NAVY", "GREY MELANGE", "BLUE"],
        sizes: ["XS", "S", "M", "L", "XL"],
        price: 160,
        compound: "100% COTTON",
        details: ["SCREEN PRINTED LOGO", "FRONT POCKETS", "RIBBED CUFFS",],
        images: 3
    }, {
        title: "BOXY T-SHIRT",
        description: "OVERSIZE T-SHIRT WITH GOSHA RUBCHINSKIY LOGО",
        colors: ["WHITE", "BLUE", "GREY MELANGE", "NAVY"],
        sizes: ["XS", "S", "M", "L", "XL"],
        price: 80,
        compound: ["100% COTTON JERSEY", "GARMENT WASHED"],
        details: ["SCREEN PRINTED LOGO", "BOXY FIT"],
        images: 2
    }]