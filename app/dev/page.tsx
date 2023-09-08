import stack from "@/src/data/stack.json";
import { GithubDataType } from "@/src/lib/writing";
import { ExternalLink, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const gridClasses = "grid md:grid-cols-[100px_1fr] gap-2 md:gap-6";
const labelClasses =
  "md:justify-self-end md:self-start text-zinc-400 dark:text-zinc-500";

const linkClasses = "flex justify-between items-center gap-2 group";
const onlineLabel =
  "dark:text-white underline-offset-4 group-hover:underline group-hover:text-blue-700 dark:group-hover:text-blue-500";
const onlineDash =
  "flex-1 border-t border-zinc-200 border-dashed dark:border-zinc-800";
const onlineFollow = "text-zinc-400 dark:text-zinc-500";

const workLabel = "";
const posClasses = "text-zinc-500 dark:text-zinc-400";

async function getGithubData() {
  const res = await fetch(
    "https://api.github.com/users/krsntn/repos?sort=pushed",
  );

  if (!res.ok) {
    console.error("Failed to fetch data");
    return [];
  }

  return res.json();
}

export default async function Dev() {
  const githubData = await getGithubData();
  // const githubData: Array<GithubDataType> = [];

  return (
    <div className="leading-6 px-4 pt-14 lg:pt-20 pb-16">
      <div className="mx-auto max-w-xl flex flex-col gap-16">
        <div className={gridClasses}>
          <span />
          <div className="flex flex-col gap-3">
            <p>
              I{`'`}m a dynamic force in the creative realm, skilled in frontend
              development, design, and illustration. I take great pride in
              residing in Malaysia 🇲🇾 and finding inspiration within the lively
              backdrop of Kuala Lumpur.
            </p>
            <p>
              During the formative stages of my career, I had the privilege to
              contribute to the establishment of an educational hub and play a
              role in shaping innovative educational software rooted in Thailand
              🇹🇭.
            </p>
            <p>
              Previously, I embraced the full-stack role at an exciting company
              based in 🇸🇬. There, I orchestrated captivating campaigns and
              crafted impeccably polished web experiences that left a lasting
              impact.
            </p>
            <p>
              At present, my professional efforts are dedicated to web
              development, particularly within the distinctive landscape of the
              🇨🇳 market, which demands an entirely different approach to
              frontend styling.
            </p>
            <p>
              Beyond these endeavors, I passionately contribute to the world of
              open-source, leaving my mark on cutting-edge projects hosted on
              GitHub.
            </p>
            <p>
              My expertise centers around resolving user experience challenges,
              a domain where I excel. With a robust skill set to support my
              claims, I am known for my laid-back yet inquisitive nature,
              constantly striving to enhance my design prowess.
            </p>
            <p>
              Currently, my focus includes immersing myself in the realms of
              React and other innovative frameworks, solidifying my status as a
              versatile and forward-looking professional. 😉
            </p>
          </div>
        </div>

        <div className={gridClasses}>
          <div className={labelClasses}>Stack</div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] gap-1">
            {stack.map((x, index) => (
              <Link
                key={index}
                href={x.link}
                rel="noopener noreferrer"
                target="_blank"
                className=""
              >
                <Image
                  src={x.image}
                  alt="logo"
                  width={40}
                  height={40}
                  className="rounded"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className={gridClasses}>
          <div className={labelClasses}>Repo</div>
          <div className="flex flex-col gap-1">
            {githubData.map((x: GithubDataType, index: number) => (
              <Link
                key={index}
                href={x.html_url}
                className={linkClasses}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className={onlineLabel}>{x.name}</span>
                <span className={onlineDash}></span>
                <ExternalLink className="h-3 w-3 text-zinc-400 dark:text-zinc-500" />
              </Link>
            ))}
          </div>
        </div>

        <div className={gridClasses}>
          <div className={labelClasses}>Work</div>
          <div className="flex flex-col gap-1">
            <div className={linkClasses}>
              <span className={workLabel}>Code*********</span>
              <span className={onlineDash}></span>
              <span className={posClasses}>Front-End Lead</span>
              <span className={onlineFollow}>{`'23 - present`}</span>
            </div>
            <div className={linkClasses}>
              <span className={workLabel}>Goto*********</span>
              <span className={onlineDash}></span>
              <span className={posClasses}>Sr. Front-End Dev</span>
              <span className={onlineFollow}>{`'21 - '23`}</span>
            </div>
            <div className={linkClasses}>
              <span className={workLabel}>Kotc*********</span>
              <span className={onlineDash}></span>
              <span className={posClasses}>Front-End Dev</span>
              <span className={onlineFollow}>{`'20 - '21`}</span>
            </div>
            <div className={linkClasses}>
              <span className={workLabel}>Lapu*********</span>
              <span className={onlineDash}></span>
              <span className={posClasses}>Jr. Front-End Dev</span>
              <span className={onlineFollow}>{`'19 - '20`}</span>
            </div>
            <div className={linkClasses}>
              <span className={workLabel}>Nett*********</span>
              <span className={onlineDash}></span>
              <span className={posClasses}>Full-Stack Dev</span>
              <span className={onlineFollow}>{`'17 - '19`}</span>
            </div>
            <div className={linkClasses}>
              <span className={workLabel}>Acco*********</span>
              <span className={onlineDash}></span>
              <span className={posClasses}>Software Engineer</span>
              <span className={onlineFollow}>{`'16 - '17`}</span>
            </div>
            <div className={linkClasses}>
              <span className={workLabel}>Xeer*********</span>
              <span className={onlineDash}></span>
              <span className={posClasses}>Internship</span>
              <span className={onlineFollow}>{`'15 - '16`}</span>
            </div>
          </div>
        </div>
        <Loader2 className="animate-spin" size={16} strokeWidth={2} />
      </div>
    </div>
  );
}
