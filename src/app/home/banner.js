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
import { Button, EmButton } from "@/src/modules/common/buttons";


export default function HomeBanner() {
    return (
        <Banner>
            <BannerHead
                title='WORLD FIRST DECENTRALIZED MARKETPLACE WITH BLOCKCHAIN INFRASTRUCTURE'
                caption='The first decentralized Marketplace which makes simplifies and standarizes data with blockchain technology. We provides user-friendly, efficient and secure crypto solutions and utilizing blockchain technology.'
                btn1={<Button classes='btn-primary' isRound={true}>PRIVATE SALE</Button>}
                btn2={<Button classes='btn-primary' isRound={true} isFill={false}>TOKEN SALE</Button>}
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
            <BannerFooter
                buttons={[
                    <EmButton
                        href='https://www.youtube.com/watch?v=SSo_EIwHSd4'
                        classes='link link-light link-break video-popup'
                        icon='icon-circle icon-border icon-animation fas fa-play'
                    >How it works</EmButton>,
                    <EmButton
                        classes='link link-light link-break'
                        icon='icon-circle icon-border fas fa-lightbulb'
                    >Why buy Tokens now?</EmButton>
                ]}
                socials={[
                    <EmButton icon='fab fa-twitter'></EmButton>,
                    <EmButton icon='fab fa-medium'></EmButton>,
                    <EmButton icon='fab fa-facebook-f'></EmButton>,
                    <EmButton icon='fab fa-youtube'></EmButton>,
                    <EmButton icon='fab fa-bitcoin'></EmButton>,
                    <EmButton icon='fab fa-github'></EmButton>
                ]}
            ></BannerFooter>
        </Banner>
    );
};