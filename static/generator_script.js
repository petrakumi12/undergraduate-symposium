let bodytag = "";
let data = "";
let els_per_page = 6;
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
                    load_projects(0, 5);
                    load_page_number(0);
                    load_footer();
                }
            )
        });
}

function load_projects(from_no, to_no) {
    console.log('loading items from ', from_no, 'to', to_no)
    let temp = document.createElement('div');
    temp.id = 'remove-me';
    let some_data = Object.values(data).slice(from_no, to_no + 1);
    for (let datum of some_data) {
        if (datum.Abstract !== undefined) {
            let new_row = document.createElement('div');
            new_row.classList.add('row');
            new_row.classList.add('no-gutters');
            new_row.classList.add('py-5');
            new_row.classList.add('px-3');
            new_row.style.borderBottom = "1px solid grey";
            // new_row.classList.add('mx-2');

            let col_1 = document.createElement('div');
            col_1.classList.add('col-md-3');
            if ((datum.Video).includes('from-jim')) {
                col_1.innerHTML = datum.Video;
                console.log('jims code is here!');
            } else {
                console.log('not jims code');
                col_1.innerHTML = " <iframe src='" + remove_extras(datum.Video, 'video') + "' frameborder='0' mozallowfullscreen='true' webkitallowfullscreen='true' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'></iframe>"
            }
            col_1.style.backgroundColor = 'black';


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
                "<b>Advisors: </b>" + datum.Advisors +
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

            temp.appendChild(new_row);
            bodytag.appendChild(temp);
        }

    }
}

function load_page_number(no) {
    let total_pages = Math.ceil(Object.values(data).length/els_per_page);
    if (no === 0) {
        let page_flip_div = document.createElement('div');
        page_flip_div.classList.add('row');
        page_flip_div.classList.add('no-gutters');
        page_flip_div.classList.add('d-flex');
        page_flip_div.classList.add('align-items-center');
        page_flip_div.classList.add('justify-content-center');

        let prev_col = document.createElement('div');
        prev_col.classList.add('col');
        prev_col.classList.add('d-flex');
        prev_col.classList.add('align-items-center');
        prev_col.classList.add('justify-content-end');
        prev_col.innerHTML = "<p><a> < Previous </a></p>";

        let center_col = document.createElement('div');
        center_col.classList.add('col');
        center_col.classList.add('d-flex');
        center_col.classList.add('align-items-center');
        center_col.classList.add('justify-content-center');
        center_col.innerHTML = "<p> Page " + (no+1) + " of " + total_pages + "</p>";

        let next_col = document.createElement('div');
        next_col.classList.add('col');
        next_col.classList.add('d-flex');
        next_col.classList.add('align-items-center');
        next_col.classList.add('justify-content-start');
        next_col.innerHTML = "<p><a> Next > </a></p>";

        page_flip_div.appendChild(prev_col);
        page_flip_div.appendChild(center_col);
        page_flip_div.appendChild(next_col);
        document.getElementsByTagName('body')[0].appendChild(page_flip_div);

    } else {
        let start = no * 6;
        let end = (no * 6) + 5;
        let temp = document.getElementById('remove-me');
        let footer = document.getElementById('footer');
        temp.parentNode.removeChild(temp);
        footer.parentNode.removeChild(footer);
        load_projects(start, end);
        load_footer();
    }
    // let div_content = "<a href='load_page_number("+(no-1)+")'> < Previous </a>"

}

function load_footer() {
    let footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');
    footer.classList.add('page-footer');
    footer.classList.add('font-small');
    footer.classList.add('white');

    let adiv = document.createElement('div');
    adiv.classList.add('footer-copyright');
    adiv.classList.add('text-center');
    adiv.classList.add('py-3');
    adiv.innerHTML = 'Worcester Polytechnic Institute <a href="https://www.wpi.edu"> wpi.edu</a>';

    footer.appendChild(adiv);
    document.getElementsByTagName('body')[0].appendChild(footer)
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

function remove_extras(iframe_tag, type) {
    if (type === 'video') {
        if (iframe_tag.includes('youtube')) {
            type = 'frameborder'
        }
        else if (iframe_tag.includes('wpi')) {
            type = 'title';
        }
    } else {
        type = 'width';
    }
    needed = iframe_tag;
    if (needed.includes("src=")) {
        needed = iframe_tag.match(new RegExp('src=(.*)' + type))[0];
        needed = needed.replace('src=', "");
        needed = needed.replace(type, "");
        needed = needed.replace(/\"/g, "");
    }
    console.log('needed', needed);
    return needed;
}