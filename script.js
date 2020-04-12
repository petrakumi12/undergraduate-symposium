let bodytag = "";
let data = "";
window.onload = function () {
    fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTF-eItKvpFsBhUK_3hM2ihYr3Yi34IgvxSAK_Pw6L8GGODkalJ5uFKidrDTLfC8uaZ5nNtI98Wb-tz/pub?output=csv')
        .then(response => response.blob())
        .then(blob => {
            var a = document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            d3.csv(a.href).then(d => {
                    console.log('data', d);
                    data = d;
                    bodytag = document.getElementsByTagName('body')[0];
                    load_projects();
                    load_footer();
                }
            )
        });
}

function load_projects() {
    let temp = document.createElement('div');
    temp.id = 'remove-me';

    for (let datum of Object.values(data)) {
        if (datum.Abstract !== undefined) {
            let new_row = document.createElement('div');
            new_row.classList.add('row');
            new_row.classList.add('no-gutters');
            new_row.classList.add('py-5');
            new_row.style.borderBottom = "1px solid grey";
            // new_row.classList.add('mx-2');

            let col_1 = document.createElement('div');
            col_1.classList.add('col-md-3');
            col_1.innerHTML = " <iframe src='" + remove_extras(datum.Video, 'video') + "' frameborder='0' mozallowfullscreen='true' webkitallowfullscreen='true' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'></iframe>"

            let col_2 = document.createElement('div');
            col_2.classList.add('col-md-6');
            col_2.classList.add('px-4');
            col_2.style.fontSize = '0.9em';

            let title = document.createElement('div');
            title.classList.add('row');
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
            col_3.classList.add('col-md-3');
            col_3.innerHTML = "<iframe src='" + remove_extras(String(datum.Slides), 'slides') + "' frameborder='0' allowfullscreen='true' mozallowfullscreen='true' webkitallowfullscreen='true'></iframe>\n";


            col_2.appendChild(title);
            col_2.appendChild(people);
            col_2.appendChild(abstract);

            new_row.appendChild(col_1);
            new_row.appendChild(col_2);
            new_row.appendChild(col_3);
            // new_row.appendChild(document.createElement('hr'));

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
    for (let e of document.getElementsByTagName('option')) {
        if (e.value === type.value) {
            e.selected = true
        }
    }


}

// function remove_video_extras(video_tags){
//     needed = video_tags
//     if (video_tags.includes('src=')){
//         needed = video_tags.split('src=')[1];
//         needed = needed.split('title=')[0];
//         needed = needed.replace(/"/g,"");
//     }
//     return needed;
// }

function remove_extras(iframe_tag, type){
    console.log('cur iframe', iframe_tag)
    if (type === 'video') {
        if (iframe_tag.includes('youtube')){
            type = 'frameborder'
        }
        else if (iframe_tag.includes('wpi')){
            type = 'title';
        }
    } else {
        type = 'width';
    }
    needed = iframe_tag;
    if(needed.includes("src=")){
        needed = iframe_tag.match(new RegExp('src=(.*)'+type));
        console.log('needed', needed);
        if (needed!==null){
            needed = needed[0];
        }
        needed = needed.replace('src=', "");
        needed = needed.replace(type, "");
        needed = needed.replace(/\"/g, "");
    }
    console.log('needed', needed)
    return needed;
}
