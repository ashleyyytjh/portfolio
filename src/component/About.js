import React from 'react';
import profileImage from "../images/Untitled_Artwork.png";
import Icon from './Icon';
export default function About() {
    return (
        <div className="h-[800px] bg-[#edf2ed]  flex flex-col justify-center items-center ">
            <div id="about-section" class=" flex md:flex-row flex-col items-center">
                <img class="profile-img sm:w-1/2  xl:w-[600px]" src={profileImage}/>

                <div class="about-content font-bold md:pb-32   flex flex-col justify-center items-center xl:mr-60">
                    <p class="about-name text-2xl md:text-4xl pb-3 " > Ashley Toh </p>
                    <div class="flex flex-col justify-center items-center lg:text-xl ">
                        <p class="about-major "> BSc Computer Science </p>
                        <p class="about-major"> Artificial Intelligence and Cyber Security </p>
                    </div>

                    <div className="links space-x-5 mt-12">
                        <Icon link="https://github.com/ashleyyytjh" iconName= "github"></Icon>
                        <Icon link="https://www.linkedin.com/in/ashleyyytoh/" iconName="linkedin"></Icon>
                    </div>
                </div>
            </div>

            <div class=" font-bold flex flex-col justify-center items-center ">
                <p className="lg:text-2xl text-xl"> scroll for more!</p>
            
            </div>
        </div>
    );
}