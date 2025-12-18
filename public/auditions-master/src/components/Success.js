import Link from "@material-ui/core/Link";
import logo from "../images/ieee-logo-light.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Success.css";

const Success = () => {
  return (
    <>
      <section id="home">
        <nav class="navbar">
          <div class="container">
            <a
              className="navbar-brand"
              target="_blank"
              rel="noreferrer"
              href="https://ieee-sb-nitdgp.vercel.app/"
            >
              <img src={logo} alt="" width="100" height="50" />
            </a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row head">
                <h1>
                  IEEE SB NIT DURGAPUR
                  <br />
                  AUDITIONS
                </h1>
              </div>
              <div className="swal-icon swal-icon--success">
                <span className="swal-icon--success__line swal-icon--success__line--long"></span>
                <span className="swal-icon--success__line swal-icon--success__line--tip"></span>

                <div className="swal-icon--success__ring"></div>
                <div className="swal-icon--success__hide-corners"></div>
              </div>
              <div className="desc">
                <h3>
                  You have successfully registered for the audition process
                </h3>
                <br />
                <p>Click the whatsapp icon below to join our whatsapp group.</p>
                <Link
                  href="https://chat.whatsapp.com/DS956oN4CHII3JdjJsFOaV"
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon style={{ fontSize: "5rem" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Success;
