import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import '../../App.css';

const ContinuousLineGraph = () => {
    const d3Container = useRef(null);

    useEffect(() => {
        let data = [];

        const svg = d3.select(d3Container.current)
            .append('svg')
            .attr('width', 200)
            .attr('height', 200);

        const xScale = d3.scaleLinear().domain([0, 10]).range([0, 150]);
        const yScale = d3.scaleLinear().domain([0, 100]).range([150, 0]);

        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

        svg.append('g')
            .attr('transform', 'translate(20, 180)')
            .call(xAxis);

        svg.append('g')
            .attr('transform', 'translate(20, 20)')
            .call(yAxis);

        const generateData = () => {
            const newData = {
                x: data.length,
                y: Math.random() * 100
            };

            data.push(newData);
            if (data.length > 10) {
                data.shift();
            }

            return data;
        };

        const updateGraph = () => {
            const line = d3.line()
                .x(d => xScale(d.x))
                .y(d => yScale(d.y))
                .curve(d3.curveCatmullRom);

            const path = svg.selectAll('.line').data([data]);

            path.enter()
                .append('path')
                .attr('class', 'line')
                .attr('fill', 'none')
                .attr('stroke', 'steelblue')
                .attr('stroke-width', 2)
                .attr('transform', 'translate(20, 20)')
                .attr('d', line);

            path.attr('d', line);

            path.exit().remove();
        };

        let count = 0;

        const interval = setInterval(() => {
            count++;
            data = generateData();
            updateGraph();

            if (count >= 10) {
                data = [];
                count = 0;
            }
        }, 100);

        return () => {
            clearInterval(interval);
        };

    }, []);

    return (
        <div className="data2">
            <h4>Dummy</h4>
            <div ref={d3Container}></div>
        </div>
    );
};

export default ContinuousLineGraph;
