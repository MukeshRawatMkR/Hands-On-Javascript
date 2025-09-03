//IQ: Exercise solution:


function download(url, callback) {
    console.log(`downloading from ${url}`);
    setTimeout(() => {
        console.log("data downloaded");
        let data = "sample data";
        callback?.(data);//?. is optional chaining, which means if callback is not null or undefined, it will be called with data.
    }, 3000);
};

function writeFile(data, fileName, callback) {//filename tell the name of the file to be created in which data will be written.
    console.log(`writing ${data} to file`);
    setTimeout(() => {
        console.log(`file written on filename ${fileName}`);
        let status = "success";
        callback?.(status);
    }, 2000);
};

function uploadFile(fileName, url, callback) {
    console.log(`uploading the file ${fileName} in ${url}`);
    setTimeout(() => {
        console.log(`file uploaded to ${url}`);
        let uploadStatus = "success";
        callback?.(uploadStatus);
    }, 3000);
};

function process() {
    download("https://example.com", (data) => {
        writeFile(data, "file.txt", (status) => {
            uploadFile("file.txt", "https://example1.com/upload", (uploadStatus) => {
                console.log(`Process completed with status: ${uploadStatus}`);
            });
        });
    });
}

process();



//nextfile: solution using Promises.