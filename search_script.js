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


window.onload = function () {
    update_globals();
    loadResults().then(() => {
        download(allProjects, 'all_data.csv', 'type: ".csv"');
        updateProjectCount(allProjects.length);
        let loadingProgressBar = document.getElementById('loadingProgressBar');
        hideElement(loadingProgressBar);
        showElement(indexedProjectsTable);
        rebuildSearchIndex();
        // updateProjectTable(allProjects);
        load_footer();
        document.getElementById('footer').style.fontSize = '1.5em';
        document.getElementsByTagName('h2')[0].onclick = function (e) {
            e.preventDefault();
            window.location.href = 'index.html'
        }
    })
};


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
let updateProjectCountAndTable = function () {
    updateProjectCount(results.length);

    if (results.length > 0) {
        updateProjectTable(results);
    } else if (!!searchInput.value) {
        updateProjectTable([]);
    }
    else {
        updateProjectCount(allProjects.length);
        updateProjectTable([]);
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

    $("form").keypress(function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            return false;
        }
    });

    searchInput.oninput = searchProjects;
}


/**
 * Load project google sheet csv values
 * @returns {Promise<void>}
 */
async function loadResults() {
    for (let dept in id_sheet_dict) {
        await fetch(id_sheet_dict[dept])
            .then(response =>  response.blob())
            .then(blob => {
                let a = document.createElement('a');
                a.href = window.URL.createObjectURL(blob);
                d3.csv(a.href).then(d => {
                        d.forEach(e => {
                            for(let el of Object.keys(e)){
                                e[el] = e[el].replace(/"/g, "'");
                            }
                        });
                        allProjects = allProjects.concat(d);
                    }
                )
            });
    }
}

async function loadFromCsv() {
    await d3.csv('csvs/all_data.csv').then(d => {
            allProjects = allProjects.concat(d);
        }
    );
}


function download(content, filename, type) {
    const items = content;
    const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
    const header = Object.keys(items[0]);
    let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    console.log('csv here', csv);
    csv.unshift(header.join(','));
    csv = csv.join('\r\n');

    var a = document.createElement("a");
    var file = new Blob([csv], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click()
}

//"<div style='position: relative; padding-bottom: 56.25%; padding-top: 0px; height: 0; overflow: auto; -webkit-overflow-scrolling: touch;'><iframe id='ensembleEmbeddedContent_hIK-4HG0LkCwZHXSvpWFug' src='https://video.wpi.edu/hapi/v1/contents/e0be8284-b471-402e-b064-75d2be9585ba/plugin?embedAsThumbnail=false&displayTitle=false&startTime=0&autoPlay=false&hideControls=true&showCaptions=false&displaySharing=false&displayAnnotations=false&displayAttachments=false&displayLinks=false&displayEmbedCode=false&displayDownloadIcon=false&displayMetaData=false&displayCredits=false&audioPreviewImage=false&displayCaptionSearch=false&displayViewersReport=false&displayAxdxs=false' title='76-DeMaio' frameborder='0' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;' scrolling='no' allowfullscreen></iframe></div>"
