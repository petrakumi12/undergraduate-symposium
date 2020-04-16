let bodytag = "";
let data = "";
let els_per_page = 6;
let from_no = 0;
let to_no = 5;

let id_sheet_dict = {
    // 'Actuarial Mathematics',
    // 'Aerospace Engineering',
    // 'Applied Physics',
    // 'Architectural Engineering',
    'Biochemistry': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTDWiNOLFPQ7VZmGXMOfh8J7no-YbqBgRq13_znjIJccgfrav8nQ3ysQBbuixY79J83mj6d-FgD0mro/pub?output=csv',
    'Bioinformatics and Computational Biology': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTL_CZxzvjMxHcDvPtq1jP2jwf6Z9BKFHRx1XjItdg2asCPnHBEqE5LLwL9QZErbJysDz-U0PKIbsdi/pub?output=csv',
    'Biology and Biotechnology': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQcNv0mLg4QeshSXak6xXExhnHezeZOUQWO7Py2fzQSsYvQc7jBqL7e1mVWYGIS7Hgmg7lUzP-jEIqz/pub?output=csv',
    'Biomedical Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRp4Abu18hUZI-pl4JWrBJdE1mnVOwU1Z8EAKOhefNbES_4M3g44uqR4jXFn85-J4NsH5JovK0lhjZZ/pub?output=csv',
    // 'Business': '',
    'Chemical Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTfy-p-PSivR3BZn4FV0E_N4bVLgQ7_Tgta35TY5xeD0R2e4i1Kq_q_eexCTZpRZjGKeOf8ngMHiUO8/pub?output=csv',
    'Chemistry and Biochemistry': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSe4Bu0fLf7ioNfZZoMJ01WaTwzGQi6oPTOquuPVJyavSPKqjFfEDoQOBfHNWXD3Dn4aLG0QfQU7vVq/pub?output=csv',
    'Civil Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRlZ384TboLmlLotzvKxl3EGkj0uWzDpChJzUXZy3VI5c-00HVQ_x51BcG_OvTm8le2_YPP4MNZKL3X/pub?output=csv',
    'Computer Science': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0UaA8nyi4TkE07ErcDGyR9aCAbudBZBhZv9Tkbcr3W2AftD8rOWCJeZMgsP0yhFuXE8R-mTMDpZfa/pub?output=csv',
    'Data Science': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR1MWHpX0Ggbkp5QQ1AlHUqrRorIId-hONj1tY7J77SBixM_7uQRaUg_e2ho5LocWY5Ol4xuDrr85Qi/pub?output=csv',
    'Economic Science': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQeTZ-_ZF0wyx0zdq7O-YKifQx9Qcqlbn9iiNR6vl4fGJgasZImb7zVqbFiVUWhvBhOuuWOug68DKJA/pub?output=csv',
    'Electrical and Computer Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTWdIyrr8eOHN0iAbCb75AeEisZ3xy2G7pGS0jq117Vhyrare-91rd18zpbiajwO7oY3bM9mSAlho8F/pub?output=csv',
    // 'Environmental and Sustainability Studies': '',
    'Environmental Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS58MGAwjqCuw15-Mn1ve47E-Uj3c6X5vKhHiioIBwc4TVM749ug7ob2pt3tK06FcdqRutj41zh9OQS/pub?output=csv',
    'Humanities and Arts': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRdhk_V7pKYaZvzwrlI3Am7GRaNMSG1_Q59IkD3z_JF9mpAq-86KBItACLfuVkh6fFaG_Pey44ebxF2/pub?output=csv',
    'Industrial Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSjWbF6kc0C7FEUUfvGYUEpIN_Ah-T_cuNRHzN2exGbaN9DUA7S3UwokyK5oIoEYvpdgzjkkICymXPv/pub?output=csv',
    'Interactive Media and Game Development': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSrY7vesdEYel1xNHUDPPfvyHXbtDJui4LKCXGAF0nPtiPeFJwL9eNFo221FE1qVeolWMwfhxFbxMww/pub?output=csv',
    // 'International and Global Studies': '',
    // 'Liberal Arts and Engineering': '',
    'Management Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTOt8t-VjhWM85nTeFLJJ6k-dae0xuJgw7PRRqME8KeqkUdGYqsYWSw347S7tmvCuQfUNY15B1i2la6/pub?output=csv',
    'Management Information Systems': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQPxZ72ZDP_jkzt9PdCgYOEwDGFOSScpmB3gVkWmDeb3q1x_K81bsu4EEVRg_rU2VA7X7VoN2of74sb/pub?output=csv',
    'Mathematical Sciences': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQuGWj_t75hCcvWcPwGwIasHkRrooY0856HxLfi_0j2eBwQLSaWX5d-rQ1zuiae_Zkopzrk_yZ8wYUT/pub?output=csv',
    'Mechanical Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQuGWj_t75hCcvWcPwGwIasHkRrooY0856HxLfi_0j2eBwQLSaWX5d-rQ1zuiae_Zkopzrk_yZ8wYUT/pub?output=csv',
    'Physics': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQOZHVv52mhGUFHEGwwE1R8QXHzvTjJ4xXHYxxUCC0fxNNh1oaWrAYanfmjmJMVKOU8d2hGnWle_dAo/pub?output=csv',
    'Psychological Science': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRgcF1lfMUhJJ0mgcXNyiJ9Cbf9ug9BexcYYYIURGbXZBBLlwtuyA9j2xLcSYGMLb5xnDDFFscmWnaw/pub?output=csv',
    'Robotics Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSfWIbK1dT_1c5V5vLuVZ8njlfVzgKGZ0yhFnv2RHJP7ecCV8FrEInycVo0m2uha2ZsM68eLd1f4rX2/pub?output=csv',
    // 'Society: '', Technology: '', and Policy': '',
    'Writing': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRlJgTaErdWSeF1cWUkU_odm9gCn4lKaxsX2mgy7JhzDsX0CV3rTnUhWhDiDkHn44ccW329FM2k6TDc/pub?output=csv',
    'Z Sample': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTF-eItKvpFsBhUK_3hM2ihYr3Yi34IgvxSAK_Pw6L8GGODkalJ5uFKidrDTLfC8uaZ5nNtI98Wb-tz/pub?output=csv'
}
let temp_video = '<div style="position: relative; padding-bottom: 56.25%; padding-top: 0px; height: 0; overflow: auto; -webkit-overflow-scrolling: touch;"><iframe id="ensembleEmbeddedContent_a_OxzZc3K0qtTJRKjRjabQ" src="https://video.wpi.edu/hapi/v1/contents/cdb1f36b-3797-4a2b-ad4c-944a8d18da6d/plugin?embedAsThumbnail=false&displayTitle=false&startTime=0&autoPlay=false&hideControls=true&showCaptions=false&displaySharing=false&displayAnnotations=false&displayAttachments=false&displayLinks=false&displayEmbedCode=false&displayDownloadIcon=false&displayMetaData=false&displayCredits=false&audioPreviewImage=false&displayCaptionSearch=false&displayViewersReport=false&displayAxdxs=false" title="Test Video" frameborder="0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" scrolling="no" allowfullscreen></iframe></div>'
let temp_slides = '<iframe src="https://onedrive.live.com/embed?cid=79B772C1E1351D3E&amp;resid=79B772C1E1351D3E%21130&amp;authkey=AHGdc_WwEorlx0o&amp;em=2&amp;wdAr=1.7777777777777777" width="350px" height="221px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>'

