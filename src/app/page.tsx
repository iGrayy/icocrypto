'use client'

import Ikon from "@/components/elements/ikon";
import Modals from "@/components/elements/modals";
import PictureModals from "@/components/elements/picture-modals";
import PlayVideos from "@/components/elements/play-videos";
import VideoModals from "@/components/elements/video-modals";
import Videos from "@/components/elements/videos";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)

  const openHandle = () => {
    setOpen(true)
  }

  const closeHandle = () => {
    setOpen(false)
  }

  const openHandle2 = () => {
    setOpen2(true)
  }

  const closeHandle2 = () => {
    setOpen2(false)
  }

  return (
    <>
      <Videos src="https://www.youtube.com/watch?v=3m30BWkkssA"
      type={1}
      thumb="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZr3ZgReTYWifTT4rRFIl4h506L_mViQRAQ&s"
      />
      <button onClick={openHandle2}>Open modals picture <Ikon ico="ikon-bulb"/></button>
      <PictureModals src="https://neweralive.na/wp-content/uploads/2024/06/lloyd-sikeba.jpg" open={open2} onClose={closeHandle2}/>
    </>
  );
}
