function IsiProject(props){
    return(
        <div className="mt-6 px-2">
            <div className="relative overflow-hidden group" data-aos="flip-left">
                <img src={props.gambar} alt="" className="w-[375px] h-[250px] lg:w-[400px] lg:h-[300px] rounded-xl"/>
                <div className="group-hover:bg-gradient-to-b transition-all from-transparent to-black group-hover:translate-y-0 translate-y-12 absolute top-0 bottom-0 left-0 right-0"></div>
                <button className="lg:text-xl absolute delay-200 bottom-2 left-2 bg-teal-400 py-1 px-3 rounded-xl border-teal-400 group-hover:-translate-y-10 xl:group-hover:-translate-y-12 translate-y-12 transition-all shadow-sm shadow-teal-400"><a href={props.link}>Info WEB</a></button>
                <h3 className="text-white absolute group-hover:bottom-4 lg:text-xl -bottom-12 transition-all left-2 py-1 px-2 after:content-[''] after:duration-500 after:absolute after:transition-all after:left-[50%] after:bg-teal-400 after:w-0 group-hover:after:w-full after:bottom-0 group-hover:after:left-0 after:h-[2px] xl:after:h-[3px]">{props.judul}</h3>
            </div>
            <p className="text-sm text-center mt-2 dark:text-white lg:text-lg" data-aos="fade-down">{props.title}</p>
        </div>
    )
}


export default IsiProject