import { CenteredContainer } from "./styles";
import { FireworkSpinner } from "react-spinners-kit";

const Loader = () => {
    return (
        <CenteredContainer>
            <FireworkSpinner size={250} color={"#39b8f3"} />
        </CenteredContainer>
    )
}

export default Loader;