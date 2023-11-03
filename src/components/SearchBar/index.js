import { useState, useRef, useEffect } from "react";
import { Container, SearchBoxContainer, SearchIcon, CloseIcon } from "./styles";
import SearchResults from "../SearchResults";

const SearchBar = () => {
    const [showSearchBox, setShowSearchBox] = useState(false);
    const [searchText, setSearchText] = useState("");
    const searchInput = useRef(null);

    const handleInputTextChange = (event) => {
        event.preventDefault();
        setSearchText(event.target.value);
    };

    const toggleSearchBoxVisibility = () => {
        setShowSearchBox(!showSearchBox);
    }

    const focusInput = () => {
        if (searchInput.current) {
            searchInput.current.focus();
        }
    };

    const handleIconClick = () => {
        toggleSearchBoxVisibility()
        setSearchText("");
    };

    useEffect(() => {
        if (showSearchBox) {
            focusInput();
        }
    }, [showSearchBox]);

    return (
        <>
            <Container>
                <SearchIcon onClick={handleIconClick} />
                <SearchBoxContainer isvisible={showSearchBox.toString()}>
                    <input
                        type="text"
                        id="searchInput"
                        name="searchInput"
                        value={searchText}
                        ref={searchInput}
                        placeholder="Search The MovieDB"
                        onChange={handleInputTextChange}
                    />
                    <CloseIcon onClick={handleIconClick} />
                </SearchBoxContainer >
            </Container>
            <SearchResults searchText={searchText} />
        </>
    )
}

export default SearchBar;