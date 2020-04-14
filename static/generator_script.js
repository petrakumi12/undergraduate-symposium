let bodytag = "";
let data = "";
let els_per_page = 6;
let from_no = 0;
let to_no = 5;


window.onload = function () {
    //load header
    load_header(false, false);
    //load title
    load_title('Sample Major');
    //load content
    fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTF-eItKvpFsBhUK_3hM2ihYr3Yi34IgvxSAK_Pw6L8GGODkalJ5uFKidrDTLfC8uaZ5nNtI98Wb-tz/pub?output=csv')
        .then(response => response.blob())
        .then(blob => {
            let a = document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            d3.csv(a.href).then(d => {
                    console.log('data', d);
                    data = d;
                    bodytag = document.getElementsByTagName('body')[0];
                    //load projects from first no to last no on the page
                    load_projects(from_no, to_no);
                    //load section with page numbers
                    load_page_number(-1);
                    //load footer
                    load_footer();
                }
            )
        });
};



function load_projects(from_no, to_no) {
    console.log('loading items from ', from_no, 'to', to_no);
    let temp = document.createElement('div');
    temp.id = 'remove-me';
    let some_data = Object.values(data).slice(from_no, to_no + 1);
    for (let datum of some_data) {
        if (datum.Abstract !== undefined) {

            let new_row = document.createElement('div');
            "row no-gutters py-4 mx-3 new_row".split(" ").map(e => new_row.classList.add(e));

            let video_iframe_1 = '<div class="video-div"><iframe class="video" src="';
            let video_iframe_2 = '" frameborder="0" scrolling="no" allowfullscreen></iframe></div>';

            let col_1 = document.createElement('div');
            "col-md-3 iframe-cols".split(" ").map(e => col_1.classList.add(e));
            col_1.innerHTML = video_iframe_1 + remove_extras(datum.Video, 'video') + video_iframe_2;


            let col_2 = document.createElement('div');
            "col-md-6 px-4 text-cols".split(" ").map(e => col_2.classList.add(e));
            // col_2.style.fontSize = '0.9em';


            let title = document.createElement('div');
            title.classList.add('row');
            title.classList.add('no-gutters');
            title.innerHTML = "<h5>" + datum.Title + "</h5>";

            let people = document.createElement('div');
            people.classList.add('row');
            people.classList.add('no-gutters');
            people.innerHTML = "<p>" +
                "<b>Students: </b>" + datum.Students + "<br/>" +
                "<b>Advisors: </b>" + datum.Advisors +
                "</p>";

            let abstract = document.createElement('div');
            abstract.classList.add('row');
            abstract.classList.add('no-gutters');
            abstract.innerHTML = "<p>" + datum.Abstract + "</p>";


            let col_3 = document.createElement('div');
            "col-md-3 iframe-cols".split(" ").map(e => col_3.classList.add(e));
            col_3.innerHTML = "<iframe src='" + remove_extras(String(datum.Slides), 'slides') + "' frameborder='0' allowfullscreen></iframe>\n";

            col_2.appendChild(title);
            col_2.appendChild(people);
            col_2.appendChild(abstract);

            new_row.appendChild(col_1);
            new_row.appendChild(col_2);
            new_row.appendChild(col_3);

            // col_1.classList.add('h-100');
            // col_2.classList.add('h-100');
            // col_3.classList.add('h-100');
            // col_1.style.height = '100%';
            // col_2.style.height = '100%';
            // col_3.style.height = '100%';
            // new_row.appendChild(document.createElement('hr'));

            temp.appendChild(new_row);
            bodytag.appendChild(temp);
        }

    }
}

function load_page_number(no) {
    let total_items = Object.values(data).length;
    let total_pages = Math.ceil(total_items / els_per_page);
    console.log('total len of data', Object.values(data).length);
    console.log('changing page number to', no);
    if (no === -1) {
        load_baseline()
    } else {
        let start = no * 6;
        let end = (no * 6) + 5;
        from_no = start;
        to_no = end;
        let temp = document.getElementById('remove-me');
        let footer = document.getElementById('footer');
        let page_no_container = document.getElementById('page_no_container');
        temp.parentNode.removeChild(temp);
        footer.parentNode.removeChild(footer);
        page_no_container.parentNode.removeChild(page_no_container);
        load_projects(from_no, to_no);
        load_baseline();
        load_footer();
        document.getElementById('prev_btn').disabled = no === 0;
        document.getElementById('next_btn').disabled = no === total_pages - 1;
    }

    function load_baseline() {
        if (no === -1) {
            no = 0
        }
        let start = no * 6;
        let end = (no * 6) + 5;
        let page_flip_div = document.createElement('div');
        page_flip_div.classList.add('row');
        page_flip_div.classList.add('no-gutters');
        page_flip_div.classList.add('py-2');
        // page_flip_div.classList.add('mb-2');
        page_flip_div.classList.add('d-flex');
        page_flip_div.classList.add('align-items-center');
        page_flip_div.classList.add('justify-content-center');
        page_flip_div.setAttribute('id', 'page_no_container');

        let prev_col = document.createElement('div');
        prev_col.classList.add('col');
        prev_col.classList.add('d-flex');
        prev_col.classList.add('align-items-center');
        prev_col.classList.add('justify-content-end');
        // prev_col.setAttribute('id', 'prev_col');
        prev_col.innerHTML = "<button id='prev_btn' type='button' class='btn btn-light' onclick='load_page_number(" + (no - 1) + ")' disabled> < Previous </button>";

        let center_col = document.createElement('div');
        center_col.classList.add('col-3');
        center_col.classList.add('d-flex');
        center_col.classList.add('align-items-center');
        center_col.classList.add('justify-content-center');
        center_col.innerHTML = "<p class='m-0 text-center pageno-text' > Page <span class='pageno-span'>" + (no + 1) + "</span> of <span class='pageno-span'>" + total_pages + "</span><br/>Items <span class='pageno-span'>" + start + " - " + end + "</span> of <span class='pageno-span'>" + total_items + "</span> </p>";

        let next_col = document.createElement('div');
        next_col.classList.add('col');
        next_col.classList.add('d-flex');
        next_col.classList.add('align-items-center');
        next_col.classList.add('justify-content-start');
        // next_col.setAttribute('id', 'next_col');
        next_col.innerHTML = "<button id='next_btn' type='button' class='btn btn-light' onclick='load_page_number(" + (no + 1) + ")'> Next > </button>";

        page_flip_div.appendChild(prev_col);
        page_flip_div.appendChild(center_col);
        page_flip_div.appendChild(next_col);
        document.getElementsByTagName('body')[0].appendChild(page_flip_div);
    }
    // let div_content = "<a href='load_page_number("+(no-1)+")'> < Previous </a>"
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
    // console.log('temp and footer', temp, footer);
    if (temp !== null && footer !== null) {
        temp.parentNode.removeChild(temp);
        footer.parentNode.removeChild(footer);
        load_projects(from_no, to_no);
        load_footer();
    }
    for (let e of document.getElementsByTagName('option')) {
        if (e.value === type.value) {
            e.selected = true
        }
    }

}

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
    // console.log('needed', needed);
    return needed;
}