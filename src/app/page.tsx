import styles from "./home.module.css";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import CallIcon from "@mui/icons-material/Call";
import ForwardIcon from '@mui/icons-material/Forward';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

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
              <MarkunreadIcon className={styles.icon}/>
              <p>aranjaish2308@gmail.com</p>
            </div>
            <div className={styles.contact}>
              <CallIcon className={styles.icon}/>
              <p>+91 8863075268</p>
            </div>
          </div>
        </div>
        <div className={styles.block2}>
          <div className={styles.imageblock}>
            <img src="/images/logo.png" alt="" className={styles.image}/>
          </div>
        </div>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.innercontainer}>
          <div>
            <p className={styles.about}>About me</p>
            <p className={styles.desc}>
              I am an enthusiastic web developer based in Haridwar, Uttrakhand, with a rich
              experience in website.
            </p>
          </div>
          <div className={styles.block2}>
            <div className={styles.design}>
              <p className={styles.content}>I design professional & beautiful websites</p>
            </div>
            <div className={styles.rightblock}>
              <p className={styles.middlecontent}>
                With years of experience in web design I have
                mastered the skills of understanding client requirements
                according to the latest trends. I have worked with businesses
                from different niches so you can rely on me for yours.
              </p>
              <p className={styles.middlecontent}>
                I’ve spent most of these years working across different areas of
                design like front-end development, landing pages, and Responsive Design
                .Having worked on various projects that are already
                live, I can help you with the best possible suggestions and
                ideas that we can proceed with. With me, you aren’t forced to
                accept anything. I give you a variety of options we can work on
                together.
              </p>
              <p className={styles.read}>READ MORE</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container3}>
       <div className={styles.innercontainer1}>
        <div>
          <p className={styles.title}>What I do</p>
          <div className={styles.second}>
            <p className={styles.about2}>From understanding your requirements, designing a blueprint and delivering the final product, I do everything that falls in between these lines.</p>
            <ForwardIcon className={styles.arrow}/>
          </div>
          <div className={styles.lower}>
              <div className={styles.block}>
                <BorderColorIcon className={styles.icon}/>
                <div className={styles.lowerblocks}>
                   <p className={styles.techstack}>UI/UX DESIGN</p>
                   <p className={styles.details}>An effective UI/UX is what captures attention and spreads a clear message. 
                    I make sure the design is innovative and neat with all of this.
                   </p>
                </div>
              </div>
              <div className={styles.block}>
                <PhonelinkIcon className={styles.icon}/>
                <div className={styles.lowerblocks}>
                   <p className={styles.techstack}>WEB DEVELOPMENT</p>
                   <p className={styles.details}>If you are looking for a developer who’ll take over the research and development 
                    of your website, I am a well-established professional to help you with this.
                   </p>
                </div>
              </div>
              <div className={styles.block}>
                <PhoneAndroidIcon className={styles.icon}/>
                <div className={styles.lowerblocks}>
                   <p className={styles.techstack}>APP DEVELOPMENT</p>
                   <p className={styles.details}>If you are looking for a user-friendly app that will attract more mobile users, 
                    I can help you design and build a platform with the latest and trendiest look and feel.
                   </p>
                </div>
              </div>
          </div>
          </div>
       </div>
      </div>
    </>
  );
};

export default Home;
