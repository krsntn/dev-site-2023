import Image from "next/image";
import Link from "next/link";
import Img1 from "@/public/art/1.jpg";
import Img2 from "@/public/art/2.jpg";
import Img3 from "@/public/art/3.jpg";
import Img4 from "@/public/art/4.jpg";
import Img5 from "@/public/art/5.jpg";
import Img6 from "@/public/art/6.png";
import Img7 from "@/public/art/7.png";
import { images as stacks } from "./images";

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

const gridClasses = "grid md:grid-cols-[100px_1fr] gap-2 md:gap-6";
const labelClasses =
  "md:justify-self-end md:self-start text-zinc-400 dark:text-zinc-500";

const imgClasses = "p-4 bg-zinc-900 max-w-full rounded-lg";

export default async function Design() {
  return (
    <div className="leading-6 px-4 pt-14 lg:pt-20 pb-16">
      <div className="mx-auto max-w-xl flex flex-col gap-16">
        <div className={gridClasses}>
          <span />
          <div className="flex flex-col gap-3">
            <p>
              During my leisure time, I find immense joy and creative
              fulfillment by immersing myself in the world of design using tools
              like Adobe Illustrator, Figma, and a handful of other creative
              software. 🎨 While I may not consider myself a professional, I
              {`'`}ve honed my skills to a level where I can craft captivating
              and visually appealing logos and artwork that radiate a sense of
              fun and creativity. 👨‍🎨
            </p>
            <p>
              While I may not be a seasoned professional, the satisfaction I
              derive from my creative endeavors is immeasurable. The act of
              translating imagination into visual reality, even on a small
              scale, is a gratifying experience that fuels my curiosity and
              bolsters my design skills. 💪 And who knows, these simple yet
              captivating pieces of artwork might just find a special place in
              the hearts of those who encounter them, spreading a little bit of
              joy and creativity in the process. ❤️
            </p>
          </div>
        </div>

        <div className={gridClasses}>
          <div className={labelClasses}>Stack</div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] gap-1">
            {stacks.map((x, index) => (
              <Image
                key={index}
                src={x}
                alt="logo"
                width={40}
                height={40}
                className="w-[40px] h-[40px] rounded cursor-pointer"
              />
            ))}
          </div>
        </div>

        <div className={gridClasses}>
          <div className={labelClasses}>Art</div>
          <div className="grid grid-cols-2 gap-1 items-start dark:brightness-[0.9]">
            <div className="grid gap-1">
              {[Img1, Img2, Img3].map((x, index) => (
                <Image key={index} src={x} alt="art" className={imgClasses} />
              ))}
            </div>
            <div className="grid gap-1">
              {[Img5, Img6, Img7, Img4].map((x, index) => (
                <Image key={index} src={x} alt="art" className={imgClasses} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
