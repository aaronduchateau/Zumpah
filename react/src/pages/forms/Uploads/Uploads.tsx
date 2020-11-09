import React, { useEffect, useState } from 'react';
import { Button, Card, Icon, message, Modal, Upload } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';
import { UploadProps } from 'antd/es/upload';

import './Uploads.scss';

const fileList: any = [
  {
    uid: '1',
    name: 'xxx.png',
    status: 'done',
    response: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/xxx.png'
  },
  {
    uid: '2',
    name: 'yyy.png',
    status: 'done',
    url: 'http://www.baidu.com/yyy.png'
  },
  {
    uid: '3',
    name: 'zzz.png',
    status: 'error',
    response: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/zzz.png'
  }
];

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text'
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
  }
};

const imageList: any = [
  {
    uid: '-1',
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  },
  {
    uid: '-2',
    name: 'yyy.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  }
];

const props1: UploadProps = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  listType: 'picture',
  defaultFileList: [...imageList]
};

const props2: UploadProps = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  listType: 'picture',
  defaultFileList: [...imageList],
  className: 'upload-list-inline'
};

const pictureList = [
  {
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  },
  {
    uid: '-2',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  },
  {
    uid: '-3',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  }
];

const { Dragger } = Upload;

const dragProps = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
function getBase64Async(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

const uploadButton = loading => (
  <div>
    <Icon style={{ fontSize: '32px' }} type={loading ? 'loading' : 'plus'} />
    <div className='ant-upload-text'>Upload</div>
  </div>
);

const AvatarUpload: React.FC<UploadProps> = props => {
  const [loading, setLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>(null);

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => {
        setImageUrl(imageUrl);
        setLoading(false);
      });
    }
  };

  return (
    <>
      <Upload
        name='avatar'
        listType='picture-card'
        className='avatar-uploader'
        showUploadList={false}
        action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
        beforeUpload={beforeUpload}
        onChange={handleChange}>
        {imageUrl ? (
          <img src={imageUrl} alt='avatar' style={{ width: '100%' }} />
        ) : (
          uploadButton(loading)
        )}
      </Upload>
    </>
  );
};

const PictureWall: React.FC<any> = props => {
  const [previewVisible, setPreviewVisibility] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState<any[]>(pictureList);

  const handleCancel = () => setPreviewVisibility(false);

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64Async(file.originFileObj);
    }

    setPreviewVisibility(true);
    setPreviewImage(file.url || file.preview);
  };

  const handleChange = ({ fileList }) => setFileList(fileList);

  const uploadButton = (
    <div>
      <Icon type='plus' />
      <div className='ant-upload-text'>Upload</div>
    </div>
  );

  return (
    <>
      <div className='clearfix'>
        <Upload
          action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
          listType='picture-card'
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}>
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
          <img alt='example' style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    </>
  );
};

const PageUploads: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Uploads',
    loaded: true,
    breadcrumbs: [
      {
        title: 'Home',
        route: 'dashboard'
      },
      {
        title: 'UI Kit ',
        route: 'dashboard'
      },
      {
        title: 'Uploads'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  return (
    <>
      <Card title='Basic upload' className='component-demo-card'>
        <Upload {...props}>
          <Button type='primary'>
            <Icon type='upload' /> Click to Upload
          </Button>
        </Upload>
      </Card>
      <Card className='code-demo-card'>
        <SyntaxHighlighter>
          {'<Upload {...props}>\n' +
            "  <Button type='primary'>\n" +
            "    <Icon type='upload' /> Click to Upload\n" +
            '  </Button>\n' +
            '</Upload>'}
        </SyntaxHighlighter>
      </Card>

      <div className='row'>
        <div className='col-md-12 col-lg-6'>
          <div className='row'>
            <div className='col-12'>
              <Card title='File list'>
                <Upload {...props} defaultFileList={fileList}>
                  <Button type='primary'>
                    <Icon type='upload' /> Click to Upload
                  </Button>
                </Upload>
              </Card>

              <Card title='Upload directory'>
                <Upload action='https://www.mocky.io/v2/5cc8019d300000980a055e76' directory>
                  <Button type='primary'>
                    <Icon type='upload' /> Upload Directory
                  </Button>
                </Upload>
              </Card>

              <Card title='Image list styles' className='mb-lg-0'>
                <Upload {...props1}>
                  <Button type='primary'>
                    <Icon type='upload' /> Upload
                  </Button>
                </Upload>
                <br />
                <br />
                <Upload {...props2}>
                  <Button type='primary'>
                    <Icon type='upload' /> Upload
                  </Button>
                </Upload>
              </Card>
            </div>
          </div>
        </div>

        <div className='col-md-12 col-lg-6'>
          <div className='row'>
            <div className='col-12'>
              <Card title='Avatar upload'>
                <AvatarUpload className='mb-0' />
              </Card>

              <Card title='Picture wall'>
                <PictureWall />
              </Card>

              <Card title='Drag n Drop' className='mb-0'>
                <Dragger {...dragProps}>
                  <p className="ant-upload-drag-icon">
                    <Icon style={{fontSize: '56px'}} type="inbox" />
                  </p>
                  <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload.
                  </p>
                </Dragger>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageUploads;
