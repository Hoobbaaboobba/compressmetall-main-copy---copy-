import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface OrangeButtonProps {
  label: string;
  mark?: boolean;
}

const OrangeButton: React.FC<OrangeButtonProps> = ({ label, mark }) => {
  return (
    <button className={`py-2 px-5 bg-orange-bg boxshadow text-white underline`}>
      {label}
      {mark ? "" : <CheckCircleOutlineIcon fontSize="small" className="ml-2" />}
    </button>
  );
};

export default OrangeButton;
