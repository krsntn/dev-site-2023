import stack from "@/src/data/photograph_stack.json";
import photos from "@/src/data/photos.json";
import Image from "next/image";
import Link from "next/link";

const images1 = photos.slice(0, 5);
const images2 = photos.slice(5, 10);

const gridClasses = "grid md:grid-cols-[100px_1fr] gap-2 md:gap-6";
const labelClasses =
  "md:justify-self-end md:self-start text-zinc-400 dark:text-zinc-500";
const imgClasses =
  "rounded w-full aspect-square border dark:border-0 dark:brightness-[0.9]";

export default async function Photography() {
  return (
    <div className="leading-6 px-4 pt-14 lg:pt-20 pb-16">
      <div className="mx-auto max-w-xl flex flex-col gap-16">
        <div className={gridClasses}>
          <span />
          <div className="flex flex-col gap-3">
            <p>
              Holidays hold a special allure for me, as they provide the perfect
              opportunity to step out with my camera in tow and immerse myself
              in the world of photography. The thrill of capturing fleeting
              moments, freezing them in time with a simple click, is an
              exhilarating experience that I eagerly anticipate. Each outing is
              a journey into a realm where stories unfold, and emotions are
              frozen in intricate compositions. ✌️
            </p>
            <p>
              Travels take this passion to a whole new level. 🧳 Exploring new
              places, whether it{`'`}s a quaint town, a bustling city, or a
              serene countryside, opens up a treasure trove of visual tales
              waiting to be discovered. 🏙️ From the bustling markets teeming
              with life to the tranquil landscapes that evoke a sense of peace,
              I{`'`}m on a constant quest to encapsulate the essence of these
              places in my photographs. A candid shot of a street performer
              caught in the midst of an impassioned performance or a candid
              family moment shared by the beach — these are the snapshots of
              time that make memories everlasting. 🕛
            </p>
            <p>
              The magic of photography lies in its ability to freeze not only
              the visuals but also the emotions, the ambiance, and the stories
              behind each frame. It{`'`}s an art of observation, patience, and
              intuition, where the act of pressing the shutter is a testament to
              the stories that unfold before my lens. And as I review the images
              later, each photograph becomes a chapter in a larger visual
              narrative — a collection of moments that together form the story
              of my journey, my experiences, and the world as I perceive it. 🖼️
            </p>
            <p>
              In essence, weekends and holidays are my canvas, and my camera is
              the brush with which I paint stories. The joy of photography is
              not just in the act of capturing a moment but in the storytelling
              that happens afterward. Through every click of the shutter, I am
              reminded of the vastness of life{`'`}s stories waiting to be told
              and the privilege I have to document them, one photograph at a
              time. 📷
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
                  className="rounded cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className={gridClasses}>
          <div className={labelClasses}>Photo</div>
          <div className="grid gap-1">
            <div className="grid grid-cols-2 items-start gap-1">
              <div className="grid gap-1">
                {images1.map((x, index) => (
                  <Image
                    key={index}
                    src={x.link}
                    alt="photo"
                    width={300}
                    height={300}
                    className={imgClasses}
                  />
                ))}
              </div>
              <div className="grid gap-1">
                {images2.map((x, index) => (
                  <Image
                    key={index}
                    src={x.link}
                    alt="photo"
                    width={300}
                    height={300}
                    className={imgClasses}
                  />
                ))}
              </div>
            </div>
            <div className="text-right text-[10px]">
              to see more photos, hop over to{" "}
              <Link
                href="https://www.instagram.com/krsn.jpeg/"
                className="text-blue-500 underline-offset-2 hover:underline"
              >
                insta profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
