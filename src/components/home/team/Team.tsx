"use client";
import team from "@/statics/team/team";
import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Team = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  return (
    <div className="container">
      <div className="">
        <h2 className="text-3xl font-bold text-red-400 mb-1">Our team</h2>
        <p className="text-gray-600 text-[14px]">See our full team member</p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {team?.map((member, index) => {
          return (
            <motion.div
              layoutId={member.id.toString()}
              key={index}
              className="relative duration-200 group cursor-pointer"
              onClick={() => setSelectedId(member.id.toString())}
            >
              <TfiClose className="w-full h-full text-gray-200 group-hover:text-blue-400" />
              <motion.div className="w-44 h-44 absolute top-1/2 left-1/2 duration-0 transform -translate-x-1/2 -translate-y-1/2">
                <motion.img
                  src={member?.profileImage}
                  alt="image"
                  className="w-full h-full shadow-lg object-cover group-hover:text-blue-400 rounded-full hover:rounded-lg ring-2 duration-0"
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Display selected member */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="fixed inset-0 mx-auto p-2  my-auto w-96 h-44 shadow-xl bg-white rounded-lg flex justify-center items-center"
            onClick={() => setSelectedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="w-full h-full flex gap-2 rounded-lg ">
              <motion.img
                src={
                  team.find((member) => member.id.toString() === selectedId)
                    ?.profileImage
                }
                alt="image"
                className="w-6/12 h-full object-cover rounded-lg flex-1"
              />
              <div className=" flex-1 h-full">
                <div className=" h-full w-full flex justify-between flex-col ">
                  <div className="mt-4">
                    <h1 className="text-sm font-bold">
                      {
                        team.find(
                          (member) => member.id.toString() === selectedId
                        )?.name
                      }
                    </h1>
                    <h2 className="text-xs font-medium">
                      {
                        team.find(
                          (member) => member.id.toString() === selectedId
                        )?.email
                      }
                    </h2>
                    <div className="mt-3 flex gap-2">
                      <FaFacebook className="text-lg text-blue-500" />
                      <FaInstagram className="text-lg text-purple-500" />
                      <FaLinkedin className="text-lg text-blue-700" />
                    </div>
                  </div>
                  <motion.button
                    className="   text-white bg-red-400 h-7 w-full mx-auto  p-1"
                    onClick={() => setSelectedId(null)}
                  >
                    {/* <TfiClose className="w-3 h-3" /> */}
                    <h1 className="text-xs">close</h1>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Team;