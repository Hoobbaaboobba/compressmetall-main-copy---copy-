import Image from "next/image";

import loadingGif from "../assets/loading.gif";

export default function Loading() {
  return (
    <div className="max-w-[900px] w-full flex justify-center items-center">
      <Image src={loadingGif} alt="loading_gif" width={100} height={100} />
    </div>
  );
}
