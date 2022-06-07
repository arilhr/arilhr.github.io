import { AnimatePresence } from "framer-motion";
import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { CardItem } from "../../components/CardItem/CardItem";
import { PortofolioView } from "../../components/PortofolioView/PortofolioView";
import { motion } from "framer-motion";
import "./Portofolio.scss";
import PortofolioData from "./PortofolioList.json";

export const Portofolio = () => {
  const [portofolio, setPortofolio] = React.useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const secretKey =
    "$2b$10$OUqVE7BHUnswxpaqKMXUhOnGtZqVrTzjSPTm4E2eePdKbsSmkxoKi";

  React.useEffect(() => {
    getPortofolioData();
  }, []);

  const getPortofolioData = () => {
    const axios = require("axios");
    let config = {
      headers: {
        "X-Master-Key": secretKey,
        "secret-key": secretKey,
      },
    };
    axios
      .get(process.env.REACT_APP_API_URL, config)
      .then((res) => {
        console.log(res);
        setPortofolio(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPortofolioByCategory = (category) => {
    if (portofolio.length === 0) {
      return [];
    }

    return portofolio.filter((item) =>
      item.category.some((cat) => cat.toLowerCase() === category.toLowerCase())
    );
  };

  const viewPortofolio = (id) => {
    window.scrollTo(0, 0);
    navigate("/portofolio/" + id);
  };

  return (
    <>
      <div className="portofolio-page">
        <AnimatePresence>
          {params.id === undefined && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              <Container className="position-relative">
                <div className="portofolio-group">
                  <div className="portofolio-list">
                    {portofolio.map((item, index) => {
                      return (
                        <CardItem
                          key={"game-" + index}
                          img={item.image[0]}
                          name={item.title}
                          category={item.category}
                          description={
                            item.description.length > 150
                              ? item.description.substring(0, 150) + "..."
                              : item.description
                          }
                          onClick={() => viewPortofolio(index)}
                        />
                      );
                    })}
                  </div>
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
        {
          <PortofolioView
            data={portofolio[params.id]}
            isOpen={params.id !== undefined}
          />
        }
      </div>
    </>
  );
};
