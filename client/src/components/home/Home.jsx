import Banner from "./banner/Banner";
import Logo from "../logo/Logo";
import { useGetNewestReleases } from "../../hooks/useBooks";
import Catalog from "../catalog/Catalog";

export default function Home() {

    const [allBooks] = useGetNewestReleases();

    return (
        <>
            <Logo />
            <Banner />
            <Catalog />
        </>
    );
}