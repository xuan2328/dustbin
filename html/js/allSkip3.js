window.onload = function (){

    var goTop1 = document.getElementById("top1")
    goTop1.onclick = function () {
        location.href = "index.html"
    }
    var goTop2 = document.getElementById("top2")
    goTop2.onclick = function () {
        location.href = "web/siteQuery.html"
    }
    var goTop3 = document.getElementById("top3")
    goTop3.onclick = function () {
        location.href = "../web/overView.html"
    }
    var goTop4 = document.getElementById("top4")
    goTop4.onclick = function () {
        location.href = "web/pathPlan.html"
    }
    var goTop5 = document.getElementById("top5")
    goTop5.onclick = function () {
        location.href = "web/testControl.html"
    }
}