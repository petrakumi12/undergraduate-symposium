let dept_arr = [
    'Actuarial Mathematics',
    'Aerospace Engineering',
    'Architectural Engineering',
    'Biochemistry',
    'Bioinformatics and Computational Biology',
    'Biology and Biotechnology',
    'Biomedical Engineering',
    'Chemical Engineering',
    'Civil Engineering',
    'Computer Science',
    'Interdisciplinary Data Science',
    'Economic Science',
    'Electrical and Computer Engineering',
    'Environmental Engineering',
    'Humanities and Arts',
    'Industrial Engineering',
    'Interactive Media and Game Development',
    'Management Engineering',
    'Management Information Systems',
    'Mathematical Sciences',
    'Mechanical Engineering',
    'Physics',
    'Professional Writing',
    'Psychological Science',
    'Robotics Engineering'
];
let small_screen = 700;

window.onload = function () {
    //check if we're on mobile
    console.log('mobile?', is_mobile());
    // console.log('window width', window.innerWidth);
    //load header
    //load header
    load_header(true, false);
    //load title
    load_title('Major Qualifying Projects and Undergraduate Research');
    //add to body the div where content will be loaded
    add_search_button(true);
    add_content_div();
    //load grid with all departments
    load_grid();
    //add resize window listener if on pc to change layout on small screens
    if (!is_mobile()) {
        window.onresize = function () {
            console.log('window width', window.innerWidth);
            if (window.innerWidth < small_screen) {
                console.log('window resized to less than 980');
                for (let e of document.getElementsByClassName('content-row')) {
                    e.style.height = '100%'
                }
                for (let e of document.getElementsByClassName('content-col')) {
                    e.classList.remove('col-md-3');
                    e.classList.add('col-12');
                }

            }
            else {
                console.log('window resized to over 980');
                for (let e of document.getElementsByClassName('content-row')) {
                    e.style.height = '25vh';
                    // e.style.maxHeight = '25vh'
                }
                for (let e of document.getElementsByClassName('content-col')) {
                    e.classList.remove('col-12');
                    e.classList.add('col-md-3');
                    e.style.maxHeight = '100%'
                }
                for (let e of document.getElementsByTagName('img')) {
                    e.style.objectFit = 'cover';
                    e.style.zIndex = -10
                }
            }
        }
    }
};

function add_content_div() {
    let content_div = document.createElement('div');
    content_div.setAttribute('id', "append-grid");
    for (let e of "row w-100 no-gutters pb-5 mb-4".split(" ")) {
        content_div.classList.add(e)
    }
    document.getElementsByTagName('body')[0].appendChild(content_div)

}

function load_grid() {

    let container_tag = document.getElementById('append-grid');
    for (let i = 0; i < Math.ceil(dept_arr.length / 4); i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        row.classList.add('no-gutters');
        row.classList.add('px-3');
        row.classList.add('content-row');
        row.style.width = "100vw";

        (is_mobile() || window.innerWidth < small_screen) ? row.style.height = '100%' : row.style.minHeight = "25vh";

        for (let j = 0; j < 4; j++) {
            let idx = (i * 4) + j;
            if (idx < dept_arr.length) {
                let col = document.createElement('div');
                // col.classList.add('px-1');
                col.classList.add('text-center');
                col.classList.add('content-col');
                // col.style.height = '100%';
                col.style.width = '100%';

                let title_row = document.createElement('div');
                title_row.classList.add('centered');

                if (is_mobile() || window.innerWidth < small_screen) { //different styling for mobile devices with smaller screens
                    console.log('loading mobile layout');
                    col.classList.add('col-12');
                    if (is_mobile()) {
                        title_row.innerHTML = "<h3 class='card-text' id='h-" + String(idx) + "' style='font-size: 2em'>" + dept_arr[idx] + "</h3>";
                    } else {
                        title_row.innerHTML = "<h3 class='card-text' id='h-" + String(idx) + "' style='font-size: 1.3em'>" + dept_arr[idx] + "</h3>";
                    }
                } else {
                    console.log('loading pc layout');
                    col.classList.add('col-3');
                    title_row.innerHTML = "<h3 class='card-text' id='h-" + String(idx) + "' style='font-size: 1.3em'>" + dept_arr[idx] + "</h3>";
                }

                let button = document.createElement('button');
                button.setAttribute('type', 'button');
                button.classList.add('btn');
                button.classList.add('p-0');
                button.style.height = '100%';
                button.style.width = '100%';
                button.onclick = d => window.location.href = generate_page_name(dept_arr[idx]);

                // title_row.style.fontSize = '0.5em';

                let img = document.createElement('img');
                img.classList.add('img-fluid');
                img.classList.add('darker');
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                img.src = 'imgs' + '/' + dept_arr[idx].toLowerCase() + '.jpg';

                row.appendChild(col);
                col.appendChild(button);
                button.appendChild(title_row);
                button.appendChild(img);

                button.addEventListener('mouseover', function () {
                    // document.getElementById('i-'+String(idx)).style.transition = 'transform 1.3s';
                    // document.getElementById('i-'+String(idx)).style.transform = 'scale (1.5)';
                    document.getElementById('h-' + String(idx)).style.transition = 'font-size 0.3s';
                    document.getElementById('h-' + String(idx)).style.fontSize = '1.4em';
                });
                button.addEventListener('mouseout', function () {
                    img.style.transition = 'transform 1.3s';
                    img.style.transform = 'scale (1)';
                    document.getElementById('h-' + String(idx)).style.transition = 'font-size 0.3s';
                    document.getElementById('h-' + String(idx)).style.fontSize = '1.3em';
                })
            }
        }

        container_tag.appendChild(row);
    }
    load_footer();
}

function generate_page_name(input) {
    input = input.replace(/ /g, "-");
    input = input.replace(/'/g, "");
    input = input.replace(/,/g, "");
    return 'dept-pages/' + input.toLowerCase() + '.html';
}

function is_mobile() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};