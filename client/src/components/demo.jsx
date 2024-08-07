import CopyrightSection from "./copyright-section/CopyrightSection";
import ElectronicSection from "./electronic-section/ElectronicSection";
import FashionSection from "./fashion-section/FashionSection";
import FooterSection from "./footer-section/FooterSection";
import JewellerySection from "./jewellry-section/JewellrySection";
import NavigationBar from "./navigation/NavigationBar";

export default function Component() {
    return (
        <>
            <NavigationBar />

            <FashionSection />

            <ElectronicSection />

            <JewellerySection />

            <FooterSection />

            <CopyrightSection />

        </>

    );
}