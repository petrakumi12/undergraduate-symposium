let bodytag = "";
let data = "";
window.onload = function () {
    d3.csv('symposium-sample.csv').then(d => {
            console.log('data', data);
            data = d;
            bodytag = document.getElementsByTagName('body')[0];
            load_projects();
            load_footer();
        }
    )
};

function load_projects() {
    let temp = document.createElement('div');
    temp.id = 'remove-me';

    for (let datum of Object.values(data)) {
        if (datum.Abstract !== undefined) {
            let new_row = document.createElement('div');
            new_row.classList.add('row');
            new_row.classList.add('no-gutters');
            new_row.classList.add('my-3');
            // new_row.classList.add('mx-2');

            let col_1 = document.createElement('div');
            col_1.classList.add('col-md-4');
            col_1.innerHTML = " <iframe src='" + String(datum.Video) + "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen=''></iframe>"

            let col_2 = document.createElement('div');
            col_2.classList.add('col-md-4');
            col_2.classList.add('px-3');

            let title = document.createElement('div');
            title.classList.add('row')
            title.classList.add('no-gutters');
            title.innerHTML = "<h5>" + datum.Title + "</h5>";

            let people = document.createElement('div');
            people.classList.add('row');
            people.classList.add('no-gutters');
            people.innerHTML = "<p>" +
                "<b>Students: </b>" + datum.Students +
                "<br/>" +
                "<b>Advisors: </b>" + datum.Advisor +
                "</p>";

            let abstract = document.createElement('div');
            abstract.classList.add('row');
            abstract.classList.add('no-gutters');
            abstract.innerHTML = "<p>" + datum.Abstract + "</p>";


            let col_3 = document.createElement('div');
            col_3.classList.add('col-md-4');
            col_3.innerHTML = "<iframe src='" + String(datum.Slides) + "></iframe>\n";


            col_2.appendChild(title);
            col_2.appendChild(people);
            col_2.appendChild(abstract);

            new_row.appendChild(col_1);
            new_row.appendChild(col_2);
            new_row.appendChild(col_3);

            temp.appendChild(new_row)
            bodytag.appendChild(temp);
        }

    }
}

function load_footer() {
    <!-- footer here -->
    bodytag.innerHTML = bodytag.innerHTML + '<footer id="footer" class="page-footer font-small white">' +
        '<div class="footer-copyright text-center py-3">Worcester Polytechnic Institute ' +
        '<a href="https://www.wpi.edu"> wpi.edu</a> ' +
        '</div>' +
        '</footer>'
}

function sort_data(type) {
    console.log('we here', type);
    switch (type.value) {
        case 'title':
            console.log('case title');
            data = data.slice().sort((a, b) => d3.ascending(a.Title, b.Title));
            break;
        case 'advisor':
            console.log('case advisor');
            data = data.slice().sort((a, b) => d3.ascending(a.Advisor, b.Advisor));
            break;
        case 'random':
            console.log('case random');
            data = d3.shuffle(data);
            break;
    }

    let temp = document.getElementById('remove-me');
    let footer = document.getElementById('footer');
    temp.parentNode.removeChild(temp);
    footer.parentNode.removeChild(footer);
    load_projects();
    load_footer();
    for (let e of document.getElementsByTagName('option')){
        if(e.value===type.value){
            e.selected = true
        }
    }


}