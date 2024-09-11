import { motion } from "framer-motion";
export default function About() {
  return (
    /* CONTAINER */
    <motion.div
      className="h-full overflow-auto hide-scrollbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* ABOUT */}
      <div className="border-double border-4 border-[#3a86ff] rounded-lg p-3 text-[#adb5bd] shadow-md shadow-black">
        <p className=" m-0">
          I am a former SRE (Site Reliability Engineer) for a Cloud Engineering
          Team, but before that, I started as an intern. In my experience, I
          encountered many unfamiliar technologies, and it was a very fast-paced
          environment (well, because it’s one of the biggest companies in
          Silicon Valley).
        </p>
        <p>
          Working outside my comfort zone was very challenging, but the upside
          was that I learned a lot of new things. Why do I say "outside my
          comfort zone"? Before this role, I worked in I.T. technical support
          and then moved into Software Engineering, so suddenly jumping to SRE
          was completely new to me. It was the first time I had even heard of
          it—lol.
        </p>
        <p>
          However, as time went on, I began to feel like something was missing
          in my life. I missed writing code, struggling with bugs, and the
          rewarding feeling when you finally solve a problem—it’s like unlocking
          a new achievement—lol.
        </p>
        <p>
          Moving forward, my main focus these days is building web applications.
          I’ve been diligently working through my DIY web development bootcamp
          (focused on the MERN stack). I mostly enjoy creating the backbone of
          an app rather than the user interfaces, but I’m capable of doing both.
          When I’m not at the computer, I’m usually playing mobile MOBA and PC
          open-world games, hanging out with my wife and daughter, or watching
          anime and movies.
        </p>
        <p>
          I’m looking forward to the opportunity to work with your team. Thank
          you, and God bless!
        </p>
      </div>
      {/* CONTAINER */}
      <div className="m-0 p-0">
        {/* EXPERIENCE-1 */}
        {/* <motion.div
          className="myCard mt-[1.5rem]"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{
            x: window.innerWidth,
            transition: { duration: "1500ms" },
          }}
        > */}
        <h3>SRE</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          dignissim pharetra sapien non sodales. Praesent sapien nulla, cursus
          et laoreet non, posuere quis lacus. Maecenas mattis nec velit vitae
          iaculis. Sed dignissim posuere maximus. Mauris pellentesque, nisl vel
          vehicula hendrerit, tellus urna eleifend nunc, vel facilisis turpis
          massa id elit. Nam ornare ante vulputate, elementum massa eu, placerat
          sapien. Fusce varius id dolor a aliquam. Integer ut erat auctor justo
          vulputate tristique vitae vel felis. Donec id luctus velit, sit amet
          feugiat lorem. Fusce ullamcorper egestas ullamcorper.
        </p>
        <ul>
          <li>Git</li>
          <li>Github</li>
          <li>Cassandra</li>
          <li>Kafka</li>
          <li>Oracle</li>
          <li>Splunk</li>
          <li>Ansible</li>
          <li>Teamcity</li>
          <li>Linux</li>
          <li>AWS</li>
          <li>Grafana</li>
          <li>Prometheus Alertmanager</li>
          <li>DataStax OpsCenter</li>
          <li>Rio</li>
          <li>Mozart</li>
          <li>Confluence</li>
          <li>Slack</li>
          <li>Communication</li>
          <li>Teamwork</li>
        </ul>
        {/* </motion.div> */}
        {/* EXPERIENCE-2 */}
        {/* <motion.div
          className="myCard mt-[1.5rem]"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{
            x: window.innerWidth,
            transition: { duration: 2 },
          }}
        > */}
        <h3>Intern</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          dignissim pharetra sapien non sodales. Praesent sapien nulla, cursus
          et laoreet non, posuere quis lacus. Maecenas mattis nec velit vitae
          iaculis. Sed dignissim posuere maximus. Mauris pellentesque, nisl vel
          vehicula hendrerit, tellus urna eleifend nunc, vel facilisis turpis
          massa id elit. Nam ornare ante vulputate, elementum massa eu, placerat
          sapien. Fusce varius id dolor a aliquam. Integer ut erat auctor justo
          vulputate tristique vitae vel felis. Donec id luctus velit, sit amet
          feugiat lorem. Fusce ullamcorper egestas ullamcorper.
        </p>
        <ul>
          <li>Linux</li>
          <li>VMware</li>
          <li>Docker</li>
          <li>Jenkins</li>
          <li>JFrog</li>
          <li>Java</li>
          <li>Python</li>
          <li>Git</li>
          <li>Github</li>
          <li>Bash script</li>
          <li>Vim</li>
          <li>Splunk</li>
          <li>Cassandra</li>
          <li>Kafka</li>
          <li>Oracle</li>
          <li>Hadoop</li>
          <li>Apache Spark</li>
          <li>Ansible</li>
          <li>TeamCity</li>
          <li>AWS</li>
          <li>Kubernetes</li>
          <li>Spinaker</li>
          <li>Slack</li>
          <li>Zoom</li>
          <li>Communication</li>
          <li>Teamwork</li>
        </ul>
        {/* </motion.div> */}
        {/* EXPERIENCE-3 */}
        {/* <motion.div
          className="myCard mt-[1.5rem]"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{
            x: window.innerWidth,
            transition: { duration: 3 },
          }} 
        >*/}
        <h3>Software Enginner</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          dignissim pharetra sapien non sodales. Praesent sapien nulla, cursus
          et laoreet non, posuere quis lacus. Maecenas mattis nec velit vitae
          iaculis. Sed dignissim posuere maximus. Mauris pellentesque, nisl vel
          vehicula hendrerit, tellus urna eleifend nunc, vel facilisis turpis
          massa id elit. Nam ornare ante vulputate, elementum massa eu, placerat
          sapien. Fusce varius id dolor a aliquam. Integer ut erat auctor justo
          vulputate tristique vitae vel felis. Donec id luctus velit, sit amet
          feugiat lorem. Fusce ullamcorper egestas ullamcorper.
        </p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>PHP</li>
          <li>Swift</li>
          <li>My SQL</li>
          <li>SQL lite</li>
          <li>MS SQL</li>
          <li>Git</li>
          <li>Github</li>
          <li>Communication</li>
          <li>Teamwork</li>
        </ul>
        {/* </motion.div> */}
      </div>
    </motion.div>
  );
}
