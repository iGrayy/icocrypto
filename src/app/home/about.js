import { 
    Section,
    SectionHead,
    SectionContent,
    SectionTextArea,
    SectionButtonArea
} from "@/src/modules/theme/azalea/section";
import { GFX } from "@/src/modules/theme/shared/gfx";
import { Button } from "@/src/modules/common/buttons";

export default function About() {
    return (
        <Section id="about">
            <SectionHead title="What and why">ABOUT US</SectionHead>
            <SectionContent>
                <div className='row justify-content-between align-items-center gutter-vr-40px'>
                    <div className='col-lg-6 order-lg-last'>
			            <GFX url="https://ico.themenio.com/images/azalea/gfx-e.png" alt="gfx"/>
		            </div>
                    <div className='col-lg-5'>
                        <SectionTextArea>
                            <h2 className='title'>We build fully Decentralized Marketplace that Augment Access to Blockchain Technologies</h2>
                            <p>
                            We have developed a state-of-the-art marketplace where you can securely and reliably buy and sell any items. 
                            The fastest and most flexible asset platform in existence. It will include easy cryptocurrency payments 
                            integration, and even a digital arbitration system.
                            
                            At the end, Our aims to integrate all companies, employees, and business assets into a unified blockchain 
                            ecosystem, which will make business truly efficient, transparent, and reliable.
                            </p>
                        </SectionTextArea>
                        <SectionButtonArea>
                            {[
                                <Button classes='btn-primary' isFill={true}>WHITE PAPER</Button>
                            ]}
                        </SectionButtonArea>
                    </div>
                </div>
            </SectionContent>
        </Section>
    );
};