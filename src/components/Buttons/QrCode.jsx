import { Button } from "@material-tailwind/react";
// import qrCode from "../../assets/qr-pdf.png";
import qrCode from "../../assets/qr-pdf.svg";

const QrCode = () => {
  return (
    <div>
      <Button>
        <a
          href="https://chari-cruz-portfolio-77qh.vercel.app/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img width="100px" height="auto" src={qrCode} alt={qrCode.name} />
        </a>
      </Button>
    </div>
  );
};

export default QrCode;

