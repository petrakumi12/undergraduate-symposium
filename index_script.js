let dept_arr = ['Actuarial Mathematics',
    'Aerospace Engineering',
    'Applied Physics',
    'Architectural Engineering',
    'Biochemistry',
    'Bioinformatics and Computational Biology',
    'Biology and Biotechnology',
    'Biomedical Engineering',
    'Business',
    'Chemical Engineering',
    'Chemistry and Biochemistry',
    'Civil Engineering',
    'Computer Science',
    'Data Science',
    'Economics',
    'Electrical and Computer Engineering',
    'Environmental and Sustainability Studies',
    'Environmental Engineering',
    'Humanities and Arts',
    'Industrial Engineering',
    'Interactive Media and Game Development',
    'International and Global Studies',
    'Liberal Arts and Engineering',
    'Management Engineering',
    'Management Information Systems',
    'Mathematical Sciences',
    'Mechanical Engineering',
    'Physics',
    'Psychology',
    'Robotics Engineering',
    'Society, Technology, and Policy',
    'Writing',
    'Z Sample'
];
window.onload = function () {
    console.log('window width', window.innerWidth)
    load_grid();
    window.onresize = function () {
            console.log('window width', window.innerWidth)
        if (window.innerWidth < 518) {
            for (let e of document.getElementsByClassName('content-row')) {
                e.style.height = '100%'
            }
        } else {
             for (let e of document.getElementsByClassName('content-row')) {
                e.style.height = '25vh'
            }
            for (let e of document.getElementsByClassName('content-col')) {
                e.classList.remove('col-12');
                e.classList.add('col-md-3');
            }

        }
    }
};


function load_grid() {

    let container_tag = document.getElementById('append-grid');
    for (let i = 0; i < Math.ceil(dept_arr.length / 4); i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        row.classList.add('no-gutters');
        row.classList.add('px-3');
        row.classList.add('content-row');
        row.style.minHeight = "25vh";
        row.style.width = "100vw";

        for (let j = 0; j < 4; j++) {
            let idx = (i * 4) + j;
            if (idx < dept_arr.length) {
                let col = document.createElement('div');
                col.classList.add('col-3');
                // col.classList.add('px-1');
                col.classList.add('text-center');
                col.classList.add('content-col');
                // col.style.height = '100%';
                col.style.width = '100%';

                let button = document.createElement('button');
                button.setAttribute('type', 'button');
                button.classList.add('btn');
                button.classList.add('p-0');
                button.style.height = '100%';
                button.style.width = '100%';
                button.onclick = d => window.location.href = generate_page_name(dept_arr[idx]);

                let title_row = document.createElement('div');
                title_row.classList.add('centered');
                title_row.innerHTML = "<h3 id='h-" + String(idx) + "' style='font-size: 1.3em'>" + dept_arr[idx] + "</h3>";

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

                if (window.innerWidth <= 980) { //different styling for mobile devices with smaller screens
                    console.log('less than 980');
                    row.style.height = '100%';
                    col.classList.remove('col-md-3');
                    col.classList.add('col-12');
                    button.style.width = '100%';
                    img.style.width = '100%';
                }

                button.addEventListener('mouseover', function () {
                    // document.getElementById('i-'+String(idx)).style.transition = 'transform 1.3s';
                    // document.getElementById('i-'+String(idx)).style.transform = 'scale (1.5)';
                    document.getElementById('h-' + String(idx)).style.transition = 'font-size 0.3s';
                    document.getElementById('h-' + String(idx)).style.fontSize = '1.5em';
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
    // setTimeout(function(){
    //     AOS.init()
    // },1000)
    load_footer();

}

function generate_page_name(input) {
    input = input.replace(/ /g, "-");
    input = input.replace(/'/g, "");
    input = input.replace(/,/g, "");
    return 'dept-pages/' + input.toLowerCase() + '.html';
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