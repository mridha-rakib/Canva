import { Link } from "react-router-dom";

const Header = () => {
  const saveImage = () => {};
  const downloadImage = () => {};
  return (
    <div className="h-[60px] bg-gradient-to-r from-[#212122] via-[#27282b] to-[#2a2b2c] w-full">
      <div className="flex justify-between px-10 items-center text-gray-300 h-full">
        <Link to="/">
          <img
            src="https://scontent.frjh4-1.fna.fbcdn.net/v/t39.30808-6/315440365_4131605083730489_8413840411042909907_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeH4Lrw54Lv9CYRWdv5u6xSeP0qcQaW14vE_SpxBpbXi8bQz33o1AEbO2iKAbzY1J-W065Ik0GZApcsv7qBTMH24&_nc_ohc=k5ieYHRCZQkAX8BEkf7&_nc_ht=scontent.frjh4-1.fna&oh=00_AfDhhU1ghU0HYlizl1OQ0k985KH7dK-qKRs_ClAHo0Sf7A&oe=6598CF05"
            alt=""
          />
        </Link>
        <span className="text-xl">Mini Canva</span>
        <div className="flex justify-center items-center gap-2 text-gray-300">
          <button
            onClick={saveImage}
            className="px-3 py-[6px] outline-none bg-[#252627]"
          >
            Save
          </button>
          <button
            onClick={downloadImage}
            className="px-3 py-[6px] outline-none bg-[#252627]"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
