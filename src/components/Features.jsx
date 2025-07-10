// import { Children } from "react"
import { TiLocationArrow } from "react-icons/ti"
import { useRef ,useState} from 'react'

    export const BentoTile=({children,className =''}) => {
    const [transformStyle,setTransformStyle]=useState('');
    const itemRef =useRef(null);

    const handleMouseMove = (event) =>{
        if(!itemRef.current)return;

        const {left , top ,width,height} = itemRef.current.getBoundingClientRect();

        const relativeX=(event.clientX - left)/width;
        const relativeY=(event.clientY - top)/height;

        const tiltX = (relativeY-0.5)*5;
        const tiltY = (relativeX-0.5)* -5;

        const newTransform =`prespective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d( 0.95 , 0.95 , 0.95 )`
        setTransformStyle(newTransform)
    }

    const handleMouseLeave = () => {
        setTransformStyle('');
    }

    return(
        <div 
        ref={itemRef} 
        className={className} 
        onMouseMove={handleMouseMove} 
        onMouseLeave={handleMouseLeave} 
        style={{ transform:transformStyle }}
        >
            {children}
        </div>
    )
}

export const BentoCard =({src,title, description,isComingSoon}) =>{
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [hoverOpacity, setHoverOpacity] = useState(0);
    const hoverButtonRef = useRef(null);


    const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
    });
};

const handleMouseEnter = () => setHoverOpacity(1);
const handleMouseLeave = () => setHoverOpacity(0);

return(
    <div className="relative size-full">
        <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
        />

        <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
            <h1 className="bento-title special-font ">{title}</h1>
            {description&&(
                <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
            )}
        </div>

                {isComingSoon && (
        <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
        >
            {/* Radial gradient hover effect */}
            <div
            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
            style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
            }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
        </div>
        )}

        </div>
    </div>
)
}

const Features = () => {
return (
    <section className='bg-black pb-52' >
    <div className='container mx-auto px-3 md:px-10'>
        <div className='px-5 py-32'>
            <p className='font-circular-web text-lg text-blue-50'>Into the Metagame Layer</p>
        </div>
        <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>
            SkyRiders is a fast-paced racing game set in a futuristic city Players dodge obstacles and collect power-ups to reach the finish line first  .
        </p>
    </div>
    <BentoTile className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md:h-[65vh]'>
        <BentoCard
        src="videos/feature-1.mp4"
        title={<> radi<b>n</b>t </>}
        description="ShadowQuest is a mysterious adventure game full of hidden secrets.
        You play as a brave hero exploring dark dungeons and solving ancient puzzles."


        />

    </BentoTile>

    <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7" >
        <BentoTile className="bento-title_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
            src="videos/feature-2.mp4"
            title={<>zig<b>m</b>a</>}
            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
        </BentoTile>

        <BentoTile className="bento-title_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
            src="videos/feature-3.mp4"
            title={<>n<b>e</b>xus </>}
            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
        </BentoTile>

                <BentoTile className="bento-title_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
            src="videos/feature-4.mp4"
            title={<>az<b>u</b>l </>}
            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
        </BentoTile>

        <BentoTile className="bento-title_2 ">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                <h1 className="bento-title special-font max-w-64 text-black ">M<b>o</b>re co<b>m</b>ing s<b>o</b>on!</h1>

                <TiLocationArrow className="m-5 scale-[5] self-end"/>
            </div>
        </BentoTile>

        <BentoTile className="bento-tilt_2">
                    <video
        src="videos/feature-5.mp4"
        loop
        muted
        autoPlay
        className="size-full object-cover object-center"
        />

        </BentoTile>
    </div>

    </section>
)
}

export default Features
