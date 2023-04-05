function openTab(event, tabName) {
    var i, tabcontent, tablink;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}