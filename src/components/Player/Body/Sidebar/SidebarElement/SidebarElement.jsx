import React from 'react';
import styles from './SidebarElement.module.css';

const SidebarElement = ({ playlist, text, Icon }) => {
  return (
    <div className={styles.sidebarElement}>
      {playlist ? (
        <div className={styles.paylist}>
          <h5>{text}</h5>
        </div>
      ) : (
        <div className={styles.element}>
          {Icon}
          {''}
          <h5>{text}</h5>
        </div>
      )}
    </div>
  );
};

export default SidebarElement;