window.onload = function () {
    //load header
    load_header(false, false);
    //load title
    load_title(document.title);
    //load content
    fetch(id_sheet_dict[document.title])
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

            datum.Video==='TBA'||datum.Video==='TBD' ? datum.Video = temp_video : datum.Video = datum.Video
            datum.Slides==='TBA'||datum.Slides==='TBD' ? datum.Slides = temp_slides : datum.Slides = datum.Slides


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
            title.innerHTML = "<h5>" + datum['Presentation Number'] + ". " + datum.Title + "</h5>";

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
            abstract.innerHTML = "<p class='abstract-text'>" + datum.Abstract + "</p>";


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
    let total_items = Object.values(data).length-1;
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
        end > total_items ? end = (total_items-1) : end = end
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
        center_col.innerHTML = "<p class='m-0 text-center pageno-text' > Page <span class='pageno-span'>" + (no + 1) + "</span> of <span class='pageno-span'>" + total_pages + "</span><br/>Items <span class='pageno-span'>" + (start+1) + " - " + (end+1) + "</span> of <span class='pageno-span'>" + total_items + "</span> </p>";

        let next_col = document.createElement('div');
        next_col.classList.add('col');
        next_col.classList.add('d-flex');
        next_col.classList.add('align-items-center');
        next_col.classList.add('justify-content-start');
        // next_col.setAttribute('id', 'next_col');
        next_col.innerHTML = "<button id='next_btn' type='button' class='btn btn-light' onclick='load_page_number(" + (no + 1) + ")'> Next > </button>";
        if (end===total_items-1) {
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