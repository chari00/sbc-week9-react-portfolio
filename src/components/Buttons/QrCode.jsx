import { Button } from "@material-tailwind/react";
import qrCode from "../../assets/qr-pdf.png";

const QrCode = () => {
  return (
    <div>
      <Button>
        <a
          href="https://drive.google.com/file/d/1mU6ZpANOzk3ZtxoCl3LoywL19dnRvSob/view?usp=sharing"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img width="80px" height="80px" src={qrCode} alt={qrCode.name} />
        </a>
      </Button>
    </div>
  );
};

export default QrCode;
