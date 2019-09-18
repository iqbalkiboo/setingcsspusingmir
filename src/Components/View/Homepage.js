import React, { Component } from "react"

import styleshome from "../../Style/homepage.module.css"

// import ReactRotatingText from "react-rotating-text"
// import styled from "styled-components"
// import "../../Style/cafaeble.index-1.0.css"

import Background from "../../Asset/img/map-indo.png"
import Backgroundlist1 from "../../Asset/img/cafe/eatboss-dago/main.jpg"
import Backgroundlist2 from "../../Asset/img/cafe/upnormal-riau/main.jpg"
import Backgroundlist3 from "../../Asset/img/cafe/kopi372-dago/main.jpg"
import MostRatedCafe1 from "../../Asset/img/cafe/eatboss-dago/main.jpg"
import MostRatedCafe2 from "../../Asset/img/cafe/upnormal-riau/main.jpg"
import MostRatedCafe3 from "../../Asset/img/cafe/kopi372-dago/main.jpg"
import BrandLogo1 from "../../Asset/img/brand/bober.jpg";
import BrandLogo2 from "../../Asset/img/brand/eat-boss.jpg";
import BrandLogo3 from "../../Asset/img/brand/excelso.jpg";
import BrandLogo4 from "../../Asset/img/brand/morning-glory.jpg";
import BrandLogo5 from "../../Asset/img/brand/ngopdoel.jpg";
import BrandLogo6 from "../../Asset/img/brand/sarasa.jpg";
import BrandLogo7 from "../../Asset/img/brand/sejiwa.jpg";
import BrandLogo8 from "../../Asset/img/brand/starbucks.jpg";
import BrandLogo9 from "../../Asset/img/brand/sydwic.jpg";
import BrandLogo10 from "../../Asset/img/brand/upnormal.jpg";
import BrandLogo11 from "../../Asset/img/brand/wiki.jpg";
import BrandLogo12 from "../../Asset/img/brand/yellow-truck.jpg";


