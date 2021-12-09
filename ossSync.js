const fs = require('fs')
const OSS = require('ali-oss')
const {
    OSS_REGION,
    OSS_BUCKET,
    OSS_KEY,
    OSS_SECRET,
    OSS_URL,
} = process.env;
console.log(OSS_REGION, OSS_BUCKET)

const client = new OSS({
    region: OSS_REGION, // 创建 bucket 选择的区域
    bucket: OSS_BUCKET, // bucket名称
    accessKeyId: OSS_KEY, // accessKeyId
    accessKeySecret: OSS_SECRET, // accessKeySecret
});

function getLocalFileList(basePath) {
    console.log(`current path is:${basePath}`)
    const fileNamelist = fs.readdirSync(basePath)
    console.log(fileNamelist)
    let result = []
    fileNamelist.forEach(name => {
        const file = basePath + name
        const statsObj = fs.statSync(file);
        if (statsObj.isFile()) {
            result.push(file)
        } else {
            result = result.concat(getLocalFileList(file + '/'));
        }
    })
    return result;
}

async function putOneFile(fileName, dir) {
    try {
      const result = await client.put(fileName, dir);
      console.log(OSS_URL + result.name);
    } catch (e) {
      console.log(e);
    }
}

function main() {
    console.log('ossSync working...')
    const fileList = getLocalFileList(__dirname + '/dist/')
    console.log(fileList)
    for(const file of fileList) {
        const tempList = file.split('dist/')
        const fileName = tempList[-1]
        putOneFile(fileName, file)
    }
    console.log('ossSync completed!')
}

main()
