import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Cards from "./Cards";
import { Container, CircularProgress } from "@material-ui/core";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const getuser = async () => {
      const res = await axios.get("https://reqres.in/api/users?page=1");
      setData(res.data.data);
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      setLoad(false);
    };
    getuser();
  }, []);

  return (
    <>
      {load ? (
        <CircularProgress color="secondary" />
      ) : (
        <Container>
          <Grid container spacing={3}>
            {data &&
              data.map((d) => (
                <Grid item xs={12} sm={6} md={3} lg={4}>
                  {data && <Cards user={d} />}
                </Grid>
              ))}
          </Grid>
        </Container>
      )}
    </>
  );
}

export default Home;
