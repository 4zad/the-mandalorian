import { memo } from 'react';
import classnames from 'classnames';

import styles from './Menu.module.scss';

export type Props = {
  className?: string;
  menuContent: {
    pageOne: string;
    pageTwo: string;
    pageThree: string;
    contactDesc: {
      title: string;
      number: string;
      email: string;
    };
    addressDesc: {
      title: string;
      description: string;
    };
    followDesc: {
      title: string;
      description: string;
    };
  };
};

function Menu({ className, menuContent }: Props) {
  return (
    <div className={classnames(styles.Menu, className)}>
      <div className={styles.menuWrapper}>
        <div className={styles.infoWrapper}>
          <div className={styles.infoSection}>
            <p className={styles.title}>{menuContent.contactDesc.title}</p>
            <p className={styles.desc}>{menuContent.contactDesc.number}</p>
            <p className={styles.desc}>{menuContent.contactDesc.email}</p>
          </div>
          <div className={styles.infoSection}>
            <p className={styles.title}>{menuContent.addressDesc.title}</p>
            <p className={styles.desc}>{menuContent.addressDesc.description}</p>
          </div>
          <div className={styles.infoSection}>
            <p className={styles.title}>{menuContent.followDesc.title}</p>
            <p className={styles.desc}>{menuContent.followDesc.description}</p>
          </div>
        </div>
        <div className={styles.pagesWrapper}>
          <p className={styles.pageTitle}>{menuContent.pageOne}</p>
          <p className={styles.pageTitle}>{menuContent.pageTwo}</p>
          <p className={styles.pageTitle}>{menuContent.pageThree}</p>
        </div>
      </div>
    </div>
  );
}

export default memo(Menu);
