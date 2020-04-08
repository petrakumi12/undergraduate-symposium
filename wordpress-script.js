let allhtml = "";
window.onload = function () {
    d3.csv('symposium-sample.csv').then(data => {
        for (let datum of Object.values(data)) {
            if (datum.Abstract !== undefined) {
                htmlel =
                    '<div class="row flex-row-container">\n' +
                    '<div class="col flex-row-item">\n  ' +
                    '<iframe src="' + datum.Video + '" frameborder="0">\n' +
                    '</iframe>' +
                    '</div>\n' +
                    '<div class="col flex-row-item">\n' +
                    '<p>\n' +
                    '<b>Students: </b>' + datum.Students + '<br/>\n' +
                    '<b>Advisors: </b>' + datum.Advisor + '<br/>\n' +
                    datum.Abstract + '\n</p>\n' +
                    '</div>\n' +
                    '<div class="col flex-row-item">\n' +
                    '<iframe src="' + datum.Slides + '" mozallowfullscreen="true" webkitallowfullscreen="true" frameborder="0">\n' +
                    '</iframe>\n' +
                    '</div>\n' +
                    '</div>\n';
                allhtml += htmlel
            }
        }
        // print(allhtml)
        console.log(allhtml)
        let blob = new Blob([allhtml],
                { type: "text/plain;charset=utf-8" });
        saveAs(blob, "output.txt");

    });
}

