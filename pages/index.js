import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { Button } from "@mui/material";

const StyledButton = ({ text, icon }) => (
  <Button
    style={{
      backgroundColor: "#312c55",
      color: "#fff",
      textTransform: "none",
      margin: 10,
    }}
  >
    {icon}
    <p style={{ margin: 0, marginLeft: 10, marginRight: 5 }}>{text}</p>
  </Button>
);
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Landboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img
          src="https://i.ibb.co/rw32JGz/HQ2.png"
          alt="Landboard logo"
          style={{ width: "70%", maxWidth: 1200 }}
        />
        <p className="description" style={{ fontSize: 24 }}>
          Coming soon.
        </p>
        <div style={{}}>
          <a href="https://twitter.com/landboard_io">
            <StyledButton
              text="Twitter"
              icon={<AiOutlineTwitter style={{ fontSize: "1.2rem" }} />}
            />
          </a>
          <a href="https://t.me/+abXeMctNaR0xNmY0">
            <StyledButton
              text="Telegram"
              icon={<FaTelegram style={{ fontSize: "1.2rem" }} />}
            />
          </a>
        </div>
      </main>
    </div>
  );
}
