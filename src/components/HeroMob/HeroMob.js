import React from 'react';
import * as styles from './HeroMob.module.css';
import Button from '../Button';
import { Link } from 'gatsby';

const HeroMob = (props) => {
  const {
    title,
    subtitle,
    ctaText,
    ctaAction,
    image,
    maxWidth,
    ctaStyle,
    ctaLink,
    ctaTo,
    header,
  } = props;
  return (
    <div className={styles.rootMob} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.contentMob} style={{ maxWidth: maxWidth }}>
        {header && <span className={styles.headerMob}>{header}</span>}
        {title && <h2 className={styles.titleMob}>{title}</h2>}
        {subtitle && <span className={styles.subtitleMob}>{subtitle}</span>}
        {ctaText && (
          <Button
            className={`${styles.ctaButtonMob} ${ctaStyle}`}
            level={'primary'}
            onClick={ctaAction}
          >
            {ctaText}
          </Button>
        )}
        {ctaLink && (
          <Link className={styles.ctaLinkMob} to={ctaTo}>
            {ctaLink}
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeroMob;
