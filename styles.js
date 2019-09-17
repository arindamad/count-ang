(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n/* your plugins be here */\n.countWrap {\n    position: absolute;\n    top: 50%;\n    left: calc((100% - 1122px)/4);\n    width: 100%;\n    z-index: 10;\n    width: 60%;\n    width: 922px;\n    transform: translate(0, -50%);\n  }\n.countWrap h2 {\n    font-size: 3vw;\n    text-align: center;\n    color: #fff;\n    margin-bottom: 20px;\n    position: relative;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n  }\n.countWrap h2::after {\n    content: \"\";\n    width: 350px;\n    height: 1px;\n    background: rgba(255, 255, 255, 0.8);\n    position: absolute;\n    bottom: -20px;\n    left: 50%;\n    transform: translate(-50%, 0);\n  }\n.countWrap h1 {\n    font-size: 7vw;\n    text-align: center;\n    color: #fff;\n    margin-bottom: 20px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n  }\n.countWrap h4 {\n    color: #fff;\n    text-align: center;\n    margin-bottom: 20px;\n  }\n.countdown {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-width: 800px;\n  }\n.countdown .eachTimeer {\n    position: relative;\n  }\n.countdown .eachTimeer + .eachTimeer {\n    margin-left: 30px;\n  }\n.countdown .eachTimeer svg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n  }\n.countdown .eachTimeer .label {\n    position: absolute;\n    width: 100px;\n    height: 100px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -55%);\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n  }\n.countdown .eachTimeer .label span:first-of-type {\n    font-size: 55px;\n    color: #fff;\n  }\n.countdown .eachTimeer .label span:nth-of-type(2) {\n    font-size: 20px;\n    text-transform: uppercase;\n    color: #fff;\n  }\n.weatherReprot {\n    color: #fff;\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 3;\n    padding: 20px;\n    text-align: center;\n    background: rgba(0, 0, 0, 0.6);\n    width: 400px;\n  }\n.weatherReprot h4,\n  .weatherReprot2 h4 {\n    margin-bottom: 10px;\n    font-size: 20px;\n  }\n.weatherReprot h5,\n  .weatherReprot2 h5 {\n    margin-bottom: 15px;\n    font-size: 18px;\n    font-weight: 400;\n  }\n.weather-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n.weatherInfo {\n    margin-left: 10px;\n  }\n.icon,\n  .icon2 {\n    background: rgba(175, 255, 251, 0.6);\n    border-radius: 50%;\n  }\nfooter {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    background: rgba(0, 0, 0, 0.8);\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    padding: 10px 15px;\n    color: #fff;\n  }\n.socialGroup ul li a {\n    color: #fff;\n  }\n.socialGroup ul li a i {\n    font-size: 22px;\n  }\n.socialGroup ul li {\n    list-style: none;\n    width: auto;\n    flex: 0 0 auto;\n    -ms-flex: 0 0 auto;\n    margin-right: 20px;\n  }\n@media screen and (max-width: 800px) {\n    .countdown {\n      flex-direction: column;\n      align-items: center;\n      height: 900px;\n      width: auto;\n      min-width: auto;\n    }\n  }\n.ar360photo {\n    position: absolute;\n    right: 0;\n    bottom: 42px;\n    z-index: 6;\n    width: 400px;\n    height: calc(100vh - 290px);\n  }\n.ar360photo iframe {\n    width: 100%;\n    height: 100%;\n    height: calc(100vh - 290px);\n  }\n.eachWeather {\n    width: 50%;\n    -moz-flex: 0 0 50%;\n    flex: 0 0 50%;\n  }\n.gangtokWeather {\n    border-right: 1px solid #f6f6f6;\n  }\n.weatherTable {\n    margin-top: 10px;\n  }\n.weatherTable li {\n    padding: 4px 0;\n    font-size: 14px;\n    font-weight: 500;\n  }\n.owl-carousel .owl-nav {\n    position: absolute;\n    bottom: 10px;\n    left: 5px;\n  }\n.owl-carousel .owl-nav button.owl-prev {\n    background: #fff !important;\n    color: #333 !important;\n    padding: 6px 10px !important;\n    margin-right: 10px;\n  }\n.owl-carousel .owl-nav button.owl-next {\n    background: #fff !important;\n    color: #333 !important;\n    padding: 6px 10px !important;\n  }\n/* bases.dir your bases laouts form here */\n* {\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    -o-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n  }\nbody {\n    font-family: \"Montserrat\", sans-serif;\n    overflow: hidden;\n  }\nsection, .full {\n    width: 100%;\n    float: left;\n  }\na, button {\n    text-decoration: none;\n    cursor: pointer;\n  }\nul {\n    list-style: none;\n  }\n.d-flex {\n    display: flex;\n  }\n.row {\n    display: flex;\n    flex-wrap: wrap;\n  }\n.col-md {\n    flex: 1 0 0;\n  }\n.col-md-auto {\n    width: auto;\n    flex: 0 0 auto;\n  }\n/* banner laouts form here */\n.bannerPanel {\n    height: 100vh;\n    position: relative;\n    z-index: 1;\n  }\n.bannerPanel .myowlcarousel .item {\n    width: 100%;\n    float: left;\n  }\n.bannerPanel .myowlcarousel .item::after {\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.4);\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 2;\n  }\n.bannerPanel .myowlcarousel .item .itemInner {\n    width: 100%;\n    float: left;\n  }\n.bannerPanel .myowlcarousel .item .itemInner iframe {\n    height: 100vh;\n  }\n.bannerPanel .myowlcarousel .item .itemInner img {\n    width: 100%;\n    display: block;\n    height: 100vh;\n    object-fit: cover;\n    -moz-object-fit: cover;\n    -webkit-object-fit: cover;\n    -o-object-fit: cover;\n  }\n.bannerPanel .owl-dots {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n.bannerPanel .BannerTxt {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    max-width: 600px;\n    width: 100%;\n    z-index: 4;\n    transform: translate(-50%, -50%);\n    color: #fff;\n  }\n.bannerPanel .BannerTxt h2 {\n    font-size: 40px;\n    color: inherit;\n  }\n.bannerPanel .BannerTxt .Timer {\n    width: 100%;\n    float: left;\n    text-align: center;\n  }\n.bannerPanel .BannerTxt .Timer ul {\n    display: inline-block;\n  }\n.bannerPanel .BannerTxt .Timer ul li {\n    width: 90px;\n    float: left;\n    font-family: \"Bungee Inline\", cursive;\n    font-size: 50px;\n    position: relative;\n    margin-right: 19px;\n  }\n.bannerPanel .BannerTxt .Timer ul li::after {\n    content: \":\";\n    position: absolute;\n    top: 50%;\n    right: -19px;\n    transform: translate(0, -50%);\n  }\n.bannerPanel .BannerTxt .Timer ul li:last-child {\n    margin-right: 0px;\n  }\n.bannerPanel .BannerTxt .Timer ul li:last-child::after {\n    display: none;\n  }\n.manFace {\n    position: absolute;\n    bottom: 0;\n    left: 0px;\n    max-width: 400px;\n    width: 100%;\n    z-index: 9;\n    transition: all \"ease-in-out\" 300ms;\n    opacity: 0;\n    -webkit-animation-duration: 5s;\n            animation-duration: 5s;\n  }\n.manFace img {\n    width: 100%;\n    display: block;\n  }\n.svgDataStructre {\n    max-width: 400px;\n    width: 100%;\n    position: absolute;\n    top: 50%;\n    right: 0;\n    mix-blend-mode: color-dodge;\n    z-index: 10;\n    transform: translate(-50%, -50%);\n  }\n.popMovie {\n    -webkit-animation-name: pop;\n            animation-name: pop;\n    -webkit-animation-duration: 0.5s;\n            animation-duration: 0.5s;\n  }\n.movieBase {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 10;\n    color: #fff;\n    text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  }\n.movieBase h2 {\n    font-size: 15vw;\n    font-weight: 700;\n  }\n@-webkit-keyframes pop {\n    0% {\n      transform: translate(-50%, -50%) scale(0.1);\n      opacity: 0.1;\n    }\n    100% {\n      transform: translate(-50%, -50%) scale(1);\n      opacity: 1;\n    }\n  }\n@keyframes pop {\n    0% {\n      transform: translate(-50%, -50%) scale(0.1);\n      opacity: 0.1;\n    }\n    100% {\n      transform: translate(-50%, -50%) scale(1);\n      opacity: 1;\n    }\n  }\n.sketch {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    z-index: 10;\n    height: 40%;\n  }\n.cover {\n    background-size: cover;\n  }\n.relative {\n    position: relative;\n  }\n.fristImg {\n    width: 100%;\n    float: left;\n    height: 100vh;\n  }\n.beforeCarousel {\n    transition: all ease-in-out 10s;\n  }\n.sun {\n    width: 200px;\n    position: absolute;\n    top: 100%;\n    left: 10%;\n    z-index: 10;\n    transform: translate(-50%, -50%);\n    transition: all ease-in-out 14s;\n    border-radius: 50%;\n    background-color: #fff;\n  }\n.sun.in {\n    top: 5%;\n    transform: scale(0.5) translate(-50%, -50%);\n    box-shadow: 0 0 290px 70px rgba(255, 240, 106, 0.4), 0 0 100px 2px rgba(255, 255, 255, 0.6);\n  }\n.sun.in img {\n    opacity: 0.1;\n    transition: all ease-in-out 14s;\n    -webkit-filter: blur(5px);\n            filter: blur(5px);\n  }\n.sun img {\n    width: 100%;\n    display: block;\n    border-radius: 50%;\n    opacity: 1;\n  }\n.commonBnt {\n    padding: 0px 20px;\n    line-height: 40px;\n    height: 40px;\n    border: none;\n    background: transparent;\n  }\n.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    background: rgba(0, 0, 0, 0.5);\n    z-index: 12;\n  }\n.btn {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: auto;\n    height: auto;\n    z-index: 13;\n  }\n.btn .commonBnt {\n    padding: 0 50px;\n    height: 70px;\n    font-size: 23px;\n    line-height: 70px;\n    background: #00c0c0;\n    color: #fff;\n    border-radius: 10px;\n  }\n/* Your moudle be her*/\n/*# sourceMappingURL=app.css.map */\n/*# sourceMappingURL=data:application/json;base64,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IGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi8qIHlvdXIgcGx1Z2lucyBiZSBoZXJlICovXG4uY291bnRXcmFwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogY2FsYygoMTAwJSAtIDExMjJweCkvNCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTA7XG4gICAgd2lkdGg6IDYwJTtcbiAgICB3aWR0aDogOTIycHg7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB9XG4gIC5jb3VudFdyYXAgaDIge1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuICAuY291bnRXcmFwIGgyOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0yMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gIH1cbiAgLmNvdW50V3JhcCBoMSB7XG4gICAgZm9udC1zaXplOiA3dnc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgLmNvdW50V3JhcCBoNCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gIC5jb3VudGRvd24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IDgwMHB4O1xuICB9XG4gIC5jb3VudGRvd24gLmVhY2hUaW1lZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuY291bnRkb3duIC5lYWNoVGltZWVyICsgLmVhY2hUaW1lZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICB9XG4gIC5jb3VudGRvd24gLmVhY2hUaW1lZXIgc3ZnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogLTE7XG4gIH1cbiAgLmNvdW50ZG93biAuZWFjaFRpbWVlciAubGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTU1JSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxuICAuY291bnRkb3duIC5lYWNoVGltZWVyIC5sYWJlbCBzcGFuOmZpcnN0LW9mLXR5cGUge1xuICAgIGZvbnQtc2l6ZTogNTVweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuY291bnRkb3duIC5lYWNoVGltZWVyIC5sYWJlbCBzcGFuOm50aC1vZi10eXBlKDIpIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLndlYXRoZXJSZXByb3Qge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogMztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgd2lkdGg6IDQwMHB4O1xuICB9XG4gIFxuICAud2VhdGhlclJlcHJvdCBoNCxcbiAgLndlYXRoZXJSZXByb3QyIGg0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICBcbiAgLndlYXRoZXJSZXByb3QgaDUsXG4gIC53ZWF0aGVyUmVwcm90MiBoNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBcbiAgLndlYXRoZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC53ZWF0aGVySW5mbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgXG4gIC5pY29uLFxuICAuaWNvbjIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTc1LCAyNTUsIDI1MSwgMC42KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgXG4gIGZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC5zb2NpYWxHcm91cCB1bCBsaSBhIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuc29jaWFsR3JvdXAgdWwgbGkgYSBpIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbiAgXG4gIC5zb2NpYWxHcm91cCB1bCBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAtbXMtZmxleDogMCAwIGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5jb3VudGRvd24ge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDkwMHB4O1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgfVxuICB9XG4gIC5hcjM2MHBob3RvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiA0MnB4O1xuICAgIHotaW5kZXg6IDY7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDI5MHB4KTtcbiAgfVxuICAuYXIzNjBwaG90byBpZnJhbWUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyOTBweCk7XG4gIH1cbiAgXG4gIC5lYWNoV2VhdGhlciB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICAtbW96LWZsZXg6IDAgMCA1MCU7XG4gICAgLXdlYmtpdC1mbGV4OiAwIDAgNTAlO1xuICAgIGZsZXg6IDAgMCA1MCU7XG4gIH1cbiAgXG4gIC5nYW5ndG9rV2VhdGhlciB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Y2ZjZmNjtcbiAgfVxuICBcbiAgLndlYXRoZXJUYWJsZSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICBcbiAgLndlYXRoZXJUYWJsZSBsaSB7XG4gICAgcGFkZGluZzogNHB4IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgXG4gIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogNXB4O1xuICB9XG4gIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgYnV0dG9uLm93bC1wcmV2IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA2cHggMTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAub3dsLWNhcm91c2VsIC5vd2wtbmF2IGJ1dHRvbi5vd2wtbmV4dCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogNnB4IDEwcHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLyogYmFzZXMuZGlyIHlvdXIgYmFzZXMgbGFvdXRzIGZvcm0gaGVyZSAqL1xuICAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIHNlY3Rpb24sIC5mdWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICBcbiAgYSwgYnV0dG9uIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuICBcbiAgLmQtZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBcbiAgLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgXG4gIC5jb2wtbWQge1xuICAgIGZsZXg6IDEgMCAwO1xuICB9XG4gIFxuICAuY29sLW1kLWF1dG8ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICB9XG4gIFxuICAvKiBiYW5uZXIgbGFvdXRzIGZvcm0gaGVyZSAqL1xuICAuYmFubmVyUGFuZWwge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgLmJhbm5lclBhbmVsIC5teW93bGNhcm91c2VsIC5pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAuYmFubmVyUGFuZWwgLm15b3dsY2Fyb3VzZWwgLml0ZW06OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbiAgLmJhbm5lclBhbmVsIC5teW93bGNhcm91c2VsIC5pdGVtIC5pdGVtSW5uZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIC5iYW5uZXJQYW5lbCAubXlvd2xjYXJvdXNlbCAuaXRlbSAuaXRlbUlubmVyIGlmcmFtZSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICAuYmFubmVyUGFuZWwgLm15b3dsY2Fyb3VzZWwgLml0ZW0gLml0ZW1Jbm5lciBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgLW1vei1vYmplY3QtZml0OiBjb3ZlcjtcbiAgICAtd2Via2l0LW9iamVjdC1maXQ6IGNvdmVyO1xuICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG4gIC5iYW5uZXJQYW5lbCAub3dsLWRvdHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogNTAlO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgfVxuICAuYmFubmVyUGFuZWwgLkJhbm5lclR4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDQ7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5iYW5uZXJQYW5lbCAuQmFubmVyVHh0IGgyIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbiAgLmJhbm5lclBhbmVsIC5CYW5uZXJUeHQgLlRpbWVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmJhbm5lclBhbmVsIC5CYW5uZXJUeHQgLlRpbWVyIHVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLmJhbm5lclBhbmVsIC5CYW5uZXJUeHQgLlRpbWVyIHVsIGxpIHtcbiAgICB3aWR0aDogOTBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LWZhbWlseTogXCJCdW5nZWUgSW5saW5lXCIsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDE5cHg7XG4gIH1cbiAgLmJhbm5lclBhbmVsIC5CYW5uZXJUeHQgLlRpbWVyIHVsIGxpOjphZnRlciB7XG4gICAgY29udGVudDogXCI6XCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiAtMTlweDtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIH1cbiAgLmJhbm5lclBhbmVsIC5CYW5uZXJUeHQgLlRpbWVyIHVsIGxpOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG4gIC5iYW5uZXJQYW5lbCAuQmFubmVyVHh0IC5UaW1lciB1bCBsaTpsYXN0LWNoaWxkOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLm1hbkZhY2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMHB4O1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogOTtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCBcImVhc2UtaW4tb3V0XCIgMzAwbXM7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgXCJlYXNlLWluLW91dFwiIDMwMG1zO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCBcImVhc2UtaW4tb3V0XCIgMzAwbXM7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCBcImVhc2UtaW4tb3V0XCIgMzAwbXM7XG4gICAgdHJhbnNpdGlvbjogYWxsIFwiZWFzZS1pbi1vdXRcIiAzMDBtcztcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG4gIH1cbiAgLm1hbkZhY2UgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLnN2Z0RhdGFTdHJ1Y3RyZSB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWl4LWJsZW5kLW1vZGU6IGNvbG9yLWRvZGdlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICBcbiAgLnBvcE1vdmllIHtcbiAgICBhbmltYXRpb24tbmFtZTogcG9wO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbiAgfVxuICBcbiAgLm1vdmllQmFzZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgei1pbmRleDogMTA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgfVxuICAubW92aWVCYXNlIGgyIHtcbiAgICBmb250LXNpemU6IDE1dnc7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHBvcCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC4xKTtcbiAgICAgIG9wYWNpdHk6IDAuMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgcG9wIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjEpO1xuICAgICAgb3BhY2l0eTogMC4xO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbiAgLnNrZXRjaCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGhlaWdodDogNDAlO1xuICB9XG4gIFxuICAuY292ZXIge1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG4gIFxuICAucmVsYXRpdmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLmZyaXN0SW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG4gIFxuICAuYmVmb3JlQ2Fyb3VzZWwge1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAxMHM7XG4gIH1cbiAgXG4gIC5zdW4ge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IDEwJTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMTRzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDE0cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMTRzO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG4gIC5zdW4uaW4ge1xuICAgIHRvcDogNSU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMjkwcHggNzBweCByZ2JhKDI1NSwgMjQwLCAxMDYsIDAuNCksIDAgMCAxMDBweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICB9XG4gIC5zdW4uaW4gaW1nIHtcbiAgICBvcGFjaXR5OiAwLjE7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDE0cztcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcbiAgfVxuICAuc3VuIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgXG4gIC5jb21tb25CbnQge1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIC5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgei1pbmRleDogMTI7XG4gIH1cbiAgXG4gIC5idG4ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHotaW5kZXg6IDEzO1xuICB9XG4gIC5idG4gLmNvbW1vbkJudCB7XG4gICAgcGFkZGluZzogMCA1MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gICAgYmFja2dyb3VuZDogIzAwYzBjMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgXG4gIC8qIFlvdXIgbW91ZGxlIGJlIGhlciovXG4gIFxuICAvKiMgc291cmNlTWFwcGluZ1VSTD1hcHAuY3NzLm1hcCAqLyJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\my-projects\coundToGangtock\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map