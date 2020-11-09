import React, { useEffect } from 'react';
import { Button, Card, Dropdown, Icon, Menu, message } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { IPageData, IPageProps } from '../../../interfaces/page-data';
const PageDropdowns: React.FC<IPageProps> = props => {
  const { onSetPage } = props;

  const handleButtonClick = () => {
    message.info('Left button clicked');
  };

  const pageData: IPageData = {
    title: 'Dropdowns',
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
        title: 'Dropdowns'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  const menu = (
    <Menu>
      <Menu.Item>
        <a target='_blank' rel='noopener noreferrer' href='#'>
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target='_blank' rel='noopener noreferrer' href='#'>
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target='_blank' rel='noopener noreferrer' href='#'>
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  const menuWithDivider = (
    <Menu>
      <Menu.Item key='0'>
        <a target='_blank' rel='noopener noreferrer' href='#'>
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item key='1'>
        <a target='_blank' rel='noopener noreferrer' href='#'>
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='3' disabled>
        3rd menu item（disabled）
      </Menu.Item>
    </Menu>
  );

  const userMenu = (
    <Menu>
      <Menu.Item key='1'>
        <Icon type='user' />
        1st menu item
      </Menu.Item>
      <Menu.Item key='2'>
        <Icon type='user' />
        2nd menu item
      </Menu.Item>
      <Menu.Item key='3'>
        <Icon type='user' />
        3rd item
      </Menu.Item>
    </Menu>
  );

  const { SubMenu } = Menu;

  const cascadingMenu = (
    <Menu>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
      <SubMenu title='Sub menu'>
        <Menu.Item>3rd menu item</Menu.Item>
        <Menu.Item>4th menu item</Menu.Item>
      </SubMenu>
      <SubMenu title='Disabled sub menu' disabled>
        <Menu.Item>5d menu item</Menu.Item>
        <Menu.Item>6th menu item</Menu.Item>
      </SubMenu>
    </Menu>
  );

  return (
    <>
      <Card className='component-demo-card' title='Basic dropdown'>
        <Dropdown overlay={menu}>
          <a className='ant-dropdown-link' href='#'>
            Hover me <Icon type='down' />
          </a>
        </Dropdown>
      </Card>
      <Card className='code-demo-card'>
        <SyntaxHighlighter language='jsx' style={docco}>
          {'<Dropdown overlay={menu}>\n' +
            " <a className='ant-dropdown-link' href='#'>\n" +
            "   Hover me <Icon type='down' />\n" +
            ' </a>\n' +
            '</Dropdown>'}
        </SyntaxHighlighter>
      </Card>
      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <Card title='Custom menu'>
            <Dropdown overlay={menuWithDivider}>
              <a className='ant-dropdown-link' href='#'>
                Hover me <Icon type='down' />
              </a>
            </Dropdown>
          </Card>
        </div>

        <div className='col-md-6 col-sm-12'>
          <Card title='Trigger by click'>
            <Dropdown overlay={menuWithDivider} trigger={['click']}>
              <a className='ant-dropdown-link' href='#'>
                Hover me <Icon type='down' />
              </a>
            </Dropdown>
          </Card>
        </div>

        <div className='col-md-6 col-sm-12'>
          <Card title='Cascading menu'>
            <Dropdown overlay={cascadingMenu}>
              <a className='ant-dropdown-link' href='#'>
                Hover me <Icon type='down' />
              </a>
            </Dropdown>
          </Card>
        </div>

        <div className='col-md-6 col-sm-12'>
          <Card title='Context menu'>
            <Dropdown overlay={menuWithDivider} trigger={['contextMenu']}>
              <a className='ant-dropdown-link' href='#'>
                Right click on me <Icon type='down' />
              </a>
            </Dropdown>
          </Card>
        </div>

        <div className='col-sm-12'>
          <Card title='Dropdown placement'>
            <div className='elem-list'>
              <Dropdown overlay={menu} placement='bottomLeft'>
                <Button>bottomLeft</Button>
              </Dropdown>

              <Dropdown overlay={menu} placement='bottomCenter'>
                <Button>bottomCenter</Button>
              </Dropdown>

              <Dropdown overlay={menu} placement='bottomRight'>
                <Button>bottomRight</Button>
              </Dropdown>

              <Dropdown overlay={menu} placement='topLeft'>
                <Button>topLeft</Button>
              </Dropdown>

              <Dropdown overlay={menu} placement='topCenter'>
                <Button>topCenter</Button>
              </Dropdown>

              <Dropdown overlay={menu} placement='topRight'>
                <Button>topRight</Button>
              </Dropdown>
            </div>
          </Card>
        </div>

        <div className='col-sm-12'>
          <Card title='Custom menu' className='mb-0'>
            <div className='elem-list'>
              <Dropdown.Button onClick={handleButtonClick} overlay={userMenu}>
                Dropdown
              </Dropdown.Button>

              <Dropdown.Button
                onClick={handleButtonClick}
                overlay={userMenu}
                icon={<Icon type='user' />}>
                Dropdown
              </Dropdown.Button>

              <Dropdown.Button overlay={menu} disabled>
                Dropdown
              </Dropdown.Button>
              <Dropdown overlay={userMenu}>
                <Button>
                  Button <Icon type='down' />
                </Button>
              </Dropdown>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PageDropdowns;
