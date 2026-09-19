import Image from "next/image";

// This should immediately explain who you are and what kind of developer you are. 
// Include a short intro, your main tech stack, 2–3 featured projects, and clear buttons 
// such as View Projects, View Resume, and Contact Me. For you, something along the lines of 
// “Full-stack developer building modern web applications, cloud systems, and AI-powered products” 
// would fit well.

export default function Home() {
    return (
        // This is the main container for the home page and should cover the full screen.
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-400">
            {/* Hero section: text on the left, image on the right */}
            <div className="flex w-full items-center justify-between">
                <div className="flex flex-col">
                    <p className="text-sm font-semibold uppercase ">
                        Full-Stack Developer
                    </p>
                    <h1 className="text-5xl font-bold leading-tight text-zinc-900 dark:text-zinc-100">
                        Hi, I'm Jin Sato
                    </h1>
                    <p className="text-lg text-zinc-700 dark:text-zinc-300">
                        Full-stack developer building modern web applications, cloud systems, and AI-powered products.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="font-medium bg-rose-950 text-white">
                            View Projects
                        </button>
                        <button className="font-medium bg-gray-500 text-white">
                            View Resume
                        </button>
                    </div>
                </div>

                <div className="flex flex-col">
                    <Image
                        src="/hero-illustration.svg"
                        alt="Project screenshot"
                        width={700}
                        height={600}
                    />
                </div>
            </div>
        </div>
    );
}
