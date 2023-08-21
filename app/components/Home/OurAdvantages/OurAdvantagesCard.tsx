import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

interface OurAdvantagesProps {
  icon: string;
  name: string;
  description: string;
}

const OurAdvantagesCard: React.FC<OurAdvantagesProps> = ({
  icon,
  name,
  description,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-[600px]">
      {icon === "consultant" && (
        <RecordVoiceOverIcon
          fontSize="large"
          className="p-[7px] rounded-full bg-orange-bg"
        />
      )}
      {icon === "garant" && (
        <VerifiedUserIcon
          fontSize="large"
          className="p-[7px] rounded-full bg-orange-bg"
        />
      )}
      {icon === "delivery" && (
        <LocalShippingIcon
          fontSize="large"
          className="p-[7px] rounded-full bg-orange-bg"
        />
      )}
      {icon === "sclad" && (
        <WarehouseIcon
          fontSize="large"
          className="p-[7px] rounded-full bg-orange-bg"
        />
      )}
      {icon === "orient" && (
        <FlipCameraAndroidIcon
          fontSize="large"
          className="p-[7px] rounded-full bg-orange-bg"
        />
      )}
      {icon === "like" && (
        <ThumbUpIcon
          fontSize="large"
          className="p-[7px] rounded-full bg-orange-bg"
        />
      )}
      <div className="text-center md:text-start">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="opacity-80">{description}</p>
      </div>
    </div>
  );
};

export default OurAdvantagesCard;
