import Image from 'next/image';
import { HeaderStyled, LogoContainer } from "./styles";
import MovieIcon from "../../../public/favicon.png";
import { StyledRouterLink } from "../GlobalComponents/styles";
import SearchBar from '../SearchBar';

const Header = () => {
    return (
        <HeaderStyled>
            <StyledRouterLink href="/">
                <LogoContainer>
                    <Image src={MovieIcon} alt="Logo - Movie" width={40} height={40} />
                    <h3>
                        Movie<span>DB</span>
                    </h3>
                </LogoContainer>
            </StyledRouterLink>
            <SearchBar />
        </HeaderStyled>
    )
}

export default Header;