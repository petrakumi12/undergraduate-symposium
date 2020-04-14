function load_header(first_page, add_sorting) {
    let header_div = document.createElement('div');
    "row no-gutters mx-4 my-4 d-flex align-items-center justify-content-center"
        .split(" ")
        .map(e => header_div.classList.add(e));

    let col = document.createElement('div');
    col.classList.add('col-10');

    let h2 = document.createElement('h2');
    h2.innerText = "WPI Virtual Undergraduate Research Showcase D 2020";
    "d-flex align-items-center justify-content-center text-center"
        .split(" ")
        .map(e => h2.classList.add(e));

    h2.addEventListener('mouseover', d => h2.style.color = "#ac2b37");
    h2.addEventListener('mouseout', d => h2.style.color = "#000000");
    if(!first_page) {h2.addEventListener('click', d => window.location.href = "../index.html")}

    header_div.appendChild(col);
    col.appendChild(h2);
    document.getElementsByTagName('body')[0].appendChild(header_div);

    if (add_sorting) {
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




        //      <div class="col-2">
        //     <div class="dropdown">
        //         <label for="filter-dropdown">Sort By:</label>
        //         <select class="custom-select" id="filter-dropdown" onchange="sort_data(this)">
        //             <option selected disabled>Default</option>
        //             <option value="title">Project Title</option>
        //             <option value="advisor">Advisor Name</option>
        //             <option value="random">Random</option>
        //         </select>
        //     </div>
        // </div>
    }
}

function load_title(title) {
    let title_div = document.createElement('div');
    "row align-items-center justify-content-center no-gutters m-3 text-center"
        .split(" ")
        .map(e => title_div.classList.add(e));

    let title_h3 = document.createElement('h3');
    title_h3.classList.add('text-center');
    title_h3.innerText = title;

    title_div.appendChild(title_h3);
    document.getElementsByTagName('body')[0].appendChild(title_div);

}

function load_footer() {
    let footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');
    footer.style.backgroundColor = '#ac2b37';
    footer.style.borderTop = "2px solid"+ "#701c23";
    "page-footer font-small white"
        .split(" ")
        .map(e => footer.classList.add(e));

    let adiv = document.createElement('div');
    adiv.innerHTML = 'Worcester Polytechnic Institute  <br/><a class="text-white" href="https://www.wpi.edu"> <u>wpi.edu</u></a>';
    "footer-copyright text-center text-white py-1"
        .split(" ")
        .map(e => adiv.classList.add(e));

    footer.appendChild(adiv);
    document.getElementsByTagName('body')[0].appendChild(footer)
}
