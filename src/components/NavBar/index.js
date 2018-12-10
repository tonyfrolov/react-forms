import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import SvgIcon from '@material-ui/core/SvgIcon';

const NavBar = props => {
  const content = [];
  for (let i = 0; i < props.nav.length; i++) {
    const item =
      i === 0 ? (
        <SvgIcon style={{ color: '#002882' }}>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
      ) : (
        props.nav[i][1]
      );
    if (i + 1 === props.nav.length) {
      content.push(
        <Breadcrumb.Section
          key={i}
          as={NavLink}
          onClick={() => props.rollBackNavBar(i)}
          to={props.nav[i][0]}
          style={{ color: '#002882' }}
        >
          {item}
        </Breadcrumb.Section>,
      );
    } else {
      content.push(
        <React.Fragment key={i}>
          <Breadcrumb.Section
            as={NavLink}
            onClick={() => props.rollBackNavBar(i)}
            to={props.nav[i][0]}
            style={{ color: '#002882' }}
          >
            {item}
          </Breadcrumb.Section>
          <Breadcrumb.Divider style={{ margin: '0 10px', color: '#999' }} />
        </React.Fragment>,
      );
    }
  }

  return (
    <Breadcrumb size="massive" style={{ alignItems: 'center' }}>
      {content}
    </Breadcrumb>
  );
};

export default NavBar;
