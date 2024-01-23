import styles from "./home.module.css";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import CallIcon from "@mui/icons-material/Call";

const Home = () => {
  return (
    <>
      <div className={styles.container1}>
      <div className={styles.innercontainer1}>
        <div className={styles.block1}>
          <p className={styles.intro}>HELLO, MY NAME IS</p>
          <p className={styles.name}>Aran Choudhary</p>
          <p className={styles.tech}>Web Developer</p>
          <div>
            <div className={styles.contact}>
              <MarkunreadIcon />
              <p>aranjaish2308@gmail.com</p>
            </div>
            <div className={styles.contact}>
              <CallIcon />
              <p>+91 8863075268</p>
            </div>
          </div>
        </div>
        <div className={styles.block2}>
          <div className={styles.imageblock}>
            {/* <img src="/images/logo.png" alt="" className={styles.image}/> */}
          </div>
        </div>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.innercontainer}>
          <div>
            <p className={styles.about}>About me</p>
            <p className={styles.desc}>
              I am an enthusiastic web developer based in New York, with a rich
              experience of over 6 years in website & product design.
            </p>
          </div>
          <div className={styles.block2}>
            <p className={styles.design}>I design professional & beautiful websites</p>
            <div className={styles.rightblock}>
              <p>
                With years of experience in graphic and web design I have
                mastered the skills of understanding client requirements
                according to the latest trends. I have worked with businesses
                from different niches so you can rely on me for yours.
              </p>
              <p>
                I’ve spent most of these years working across different areas of
                design like front-end development, landing pages, email design,
                app UI/UX, to my current role designing products for mobile
                platforms. Having worked on various projects that are already
                live, I can help you with the best possible suggestions and
                ideas that we can proceed with. With me, you aren’t forced to
                accept anything. I give you a variety of options we can work on
                together.
              </p>
              <p>READ MORE</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
