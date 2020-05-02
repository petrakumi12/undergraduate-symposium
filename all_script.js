let id_sheet_dict = {
    'Actuarial Mathematics': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRhVZ3LoAeHWs9zEVL7Jx6v0u1TL1qXZa35dwCsUQoUWpwIabWR8hBywVInbuAzTd5mwv_wxgtdXkwZ/pub?output=csv',
    'Aerospace Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQhuvJF-g6QNE5O2VNxkhPr0X-ZfwSV6D9ZhUyXpilw0GKDEzS_3u7cfqsarT0eRXf9vzXA_hWdim4M/pub?output=csv',
    // 'Applied Physics',
    'Architectural Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRuWoUw40JLPbwUc1ZYLvwQPaLWg0No4US_HUkLEO5NJ60PrCecYFW431qBppHOJWyxPJhBmU_oSitq/pub?output=csv',
    'Biochemistry': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ53GsL8dAGjFzXumvaPCqtGB2GXMxxpzJeHdyCRjrLSViPwZd75CyNkNdGtnlAQmICaFELCfUOiy5D/pub?output=csv',
    'Bioinformatics and Computational Biology': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTk8Q7Idd_UvzEo-EGKfmOwtJ9GiByaGTqRA33OpJ13oYdNBM99Bhl7BAbat6u3L2p1x2eJV6L6tQOq/pub?output=csv',
    'Biology and Biotechnology': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTL64e2xkpqnZKPJBeWWWeXE3x0T9fAG9APc0Y03vP8_ORc_aKT9T3poukU8boVTA-ywshTVRTudpDZ/pub?output=csv',
    'Biomedical Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQkiYlJ9_Dja7pthk45MqrWDNeubhTjWX-h4wHYj7ZdJ6sbivDv--fuCGrAVTWIZ9ArdBzUqQNze7ML/pub?output=csv',
    // 'Business': '',
    'Chemical Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQvoTILw6nFV29KCtVyGtygOIehOADIC1JSaSzz1Avu7qh5OdwtpOaJ9cpLVgzulBQWfSH4o6D9k0iw/pub?output=csv',
    'Chemistry': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTbk2pjr8PbSsMpEaME8Ijfom_qlIkV2RbX3rZp_xx_d8V3r4FBULyop1WohodQO8BzSUSiYeuvSzQz/pub?output=csv',
    'Civil Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTvog6WC_II4g4LhkasWBO8DH7QjXTlcrHPej8lYE3VCV96q7ZK40cinQmFq03KHtz_iuvHWJLqdeJl/pub?output=csv',
    'Computer Science': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSLIJvVof0MSysslccKf7AMKEpo2zkyxgy-Rm9jATHJr8-O2nL-46hKXSJ4dvFamXCuzmfOqDgULjvn/pub?output=csv',
    'Economic Science': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTwkEdkyCUaYpo045wSBsup59maERXSk4c2jvQLIrRmkaFbJq-WXFOMjYZFYNAEpwZegtqurufMSOPM/pub?output=csv',
    'Electrical and Computer Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTqlj-IlZUisqynwxiAOZ2fNidPAZM7XmLjVhSC94XzM4-mg5axsf7nlpJTipZnzGqjWHRszjSXTiUI/pub?output=csv',
    // 'Environmental and Sustainability Studies': '',
    'Environmental Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRS1uGb0ouBdi8LpbAzWoemqSrogzXERLkBsTuvvMNSUA9P23fhO8lE2WpCEHskLAqR_O6o-KgTEX_l/pub?output=csv',
    'Humanities and Arts': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQuZ2hkM2zJ2lEdVtTr2s7lIGph-QbJURqBdX5yOYY6X8ySvKTA-z4XeAHYN53Cs9hGICLOJor7aT9d/pub?output=csv',
    'Industrial Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRJEpb2tzsu3N_RZqYPC_BDlQlG30RPv7IsOA_88ww3S_CHq_0M-uWpign3MBzfIOWhBNMI_Cb0-NYn/pub?output=csv',
    'Interactive Media and Game Development': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQnuoibi2KnHGZm3VopNcXK8mKQmt2tCEQCkNCvmlC5ujngLuG-ESxKoF7Kc1tYtYSCTc3Ox7rwypKC/pub?output=csv',
    'Interdisciplinary Data Science': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRrgR14r8E1vAnGY1nD_LnDw6NXA8LuE8dcehLOqOE8Zci2nfWW3Z0oTUhRSKw1Mu-cCWCQZ_oDUlPN/pub?output=csv',
    // 'International and Global Studies': '',
    // 'Liberal Arts and Engineering': '',
    'Management Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSYuHUrsbAmuUz1pccekISJZ4FGVcoWIJAANRFrp3kJa2RSEHEzRtCvxC8l4MvIE_Yp9lyXo1-VqEnf/pub?output=csv',
    'Management Information Systems': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-hrVJN55z-9JZvBAq-DWMIJ93ZOtj2D61sCFvNkhah4mQohHdDlG5qFZ7sJYxib7OOVRe0rcFhXq7/pub?output=csv',
    'Mathematical Sciences': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQEjczsrNQBUgaJ0XapXiOYi_hrfnZQIaOGWCq6K5rbmbeMBCRbsFD4kmJVBNWnL8RrIjfoLW8wKpQ5/pub?output=csv',
    'Mechanical Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQtDLAg7cnFkz-lK89yNRZYpA1oywdW5f67eUrJ9pBBYvpgxs4KQ64ZV5RBcRj7FsAjHh8cT-DDU04d/pub?output=csv',
    // 'Mechanical Engineering': '../csvs/Mechanical Engineering.csv',
    'Physics': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTanesTtG31pD-X08ZzfzT582Juapy3pvjD8s5xkHZBPI71VgJVSkjhmlNYXq1LDTXyawphoNCu3Yj4/pub?output=csv',
    'Professional Writing': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTGnAssxk58p5SE4xAoyhjU-rZeFV2rOreqqtWDvyGtEgQl-RC7jMPVJWRWVBz18m-8u3gnihBIBRXG/pub?output=csv',
    'Psychological Science': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTjux6xw7DevO_uVafpszqbB_KrlqBorTDlbfRhKRL_stsBi7_QiKQwHKOcSVXEGgIWCL2U0-ScsaWW/pub?output=csv',
    'Robotics Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRJ4Y5ZsNUbvA0uUakMydf67w67VcO74JtGwqxGnpnnaIK4ObCEXOlIuNlNzqvexKEogwuojIloCJmL/pub?output=csv',
    // 'Society: '', Technology: '', and Policy': '',
    // 'Z Sample': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTF-eItKvpFsBhUK_3hM2ihYr3Yi34IgvxSAK_Pw6L8GGODkalJ5uFKidrDTLfC8uaZ5nNtI98Wb-tz/pub?output=csv'
};

