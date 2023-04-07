import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'CS',
    Svg: require('@site/static/img/myLogo.svg').default,
    description: (
      <>
        CS 기초 이론 정리
      </>
    ),
  },
  {
    title: 'TIL',
    Svg: require('@site/static/img/myLogo.svg').default,
    description: (
      <>
        TIL(Today I Learning) 기록
      </>
    ),
  },
  {
    title: 'Algorithm',
    Svg: require('@site/static/img/myLogo.svg').default,
    description: (
      <>
       Beakjun, Programmers, SWEA, LeetCode 풀이
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}