import React from "react";
// @ts-ignore
import styles from './index.module.scss'
import { headers } from './config'

import { useRouter } from 'next/router'
import Link from "next/link";

export default function Header() {

  const { pathname } = useRouter()

  return (
    <div className={ styles.navbar}>
      <section className={styles['logo-area']}>BLOG</section>
      <section className={styles.linkArea}>
        {
          headers?.map(nav => (
            <Link key={nav?.label} href={nav?.path}>
              <span className={ pathname === nav?.path ? styles.active : ''}>{nav?.label}</span>
            </Link>
          ))
        }

      </section>
    </div>
  );
}
