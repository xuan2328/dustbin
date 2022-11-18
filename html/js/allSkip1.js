window.onload = function ()
{
    var goOvv = document.getElementById("ovv")
    goOvv.onclick = function (){
        location.href = "./overView.html"
    }
    var goDis = document.getElementById("dis")
    goDis.onclick = function (){
        location.href = "./siteDistribution.html"
    }
    var goCap = document.getElementById("cap")
    goCap.onclick = function (){
        location.href = "./overCapacity.html"
    }
    var goCon = document.getElementById("con")
    goCon.onclick = function (){
        location.href = "./gasConcentration.html"
    }
    var goState = document.getElementById("state")
    goState.onclick = function (){
        location.href = "./cleaning.html"
    }
    var goTop1 = document.getElementById("top1")
    goTop1.onclick = function () {
        location.href = "../index.html"
    }
    var goTop2 = document.getElementById("top2")
    goTop2.onclick = function () {
        location.href = "./siteQuery.html"
    }
    var goTop3 = document.getElementById("top3")
    goTop3.onclick = function () {
        location.href = "./overView.html"
    }
    var goTop4 = document.getElementById("top4")
    goTop4.onclick = function () {
        location.href = "./pathPlan.html"
    }
    var goTop5 = document.getElementById("top5")
    goTop5.onclick = function () {
        location.href = "./testControl.html"
    }



}