let temp_video = '<div style="position: relative; padding-bottom: 56.25%; padding-top: 0px; height: 0; overflow: auto; -webkit-overflow-scrolling: touch;"><iframe id="ensembleEmbeddedContent_a_OxzZc3K0qtTJRKjRjabQ" src="https://video.wpi.edu/hapi/v1/contents/cdb1f36b-3797-4a2b-ad4c-944a8d18da6d/plugin?embedAsThumbnail=false&displayTitle=false&startTime=0&autoPlay=false&hideControls=true&showCaptions=false&displaySharing=false&displayAnnotations=false&displayAttachments=false&displayLinks=false&displayEmbedCode=false&displayDownloadIcon=false&displayMetaData=false&displayCredits=false&audioPreviewImage=false&displayCaptionSearch=false&displayViewersReport=false&displayAxdxs=false" title="Test Video" frameborder="0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" scrolling="no" allowfullscreen></iframe></div>'
let temp_slides = '<iframe src="https://onedrive.live.com/embed?cid=79B772C1E1351D3E&amp;resid=79B772C1E1351D3E%21130&amp;authkey=AHGdc_WwEorlx0o&amp;em=2&amp;wdAr=1.7777777777777777" width="350px" height="221px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>';


function load_header(first_page, add_sorting) {
    let header_div = document.createElement('div');
    "row no-gutters d-flex flex-row mx-4 my-4 d-flex align-items-center justify-content-center".split(" ").map(e => header_div.classList.add(e));

    let img_col = document.createElement('div');
    "col-2 d-flex align-items-center justify-content-end".split(" ").map(d => img_col.classList.add(d));
    img_col.style.height = '4em';
    img_col.style.marginLeft = '-4em';

    let img = document.createElement('img');
    img.setAttribute('src', 'wpi logo color - cropped.png');
    img.style.height = '100%';

    let col = document.createElement('div');

    let h2 = document.createElement('h2');
    h2.innerText = "WPI Virtual Undergraduate Research Showcase D 2020";
    "d-flex align-items-center justify-content-start mb-0 ml-4".split(" ").map(e => h2.classList.add(e));

    h2.addEventListener('mouseover', d => h2.style.color = "#ac2b37");
    h2.addEventListener('mouseout', d => h2.style.color = "#000000");
    if (!first_page) {
        img_col.style.height = '3.5em';
        img.setAttribute('src', '../wpi logo color - cropped.png');
        img_col.style.marginLeft = '-5em';
        col.classList.add('col-6');
        h2.addEventListener('click', d => window.location.href = "../index.html");
        h2.style.fontSize = '1.5em';
    } else {
        col.classList.add('col-8');
    }

    header_div.appendChild(img_col);
    img_col.appendChild(img);
    header_div.appendChild(col);
    col.appendChild(h2);
    document.getElementsByTagName('body')[0].appendChild(header_div);

    if (add_sorting) {
        add_sorting_elements(header_div)
    }
}

