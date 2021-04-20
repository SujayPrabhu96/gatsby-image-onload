export const constructFluidImage = ({
  width = 1000,
  height = 1000,
  url = `https://picsum.photos/seed/${width + height}/${width}/${height}`,
}) => {
  return {
    backgroundColor: "#181818",
    layout: "constrained",
    width,
    height,
    images: {
      fallback: {
        sizes: `(min-width: ${width}px) ${width}px, 100vw`,
        srcSet: `${url} 480w, ${url} 960w, ${url} 1920w`,
        src: url,
      },
      sources: [
        {
          sizes: `(min-width: ${width}px) ${width}px, 100vw`,
          srcSet: `${url} 480w, ${url} 960w, ${url} 1920w`,
          src: url,
        },
      ],
    },
  }
}
