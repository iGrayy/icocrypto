import { 
    Banner,
    BannerHead,
    BannerBottom,
    BannerFooter,
} from "@/src/modules/theme/azalea/banner";
import {
    ProgressBar,
    ProgressPoint
} from "@/src/modules/theme/azalea/processbar";
import { Countdown } from "@/src/modules/theme/azalea/countdown";


export default function HomeBanner() {
    return (
        <Banner>
            <BannerHead
                title='WORLD FIRST DECENTRALIZED MARKETPLACE WITH BLOCKCHAIN INFRASTRUCTURE'
                caption='The first decentralized Marketplace which makes simplifies and standarizes data with blockchain technology. We provides user-friendly, efficient and secure crypto solutions and utilizing blockchain technology.'
                btn1={<a className="btn btn-primary btn-round">PRIVATE SALE</a>}
            ></BannerHead>
            <BannerBottom
                left={
                    <ProgressBar
                        title1='Raised'
                        title2='Target'
                        value1='1250'
                        value2='150000'
                        unit='tokens'
                        percent='30'
                    >
                        <ProgressPoint title='Soft cap' percent='25'></ProgressPoint>
                        <ProgressPoint title='crowdsale' percent='50'></ProgressPoint>
                        <ProgressPoint title='Hand cap' percent='75'></ProgressPoint>
                    </ProgressBar>
                }
                right={
                    <Countdown
                        title='Current bonus'
                        percent='20%'
                        caption='Contributors can receive'
                        subtitle='The bonus ends in'
                        endDate='04/30/2030'
                    ></Countdown>
                }
            ></BannerBottom>
        </Banner>
    );
};