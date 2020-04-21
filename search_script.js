let id_sheet_dict = {
    'Z Sample': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTF-eItKvpFsBhUK_3hM2ihYr3Yi34IgvxSAK_Pw6L8GGODkalJ5uFKidrDTLfC8uaZ5nNtI98Wb-tz/pub?output=csv',
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
    'Writing': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRlJgTaErdWSeF1cWUkU_odm9gCn4lKaxsX2mgy7JhzDsX0CV3rTnUhWhDiDkHn44ccW329FM2k6TDc/pub?output=csv'
};

// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Search function
var search, results, allProjects = [];

// Checkboxes
var indexOnAuthorCheckbox = document.getElementById('indexOnAuthorCheckbox');
var indexOnTitleCheckbox = document.getElementById('indexOnTitleCheckbox');
var indexOnAdvisorsCheckbox = document.getElementById('indexOnAdvisorsCheckbox');
var indexOnMajorCheckbox = document.getElementById('indexOnMajorCheckbox');

var rebuildAndRerunSearch = function () {
    rebuildSearchIndex();
    searchProjects();
};


// Rerun on filter parameter change
indexOnAuthorCheckbox.onchange = rebuildAndRerunSearch;
indexOnTitleCheckbox.onchange = rebuildAndRerunSearch;
indexOnAdvisorsCheckbox.onchange = rebuildAndRerunSearch;
indexOnMajorCheckbox.onchange = rebuildAndRerunSearch;

/**
 * Rebuild search functionality with selected parameters
 */
var rebuildSearchIndex = function () {
    search = new JsSearch.Search('Submission_time');

    search.indexStrategy = new JsSearch.PrefixIndexStrategy();
    search.sanitizer = new JsSearch.LowerCaseSanitizer();
    search.searchIndex = new JsSearch.TfIdfSearchIndex('Presentation Number');

    if (indexOnTitleCheckbox.checked) {
        search.addIndex('Title');
    }
    if (indexOnAuthorCheckbox.checked) {
        search.addIndex('Students');
    }
    if (indexOnAdvisorsCheckbox.checked) {
        search.addIndex('Advisors');
    }
    if (indexOnMajorCheckbox.checked) {
        search.addIndex('Major');
    }

    search.addDocuments(allProjects);
};

var indexedProjectsTable = document.getElementById('indexedProjectsTable');
var indexedProjectsTBody = indexedProjectsTable.tBodies[0];
var searchInput = document.getElementById('searchInput');
var bookCountBadge = document.getElementById('bookCountBadge');

/**
 * Update table with search results
 * @param projects
 */
var updateProjectTable = function (projects) {
    indexedProjectsTBody.innerHTML = '';

    var tokens = search.tokenizer.tokenize(searchInput.value);

    for (var i = 0, length = projects.length; i < length; i++) {
        const project = projects[i];

        var titleColumn = document.createElement('td');
        titleColumn.innerHTML = project.Title;

        var authorColumn = document.createElement('td');
        authorColumn.innerHTML = project.Students;

        var advisorColumn = document.createElement('td');
        advisorColumn.innerText = project.Advisors;

        var majorColumn = document.createElement('td');
        majorColumn.innerText = project.Major;

        var tableRow = document.createElement('tr');
        tableRow.appendChild(titleColumn);
        tableRow.appendChild(authorColumn);
        tableRow.appendChild(advisorColumn);
        tableRow.appendChild(majorColumn);

        tableRow.onclick = function(){
            const datum = project;
            modal.style.display = "block";
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

                document.getElementById('project-info').innerHTML = "";
                document.getElementById('project-info').appendChild(new_row);
            }

        };
        indexedProjectsTBody.appendChild(tableRow);
    }
};

/**
 * Update number of search results and table
 */
var updateProjectCountAndTable = function () {
    updateProjectCount(results.length);

    if (results.length > 0) {
        updateProjectTable(results);
    } else if (!!searchInput.value) {
        updateProjectTable([]);
    } else {
        updateProjectCount(allProjects.length);
        updateProjectTable(allProjects);
    }
};

var searchProjects = function () {
    results = search.search(searchInput.value);
    updateProjectCountAndTable();
};

searchInput.oninput = searchProjects;

var updateProjectCount = function (numProjects) {
    bookCountBadge.innerText = numProjects + ' projects';
};
var hideElement = function (element) {
    element.className += ' hidden';
};
var showElement = function (element) {
    element.className = element.className.replace(/\s*hidden/, '');
};

window.onload = function () {
    loadResults().then(() => {
        updateProjectCount(allProjects.length);
        var loadingProgressBar = document.getElementById('loadingProgressBar');
        hideElement(loadingProgressBar);
        showElement(indexedProjectsTable);
        rebuildSearchIndex();
        updateProjectTable(allProjects);
    });
};

/**
 * Load project google sheet csv values
 * @returns {Promise<void>}
 */
async function loadResults() {
    for (let dept in id_sheet_dict) {
        await fetch(id_sheet_dict[dept])
            .then(response => response.blob())
            .then(blob => {
                let a = document.createElement('a');
                a.href = window.URL.createObjectURL(blob);
                d3.csv(a.href).then(d => {
                        allProjects = allProjects.concat(d);
                    }
                )
            });
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
