
(() => {

    function updateUI(json) {
        console.log(json);
        let igs = document.querySelector('.igs');
        
        json.forEach(e => {
            let group=document.createElement('div');
            group.className='group';
            group.innerHTML = `<h2>${e.g_name}</h2>
                <p>${e.g_desc}</p>
                <a href="${e.g_started}">Get started</a>`;
            igs.appendChild(group);
        });
    }


    var api = 'test.ciadev.ninja';

    let url = 'http://' + api + '/api/v2/interestgroup/?format=json';
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            updateUI(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

})();