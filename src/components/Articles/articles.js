import React from "react";
import style from "@/components/Articles/articles.module.css"
import Link from "next/link";
import Image from "next/image";
const Articles = () => {
  const data = [
    {
      image:
        "https://images.forbes.com/2024-billionaires-ver4/intro-680x383.jpg",
      title:
        "Forbes’ 38th Annual World’s Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
    {
      image:
        "https://images.forbes.com/2024-billionaires-ver4/intro-680x383.jpg",
      title:
        "Forbes’ 38th Annual World’s Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
    {
      image:
        "https://images.forbes.com/2024-billionaires-ver4/intro-680x383.jpg",
      title:
        "Forbes’ 38th Annual World’s Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
    {
      image:
        "https://images.forbes.com/2024-billionaires-ver4/intro-680x383.jpg",
      title:
        "Forbes’ 38th Annual World’s Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
    {
      image:
        "https://images.forbes.com/2024-billionaires-ver4/intro-680x383.jpg",
      title:
        "Forbes’ 38th Annual World’s Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
    {
      image:
        "https://images.forbes.com/2024-billionaires-ver4/intro-680x383.jpg",
      title:
        "Forbes’ 38th Annual World’s Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
    {
      image:
        "https://images.forbes.com/2024-billionaires-ver4/intro-680x383.jpg",
      title:
        "Forbes’ 38th Annual World’s Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
    {
      image:
        "https://images.forbes.com/2024-billionaires-ver4/intro-680x383.jpg",
      title:
        "Forbes’ 38th Annual World’s Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
  ];
  return (
    <div className={style["container"]} >
        <div className={style["container-wrap"]}>
          <div className={style.contentWrap}>
            <h2 className={style["relatedpost-title"]}>Related Post</h2>
            <div className={style["post-card-wrap"]}>
              {data &&
                data.length > 0 &&
                data.map((e, i) => (
                  <Link href="/" key={i}>
                    <div className={style["post-card-item"]}>
                      <div className={style["post-img-div"]}>
                        <Image
                          src={e.image}
                          
                          alt={e.image}
                          className={style.image}
                          width={500}
                          height={500}
                        />
                      </div>
                      <div>
                        {/* <p className={style["green-p"]}>MMA</p> */}
                        <p className={style["desc-p"]}>
                          {e.title}
                        </p>
                        <p className={style["name-p"]}>
                          {e.author}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Articles;
