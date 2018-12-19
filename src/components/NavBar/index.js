import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import get from 'lodash.get';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withRouter } from 'react-router';

class NavBar extends React.Component {

  static getDerivedStateFromProps(props, state) {
    return {
      taskName: get(props, 'location.state.task.name'),
      path: get(props, 'location.pathname'),
    };
  }

  render() {
    const { taskName, path } = this.state;
    const { location } = this.props;
    return (
      <Breadcrumb size="massive" style={{ alignItems: 'center' }}>
        <React.Fragment>
          <Breadcrumb.Section as={NavLink} to="/account" style={{ color: '#002882' }}>
            <SvgIcon style={{ color: '#002882' }}>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
          </Breadcrumb.Section>
          {taskName && <Breadcrumb.Divider style={{ margin: '0 10px', color: '#999' }} />}
        </React.Fragment>
        {taskName ? (
          <React.Fragment>
            <Breadcrumb.Section
              as={NavLink}
              to={{ pathname: path, state: { ...location.state } }}
              style={{ color: '#002882' }}
            >
              {taskName}
            </Breadcrumb.Section>
          </React.Fragment>
        ) : null}
      </Breadcrumb>
    );
  }
}

export default withRouter(NavBar);
