//Exercise solution:

var file;
function downloadFile(){
    console.log("Downloading file...");
    setTimeout(() => {
        file = "file content";
    }, 2000);
}

function writeFile(file){
    setTimeout(() => {
        console.log("Writing to file...");
        file = "File content extended";
        console.log(file);
    }, 3000);
}

function upload(file){
    setTimeout(() => {
        console.log("Uploading file...");
        // console.log(file);
        console.log("file is uploaded");
    }, 4000);
}

downloadFile(writeFile(upload()));

// let process = downloadFile();

//  process();writeFile(upload())
