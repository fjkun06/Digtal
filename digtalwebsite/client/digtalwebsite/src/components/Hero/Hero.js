import React from 'react'


import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import digitalBusiness from "../../assets/images/digital-businessimg.jpg";
import WebDev from "../../assets/images/development.jpg";
import itcon from "../../assets/images/consulting.jpg";
import digitalMarketingimg from "../../assets/images/marketing.jpg";
import { Button } from "@mui/material";

export default function Hero() {
  return (
    <>
      <Grid display="flex" justify="center" align="center">
        <Grid item>
          <Typography
            variant="h1"
            color="secondary"
            align="center"
            padding="2rem"
            margin="2rem"
            fontSize="100"
            gutterBottom
            component="div"
          >
            {" "}
            Let's Keep it Simple
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        pl={{ xs: 1, sm: 4 }}
        pr={{ xs: 1, sm: 4 }}
        fontFamily="Poppins, sans-serif"
        fontSize="2rem"
      >
        <Grid
          item
          xs={12}
          className=""
          container
          md={5}
          mr={{ md: 12 }}
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
        >
          <Grid item>
            <Typography
              variant="h3"
              fontSize="1.4em"
              color="secondary"
              gutterBottom
              component="div"
            >
              Votre Transformation Digitale
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align="justify"
              fontSize="2rem"
              gutterBottom
              component="div"
            >
              Nous vous accompagnons dans votre transformation digitale et nous
              veillons à faire de celle-ci une réussite. Nous vous aidons à
              débloquer votre potentiel au maximum afin d'optimiser votre
              rentabilité.
            </Typography>
          </Grid>
          <Grid item margin>
            {" "}
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              gutterBottom
              component="Button"
            >
              Nous contacter
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} className="">
          <img
            width="100%"
            height="auto"
            src={digitalBusiness}
            alt="digitalBusiness"
          />
        </Grid>
      </Grid>

      {/* ////////////////////////////////////////////////HERO COMPONENT///////////////////////////////////////////////////*/}

      {/* ////////////////////////////////////////////////Services COMPONENT///////////////////////////////////////////////////*/}

      <Grid
        container
        fontFamily={"Poppins, sans-serif"}
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        flexDirection={"column"}
        pl={{ xs: 1, sm: 4 }}
        pr={{ xs: 1, sm: 4 }}
        mb="10rem"
        mt="10rem"
      >
        <Grid item>
          <Typography
            variant="h2"
            color="secondary"
            padding="2rem"
            margin="2rem"
            fontSize="3.5em"
            gutterBottom
            component="div"
          >
            {" "}
            Nos Services
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            align="Justify"
            fontSize="1.5rem"
            gutterBottom
            component="div"
            maxWidth={"630px"}
            md={6}
          >
            Profitez du savoir faire de notre jeune et dynamique équipe
            regroupant plus de 10 experts du développement web & mobile, du IT
            Consulting et du Marketing Digital.
          </Typography>
        </Grid>

        {/* ////////////////////////////////////////////////EACH Service COMPONENT///////////////////////////////////////////////////*/}

        <Grid item container gap>
          {/* ////////////////////////Item1///////////////*/}
          <Grid item container xs={12} sm={12} md={3.9} padding="1rem">
            <Grid item>
              <img width={"100%"} height="auto" src={WebDev} alt="WebDev " />
            </Grid>
            <Grid item>
              <Typography
                align="Justify"
                fontSize="1.5rem"
                gutterBottom
                component="div"
              >
                <Typography
                  variant="h4"
                  align="center"
                  color="secondary"
                  gutterBottom
                  component="div"
                  m="2rem"
                >
                  Developpement Web
                </Typography>
                Nous développons des logiciels qui inspirent les utilisateurs et
                les conduisent à leur destination de la manière la plus rapide
                possible. En tant que partenaire fiable, nous vous soutenons
                également au niveau local grâce à nos experts présents chez
                vous. Nous proposons également notre expertise sous forme de
                cours de formation ou de conseils individuels.Nous concevons et
                choisissons la technologie appropriée et testons la solution.
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                gutterBottom
                component="Button"
              >
                En Savoir plus
              </Button>
            </Grid>
          </Grid>
          {/* ////////////////////////Item1///////////////*/}

          {/* ////////////////////////Item2///////////////*/}
          <Grid item container xs={12} sm={12} md={3.9} padding="1rem">
            <Grid item>
              <img
                width={"100%"}
                height="auto"
                src={digitalMarketingimg}
                alt="Digital Marketing "
              />
            </Grid>
            <Grid item>
              <Typography
                align="Justify"
                fontSize="1.5rem"
                gutterBottom
                component="div"
              >
                <Typography
                  variant="h4"
                  align="center"
                  color="secondary"
                  gutterBottom
                  component="div"
                  m="2rem"
                >
                  Marketing Digital
                </Typography>
                Nous aidons votre entreprise à booster sa visibilité en
                optimisant ses stratégies d'acquisition payantes, mais également
                en mettant en place une stratégie SEO pointue. Les experts
                Marketing de Digtal maîtrisent les bonnes pratiques des
                différents des moteurs de recherche et plateformes digitales par
                cœur, et leur savoir-faire en la matière va générer un trafic
                qualifié et des ventes en hausse sur votre site web.
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                gutterBottom
                component="Button"
              >
                En Savoir plus
              </Button>
            </Grid>
          </Grid>
          {/* ////////////////////////Item2///////////////*/}
          {/* ////////////////////////Item3///////////////*/}
          <Grid item container xs={12} sm={12} md={3.9} padding="1rem">
            <Grid item>
              <img
                width={"100%"}
                height="auto"
                src={itcon}
                alt="itConsulting  "
              />
            </Grid>
            <Grid item>
              <Typography
                align="Justify"
                fontSize="1.5rem"
                gutterBottom
                component="div"
              >
                <Typography
                  variant="h4"
                  color="secondary"
                  gutterBottom
                  component="div"
                  align="center"
                  m="2rem"
                >
                  IT Consulting
                </Typography>
                Nos consultants informatiques allient la pensée stratégique, les
                idées pour le choix des technologies et des outils ainsi que les
                tendances numériques à la gestion de projet. <br /> Nos
                consultants sont égalements sollicités lorsqu'il s'agit de
                soutenir des processus informatique ou de fournir des conseils
                stratégiques sur la manière dont le digital peut être utilisée
                de manière éfficiente dans une entreprise.
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                gutterBottom
                component="Button"
              >
                En Savoir plus
              </Button>
            </Grid>
          </Grid>
          {/* ////////////////////////Item3///////////////*/}
        </Grid>

        {/* ////////////////////////////////////////////////EACH Service COMPONENT IN ACCORDION///////////////////////////////////////////////////*/}
      </Grid>

      {/* ////////////////////////////////////////////////Services COMPONENT///////////////////////////////////////////////////*/}
    </>
  );
}