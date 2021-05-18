import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as d3 from "d3";

const Svg = styled.svg`
  background-color: #e1e5ee;
  border: 1px solid black;
  border-radius: 0.2rem;
`;

const width = window.innerWidth * 0.6;
const height = window.innerHeight * 0.6;
const circleNums = 9 * (width / 40);
const colorPallete = {
  "Acoustic": "#ffe66d",
  "Ballad": "#b08968",
  "R&B": "#2CC7C2",
  "Pop": "#76c893",
  "Dance": "#447FDE",
  "Hiphop": "#aa7dce",
  "Rock": "#DD44A0",
  "Electronic": "#FC6067",
  "Metal": "#495057",
};

const D3 = ({ tasteData }) => {
  const ref = useRef(null);

  useEffect(() => {
    const circles = d3.range(circleNums).map((d, i) => {
      const type = i % 9;
      const data = tasteData[type];
      if (data.percentage === 0) return { radius: 0 };

      const radius = (data.percentage / 10) * 15;
      const color = colorPallete[data.genre];

      return { radius, color, name: data.genre };
    });

    const simulation = d3.forceSimulation()
      .force("charge", d3.forceManyBody().strength(0))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(d => d.radius));

    const drageEventListener = d3.drag()
      .on("start", (event, d) => {
        if (!event.active) simulation.alphaTarget(0.03);
        d.fx = d.x;
        d.fy = d.y;
      })
      .on("drag", (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on("end", (event, d) => {
        if (!event.active) simulation.alphaTarget(0.03);
        d.fx = null;
        d.fy = null;
      });

    const ticked = () => {
      const svg = d3.select(ref.current)
        .selectAll("circle")
        .data(circles);

      svg.enter()
        .append("circle")
        .merge(svg)
        .attr("r", d => d.radius)
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("fill", d => d.color);

      svg.call(drageEventListener)
        .on("mouseover", (event, d) => {
          d3.select(event.currentTarget)
            .transition()
            .duration("100")
            .attr("opacity", "0.8");
        })
        .on("mouseout", event => {
          d3.select(event.currentTarget)
            .transition()
            .duration("100")
            .attr("opacity", "1");
        });
    };

    simulation.nodes(circles)
      .on("tick", ticked);
  }, [tasteData]);

  return (
    <Svg ref={ref} width={width} height={height} />
  );
};

export default D3;
