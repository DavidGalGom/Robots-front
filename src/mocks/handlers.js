import { rest } from "msw";

export const handlers = rest.get(
  "https://robots-api-bb8.herokuapp.com/robots",
  async (req, res, ctx) => {
    const resp = res(
      ctx.json([
        {
          id: "618569e4a2c88515f4c5105d",
          name: "BB-8",
          image:
            "https://kurogami.com/med/img/productos/27/2c/figura-star-wars-the-force-awakens-bb8-01.jpeg",
          speed: 10,
          creationDate:
            "Mon May 10 2021 00:00:00 GMT+0200 (hora de verano de Europa central)",
          resistance: 10,
        },
        {
          id: "61856b71a2c88515f4c5105e",
          name: "Bender",
          image:
            "https://image.dhgate.com/0x0s/f2-albu-g10-M00-18-39-rBVaWV0erq6AA-OrAASs3EYv1pk976.jpg/futurama-bender-esmalte-pin-lindo-combate.jpg",
          speed: 4,
          resistance: 7,
          creationDate:
            "Tue May 11 2021 00:00:00 GMT+0200 (hora de verano de Europa central)",
        },
        {
          id: "61856c7ba2c88515f4c5105f",
          name: "Baymax",
          image:
            "https://lh3.googleusercontent.com/proxy/_nStkrKhQxbJpSRELoxEUuRA2urUSJ9Eo8F0fxMF7EKReGaPQtXht3LHJ2Nt6GFEqbhpzXlqHnGt00a15e7Cr0xkC3GRxrLMS-Ix4aZ06Dah34y0vVqzkbIJP2r8njU5eYXw3YRAIZvgWIKrXkRf9azo",
          speed: 2,
          resistance: 10,
          creationDate:
            "Tue May 11 2021 00:00:00 GMT+0200 (hora de verano de Europa central)",
        },
        {
          id: "61856d32a2c88515f4c51060",
          name: "EVA-01",
          image:
            "https://w0.peakpx.com/wallpaper/890/829/HD-wallpaper-evangelion-anime-eva-manga-robot-titan.jpg",
          speed: 10,
          resistance: 10,
          creationDate:
            "Sat Jan 01 2000 00:00:00 GMT+0100 (hora estándar de Europa central)",
        },
        {
          id: "61856e2ca2c88515f4c51061",
          name: "Alphonse",
          image:
            "https://elcomercio.pe/resizer/tXNWMeGIiXMY7ts95SPVBmWuTNU=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/O3UHHR6CEVFVFNH7ZMBNGWDATE.jpg",
          speed: 8,
          resistance: 10,
          creationDate:
            "Tue May 05 1992 00:00:00 GMT+0200 (hora de verano de Europa central)",
        },
      ])
    );
    return resp;
  }
);
