import { Button, message, Upload, UploadProps } from "antd";

const props: UploadProps = {
    name: 'file',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
const AntdFileUpload = () => {


    return (
        <Upload
            beforeUpload={(file) => {
                console.log('from uploader', file)
                const gotKbSize = Math.ceil(file.size / 1024)
                console.log(gotKbSize)
                if (gotKbSize > 100) {
                    return false
                }
            }}
            listType="picture-card"
            accept=".jpg" {...props}>
            <Button>Click to Upload</Button>
        </Upload>
    );
};

export default AntdFileUpload;