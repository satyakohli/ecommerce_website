import React from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const UploadComponent = () => {
  const checkFileType = file => {
    const isImage = file.type.startsWith('image/');
    const isDocument = file.type.startsWith('application/pdf') || file.type.startsWith('application/msword');
    const isExcel = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    
    if (!isImage && !isDocument && !isExcel) {
      message.error('You can only upload image, document, and Excel files!');
    }
    
    return isImage || isDocument || isExcel;
  };

  const handleChange = info => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <Upload
      beforeUpload={checkFileType}
      onChange={handleChange}
      showUploadList={false}
      accept="image/*, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" // Restrict to image, document, and Excel files
    >
      <Button icon={<UploadOutlined />}>Upload Images, Documents, or Excel Files</Button>
    </Upload>
  );
};

export default UploadComponent;
