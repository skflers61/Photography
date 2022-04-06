import React from 'react'
import img1 from '../img/ACCUEIL.jpg';
import img2 from '../img/love-wedding.jpg';
import img3 from '../img/wedding-portrait-couple.jpg';
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

export default function Content() {
    return (
        <div className="cptContent">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active carouselImg" style={{backgroundImage: "url("+img1+")"}}></div>
                    <div class="carousel-item carouselImg" style={{backgroundImage: "url("+img2+")"}}></div>
                    <div class="carousel-item carouselImg" style={{backgroundImage: "url("+img3+")"}}></div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            
            <div id="BlocBienvenue">
                
                <div className="container">
                    <div className="row">
                        <h1>BIENVENUE</h1>
                        <p>Vous préparez votre mariage et vous voici à la recherche du photographe qui vous suivra tout au long de cette journée.  Le choix de celui qui immortalisera ce grand jour n’est pas une chose facile. Il faut que vous soyez à l’aise avec lui mais aussi que celui-ci soit en accord avec votre vision de la photographie de mariage. Outre les alliances et vos souvenirs, ce sont les photos qui resteront le témoin de la magie de ce jour unique de votre vie…<br /><br />

C’est également pour moi très important d’avoir une relation particulière avec chacun de mes mariés. J’aime apprendre à vous connaître, vous, votre histoire, votre mariage. Pour cette raison, chaque forfait mariage inclut une séance engagement. Vous pourrez ainsi vous familiariser avec l’objectif afin d’être plus à l’aise le jour J mais nous prendrons aussi le temps de mieux nous connaitre, de discuter de votre joli jour, de vos envies, etc.<br /><br />

Mon approche de la photographie de mariage se veut naturelle et spontanée. J’aime raconter votre journée de mariage à travers tous les petits détails, les grands moments, la douceur qui s’en dégage. Ma priorité est que mes images racontent votre histoire et vous ressemblent.<br /><br />

Je ne propose que des reportages complets. Ainsi, j’aime être présente dès les préparatifs. J’aime particulièrement capturer ces moments de complicité avec votre famille, vos amies, vos témoins qui font partie intégrante de votre mariage.  Je vous suivrai en toute discrétion tout au long de la journée pour capturer vos souvenirs sans oublier tous les petits détails que vous avez pensés durant des mois : robe, chaussures, alliances, décoration, DIY, fleurs & bouquet…<br /><br /><br /><br />
                        </p>
                    </div>
                </div>
            </div>
        
            <div if="Insta">
                <InstagramFeed token="IGQVJYUGhZAcDFtWF95dEF1UU4zR2xVNlZARNTBCX1V0WGJONnNudXg5N28wRnFQYzRJbllUNTV0c1NRSGxLVEFjSHhBLV9aNzFJOWNIdVNWR2xhcDJiQmVNaVEzRk8zb0tHRDdDaVdB"  counter="24"/> 
            </div>
        </div>
    )
}



