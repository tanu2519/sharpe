import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import '../../App.css';

const BarHome = () => {
  const d3Container = useRef(null);

  useEffect(() => {
    const margin = { top: 10, right: 10, bottom: 20, left: 30 };
    const width = 200 - margin.left - margin.right;
    const height = 200 - margin.top - margin.bottom;

    if (d3Container.current) {
      const svg = d3.select(d3Container.current)
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

      const data = [
        { category: '1', value: 50 },
        { category: '2', value: 70 },
        { category: '3', value: 120 },
        { category: '4', value: 90 },
      ];

      const x = d3.scaleBand()
        .domain(data.map(d => d.category))
        .range([0, width])
        .padding(0.1);

      const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .nice()
        .range([height, 0]);

      svg.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(x));

      svg.append('g')
        .call(d3.axisLeft(y));

      svg.selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.category))
        .attr('y', height)
        .attr('width', x.bandwidth())
        .attr('height', 0)
        .transition()
        .duration(800)
        .delay((d, i) => i * 100)
        .attr('y', d => y(d.value))
        .attr('height', d => height - y(d.value))
        .attr('fill', 'steelblue');
    }
  }, []);

  return (
    <div className="data1">
      <h4>Dummy</h4>
      <div ref={d3Container}></div>
    </div>
  );
};

export default BarHome;
