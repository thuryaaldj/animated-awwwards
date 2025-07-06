const BentoCard =({src,title, description})
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
        </div>
    </div>
)

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
    <div className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md:h-[65vh]'>
        <BentoCard
        src="videos/feature-1.mp4"
        title={<> radi<b>n</b>t </>}
        description="ShadowQuest is a mysterious adventure game full of hidden secrets.
        You play as a brave hero exploring dark dungeons and solving ancient puzzles."


        />

    </div>
    </section>
)
}

export default Features
