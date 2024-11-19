import { Button } from "@material-tailwind/react";
// import qrCode from "../../assets/qr-pdf.png";
import qrCode from "../../assets/qr-pdf.svg";

const QrCode = () => {
  return (
    <div>
      <Button>
        <a
          href="https://drive.google.com/file/d/120wvffMVH6ehcm1tVeYWYWb194r-LH9j/view?usp=sharing"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img width="80px" height="auto" src={qrCode} alt={qrCode.name} />
        </a>
      </Button>
    </div>
  );
};

export default QrCode;

