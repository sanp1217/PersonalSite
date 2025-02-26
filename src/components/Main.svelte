<script>
	import Step from "./Step.svelte";
    let steps = [
        {name: 'Local Secure Messaging', icon: 'fa-solid fa-envelope', href: ''},
        {name: 'Game List', icon: 'fa-solid fa-gamepad', href: 'https://github.com/sanp1217/WebDevFinalProject'},
        {name: 'Conway\'s Game of Life', icon: 'fa-solid fa-users', href: 'https://github.com/sanp1217/game_of_life'},
        {name: 'Picture to ASCII', icon: 'fa-solid fa-image', href: 'https://github.com/sanp1217/PictureToASCII'},
    ];

</script>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="grid grid-cols-1 gap-10 py-8 sm:py-14">
        <div class="flex flex-col justify-center items-center lg:justify-center text-center lg:text-left gap-6 md:gap-8
        lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm Pablo Sanchez <br/>
            </h2>
            <p class="text-base sm:text-lg md:text-xl w-1/2">
                My favorite tech includes JavaScript, React, CSS, HTML, and anything else that has to do with web development mainly.
                I also have experience with Python, Java, C, C++, and more!

            </p>
            <a class="blueShadow mx-auto text-base sm:text-lg md:text-xl relative
                overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer
                " href="mailto:pablosgrad12@gmail.com" target="_blank"
            >
                
                <h4 class="relative z-9">Get in touch &rarr;</h4>

            </a>
        </div>

        <!-- Add an image eventually
        <div class="relative shadow-2xl grid place-items-center">
            <img alt="Profile image" class="object-cover z-[2] max-h-[70vh]"/>
        </div>
        -->

    </section>

     <section id="current" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-large sm:text-xl md:text-2xl">
                I am currently working on...
            </h6>
        </div>

        <div class="grid grid-cols-1 gap-12">
            <Step step={steps[0]}>
                <p>
                    A locally hosted, real-time chat application built with React. Powered by Javascript-based backend with SQL.
                   Uses WebSockets for low-latency messaging and pure CSS for design. Secures message storage, user authentication,
                   and intuitive interface. The github link will be posted when done at the end of the semester.
                </p>
            </Step>
        </div>
    </section>



    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-large sm:text-xl md:text-2xl">
                Some Projects I've made.
            </h6>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[1]}>
                <p>A site that lets uers browse through games and review or add them to their list to play.
                    Uses React, HTML, and CSS on the frontend and Express and MongoDB on the backend. 
                    Uses an API to retrieve video game information.
                </p>
            </Step>
            <Step step={steps[2]}>
                <p>A command line application that consists of a system of cells on a 2-D grid 
                    where cells are considered "alive" or "dead" according to how many neighbors they have.
                    In Python, implemented random initial states, neighbor detection, and rule-based state
                    transitions to generate evolving patterns. 
                </p>
            </Step>
            <Step step={steps[3]}>
                <p>A Python program that converts images into ASCII art by mapping pixel intensity to 
                    character density. Untilized processing techniques with the Pillow library to read, 
                    reasize, and grayscale images, then generate text based representation.
                </p>
            </Step>
        </div>
    </section>

</main>