function animateAboutMe() {
  if (!document.getElementById("selfPicContainer")) {
    let aboutMeParent = document.getElementById("aboutMe");
    aboutMeParent.setAttribute("class", "container pt-4 pb-1 mt-4");
    let div1 = document.createElement("div");
    div1.setAttribute("class", "row");
    let div2 = document.createElement("div");
    div2.setAttribute("class", "col col-sm-4 col-lg-2 d-none d-sm-block");
    div2.setAttribute("id", "selfPicContainer");
    let div3 = document.createElement("div");
    div3.setAttribute("class", "col col col-xs-12 col-sm-8 col-lg-10 pb-5");
    let title = document.createElement("h2");
    title.innerText = "About Me";
    let textBody1 = document.createElement("p");
    textBody1.setAttribute("class", "about-me-text");
    textBody1.innerText =
      "Hi,  I'm Ron Mason.  I’m a Front-end Web Developer with a background in technology services sales and business communication.  As a developer, I love the process of designing through code,  and the creative problem solving it entails.  I’m hooked on React and Redux, and basically everything JavaScript.";
    let br = document.createElement("br");
    textBody1.appendChild(br);
    let textBody2 = document.createElement("p");
    textBody2.setAttribute("class", "about-me-text");
    textBody2.innerText =
      "When I’m not designing the matrix,  I love to spend time with my family and friends,  and I’m an avid runner,  golfer,  and competitive bowler.  An optimist by nature,  the best is always yet to come!";
    let selfImg = document.createElement("img");
    selfImg.setAttribute("id", "selfPic");
    selfImg.setAttribute("src", "assets/self.jpg");

    let hr = document.createElement("hr");

    div3.appendChild(title);
    div3.appendChild(textBody1);
    div3.appendChild(textBody2);
    div2.appendChild(selfImg);
    div1.appendChild(div2);
    div1.appendChild(div3);

    aboutMeParent.appendChild(div1);
    aboutMeParent.appendChild(hr);
  }
}

