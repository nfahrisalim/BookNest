function openReport(evt, reportName) {
    var i, reportContent, tablinks;

    reportContent = document.getElementsByClassName("reportContent");
    for (i = 0; i < reportContent.length; i++) {
        reportContent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(reportName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Default tab open
document.getElementById("pengunjung").style.display = "block";
document.querySelector(".tablink").classList.add("active");


