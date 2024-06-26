"use client"
import Link from "next/link";
import Reviews from "./reviews";
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";

const Body = () => {
    useEffect(() => {
        AOS.init({
          easing: "ease-in-out",
          duration: 700,
        });
      }, []);
    
    return ( 
        <div className="bg-white text-black mt-24 max-[875px]:mt-10 max-[720px]:mt-5  flex flex-col items-center justify-center px-28 max-[875px]:px-10  gap-5 pt-20">
            <h3 className="text-2xl" data-aos="fade-zoom-in">What is CoinBit?</h3>
            <p className="text-center text-sm leading-loose text-slate-500" data-aos="fade-zoom-in">
                CoinBit is a team of wholesale investors, analysts and programmers. We have been working on cryptocurrency platforms (and not only) for more than 4 years and have a competitive portfolio. All meetings, communications and agreements with our partners (clients) are held in a transparent manner.
            </p>
            
            <div className="flex gap-20 max-[450px]:flex-col" data-aos="fade-zoom-in">
                <div className="flex flex-col items-center justify-center gap-2">
                    <img src="/crypto1.svg" alt="img" className="w-20"/>
                    <h3 className="font-bold min-[450px]:hidden">Transarency</h3>
                    <p className="text-[12px] text-slate-400 text-center min-[450px]:hidden">CoinBit is committed to transparency. We believe that it is important to be open and honest with our customers, employees, and other stakeholders. We believe that transparency builds trust and allows us to build stronger relationships.</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <img src="/crypto2.png" alt="img"className="w-20" />
                    <h3 className="font-bold min-[450px]:hidden">Reliability</h3>
                    <p className="text-[12px] text-slate-400 text-center min-[450px]:hidden">We have a team of experienced and knowledgeable professionals who are dedicated to providing our customers with the highest level of service. We are always available to answer your questions and help you find the best solution for your needs.</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <img src="/crypto3.png" alt="img" className="w-20"/>
                    <h3 className="font-bold min-[450px]:hidden">Experience</h3>
                    <p className="text-[12px] text-slate-400 text-center min-[450px]:hidden">CoinBit is a reliable and trustworthy business that has been in operation for many years. We have a proven track record of providing quality products and services to our customers. We are committed to meeting our customers' needs and expectations, and we strive to provide them with the best possible experience.</p>
                </div>
            </div>

            <div className="flex gap-20 max-[450px]:flex-col" data-aos="fade-zoom-in">
                <div className="flex flex-col items-center justify-center gap-2">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fIMrRGpQAs9WN3PA9Q_SPAHaEK%26pid%3DApi&f=1&ipt=3d9c03479f3ca505f4e08417d1922dbd7b04220497cae10af3f87827dea7a219&ipo=images" alt="img"className="w-20"/>
                    <h3 className="font-bold min-[450px]:hidden">Components of our success</h3>
                    <p className="text-[12px] text-slate-400 text-center min-[450px]:hidden"> Real estate is a $217 trillion-dollar market making up almost 60% of all global wealth. It's the largest source of wealth, yet it is illiquid for 99% of the world today. In the past, you only had access to real estate if you were rich or had rich friends–meaning that most people weren't able to benefit from the passive income and capital appreciation it provides. 
                    Today, coinbit cuts out the expensive middle man and provides access for investors, by investing in shares of real estate using crypto currencies.</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2"> 
                    <p className="text-[12px] text-slate-400 text-center min-[450px]:hidden">Gold is the most common of all the precious metals as an investment. Investors generally buy gold as a form of risk diversification.</p>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.a4Fru7Ap1QPBvZ8NFcNScQHaEt%26pid%3DApi&f=1&ipt=d0f504add7e90e25d2dd77530bbb56498b1086ef8d9fab4488265b5cde609605&ipo=images"  className="w-20" />
                </div>
                <div className="flex flex-col items-center justify-center gap-2"> 
                    <p className="text-[12px] text-slate-400 text-center min-[450px]:hidden"> Oil is making the world go round, and then there is no indication that this will change. Petroleum remains in high demand.</p>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.YgwXX7uLTi2na5o8UDor-gHaE8%26pid%3DApi&f=1&ipt=5cf323cd188172c2bbf86dbeb201f39c8fbfec70c947682300bf66d5e2f5092e&ipo=images"  className="w-20" />
                </div>
                <div className="flex flex-col items-center justify-center gap-2"> 
                    <p className="text-[12px] text-slate-400 text-center min-[450px]:hidden">A stock or share (also known as "equity") is a financial instrument that reflects ownership of a company or business.</p> 
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.TFHEETinutEWgyxkS3qwdwHaE7%26pid%3DApi&f=1&ipt=ca37eff8ce2740f50f106e0684c4682d30e716f1e594ed152e1b9db113a0a468&ipo=images"  className="w-20" />
                </div>
                <div className="flex flex-col items-center justify-center gap-2"> 
                    <p className="text-[12px] text-slate-400 text-center min-[450px]:hidden">Cryptocurrency Trading is the Forex of cryptocurrencies. This means, you are able to trade different coins.</p>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.AGvwOaFAOzG9uP2WhZtO3QHaE7%26pid%3DApi&f=1&ipt=728d765f1012061443b9e2055643e0a8c2390408ab103378bd18a459eb987593&ipo=images"  className="w-20" />
                </div>
                <div className="flex flex-col items-center justify-center gap-2"> 
                    <p className="text-[12px] text-slate-400 text-center min-[450px]:hidden">Forex trading covers about 5 trillion dollars daily by just the act of trading foreign currencies and precious assets. 
                    It comes with a lot of strategies. Coinbit has successfully secured 0.04% of the daily forex revenue by effective use of Technical and fundamental Analysis, Fibonacci etc. 
                    This serves as a high way of generating a lot of revenue for investors.</p>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.kivwQSU1PhzPd4bFk7bfgwHaGh%26pid%3DApi&f=1&ipt=1efa0f290cadb9e5200f1fffdd80732ba3b7aa80d749e2c6f97a4fbdd6cce673&ipo=images"  className="w-20" />
                </div>
            </div>

            <div className="flex max-[660px]:flex-col  justify-between gap-20  max-[720px]:gap-10 mt-20 overflow-hidden">
                <div className="w-1/2 max-[660px]:w-full flex flex-col gap-5" data-aos="slide-right">
                    <h3 className="text-4xl font-serif">Here at CoinBit,<br/> We are all about security!</h3>
                    <p className="text-sm text-left text-slate-500 leading-loose">And how is security expressed? The smaller the investment in the investment, the greater the risk of failure. The more investments, the less risk.
                    Investment security means that your investment is not separately invested. Our experienced investors place bets from a common account, where there is always more than $100,000 on the balance.

                    Click on the button below and find out everything personally from our managers.
                    </p>
                    <Link href="/about"><button className="bg-blue-500 p-3 w-40 rounded-full text-white text-sm">Learn More</button></Link>
                </div>
                <div className="w-1/2 max-[660px]:w-full max-[660px]:flex max-[660px]:justify-center relative" data-aos="slide-left">
                 <img src="/Macbook Pro Tilted Screen Mockup 1.png" alt="" className="w-96"/>   
                </div>
            </div>
            <div className=" w-full flex flex-col justify-center items-center gap-5 mt-10">
                <p className="text-xl">Our company Partners</p>
                <div className="flex max-[550px]:flex-wrap justify-between w-full gap-2">
                    <img src="/btc.png" alt="btc" className="w-28 max-[720px]:w-20  max-[720px]:h-8 h-10"/>
                    <img src="eth.png" alt="eth" className="w-28 max-[720px]:w-20  max-[720px]:h-8 h-10"/>
                    <img src="lite.png" alt="lite" className="w-28 max-[720px]:w-20  max-[720px]:h-8 h-10"/>
                    <img src="ton.png" alt="ton" className="w-28 max-[720px]:w-20  max-[720px]:h-8 h-10"/>
                    <img src="tezos.png" alt="tezos" className="w-28  max-[720px]:w-20  max-[720px]:h-8h-10"/>
                    <img src="chainlink.png" alt="chainlink" className="w-28 max-[720px]:w-20  max-[720px]:h-8 h-10"/>
                </div>
            </div>
            <div className=" flex flex-col justify-center items-center gap-5 mt-20">
                <h3 className="text-2xl">Our recent reviews</h3>
                <p className="text-center text-sm leading-loose text-slate-500 w-[500px] max-[510px]:w-[300px]">Each review is especially valuable to us. After all, a long joint path has been done for this. Success consists of trust, willingness to develop and change.</p>
            </div>
            <Reviews />
            <div className="flex mb-20"></div>
        </div>
     );
}
 
export default Body;