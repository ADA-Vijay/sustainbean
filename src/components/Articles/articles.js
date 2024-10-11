import React from "react";
import style from "@/components/Articles/articles.module.css";
import Link from "next/link";
import Image from "next/image";
const Articles = () => {
  const data = [
    {
      image:
        "https://image.savethechildren.org/vote-for-kids-ch1420824-rec-ch11149750.jpg/i83ba48n3x12u336ehxja3akm576v2vv.jpg?g=auto&w=360&format=webp&itok=RIiYf8gP",
      title:
        "Forbes 38th Annual World’s Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
    {
      image: "https://themewagon.github.io/givehope/images/img_3.jpg",
      title:
        "Forbes 38th Annual World’s Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
    {
      image:
        "https://themewagon.github.io/givehope/images/img_4.jpg",
      title:
        "Forbes 38th Annual World’s Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
    {
      image:
        "https://themewagon.github.io/givehope/images/img_1.jpg",
      title:
        "Forbes 38th Annual World’s Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
    {
      image:
        "https://image.savethechildren.org/vote-for-kids-ch1420824-rec-ch11149750.jpg/i83ba48n3x12u336ehxja3akm576v2vv.jpg?g=auto&w=360&format=webp&itok=RIiYf8gP",
      title:
        "Forbes 38th Annual World’s Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
    {
      image: "https://themewagon.github.io/givehope/images/img_3.jpg",
      title:
        "Forbes 38th Annual World’s Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
    {
      image:
        "https://themewagon.github.io/givehope/images/img_4.jpg",
      title:
        "Forbes 38th Annual World’s Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",

    },
    {
      image:
        "https://themewagon.github.io/givehope/images/img_1.jpg",
      title:
        "Forbes 38th Annual World’s Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
    {
      image:
        "https://image.savethechildren.org/vote-for-kids-ch1420824-rec-ch11149750.jpg/i83ba48n3x12u336ehxja3akm576v2vv.jpg?g=auto&w=360&format=webp&itok=RIiYf8gP",
      title:
        "Forbes 38th Annual World’s Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
    {
      image: "https://themewagon.github.io/givehope/images/img_3.jpg",
      title:
        "Forbes 38th Annual World’s Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
    {
      image:
        "https://themewagon.github.io/givehope/images/img_4.jpg",
      title:
        "Forbes 38th Annual World’s Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
    {
      image:
        "https://themewagon.github.io/givehope/images/img_1.jpg",
      title:
        "Forbes 38th Annual World’s Billionaires List: Facts And Figures 2024",
      author: "By Chase Peterson-Withorn",
    },
  ];
  return (
    <div className={style["container"]}>
      <div className={style["container-wrap"]}>
        <div className={style.contentWrap}>
          <h2 className={style["relatedpost-title"]}>Related Articles</h2>
          <div className="row">
            {data &&
              data.length > 0 &&
              data.map((e, i) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={i}>
                  <Link href="/">
                    <div className={style["post-card-item"]}>
                      <div className={style["post-img-div"]}>
                        <Image
                          src={e.image}
                          alt={e.title}
                          className={style.image}
                          width={500}
                          height={300}
                        />
                      </div>
                      <div>
                        <p className={style["desc-p"]}>{e.title}</p>
                        <p className={style["name-p"]}>{e.author}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
