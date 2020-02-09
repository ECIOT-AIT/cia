
(() => {
    var api = 'test.ciadev.ninja';

    let url = 'http://' + api + '/api/v2/events/?format=json';
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            updateUI(parseEventData(myArr));

        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

})/* () */;