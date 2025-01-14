import { SlUserFollow } from "react-icons/sl";
import { CiBookmark } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { GoThumbsup } from "react-icons/go";
export function formatLargeNumber(number) {
    if (number >= 1e9) {
      return (number / 1e9).toFixed(1).replace(/\.0$/, '') + 'B'; // Billion
    } else if (number >= 1e6) {
      return (number / 1e6).toFixed(1).replace(/\.0$/, '') + 'M'; // Million
    } else if (number >= 1e3) {
      return (number / 1e3).toFixed(1).replace(/\.0$/, '') + 'k'; // Thousand
    } else {
      return number.toString(); // Less than 1000
    }
  }

export const getRelativeTime = (timestamp) => {
  const now = new Date().getTime();
  const diff = now - timestamp;

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (diff < minute) return `${Math.floor(diff / 1000)} seconds ago`;
  if (diff < hour) return `${Math.floor(diff / minute)} minutes ago`;
  if (diff < day) return `${Math.floor(diff / hour)} hours ago`;
  return `${Math.floor(diff / day)} days ago`;
};


export const getIconByType = (type) => {
  switch (type) {
    case 'newFollower':
      return <SlUserFollow className="FNC-ic" />;
    case 'bookmark':
      return <CiBookmark className="FNC-ic" />;
    case 'like':
      return <CiHeart className="FNC-ic" />;
    case 'newReview':
      return <FaRegMessage className="FNC-ic" />;
    case 'reviewLike':
      return <GoThumbsup className="FNC-ic" />;
    default:
      return null;
  }
};

  