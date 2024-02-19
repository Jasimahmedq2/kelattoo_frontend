import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './kellatto.css';
import appleImage from "../../assets/img/apple.png";
import bannerImage from "../../assets/img/banner.png";
import instagramImage from "../../assets/img/instagram.png";
import kosmosImage from "../../assets/img/kosmos.png";
import logoImage from "../../assets/img/logo.png";
import play_whiteImage from "../../assets/img/play_white.png";
import playImage from "../../assets/img/play.png";
import redditImage from "../../assets/img/reddit.png";
import soundcloudImage from "../../assets/img/soundcloud.png";
import spotifyImage from "../../assets/img/spotify.png";
import tidalImage from "../../assets/img/tidal.png";
import twitter_xImage from "../../assets/img/twitter_x.png";
import youtubemusicImage from "../../assets/img/youtubemusic.png";

const Kellatto = ({ }) => {

    // dialouge open closed 
    const [isDialogVisible, setIsDialogVisible] = useState(false);

    const showDialog = () => {
        setIsDialogVisible(true);
        const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
        const body = document.body;
        body.style.position = 'fixed';
        body.style.top = `-${scrollY}`;
    };

    const closeDialog = () => {
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        setIsDialogVisible(false);
    };

    useEffect(() => {
        setIsDialogVisible(true);
    }, []);

    window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    });

    return (
        <div>
            <Helmet>

                <script async src="https://www.googletagmanager.com/gtag/js?id=G-C4SRHTF5F1"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', 'G-C4SRHTF5F1');
        `,
                }} />
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <link
                    rel="manifest"
                    href="img/favicon/site.webmanifest"
                />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#ffffff" />

                <title>
                    INV link - kelatto
                </title>

                <meta name="author" content="Годенчук Игорь - https://sudzho.ru" />
                <meta
                    name="description"
                    content="INV link - kelatto"
                />
                <meta name="robots" content="max-image-preview:large" />
                <link rel="canonical" href="https://invlink.me/kelatto.html" />
                <meta
                    name="keywords"
                    content="INV link, Temporary, Remedy, of Unusual, Affinity"
                />
                <meta property="og:locale" content="en_EN" />
                <meta
                    property="og:site_name"
                    content="INV link - Temporary Remedy of Unusual Affinity"
                />
                <meta property="og:type" content="article" />
                <meta
                    property="og:title"
                    content="INV link - Temporary Remedy of Unusual Affinity"
                />
                <meta
                    property="og:description"
                    content="INV link - Temporary Remedy of Unusual Affinity"
                />
                <meta property="og:url" content="https://invlink.me/kelatto.html" />
                <meta
                    property="og:image"
                    content="https://invlink.me/assets/img/logo.png"
                />
                <meta
                    property="og:image:secure_url"
                    content="https://invlink.me/assets/img/logo.png"
                />
                <meta property="og:image:width" content="1024" />
                <meta property="og:image:height" content="1141" />
                <meta
                    property="article:published_time"
                    content="2024-01-20T12:44:48+00:00"
                />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:domain" content="invlink.me/kelatto.html" />
                <meta
                    name="twitter:title"
                    content="INV link - Temporary Remedy of Unusual Affinity"
                />
                <meta
                    name="twitter:description"
                    content="INV link - Temporary Remedy of Unusual Affinity"
                />
                <meta
                    name="twitter:image"
                    content="https://invlink.me/assets/img/logo.png"
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://invlink.me/kelatto.html" />
                <meta property="og:site_name" content="invlink.me/kelatto.html" />

                <link
                    rel="shortcut icon"
                    href="assets/img/favicon/favicon.ico"
                    type="image/ico"
                />

                <link rel="stylesheet" href="./assets/css/index.css" />

            </Helmet>

            <div>

                <header id="header">
                    <div> className="
                        <a href="https://invlink.me/"> <img src={logoImage} alt="" srcset="" />
                            <p>INV link</p></a>

                    </div>
                    <div>
                        <a href="https://invlink.me/">kelatto</a>
                    </div>
                </header>

                <main id="cont">
                    <section className="banner">
                        <div>
                            <img className="no-select_img" src={bannerImage} alt="" srcset="" />
                        </div>
                        <div>
                            <p>
                                kelatto is CEO of Invariance Records, music artist, producer, mixing&mastering engineer boasts an extensive career in the  music industry. His unique style blends various genres,
                                captivating a broad audience. Having worked with numerous  high-profile artists, his music journey is truly inspirational. Follow kelatto on social media for more updates.
                            </p>
                            <div>
                                <a href="https://www.instagram.com/invariancerecords"><img src={instagramImage} alt="" srcset="" /></a>
                                <a href="https://twitter.com/k_kelatto"><img src={twitter_xImage} alt="" srcset="" /></a>
                                <a href="https://www.reddit.com/u/kelatto/s/rK9mogMnrT"><img src={redditImage} alt="" srcset="" /></a>

                            </div>
                        </div>
                    </section>

                    <section className="main_block">
                        <div className="page__container">
                            <div className="page__title">
                                <p>latest releases</p>
                            </div>
                            <div className="latest__block">
                                <div className="temporary">
                                    <div className="temporary_img">
                                        <img className="no-select_img" src={kosmosImage} alt="" srcset="" />
                                    </div>
                                    <div className="temporary__text">
                                        <p>Temporary Remedy of Unusual Affinity</p>
                                        <p>by kelatto</p>
                                        <p>producer, mixing & mastering engineer</p>
                                    </div>
                                    <div className="temporary_play">
                                        <button id="show"
                                            className="" onClick={showDialog}><img src={play_whiteImage} alt="" />
                                        </button>
                                    </div>
                                </div>

                                {/* modal  */}
                                <div
                                    className={`dialog ${isDialogVisible ? 'show' : ''}`}
                                    id="dialog"
                                >
                                    <div className="cmt">
                                        <button id="close" className="" onClick={closeDialog}></button>
                                        <div className="temporary_title_block">
                                            <div>
                                                <img src={kosmosImage} alt="" srcset="" />
                                            </div>
                                            <div>
                                                <p>Temporary Remedy of Unusual Affinity
                                                    <span>by kelatto</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="temporary_music_block">
                                            <p>Listen</p>
                                            <div className="temporary_music">
                                                <div>
                                                    <img src={spotifyImage} alt="" srcset="" />
                                                </div>
                                                <div className="temporary__text">
                                                    <p>Spotify</p>
                                                </div>
                                                <div>
                                                    <a href="https://open.spotify.com/track/14L7VFIE9SLwkjwyUGN6p2?si=e4df8c30136e465b"><img src={play_whiteImage} alt="" /></a>

                                                </div>
                                            </div>

                                            <div className="temporary_music">
                                                <div>
                                                    <img className="no-select_img" src={appleImage} alt="" srcset="" />
                                                </div>
                                                <div className="temporary__text">
                                                    <p>Apple Music</p>
                                                </div>
                                                <div>
                                                    <a href="https://music.apple.com/ua/album/temporary-remedy-of-unusual-affinity-single/1725260032"><img src={play_whiteImage} alt="" /></a>

                                                </div>
                                            </div>

                                            <div className="temporary_music">
                                                <div>
                                                    <img className="no-select_img" src={tidalImage} alt="" srcset="" />
                                                </div>
                                                <div className="temporary__text">
                                                    <p>Tidal</p>
                                                </div>
                                                <div>
                                                    <a href="https://listen.tidal.com/track/339357616"><img src={play_whiteImage} alt="" /></a>

                                                </div>
                                            </div>

                                            <div className="temporary_music">
                                                <div>
                                                    <img className="no-select_img" src={youtubemusicImage} alt="" srcset="" />
                                                </div>
                                                <div className="temporary__text">
                                                    <p>Youtube Music</p>
                                                </div>
                                                <div>
                                                    <a href="https://music.youtube.com/watch?v=vjWR_oWesng"><img src={play_whiteImage} alt="" /></a>

                                                </div>
                                            </div>

                                            <div className="temporary_follow_block">
                                                <p>Follow</p>
                                                <div className="temporary_follow__img">
                                                    <div><a href="https://www.instagram.com/invariancerecords"><img src={instagramImage} alt="" srcset="" /></a></div>
                                                    <div><a href="https://twitter.com/k_kelatto"><img src={twitter_xImage} alt="" srcset="" /></a></div>
                                                    <div><a href="https://www.reddit.com/u/kelatto/s/rK9mogMnrT"><img src={redditImage} alt="" srcset="" /></a></div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="main_block">
                        <div className="page__container">
                            <div className="page__title">
                                <p>credits</p>
                            </div>
                            <div className="credits__block">
                                <div className="temporary">
                                    <div className="temporary_img">
                                        <img className="no-select_img" src={kosmosImage} alt="" srcset="" />
                                    </div>
                                    <div className="temporary__text">
                                        <p>Temporary Remedy of Unusual Affinity</p>
                                        <p>by kelatto</p>
                                        <p>producer, mixing & mastering engineer</p>
                                    </div>
                                    <div className="temporary_play">
                                        <button id="show"
                                            className="" onClick={showDialog}> <img src={play_whiteImage} alt="" /></button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="main_block">
                        <div className="page__container">
                            <div className="page__title">
                                <p>skills</p>
                            </div>
                            <div className="skills__block">
                                <ul>
                                    <li>producer</li>
                                    <li>songwriter</li>
                                    <li>mixing and mastering engineer</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="main_block">
                        <div className="page__container">
                            <div className="page__title">
                                <p>contact</p>
                            </div>
                            <div className="contact__block">
                                <ul>
                                    <li><a href="mailto:kelatto@invariancerecords.com">kelatto@invariancerecords.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <footer>
                        <div>
                            <p>
                                2024 Copyright © Invariance Records. All rights reserved.
                            </p>
                        </div>
                    </footer>
                </main>



            </div>

        </div>
    );
};

export default Kellatto;