//VERY WET
function animateCarousel() {
  if (!document.getElementById("projectLogos")) {
    //adding footer
    footerAdd = document.getElementById("projectCarousel");
    let footer = document.createElement("footer");
    footerAdd.appendChild(footer);

    //adding animation to carousel
    let carouselParent = document.getElementById("cItem1");
    let carouselAnchorTag = document.createElement("a");
    carouselAnchorTag.setAttribute("href", "#");
    carouselAnchorTag.setAttribute("data-toggle", "modal");
    carouselAnchorTag.setAttribute("data-target", "#crescentCityDonutsModal");
    let projectImg = document.createElement("img");
    projectImg.setAttribute("src", "assets/Crescent-City.png");
    projectImg.setAttribute("class", "d-block w-100");
    carouselAnchorTag.appendChild(projectImg);
    carouselParent.appendChild(carouselAnchorTag);
    document
      .getElementById("projectCarousel")
      .setAttribute("class", "container animated bounceInUp delay-0s");

    //others on carousel
    let carouselParent2 = document.getElementById("cItem2");
    let carouselAnchorTag2 = document.createElement("a");
    carouselAnchorTag2.setAttribute("href", "#");
    carouselAnchorTag2.setAttribute("data-toggle", "modal");
    carouselAnchorTag2.setAttribute("data-target", "#giftRunModal");
    let projectImg2 = document.createElement("img");
    projectImg2.setAttribute("src", "assets/Gift-Run.png");
    projectImg2.setAttribute("class", "d-block w-100");
    carouselAnchorTag2.appendChild(projectImg2);
    carouselParent2.appendChild(carouselAnchorTag2);

    let carouselParent3 = document.getElementById("cItem3");
    let carouselAnchorTag3 = document.createElement("a");
    carouselAnchorTag3.setAttribute("href", "#");
    carouselAnchorTag3.setAttribute("data-toggle", "modal");
    carouselAnchorTag3.setAttribute("data-target", "#piqShareModal");
    let projectImg3 = document.createElement("img");
    projectImg3.setAttribute("src", "assets/PIQ-Share.png");
    projectImg3.setAttribute("class", "d-block w-100");
    carouselAnchorTag3.appendChild(projectImg3);
    carouselParent3.appendChild(carouselAnchorTag3);

    let carouselParent4 = document.getElementById("cItem4");
    let carouselAnchorTag4 = document.createElement("a");
    carouselAnchorTag4.setAttribute("href", "#");
    carouselAnchorTag4.setAttribute("data-toggle", "modal");
    carouselAnchorTag4.setAttribute("data-target", "#movieSearchModal");
    let projectImg4 = document.createElement("img");
    projectImg4.setAttribute("src", "assets/Movie-Search.png");
    projectImg4.setAttribute("class", "d-block w-100");
    carouselAnchorTag4.appendChild(projectImg4);
    carouselParent4.appendChild(carouselAnchorTag4);

    let carouselParent5 = document.getElementById("cItem5");
    let carouselAnchorTag5 = document.createElement("a");
    carouselAnchorTag5.setAttribute("href", "#");
    carouselAnchorTag5.setAttribute("data-toggle", "modal");
    carouselAnchorTag5.setAttribute("data-target", "#seinfeldSimonModal");
    let projectImg5 = document.createElement("img");
    projectImg5.setAttribute("src", "assets/Seinfeld-Simpn.png");
    projectImg5.setAttribute("class", "d-block w-100");
    carouselAnchorTag5.appendChild(projectImg5);
    carouselParent5.appendChild(carouselAnchorTag5);

    let carouselParent6 = document.getElementById("cItem6");
    let carouselAnchorTag6 = document.createElement("a");
    carouselAnchorTag6.setAttribute("href", "#");
    carouselAnchorTag6.setAttribute("data-toggle", "modal");
    carouselAnchorTag6.setAttribute("data-target", "#fortniteModal");
    let projectImg6 = document.createElement("img");
    projectImg6.setAttribute("src", "assets/Fortnite-Character-Selector.png");
    projectImg6.setAttribute("class", "d-block w-100");
    carouselAnchorTag6.appendChild(projectImg6);
    carouselParent6.appendChild(carouselAnchorTag6);

    for (var i = 0; i <= 5; i++) {
      let names = [
        "Crescent City Donuts",
        "Gift-RUN",
        "PiQ Share",
        "Movie Search",
        "Seinfeld-Simon",
        "Fortnite Characters"
      ];
      let projectImageLocations = [
        "assets/ccd_thumb.png",
        "assets/gr_thumb.jpg",
        "assets/ps_thumb.jpg",
        "assets/ms_thumb.png",
        "assets/ss_thumb.png",
        "assets/fn_thumb.png"
      ];

      let projectImages = [
        "assets/Crescent-City.png",
        "assets/Gift-Run.png",
        "assets/PIQ-Share.png",
        "assets/Movie-Search.png",
        "assets/Seinfeld-Simpn.png",
        "assets/Fortnite-Character-Selector.png"
      ];

      //creat project titles and logos
      let thumbParent = document.getElementById("projectSelector");
      let div1 = document.createElement("div");
      div1.setAttribute(
        "class",
        "d-flex flex-column flex-direction: column justify-content-end mt-5 mb-2 col-sm-6 col-md-4 col-lg-2 animated bounceInDown delay-0s"
      );

      let anchorTag = document.createElement("a");
      anchorTag.setAttribute("data-target", "#carouselExampleIndicators");
      anchorTag.setAttribute("data-slide-to", i);

      let div2 = document.createElement("div");
      div2.setAttribute("class", "d-flex justify-content-center text-center");

      let aPara = document.createElement("h4");
      aPara.innerHTML = names[i];

      let div3 = document.createElement("div");
      div3.setAttribute("class", "imgC d-flex justify-content-center");

      let thumbImg = document.createElement("img");
      thumbImg.setAttribute("src", projectImageLocations[i]);
      thumbImg.setAttribute("id", "projectLogos");
      thumbImg.setAttribute("class", "animated rubberBand delay-1s");

      let hr = document.createElement("hr");

      div3.appendChild(thumbImg);
      div2.appendChild(aPara);

      anchorTag.appendChild(div3);
      anchorTag.appendChild(div2);
      anchorTag.appendChild(hr);

      div1.appendChild(anchorTag);
      thumbParent.appendChild(div1);
    }
  }
}

function updateThumbLink() {
  let projectLogos = document.getElementById("projectLogos");
}
