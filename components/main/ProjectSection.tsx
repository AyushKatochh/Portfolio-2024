"use client";
import React from "react";
import { Meteors } from "../ui/meteors";
import ProjectDetail from "../ui/ProjectDetail";
import { motion } from "framer-motion";
import chatBackground from "./chat.png"
import expenseBackgroundImage from "./expense.png"
import todoBackgroundImage from "./todo.png"
import MiniProject from "../ui/MiniProject";
import { MdConstruction } from "react-icons/md";

const ProjectSection = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      id="3"
      className="w-full relative  flex flex-col gap-24 justify-between items-center bg-black overflow-y-auto py-12 overflow-x-hidden "
    >
      <div className="absolute md:block hidden ">
        <Meteors number={30} className="z-30"></Meteors>
      </div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3 }}
        className="  text-center text-3xl md:text-5xl bg-clip-text z-10 text-transparent bg-gradient-to-r from-neutral-700 to-white font-bold"
      >
        PROJECTS
      </motion.div>
      <ProjectDetail />
      <div className="w-full flex flex-col md:gap-12 gap-6 ">
        <motion.div whileInView={{y:0,opacity:1}} initial={{y:200,opacity:0}} transition={{duration:0.4}} className="text-center text-xl md:text-3xl z-10 text-transparent bg-clip-text  bg-gradient-to-r from-black via-gray-200 to-white font-bold ">
          Mini Projects
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-12 place-items-center">
          <MiniProject
            title="React Chat Application"
            description="Utilized React and Tailwind CSS to create a visually appealing WhatsApp interface. Implemented dynamic routing with React Router for seamless navigation between pages. This project demonstrates proficiency in React, Tailwind CSS, and React Router."
            url="http://161.35.117.105:3000/"
            backgroundImage={chatBackground}
          ></MiniProject>

          <MiniProject
            title="Discord Reminder Bot"
            description="Integration Tools: Developed a discord reminder and recording bot using
            discordjs and discords/voice
             Voice handling: Implemented opus encoder and ffmpeg
             Storage: S3 bucket for storage of the recordings
             Database:
            1. Postgres database for storing the information of files for recording
            2. Prisma ORM as database client"
            url="https://github.com/AyushKatochh/Discord-Reminder-Bot"
            backgroundImage="expense.png"
          ></MiniProject>

          <MiniProject
            title="Expense Tracker"
            description=" web application built using React.It shows and track e
            
            +xpenses"
            url="https://react-backend-53195.web.app/"
            backgroundImage={expenseBackgroundImage}
          ></MiniProject>
          <MiniProject
            title="Todo App"
            description="A To-Do Application that take valid input from the user and stores the provided information to the database and also displays all the tasks and appends new task to it. User can also mark the task as completed and cannot put empty title and description as a task.
Tech Stack - HTML, CSS. Javascript"
            url="https://boring-clarke-4cf5e6.netlify.app/"
            backgroundImage={todoBackgroundImage}
          ></MiniProject>
          <motion.div whileInView={{y:0,opacity:1}} initial={{y:100,opacity:0}} transition={{duration:0.4}} className="flex flex-col col-span-1 md:col-span-2 w-11/12 md:w-10/12 p-4 shadow-lg shadow-white/20  items-center  border border-gray-200 rounded-xl bg-black/70 text-white gap-6  ">
            <a
              href="https://github.com/AyushKatochh"
              target="_blank"
              className="text-2xl text-center cursor-pointer hover:text-gray-400"
            >
              More Projects are Under Construction
            </a>
            <p className="text-xs md:text-sm font-medium flex gap-3 items-center">Stay Tuned.... <MdConstruction className="text-white w-3 h-3 md:w-5 md:h-5"></MdConstruction></p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSection;
