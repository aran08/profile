import styles from "./footer.module.css";

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innercontainer}>
        <div className={styles.leftblock}>
          <p className={styles.top}>Based in haridwar, working worldwide.</p>
          <p className={styles.bottom}>Get in touch</p>
        </div>
        <div className={styles.rightblock}>
          <div className={styles.block1}>
            <p className={styles.types}>Social</p>
            <p>Github</p>
            <p>LinkedIn</p>
          </div>
          <div className={styles.block2}>
            <p className={styles.types}>Services</p>
            <p>Web Development</p>
            <p>App Development</p>
          </div>
        </div>
      </div>
      <p className={styles.copy}>Copyright © 2024 Aran Choudhary</p>
    </div>
  );
};

export default Page;
