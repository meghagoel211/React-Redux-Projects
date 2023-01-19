import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go';


function ButtonPage() {
    const handleClick=()=>{
        console.log('Clicked!');
    };

    return (
        <div>
            <div>
                <Button primary outline onClick={handleClick} className="mb-5">
                    <GoBell />
                    Click Me!</Button>
            </div>
            <div>
                <Button secondary rounded={true}>
                    <GoCloudDownload />
                    See Deal!</Button>
            </div>
            <div>
                <Button success rounded>
                    <GoDatabase />
                    Hide Adds</Button>
            </div>
            <div>
                <Button warning outline rounded>Buy Now</Button>
            </div>
            <div>
                <Button danger>Something!</Button>
            </div>
        </div>
    );
}

export default ButtonPage;