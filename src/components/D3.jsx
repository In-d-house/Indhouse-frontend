import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as d3 from "d3";

const Svg = styled.svg`
  background-color: #e1e5ee;
  border: 1px solid black;
  border-radius: 0.2rem;

  #tooltip {
    background-color: black;
    z-index: 100;
  }
`;

const width = window.innerWidth * 0.7;
const height = window.innerHeight * 0.6;
const circleNums = 9 * (width / 15);
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
    const circles = d3.range(circleNums).map((_, i) => {
      const type = i % 9;
      const data = tasteData[type];
      if (data.percentage === 0) return { radius: 0 };

      const radius = (data.percentage / 10) * 15;
      const color = colorPallete[data.genre];

      return { radius, color, name: data.genre };
    });

    const simulation = d3.forceSimulation()
      .force("forceX", d3.forceX().strength(0.1).x(width * 0.5))
      .force("forceY", d3.forceY().strength(0.1).y(height * 0.5))
      .force("center", d3.forceCenter().x(width * 0.5).y(height * 0.5))
      .force("charge", d3.forceManyBody().strength(-50));

    const svg = d3.select(ref.current)
      .attr("width", width)
      .attr("height", height);

    const tooltip = d3.select(ref.current)
      .append("div")
      .attr("id", "tooltip")
      .style("position", "absolute")
      .style("opacity", 0)
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("border-radius", "5px")
      .style("padding", "10px");

    const dragEventListener = d3.drag()
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

    const mouseover = () => {
      tooltip
        .style("opacity", 1);
    };

    const mousemove = (event, d) => {
      tooltip
        .text(d.name)
        .style("left", `${event.pageX + 90}px`)
        .style("top", `${event.pageY}px`);
    };

    const mouseleave = () => {
      tooltip
        .transition()
        .duration(200)
        .style("opacity", 0);
    };

    const node = svg.append("g")
      .attr("class", "node")
      .selectAll("circle")
      .data(circles)
      .enter()
      .append("circle")
      .attr("r", d => d.radius)
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .attr("fill", d => d.color)
      .call(dragEventListener)
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);

    simulation
      .nodes(circles)
      .force("collide", d3.forceCollide()
        .strength(0.5)
        .radius(d => d.radius)
        .iterations(1))
      .on("tick", () => {
        node
          .attr("cx", d => d.x)
          .attr("cy", d => d.y);
      });
  }, [tasteData]);

  return (
    <Svg ref={ref} width={width} height={height} />
  );
};

export default D3;
