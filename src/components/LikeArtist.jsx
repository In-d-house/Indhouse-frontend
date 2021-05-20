import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import cloud from "d3-cloud";

import Title from "./shared/Title";

import useGetArtists from "../hooks/useGetArtists";
import { title } from "../constants";

const width = window.innerWidth * 0.7;
const height = window.innerHeight * 0.5;
const colorPallete = ["#F7E32D", "#509BF5", "#FFFFFF"];
const fontSizes = ["30", "50", "70"];

const FavoriteArtist = ({ likeMusic }) => {
  const { artist } = useGetArtists(likeMusic);
  const d3Ref = useRef(null);

  useEffect(() => {
    const color = d3.scaleQuantile()
      .domain([0, artist.length])
      .range(colorPallete);

    const size = d3.scaleQuantile()
      .domain([0, artist.length])
      .range(fontSizes);

    const dataSet = artist.map((name, idx) => ({
      text: name,
      size: size(idx),
    }));

    const svg = d3.select(d3Ref.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g");

    const draw = words => {
      svg.append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`)
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", d => d.size)
        .style("fill", (_, i) => color(i))
        .style("font-weight", 900)
        .attr("text-anchor", "middle")
        .transition()
        .duration(500)
        .attr("transform", d => `translate(${[d.x, d.y]})`)
        .text(d => d.text);
    };

    cloud()
      .size([width, height])
      .words(dataSet)
      .padding(4)
      .rotate(_ => 0)
      .fontSize(d => d.size)
      .on("end", draw)
      .start();
  }, [artist]);

  return (
    <>
      <Title title={title.favoriteArtist} />
      <svg ref={d3Ref} width={width} height={height} />
    </>
  );
};

export default FavoriteArtist;