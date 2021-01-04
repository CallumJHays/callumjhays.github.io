import Head from "next/head";
import { GithubActivity } from "components/GithubActivity";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        {/* external deps? in 2020? yikes. */}
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/octicons/2.0.2/octicons.min.css"
        />
        <link rel="stylesheet" href="github-activity-0.1.5.min.css" />

        <script
          type="text/javascript"
          src="//cdnjs.cloudflare.com/ajax/libs/mustache.js/0.7.2/mustache.min.js"
        ></script>
        <script
          type="text/javascript"
          src="github-activity-0.1.5.min.js"
        ></script>
      </Head>

      {/* <main className={styles.main}>
        <h1 className={styles.title}>Cal Hays</h1>

        <p className={styles.description}>Mechatronics Engineer | Web Dev</p>
        <p>Tech Blog, Resume</p>

        <div className={styles.githubfeed}>
          <GithubActivity />
        </div>
      </main> */}
    </div>
  );
}