class Homepage extends Component {
    render() {
        var ReactRotatingText = require("react-rotating-text");
        return (
            <div>
                <div className="pad-top"></div>
                <div className={styleshome.banner}>
                    <section>
                        <div class={styleshome['the-text']}>
                            Slope One Powered Cafe Searching Recommendation for 
                            <div>
                            <ReactRotatingText items={[ "Working space.", "Meet Someone.", "Relax and Chill.", "Discover News.", "Romantic Vibes." ]}/>
                            </div>
                        </div>
                        <ul>
                            <li><a href="#">Register <i class="fa fa-plus-circle"></i></a></li>
                            <li><a href="#">Sign In <i class="fa fa-sign-in"></i></a></li>
                        </ul>
                    </section>
                </div>
                <div class={styleshome["by-num"]}>
                    <section>
                        <div className={['sec-tit', styleshome['sec-tit']].join(" ")}> Cafæble by Number </div>
                        <ul className={styleshome["the-num"]}>
                            <li>
                                <span><i class="fa fa-user"></i> Users</span>
                                2.392
                            </li>
                            <li>
                                <span><i class="fa fa-coffee"></i> Cafes</span>
                                12.392
                            </li>
                            <li>
                                <span><i class="fa fa-star"></i> Reviews</span>
                                520.392
                            </li>
                        </ul>
                        <img src={Background} class={styleshome["map-indo"]} />
                    </section>
                </div>
                {/* <div className="listcafe"> */}
                    <section>
                        <div className={['sec-tit', styleshome['sec-tit']].join(" ")}>Highest Rated Cafe</div>
                        
                        <ul className={["list-cafe", styleshome["list-cafe"]].join(" ")}>
                            <li>
                                <a href="#" data-id="1">
                                    <div class={styleshome.covering} alt="Backgroundlist1" style={{background: Backgroundlist1}}
                                        // img={Backgroundlist1} 
                                    >
                                        <img src={Backgroundlist1} />
                                        <em>Eatboss Dago</em>
                                        <span>Jl. Ir. H. Djuanda No. 72, Dago, Bandung</span>
                                    </div>
                                    <div class={styleshome["the-rating"]}>
                                        <strong>4.8</strong>/5
                                        <i class="fa fa-star"></i>
                                    </div>
                                     <ul class="the-meter">
                                        <li><div style={{width: "100%"}}></div></li>
                                        <li><div style={{width: "100%"}}></div></li>
                                        <li><div style={{width: "100%"}}></div></li>
                                        <li><div style={{width: "100%"}}></div></li>
                                        <li><div style={{width: "10%"}}></div></li>
                                    </ul> 
                                    <span><strong>4.324</strong> Reviews</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" data-id="2">
                                    <div class={styleshome.covering} alt="Backgroundlist2" style={{background:"../../Asset/img/cafe/upnormal-riau/main.jpg"}}>
                                        <img src={Backgroundlist2} />
                                        <em>Warunk Upnormal Riau</em>
                                        <span>Jl. L.L.R.E Martadinata No. 114, Riau, Bandung</span>
                                    </div>
                                    <div class={styleshome["the-rating"]}>
                                        <strong>4.9</strong>/5
                                        <i class="fa fa-star"></i>
                                    </div>
                                        <ul class="the-meter">
                                            {/* masih harus di perbaiki */}
                                            <li><div style={{width: "100%"}}></div></li>
                                            <li><div style={{width: "100%"}}></div></li>
                                            <li><div style={{width: "100%"}}></div></li>
                                            <li><div style={{width: "100%"}}></div></li>
                                            <li><div style={{width: "30%"}}></div></li>
                                        </ul> 
                                    <span><strong>2.263</strong> Reviews</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" data-id="3">
                                    <div class={styleshome.covering} alt="Backgroundlist3">
                                        <img src={Backgroundlist3} />
                                        <em>Kopi 372 Setiabudi</em>
                                        <span>Jl. Karangsari No.21, Pasteur, Kec. Sukajadi, Kota Bandung, Jawa Barat 40161</span>
                                    </div>
                                    <div class={styleshome["the-rating"]}>
                                        <strong>5</strong>/5
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <ul class="the-meter"> 
                                    {/* masih harus di perbaiki */}
                                        <li><div style={{width: "100%"}}></div></li>
                                        <li><div style={{width: "100%"}}></div></li>
                                        <li><div style={{width: "100%"}}></div></li>
                                        <li><div style={{width: "60%"}}></div></li>
                                        <li><div style={{width: "0%"}}></div></li>
                                    </ul> 
                                    <span><strong>1.784</strong> Reviews</span>
                                </a>
                            </li>
                        </ul>
                    </section>
                {/* </div> */}

                <div className={styleshome.divider}></div>
        
                    <section>
                        <div className={['sec-tit', styleshome['sec-tit']].join(" ")}>Most Rated Cafe</div>
                        
                        <ul className={["list-cafe", styleshome["list-cafe"]].join(" ")}>
                            <li>
                                <a href="#" data-id="1">
                                    <div class={styleshome.covering} alt="MostRatedCafe1"  >
                                        <img src={ MostRatedCafe1 } />
                                        <em>Eatboss Dago</em>
                                        <span>Jl. Ir. H. Djuanda No. 72, Dago, Bandung</span>
                                    </div>
                                    <div class={styleshome["the-review"]}>
                                        <strong>4.324</strong> Reviews
                                        <i class="fa fa-users"></i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" data-id="2">
                                    <div class={styleshome.covering} alt="MostRatedCafe2" >
                                        <img src={ MostRatedCafe2 } />
                                        <em>Warunk Upnormal Riau</em>
                                        <span>Jl. L.L.R.E Martadinata No. 114, Riau, Bandung</span>
                                    </div>
                                    <div class={styleshome["the-review"]}>
                                        <strong>2.263</strong> Reviews
                                        <i class="fa fa-users"></i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" data-id="3">
                                    <div class={styleshome.covering} alt="MostRatedCafe3" >
                                        <img src={ MostRatedCafe3 } />
                                        <em>Kopi 372 Setiabudi</em>
                                        <span>Jl. Karangsari No.21, Pasteur, Kec. Sukajadi, Kota Bandung, Jawa Barat 40161</span>
                                    </div>
                                    <div class={styleshome["the-review"]}>
                                        <strong>1.784</strong> Reviews
                                        <i class="fa fa-users"></i>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </section>
                <div class={styleshome["back-white"]}>
                    <section>
                        <div className={['sec-tit', styleshome['sec-tit']].join(" ")}>Trusted By The Leading Brands</div>

                        <ul class={styleshome["list-brand"]}>
                            <li><a href="#"><img src={BrandLogo1} /></a></li>
                            <li><a href="#"><img src={BrandLogo2} /></a></li>
                            <li><a href="#"><img src={BrandLogo3} /></a></li>
                            <li><a href="#"><img src={BrandLogo4} /></a></li>
                            <li><a href="#"><img src={BrandLogo5} /></a></li>
                            <li><a href="#"><img src={BrandLogo6} /></a></li>
                            <li><a href="#"><img src={BrandLogo7} /></a></li>
                            <li><a href="#"><img src={BrandLogo8} /></a></li>
                            <li><a href="#"><img src={BrandLogo9} /></a></li>
                            <li><a href="#"><img src={BrandLogo10} /></a></li>
                            <li><a href="#"><img src={BrandLogo11} /></a></li>
                            <li><a href="#"><img src={BrandLogo12} /></a></li>
                        </ul>
                        
                        <div class={styleshome.many}>And many more...</div>
                    </section>
                </div>
                <div class={styleshome["last-sec"]}>
                    <section>
                        <div className={['sec-tit', styleshome['sec-tit']].join(" ")}>Slope One Powered Cafe Searching Recommendation</div>
                        <div class={styleshome["single-text"]}>Using Desicion Support System (DSS) with Slope One method, <strong>Cafæble</strong> helps user searching the best cafe in town more personaly.</div>
                    </section>
                </div>

            </div>
        )
    }
}

export default Homepage;


// const ReactRotatingText = styled.div`
// position: relative;
// margin: 20px 0 0 0;
// font-size: 54px;
// line-height: 64px;
// `;