const fs = require('fs')
const OSS = require('ali-oss')

const {
    OSS_REGION,
    OSS_BUCKET,
    OSS_KEY,
    OSS_SECRET,
    OSS_URL,
} = process.env;

const client = new OSS({
    region: OSS_REGION, // 创建 bucket 选择的区域
    bucket: OSS_BUCKET, // bucket名称
    accessKeyId: OSS_KEY, // accessKeyId
    accessKeySecret: OSS_SECRET, // accessKeySecret
});

function getLocalFileList(path) {
    const basePath = path + '/dist'
    const fileNamelist = fs.readFileSync(basePath)
    const result = []
    fileNamelist.forEach(name => {
        const file = basePath + '/' + name
        const statsObj = fs.statSync(file);
        if (statsObj.isFile()) {
            result.push(file)
        } else {
            result.concat(getLocalFileList(file));
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
    const fileList = getLocalFileList(__dirname)
    for(const file of fileList) {
        const tempList = file.split('dist/')
        const fileName = tempList[-1]
        putOneFile(fileName, file)
    }
}

main()
