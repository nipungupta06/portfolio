
const About = () => {
    const url="https://www.iiitdmj.ac.in/";
    return (
        <div className="mt-4 lg:mt-16">
            <h2 className=" text-3xl lg:text-5xl text-center">About Me</h2>

            <p className="my-8 lg:my-16 mx-4 md:mx-auto text-sm lg:text-base md:w-4/6 text-center">
                Hello, I'm Nipun Gupta, a passionate and dedicated developer currently pursuing my B.Tech degree from the <span className="linknav"><a href={url} target="_blank"> Indian Institute of Information Technology, Jabalpur </a></span>. With a strong curiosity for technology and a deep desire to understand how things work, I embarked on my journey into the world of development.

                My coding journey began with a fascination for programming languages, and I started exploring the fundamentals of C++ and Python. These two languages quickly became the foundation of my programming skills, shaping my problem-solving abilities and approach to software development.

                Driven by my passion for web development, I expanded my knowledge by diving into the MERN (MongoDB, Express.js, React, and Node.js) stack. This full-stack JavaScript framework fascinated me with its versatility and efficiency in building dynamic and interactive web applications. Through hands-on projects and continuous learning, I honed my skills in front-end and back-end development using this powerful technology stack.
            </p>
        </div>
    )
}

export default About