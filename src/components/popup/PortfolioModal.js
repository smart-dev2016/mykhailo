import Modal from "./Modal";
import store from "../../store";

const PortfolioModal = ({ item, close, open }) => {
  const data = store.portfolio[item];
  return (
    <Modal close={close} open={open}>
      <div className="portfolio_popup_details">
        <div className="top_image">
          <img src={`/img/portfolio/${data.img}`} alt="asdas" />
        </div>
        <div className="portfolio_main_title">
          <h3>{data.tit}</h3>
          <span>
            <a href={data.url}>{data.url}</a>
          </span>
          <div />
        </div>

        <div className="text">
          <p>{data.des}</p>
          <p>
            {" "}
            Technologies Utilized: <br />
            <span>{data.laf}</span>
          </p>
        </div>
      </div>
    </Modal>
  );
};
export default PortfolioModal;
