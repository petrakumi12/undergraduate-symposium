let bodytag = "";
let data = "";
let els_per_page = 6;
let from_no = 0;
let to_no = 5;
let from_csv = false;
let download = true;


window.onload = function () {
    //load header
    load_header(false, false);
    //load title
    load_title(document.title);
    //load content
    add_search_button(false);
    if (!from_csv) {
        let data_source = id_sheet_dict[document.title];
        fetch(data_source)
            .then(response => response.blob())
            .then(blob => {
                    let a = document.createElement('a');
                    a.href = window.URL.createObjectURL(blob);
                    if (download) {
                        a.download = document.title + '.csv';
                        a.click()
                    } else {
                        d3.csv(a.href).then(d => {
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
                    }
                }
            );
    } else {
        d3.csv('../csvs/' + document.title + '.csv').then(d => {
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
    }
};

function load_projects(from_no, to_no) {
    let temp = document.createElement('div');
    temp.classList.add('mb-5');
    temp.classList.add('pb-5');
    temp.id = 'remove-me';
    let some_data = Object.values(data).slice(from_no, to_no + 1);
    for (let datum of some_data) {
        if (datum.Abstract !== undefined) {
            load_project_entry(datum, temp, false)
        }

    }
}

function load_page_number(no) {
    let total_items = Object.values(data).length - 1;
    let total_pages = Math.ceil(total_items / els_per_page);
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
        end >= total_items ? end = (total_items - 1) : end = end;
        let page_flip_div = document.createElement('div');
        page_flip_div.classList.add('row');
        page_flip_div.classList.add('no-gutters');
        page_flip_div.classList.add('mb-4');
        page_flip_div.classList.add('pb-4');
        page_flip_div.style.borderTop = "1px solid" + "#9e9d9e";

        page_flip_div.classList.add('fixed-bottom');
        page_flip_div.classList.add('bg-white');

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
        center_col.innerHTML = "<p class='m-0 text-center pageno-text' > Page <span class='pageno-span'>" + (no + 1) + "</span> of <span class='pageno-span'>" + total_pages + "</span><br/>Displaying <span class='pageno-span'>" + (start + 1) + " - " + (end + 1) + "</span> of <span class='pageno-span'>" + total_items + "</span> projects in this major</p>";

        let next_col = document.createElement('div');
        next_col.classList.add('col');
        next_col.classList.add('d-flex');
        next_col.classList.add('align-items-center');
        next_col.classList.add('justify-content-start');
        // next_col.setAttribute('id', 'next_col');
        next_col.innerHTML = "<button id='next_btn' type='button' class='btn btn-light' onclick='load_page_number(" + (no + 1) + ")'> Next > </button>";
        if (end === total_items - 1) {
            next_col.innerHTML = "<button id='next_btn' type='button' class='btn btn-light' onclick='load_page_number(" + (no + 1) + ")' disabled> Next > </button>";
        }

        page_flip_div.appendChild(prev_col);
        page_flip_div.appendChild(center_col);
        page_flip_div.appendChild(next_col);
        document.getElementsByTagName('body')[0].appendChild(page_flip_div);
    }

    // let div_content = "<a href='load_page_number("+(no-1)+")'> < Previous </a>"
}

function sort_data(type) {

    switch (type.value) {
        case 'title':
            data = data.slice().sort((a, b) => d3.ascending(a.Title, b.Title));
            break;
        case 'advisor':
            data = data.slice().sort((a, b) => d3.ascending(a.Advisor, b.Advisor));
            break;
        case 'random':
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
