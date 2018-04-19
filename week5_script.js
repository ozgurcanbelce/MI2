//***************************<function>***************************
function search() {
    // artiest nemen 
    var artiest = document.getElementById("artiest").value;
    // enkel doorgaan als men artiest heeft ingedient
    if (artiest != "") {
        $.getJSON("http://www.songsterr.com/a/ra/songs.json?pattern=" + artiest, function (result) {
            $.each(result, function (i, field) {
                document.getElementById("div1").innerHTML += "<p onclick =look(" + field.id + ")>" + field.title + "</p><br>";
            });
        });
    }
}
//***************************<function>***************************
function look(id) {
    window.open("http://www.songsterr.com/a/wa/song?id=" + id);
}