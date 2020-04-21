// Modal
var modal, btn, span;

// Table
var indexedProjectsTable, indexedProjectsTBody, searchInput, bookCountBadge = "";

//Listeners
var updateProjectCount, hideElement, showElement = "";

// Search function
var search, results, allProjects = [];

// Checkboxes
var indexOnAuthorCheckbox, indexOnTitleCheckbox, indexOnAdvisorsCheckbox, indexOnMajorCheckbox = "";

var rebuildAndRerunSearch = function () {
    rebuildSearchIndex();
    searchProjects();
};

/**
 * Rebuild search functionality with selected parameters
 */
var rebuildSearchIndex = function () {
    search = new JsSearch.Search('Submission Code');

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

        tableRow.onclick = function () {
            const datum = project;
            modal.style.display = "block";
            if (datum.Abstract !== undefined) {
                load_project_entry(datum, null, true)
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


function update_globals() {

    //Modal
    modal = document.getElementById("myModal");
    btn = document.getElementById("myBtn");
    span = document.getElementsByClassName("close")[0];

    //Table
    indexedProjectsTable = document.getElementById('indexedProjectsTable');
    indexedProjectsTBody = indexedProjectsTable.tBodies[0];
    searchInput = document.getElementById('searchInput');
    bookCountBadge = document.getElementById('bookCountBadge');

    // Checkboxes
    indexOnAuthorCheckbox = document.getElementById('indexOnAuthorCheckbox');
    indexOnTitleCheckbox = document.getElementById('indexOnTitleCheckbox');
    indexOnAdvisorsCheckbox = document.getElementById('indexOnAdvisorsCheckbox');
    indexOnMajorCheckbox = document.getElementById('indexOnMajorCheckbox');

    // Rerun on filter parameter change
    indexOnAuthorCheckbox.onchange = rebuildAndRerunSearch;
    indexOnTitleCheckbox.onchange = rebuildAndRerunSearch;
    indexOnAdvisorsCheckbox.onchange = rebuildAndRerunSearch;
    indexOnMajorCheckbox.onchange = rebuildAndRerunSearch;

    updateProjectCount = function (numProjects) {
        bookCountBadge.innerText = numProjects + ' projects';
    };
    hideElement = function (element) {
        element.className += ' hidden';
    };
    showElement = function (element) {
        element.className = element.className.replace(/\s*hidden/, '');
    };

    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    searchInput.oninput = searchProjects;
}

window.onload = function () {
    load_header(true, false);
    load_title(document.title);
    load_container_elements();
    load_modal_elements();
    update_globals();
    loadResults().then(() => {
        updateProjectCount(allProjects.length);
        var loadingProgressBar = document.getElementById('loadingProgressBar');
        hideElement(loadingProgressBar);
        showElement(indexedProjectsTable);
        rebuildSearchIndex();
        updateProjectTable(allProjects);
        load_footer();
        document.getElementById('footer').style.fontSize = '1.5em';
        document.getElementsByTagName('h2')[0].onclick = function(e){ e.preventDefault(); window.location.href = 'index.html'}
    })
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
                        console.log('all projects', allProjects)
                    }
                )
            });
    }
}


function load_container_elements() {
    let inner_html = '<div class="container mb-b pb-2" id="myContainer"">' +
        '<ul class="list-inline row d-flex align-items-center justify-content-center " style="width: 100%;">' +
        '        <li class="col text-center">Projects indexed by:</li>' +
        '        <li class="col text-center"><input type="checkbox" checked id="indexOnTitleCheckbox"> Title</li>' +
        '        <li class="col text-center"><input type="checkbox" checked id="indexOnAuthorCheckbox"> Students</li>' +
        '        <li class="col text-center"><input type="checkbox" checked id="indexOnAdvisorsCheckbox"> Advisors</li>' +
        '        <li class="col text-center"><input type="checkbox" checked id="indexOnMajorCheckbox"> Major</li>' +
        '</ul>' +
        '' +
        '        <form>' +
        '            <div class="form-group">' +
        '                <label for="searchInput">' +
        '                    Filter text\n' +
        '                    <span id="bookCountBadge" class="badge"></span>' +
        '                </label>\n' +
        '                <input class="form-control" type="search" id="searchInput" placeholder="Search..">' +
        '            </div>' +
        '        </form>' +
        '' +
        '        <table id="indexedProjectsTable" class="table table-striped table-condensed hidden">' +
        '            <thead>' +
        '            <tr>' +
        '                <th>Title</th>' +
        '                <th>Students</th>' +
        '                <th>Advisors</th>' +
        '                <th>Major</th>' +
        '            </tr>' +
        '            </thead>' +
        '            <tbody>' +
        '' +
        '            </tbody>' +
        '        </table>' +
        '' +
        '        <div id="loadingProgressBar" class="progress">\n' +
        '            <div class="progress-bar progress-bar-striped active"\n' +
        '                 role="progressbar"' +
        '                 aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">' +
        '                Loading projects...' +
        '            </div>' +
        '        </div>' +
        '    </ul>' +
        '</div>';
    document.getElementsByTagName('body')[0].innerHTML+=inner_html;
}

function load_modal_elements() {

    document.getElementsByTagName('body')[0].innerHTML += '<div id="myModal" class="modal">' +
        '<div class="modal-content">\n' +
        '        <span class="close">&times;</span>' +
        '        <div id="project-info"></div>' +
        '    </div>' +
        '</div>';
}