function load_title(title) {
    let title_div = document.createElement('div');
    "row align-items-center justify-content-center no-gutters mt-3 mb-3 mx-3 text-center title-row".split(" ").map(e => title_div.classList.add(e));

    let title_h3 = document.createElement('h3');
    title_h3.classList.add('text-center');
    title_h3.innerText = title;

    title_div.appendChild(title_h3);
    document.getElementsByTagName('body')[0].appendChild(title_div);
}


function add_search_button(is_firstpage) {
    let btn_col = document.createElement('div');
    "row no-gutters align-items-center justify-content-around my-3".split(" ").map(d => btn_col.classList.add(d));
    document.getElementsByClassName('title-row')[0].classList.remove('mb-3');
    document.getElementsByClassName('title-row')[0].classList.add('mb-1');

    let btn = document.createElement('button');
    btn.innerText = "Search all projects";
    let loc = is_firstpage ? 'search.html' : '../search.html';
    btn.onclick = function (e) {
        e.preventDefault();
        window.location.href = loc
    };

    if (is_firstpage) {
        "btn btn-sm btn-light".split(" ").map(d => btn.classList.add(d));
        btn.style.width = '45%';

        let other_btn = document.createElement('button');
        "btn btn-sm btn-light".split(" ").map(d => other_btn.classList.add(d));
        other_btn.style.width = '45%';
        other_btn.innerHTML = 'A word from the Dean of Undergraduate Studies';
        other_btn.setAttribute('data-toggle', "modal");
        other_btn.setAttribute('data-target', "#exampleModalLong");
        other_btn.onclick = function () {
            showhide_card_text()
        };

        btn_col.appendChild(other_btn);
    } else {
        "btn btn-sm btn-block btn-light".split(" ").map(d => btn.classList.add(d));
    }
    btn_col.appendChild(btn);
    document.getElementsByTagName('body')[0].appendChild(btn_col);
}

function load_footer() {
    let footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');
    footer.style.backgroundColor = '#ac2b37';
    "page-footer white mt-2 py-1 fixed-bottom"
        .split(" ")
        .map(e => footer.classList.add(e));


    let adiv_1 = document.createElement('div');
    adiv_1.style.opacity = 0.9;
    adiv_1.innerHTML = 'Office of Undergraduate Research | Worcester Polytechnic Institute  | <a class="text-white" href="https://www.wpi.edu"> <u>wpi.edu</u></a> '
    // '<br/> Organized by: Prof. Suzanne L. Weekes, Associate Dean of Undergraduate Studies | Ally M. Salvino \'22 |  Petra Kumi \'20';
    "col footer-copyright text-center text-white pl-3 footer-text"
        .split(" ")
        .map(e => adiv_1.classList.add(e));

    let adiv_2 = document.createElement('div');
    adiv_2.style.opacity = 0.7;
    adiv_2.innerHTML = 'Organizers: &nbsp &nbsp Prof. Suzanne L. Weekes, Associate Dean of Undergraduate Studies &nbsp &nbsp Ally M. Salvino \'22 &nbsp &nbsp Petra Kumi \'20';
    "col footer-copyright text-center text-white pr-3 footer-text"
        .split(" ")
        .map(e => adiv_2.classList.add(e));

    footer.appendChild(adiv_1);
    footer.appendChild(adiv_2);
    document.getElementsByTagName('body')[0].appendChild(footer)
}


