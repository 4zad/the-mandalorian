import { memo } from 'react';
import classnames from 'classnames';
import Link from 'next/Link';
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
          <Link href="/">
            <a className={styles.pageTitle}>{menuContent.pageOne}</a>
          </Link>
          <Link href="/404">
            <a className={styles.pageTitle}>{menuContent.pageTwo}</a>
          </Link>
          <Link href="/404">
            <a className={styles.pageTitle}>{menuContent.pageThree}</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(Menu);
