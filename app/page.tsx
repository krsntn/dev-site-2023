import Image from "next/image";
import Link from "next/link";
import LocationImg from "../public/images/location.png";
import ProfileImg from "../public/images/profile.png";
import { MapPin } from "lucide-react";

const gridClasses = "grid md:grid-cols-[100px_1fr] gap-2 md:gap-6";
const labelClasses =
  "md:justify-self-end md:self-start text-zinc-400 dark:text-zinc-500";

const linkClasses = "flex justify-between items-center gap-2 group";
const onlineLabel =
  "dark:text-white underline-offset-4 group-hover:underline group-hover:text-blue-700 dark:group-hover:text-blue-500";
const onlineDash =
  "flex-1 border-t border-zinc-200 border-dashed dark:border-zinc-800";
const onlineFollow = "text-zinc-400 dark:text-zinc-500";

const link = "text-blue-500 underline-offset-2 hover:underline";

export default function Home() {
  return (
    <div className="leading-6 px-4 pt-14 lg:pt-20 pb-16">
      <div className="mx-auto max-w-xl flex flex-col gap-16">
        <div className={gridClasses}>
          <div className={labelClasses}>
            <Image src={ProfileImg} alt="profile" className="h-6 w-6 rounded" />
          </div>
          <div className="flex flex-col gap-3">
            <p>
              Hey there, I{`'`}m Karson – a front-end maestro and a total
              keyboard geek. You can catch me hanging out on{" "}
              <Link
                href="https://www.reddit.com/r/MechanicalKeyboards/"
                className={link}
              >
                r/mk
              </Link>{" "}
              ⌨️
            </p>
            <p>
              Originally from Malaysia 🇲🇾. I{`'`}m a multilingual ninja, fluent
              in Mandarin, Cantonese, English, Malay, Java, C#, PHP, and, of
              course, the kingpin of them all – Javascript. 😉
            </p>
            <p>
              When I{`'`}m not cooking up web magic, I{`'`}m sprinkling some
              open-source goodness in my free time. 🤙
            </p>
            <p>
              Fun fact: I used to rule the badminton 🏸 court professionally, no
              biggie! Check out my{" "}
              <Link
                href="https://bwfbadminton.com/player/63304/kah-zhan-tan"
                className={link}
              >
                BWF profile
              </Link>{" "}
              if you need proof. Yep, that{`'`}s the lowdown on me! 🤣
            </p>
          </div>
        </div>

        <div className={gridClasses}>
          <div className={labelClasses}>Where</div>
          <div>
            <Image src={LocationImg} alt="location" className="rounded-xl" />
            <div className="mt-1 flex justify-end items-center text-zinc-400 dark:text-zinc-500 text-[12px]">
              <MapPin className="mr-1 h-3 w-3" /> Kuala Lumpur, MY
            </div>
          </div>
        </div>

        <div className={gridClasses}>
          <div className={labelClasses}>Online</div>
          <div className="flex flex-col gap-1">
            <Link
              href="https://twitter.com/ooneoneo"
              className={linkClasses}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className={onlineLabel}>Twitter</span>
              <span className={onlineDash}></span>
              <span className={onlineFollow}>Follow</span>
            </Link>
            <Link
              href="https://github.comm/krsntn"
              className={linkClasses}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className={onlineLabel}>Github</span>
              <span className={onlineDash}></span>
              <span className={onlineFollow}>Follow</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
