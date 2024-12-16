import {GamePlatform} from "../model.ts";
import {MdPhoneIphone} from "react-icons/md";
import {FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox} from "react-icons/fa";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import {HStack} from "@chakra-ui/react";

interface  PlatformIconListProps {
    platforms: GamePlatform[];
}

const PlatformIconList = ({ platforms } : PlatformIconListProps) => {
    return (
        <HStack marginY={"10px"}>
            {
                platforms.map((platform) => (
                    <span key={platform.id}>
                        { platform.slug === 'ios' && <MdPhoneIphone color="gray" /> }
                        { platform.slug === 'pc' && <FaWindows color="gray" /> }
                        { platform.slug === 'xbox' && <FaXbox color="gray" /> }
                        { platform.slug === 'nintendo' && <SiNintendo color="gray" /> }
                        { platform.slug === 'playstation' && <FaPlaystation color="gray" /> }
                        { platform.slug === 'linux' && <FaLinux color="gray" /> }
                        { platform.slug === 'android' && <FaAndroid color="gray" /> }
                        { platform.slug === 'mac' && <FaApple color="gray" /> }
                        { platform.slug === 'web' && <BsGlobe color="gray" /> }
                    </span>
                ))
            }
        </HStack>

    )
}

export default PlatformIconList;