function load_project_entry(datum, container, in_search) {
    datum.Video === 'TBA' || datum.Video === 'TBD' ? datum.Video = temp_video : datum.Video = datum.Video
    datum.Slides === 'TBA' || datum.Slides === 'TBD' ? datum.Slides = temp_slides : datum.Slides = datum.Slides

    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(datum.Video, 'text/html');
    console.log('hi', htmlDoc);
    let video = htmlDoc.getElementsByTagName('iframe')[0].src;

    let new_row = document.createElement('div');
    "row no-gutters py-4 mx-3 new_row".split(" ").map(e => new_row.classList.add(e));

    let video_iframe_1 = '<div class="video-div"><iframe class="video" src="';
    let video_iframe_2 = '" frameborder="0" scrolling="no" allowfullscreen></iframe></div>';
    // let video_iframe_search_1 = "<div class='video-div'><iframe class='video' src='";
    // let video_iframe_search_2 = " frameborder='0' scrolling='no' allowfullscreen></iframe></div>";

    let col_1 = document.createElement('div');
    "col-lg-3 iframe-cols".split(" ").map(e => col_1.classList.add(e));
    col_1.innerHTML = video_iframe_1 + video + video_iframe_2;


    let col_2 = document.createElement('div');
    "col-lg-6 px-4 text-cols".split(" ").map(e => col_2.classList.add(e));
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
    "col-lg-3 iframe-cols".split(" ").map(e => col_3.classList.add(e));
    col_3.innerHTML = String(datum.Slides);

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
    if (in_search) {
        document.getElementById('project-info').innerHTML = "";
        document.getElementById('project-info').appendChild(new_row);
        // console.log('here', datum.Video, datum.Video.split("style=")[0].src);
    } else {
        container.appendChild(new_row);
        document.getElementsByTagName('body')[0].appendChild(container);
    }

}

// function remove_extras(iframe_tag, type) {
//     if (type === 'video') {
//         if (iframe_tag.includes('youtube')) {
//             type = 'frameborder'
//         }
//         else if (iframe_tag.includes('wpi')) {
//             type = 'title';
//         }
//     } else {
//         type = 'width';
//     }
//     needed = iframe_tag;
//     if (needed.includes("src=")) {
//         needed = iframe_tag.match(new RegExp('src=(.*)' + type))[0];
//         needed = needed.replace('src=', "");
//         needed = needed.replace(type, "");
//         needed = needed.replace(/\"/g, "");
//     }
//     // console.log('needed', needed);
//     return needed;
// }

function add_sorting_elements(header_div) {
    console.log('adding sorting');
    let sort_col = document.createElement('div');
    sort_col.classList.add('col');

    let sort_dropdown_div = document.createElement('div');
    sort_dropdown_div.classList.add('dropdown');

    let dropdown_label = document.createElement('label');
    dropdown_label.setAttribute('for', 'filter-dropdown');
    dropdown_label.innerText = 'Sort By:';

    let dropdown_select = document.createElement('select');
    dropdown_select.classList.add('custom-select');
    dropdown_select.setAttribute('id', 'filter-dropdown');
    dropdown_select.onchange = sort_data(dropdown_select);

    let firstoption = document.createElement('option');
    firstoption.selected = true;
    firstoption.innerText = 'Default';
    firstoption.disabled = true;

    dropdown_select.appendChild(firstoption);

    let option_vals = ['title', 'advisor', 'random'];
    let option_text = ['Project Title', 'Advisor Name', 'Random'];

    for (let i = 0; i < 3; i++) {
        let otheroption = document.createElement('option');
        otheroption.setAttribute('value', option_vals[i]);
        otheroption.innerText = option_text[i];
        dropdown_select.appendChild(otheroption)
    }

    sort_col.appendChild(sort_dropdown_div);
    sort_dropdown_div.appendChild(dropdown_label);
    sort_dropdown_div.appendChild(dropdown_select);
    header_div.appendChild(sort_col)
}


function showhide_card_text(show) {
    console.log('calleddd');
    let card_texts = document.getElementsByClassName('centered');
    for (let a_text of card_texts) {
        if (show) {
            a_text.style.zIndex = 10;
        } else {
            a_text.style.zIndex = -1;
        }
    }

}